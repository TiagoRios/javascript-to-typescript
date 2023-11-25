import { inverterString } from './02-inverter-string';

test('Deve retornar uma string', () => {
    expect(typeof inverterString('asdf')).toBe('string');
});
test('Deve inverter a string', () => {
    expect(inverterString('hello world')).toBe('dlrow olleh');
});