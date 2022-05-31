module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*'],
  coverageDirectory: 'coverage',
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  }
}
