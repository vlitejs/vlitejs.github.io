module.exports = (api) => {
	const presets = [['@babel/preset-env']]

	api.cache(true)

	const plugins = ['@babel/proposal-class-properties']

	return {
		presets,
		plugins
	}
}
