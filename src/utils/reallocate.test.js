import swap from './reallocate';

const numbers = [0, 1, 2];

describe('reallocate', () => {
  test.each([
    [0, 0, numbers, [0, 1, 2]],
    [0, 1, numbers, [1, 0, 2]],
    [0, 2, numbers, [1, 2, 0]],
    [1, 0, numbers, [1, 0, 2]],
    [1, 1, numbers, [0, 1, 2]],
    [1, 2, numbers, [0, 2, 1]],
    [2, 0, numbers, [2, 0, 1]],
    [2, 1, numbers, [0, 2, 1]],
    [2, 2, numbers, [0, 1, 2]],
  ])('move the %sth number to the %sth position of the array', (i, j, arr, result) => {
    expect(
      swap(arr, i, j)
    ).toEqual(result);
  });
});
