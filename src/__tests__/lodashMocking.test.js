import lodash from 'lodash';

jest.mock('lodash', () => ({
  get: jest.fn(() => '5'),
}));

it('mocks lodash.get', () => {
  expect(jest.isMockFunction(lodash.get)).toBe(true);
});

it('mocks lodash.get equals 5', () => {
  expect(lodash.get()).toBe('5')
});