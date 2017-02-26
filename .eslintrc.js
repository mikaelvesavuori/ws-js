module.exports = {
	"parser": "babel-eslint",
	parserOptions: {
		"ecmaFeatures": {
			"modules": true
		}
	},
	"env": {
		"browser": true,
		"node": true
	},
	"extends": "eslint:recommended",
	"rules": {
		"array-callback-return": 2,
		"brace-style": [1, "stroustrup"],
		"curly": 1,
		"eqeqeq": 1,
		"func-style": [1, "declaration", { "allowArrowFunctions": true }],
		"indent": [2, "tab", {"SwitchCase": 1}],
		"no-console": 0,
		"no-constant-condition": 0,
		"no-mixed-spaces-and-tabs": [0, "smart-tabs"],
		"no-undef": 0,
		"no-unused-vars": 0,
		"no-var": 2,
		"prefer-template": 1,
		"semi": [1, "always"],
		"space-infix-ops": [1, {"int32Hint": false}],
		"template-curly-spacing": ["error", "never"],
		"quotes": [0, "double"]
	}
}
