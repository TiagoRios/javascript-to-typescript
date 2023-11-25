import { encontrarIndexParaInserir } from './14-encontrar-local-array';

test('Deve retornar um número', () => {
    expect(typeof encontrarIndexParaInserir([50, 20, 40, 10, 30], 35)).toBe('number');
});
test('Deve retornar 3', () => {
    expect(encontrarIndexParaInserir([50, 20, 40, 10, 30], 35)).toEqual(3);
});
test('Deve retornar 2 depois de ordenado', () => {
    expect(encontrarIndexParaInserir([5, 3, 20, 3], 5)).toEqual(2);
});
test('Deve retornar 1', () => {
    expect(encontrarIndexParaInserir([40, 60], 50)).toEqual(1);
});
test('Deve retornar 0 se index array fora dos limites', () => {
    expect(encontrarIndexParaInserir([3, 10, 5], 3)).toEqual(0);
});
test('Deve retornar 0 se array vazio', () => {
    expect(encontrarIndexParaInserir([], 1)).toEqual(0);
});
