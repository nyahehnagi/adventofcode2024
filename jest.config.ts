import type {Config} from 'jest';

const config: Config = {
  clearMocks: true,
  rootDir: '',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testMatch: [
    '**/*.test.(j|t)s?(x)',
  ],
};

export default config;
