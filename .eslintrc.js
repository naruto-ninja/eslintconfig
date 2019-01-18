module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        // "semi": [
        //     "error",
        //     "always"
        // ],
        // allow paren-less arrow functions
        "arrow-parens": 0,
        // allow async-await
        "generator-star-spacing": 0,
        // 对象数组后面要加逗号
        "comma-dangle": ["error", "always-multiline"],
        "camelcase": 0,
        // { 后 } 前 出现空格
        "object-curly-spacing": ["error", "always"],
        "react/jsx-no-target-blank": 0,
        "react/jsx-no-bind": 0,
        "react/prop-types": 0,
        "react/no-string-refs": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "no-console": 0,
        // 解构赋值  
        "prefer-destructuring": [
            "error", 
            {
                "object": true, 
                "array": false
            }
        ],
        "jsx-a11y/label-has-for": 0,
    }
};