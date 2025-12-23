import antfu from '@antfu/eslint-config'

export default antfu({
  nextjs: true,
}, {
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'warn',

  },
})
