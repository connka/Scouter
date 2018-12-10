module.exports = {
    "extends": "google",

    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "semi": 2,
        "max-len": [2, 200, 2, {
            'ignoreUrls': true,
            'ignoreComments': false
        }],
    }
};