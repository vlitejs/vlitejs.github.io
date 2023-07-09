module.exports = {
	plugins: [
		'postcss-import',
		'postcss-url',
		'postcss-nested',
		[
			'postcss-preset-env',
			{
				stage: 2,
				features: {
					'nesting-rules': false
				}
			}
		],
		[
			'postcss-custom-media',
			{
				preserve: false
			}
		]
	]
}
