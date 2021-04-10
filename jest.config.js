module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@data/(.*)': '<rootDir>/src/data/$1',
    '@routes/(.*)': '<rootDir>/src/routes/$1',
    '@stores/(.*)': '<rootDir>/src/stores/$1',
    '@test/(.*)': '<rootDir>/src/test/$1',
    '@classes/(.*)': '<rootDir>/src/ts/classes/$1',
    '@util/(.*)': '<rootDir>/src/ts/util/$1',
    '@extensions/(.*)': '<rootDir>/src/ts/util/extensions/$1'
  }
};
