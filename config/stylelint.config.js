module.exports = {
	extends: ['stylelint-config-standard'],
	plugins: ['stylelint-prettier'],
	rules: {
		'unit-allowed-list': ['em', 'rem', '%', 'px', 's', 'deg', 'fr', 'vh', 'vw', 'ms'],
		'declaration-colon-newline-after': null,
		'value-list-comma-newline-after': null,
		'prettier/prettier': true,
		'selector-class-pattern': [
			'^([a-z][a-zA-Z0-9]*)(-[a-zA-Z0-9]+)?$|^icon(-[a-zA-Z0-9]+)+$',
			{
				message: 'Expected class selector to be FUN-case'
			}
		],
		'custom-property-pattern': [
			'^_?([a-z][a-zA-Z0-9]*)(-[a-zA-Z0-9]+)?$',
			{
				message: 'Expected custom property name to be FUN-case'
			}
		]
	}
}
