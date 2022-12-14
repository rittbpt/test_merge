const merge = require('./merge')

it('test_merge', () => {
  const result0 = merge([1,3,4], [2, 5, 6])
  const result1 = merge([1,2,3], [2])
  const result2 = merge([0, 0, 1], [2, 7, 9])
  const result3 = merge([3, 3, 5], [2])
  const result4 = merge([3], [1,2,4,6,7])

  expect(result0).toEqual([1, 2, 3, 4, 5, 6])
  expect(result1).toEqual([1, 2, 2, 3])
  expect(result2).toEqual([0, 0, 1, 2, 7, 9])
  expect(result3).toEqual([2, 3, 3, 5])
  expect(result4).toEqual([1,2,3,4,6,7])

})

