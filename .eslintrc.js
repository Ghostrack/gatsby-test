module.exports = {
	extends: [
		'eslint:all',
		'plugin:react/all',
		'plugin:@typescript-eslint/all'
	],
	globals: {
		module: true
	},
	parser: '@typescript-eslint/parser',
	plugins: [
		'react',
		'@typescript-eslint'
	],
	root: true,
	rules: {
		indent: [
			'error',
			'tab',
			{SwitchCase: 1}
		],
		'no-tabs': 'off',
		'quote-props': [
			'error',
			'as-needed'
		],
		quotes: [
			'error',
			'single',
			{avoidEscape: true}
		]
	}
};
