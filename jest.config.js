module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['@relmify/jest-fp-ts'],
  testPathIgnorePatterns: ['/dist/', '/node_modules/'],
  globals: {
    'ts-jest': {
      diagnostics: { warnOnly: true },
    },
  },
};
