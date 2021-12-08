import bubbleSort from '../bubble';

test('Empty array', () => {
  const answer = bubbleSort([]);
  expect(answer).toStrictEqual([]);
});
