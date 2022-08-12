import '../../../../../vlite/dist/vlite.css'
import '../../../../../vlite/dist/plugins/subtitle.css'
import '../../../../../vlite/dist/plugins/cast.css'
import Vlitejs from '../../../../../vlite/dist/vlite.js'
import VlitejsSubtitle from '../../../../../vlite/dist/plugins/subtitle.js'
import VlitejsPip from '../../../../../vlite/dist/plugins/pip.js'
import VlitejsCast from '../../../../../vlite/dist/plugins/cast.js'
import VlitejsYoutube from '../../../../../vlite/dist/providers/youtube.js'
import VlitejsVimeo from '../../../../../vlite/dist/providers/vimeo'
import VlitejsDailymotion from '../../../../../vlite/dist/providers/dailymotion'
import validateTarget from 'validate-target'
import html5VideoTemplate from './templates/html5-video'
import html5AudioTemplate from './templates/html5-audio'
import youtubeTemplate from './templates/youtube-video'
import vimeoTemplate from './templates/vimeo-video'
import dailymotionTemplate from './templates/dailymotion-video'

export default class Demo {
	constructor() {
		this.nav = document.querySelector('.nav')
		this.content = document.querySelector('.content')
		this.instance = null
		this.options = {
			video: {
				autoplay: false,
				controls: true,
				playPause: true,
				progressBar: true,
				time: true,
				volume: true,
				fullscreen: true,
				poster: 'https://yoriiis.github.io/cdn/static/vlitejs/demo-poster.jpg',
				bigPlay: true,
				autoHide: true,
				playsinline: true,
				loop: false,
				muted: false
			},
			audio: {
				autoplay: false,
				controls: true,
				playPause: true,
				progressBar: true,
				time: true,
				volume: true
			}
		}
		this.templates = {
			'html5-video': html5VideoTemplate(),
			'html5-audio': html5AudioTemplate(),
			'youtube-video': youtubeTemplate(),
			'vimeo-video': vimeoTemplate(),
			'dailymotion-video': dailymotionTemplate()
		}

		this.onClickOnNav = this.onClickOnNav.bind(this)
	}

	init() {
		// Vlitejs.registerPlugin('subtitle', VlitejsSubtitle)
		// Vlitejs.registerPlugin('pip', VlitejsPip)
		// Vlitejs.registerPlugin('cast', VlitejsCast, {
		// 	textTrackStyle: {
		// 		backgroundColor: '#21212190'
		// 	},
		// 	metadata: {
		// 		title: 'The Jungle Book',
		// 		subtitle: 'Walt Disney Animation Studios'
		// 	}
		// })

		// Vlitejs.registerProvider('youtube', VlitejsYoutube)
		// Vlitejs.registerProvider('vimeo', VlitejsVimeo)
		Vlitejs.registerProvider('dailymotion', VlitejsDailymotion, {
			playerId: 'x9scg'
		})

		this.addEvents()
		this.initMedia({ provider: 'dailymotion', type: 'video' })
	}

	addEvents() {
		this.nav.addEventListener('click', this.onClickOnNav)
	}

	onClickOnNav(e) {
		const target = e.target
		const navButton = validateTarget({
			target: target,
			selectorString: '.nav-listItemButton',
			nodeName: ['button']
		})

		if (navButton) {
			this.toggleNavButton(e)
		}
	}

	toggleNavButton(e) {
		e.preventDefault()

		const target = e.target
		const currentActive = this.nav.querySelector('.active')
		const provider = target.getAttribute('data-provider')
		const type = target.getAttribute('data-type')

		if (!target.classList.contains('active')) {
			currentActive.classList.remove('active')
			target.classList.add('active')

			this.destroyPreviousMedia()
			this.initMedia({
				provider,
				type
			})
		}
	}

	destroyPreviousMedia() {
		this.instance.destroy()
		this.instance = null
	}

	initMedia({ provider, type }) {
		const plugins = provider === 'html5' && type === 'video' ? ['cast'] : []
		this.content.innerHTML = this.templates[`${provider}-${type}`]
		this.instance = new Vlitejs('#player', {
			options: this.options[type],
			plugins,
			provider,
			onReady: function (player) {
				console.log(player)
				player.on('play', () => console.log('play'))
				player.on('pause', () => console.log('pause'))
				player.on('ended', () => console.log('ended'))
				player.on('progress', () => console.log('progress'))
				player.on('volumechange', () => console.log('volumechange'))
				player.on('timeupdate', () => console.log('timeupdate'))
				player.on('enterfullscreen', () => console.log('enterfullscreen'))
				player.on('exitfullscreen', () => console.log('exitfullscreen'))
				player.on('enterpip', () => console.log('enterpip'))
				player.on('leavepip', () => console.log('leavepip'))
				player.on('trackenabled', () => console.log('trackenabled'))
				player.on('trackdisabled', () => console.log('trackdisabled'))
			}
		})
	}
}
