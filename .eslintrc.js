module.exports = {
    "extends": "google",

    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "rules": {
        "semi": 2,
        "max-len": [2, 100, 2, {
            'ignoreUrls': true,
            'ignoreComments': false
        }],
    }
};