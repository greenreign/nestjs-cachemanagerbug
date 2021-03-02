module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    testMatch: ['**/test/**/*Test.ts'],
    testTimeout: 15000,
    maxWorkers: 6,
    roots: ['<rootDir>/src'],
};
