module.exports = {
  all: 'true',
  include: ['modules/**/src/**/*.+(js|jsx|mjs|ts|tsx)'],
  exclude: [
    '**/*disabled',
    '**/deprecated',
    '**/wip/**',
    '**/libs/**',
    '**/test/**',
    '**/*.d.ts',

    '**/bundle.+(js|ts)'
  ]
};
