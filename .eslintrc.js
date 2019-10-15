module.exports = {
  root: true,
  "env": {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/standard", "prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "comma-dangle": ["error", "always-multiline"],
    "quote-props": ["error", "as-needed"],
    curly: "error",
  },
  parserOptions: {
    parser: "babel-eslint",
  },
};
