import { fearNotLetter1, fearNotLetter2, fearNotLetter3 } from './09-fearNotLetter'

describe('fearNotLetter solução 1', () => {
  test('Deve retornar string d', () => {
    expect(fearNotLetter1("abce"))
      .toEqual('d');
  })
  test('Deve retornar string d - faltando mais letras', () => {
    expect(fearNotLetter1("abcf"))
      .toEqual('d');
  })
  test('Deve retornar string i', () => {
    expect(fearNotLetter1("abcdefghjklmno"))
      .toEqual('i');
  })
  test('Deve retornar string u', () => {
    expect(fearNotLetter1("stvwx"))
      .toEqual('u');
  })
  test('Deve retornar string e', () => {
    expect(fearNotLetter1("bcdf"))
      .toEqual('e');
  })
  test('Deve retornar undefined', () => {
    expect(fearNotLetter1("abcdefghijklmnopqrstuvwxyz"))
      .toEqual(undefined);
  })
})

/* ==================================================
                    fearNotLetter2
   ================================================== */

describe('fearNotLetter solução 2', () => {
  test('Deve retornar string d - faltando mais letras', () => {
    expect(fearNotLetter2("abcf"))
      .toEqual('d');
  })
  test('Deve retornar string u', () => {
    expect(fearNotLetter2("stvwx"))
      .toEqual('u');
  })
  test('Deve retornar undefined', () => {
    expect(fearNotLetter2("abcdefghijklmnopqrstuvwxyz"))
      .toEqual(undefined);
  })
})

/* ==================================================
                    fearNotLetter2
   ================================================== */

describe('fearNotLetter solução 3', () => {
  test('Deve retornar string d - faltando mais letras', () => {
    expect(fearNotLetter3("abcf"))
      .toEqual('d');
  })
  test('Deve retornar string u', () => {
    expect(fearNotLetter3("stvwx"))
      .toEqual('u');
  })
  test('Deve retornar undefined', () => {
    expect(fearNotLetter3("abcdefghijklmnopqrstuvwxyz"))
      .toEqual(undefined);
  })
})
