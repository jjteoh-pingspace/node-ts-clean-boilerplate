// @type {import('@ts-jest/dist/types').InitialOptionsTsJest}
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/index.ts',
    '!src/**/*.interface.ts',
    '!src/**/*.exception.ts',
  ],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.spec.json',
    },
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
}
