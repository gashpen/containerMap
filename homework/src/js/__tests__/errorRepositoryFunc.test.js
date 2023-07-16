/* eslint-disable no-unused-vars */
import getError from '../errorRepositoryFunc';

test('test', () => {
  expect(getError.translate(1)).toBe('Введены неверные данные');
});
test('test', () => {
  expect(() => { getError.translate(2); }).toThrowError();
});
