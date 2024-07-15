module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  rules: {
    // override/add rules settings here, such as:
    'vue/no-unused-vars': proccess.env.NODE_ENV === 'production' ? 'error' : 'warn'
  }
}
