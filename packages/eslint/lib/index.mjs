var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/auto.js
var require_auto = __commonJS({
  "src/auto.js"(exports, module) {
    module.exports = {
      plugins: ["@wonse"],
      extends: ["plugin:@wonse/base"],
      overrides: [
        {
          files: ["**/*.ts?(x)"],
          extends: ["plugin:@wonse/typescript"]
        },
        {
          files: ["**/*.{jsx,tsx}"],
          extends: ["plugin:@wonse/react"]
        },
        {
          files: ["**/*.tsx"],
          rules: {
            "react/prop-types": "off"
          }
        }
      ]
    };
  }
});

// src/base.js
var require_base = __commonJS({
  "src/base.js"(exports, module) {
    module.exports = {
      extends: ["plugin:import/errors", "eslint:recommended", "prettier"],
      plugins: ["json-format", "prettier", "simple-import-sort"],
      rules: {
        "prettier/prettier": [
          "error",
          {
            usePrettierrc: false
          }
        ],
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "import/extensions": "off"
      }
    };
  }
});

// src/react.js
var require_react = __commonJS({
  "src/react.js"(exports, module) {
    module.exports = {
      plugins: ["react", "react-hooks", "jsx-a11y"],
      rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
      }
    };
  }
});

// src/typescript.js
var require_typescript = __commonJS({
  "src/typescript.js"(exports, module) {
    module.exports = {
      parser: "@typescript-eslint/parser",
      extends: ["plugin:@typescript-eslint/recommended"],
      rules: {
        "@typescript-eslint/consistent-type-imports": [
          "error",
          {
            prefer: "type-imports",
            disallowTypeAnnotations: false
          }
        ]
      }
    };
  }
});

// index.js
var require_eslint = __commonJS({
  "index.js"(exports, module) {
    var auto = require_auto();
    var base = require_base();
    var react = require_react();
    var typescript = require_typescript();
    module.exports = {
      configs: {
        auto,
        base,
        react,
        typescript
      }
    };
  }
});
export default require_eslint();
/*! For license information please see index.mjs.LEGAL.txt */
//# sourceMappingURL=index.mjs.map
