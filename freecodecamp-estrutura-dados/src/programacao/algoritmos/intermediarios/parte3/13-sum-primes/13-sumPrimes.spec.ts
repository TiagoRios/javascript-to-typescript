import { sumPrimes } from './13-sumPrimes'

test('Deve retornar um número', () => {
  expect(typeof sumPrimes(1))
    .toEqual('number');
})
test('Deve retornar número 17', () => {
  expect(sumPrimes(10))
    .toEqual(17);
})
test('Deve retornar número 73156', () => {
  expect(sumPrimes(977))
    .toEqual(73156);
}) 