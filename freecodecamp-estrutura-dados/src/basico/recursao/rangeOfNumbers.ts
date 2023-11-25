//não entendo esse tipo de forma proposta pelo site.
//descubra o que faz a ultima parte do operador ternario.
export function rangeOfNumbersSolucaoSite(startNum: number, endNum: number): number[] {
  return endNum < startNum
    ? []
    : [...rangeOfNumbersSolucaoSite(startNum, endNum - 1), endNum];// que ???
  //startNum=1 endNum=3;
  //primeira chamada [...func(3-1), 3] 
  // segunda chamada [...func(2-1), 2] 
  //terceira chamada [...func(1-1), 1] 
  //quando volor de endNum<startNum retorna o array vazio.
  // [[[[], 1], 2], 3] = final == [1,2,3]
}

/**
 * Função utiliza recursividade.
 * 
 * Faz a contagem de um determinado número inicial até um número final.
 * A função conta nos sentidos crescente e decrescente.
 * Depende da relação entre os números.. 
 * 
 * @param {Número inicial da contagem} startNum 
 * @param {Número final da contagem} endNum 
 * @returns Array contendo a faixa de números escolhida.
 */
export function rangeOfNumbers(startNum: number, endNum: number): any {
  let arr: number[] = [];

  if (endNum == startNum) {
    return [endNum];

  } else if (endNum < startNum) { // Conta do Maior para Menor
    arr = rangeOfNumbers(startNum - 1, endNum);
    arr.unshift(startNum);
    return arr;

  } else if (endNum > startNum) {
    arr = rangeOfNumbers(startNum, endNum - 1);
    arr.push(endNum); //push(n) contagem normal
    return arr;
  }
}

/**
 * Faz a contagem de um determinado número inicial até um número final.
 * A função conta nos sentidos crescente e decrescente.
 * Depende da relação entre os números.
 * 
 * @param {Número inicial da contagem} startNum 
 * @param {Número final da contagem} endNum 
 * @returns Array contendo a faixa de números escolhida.
 */
export function preencherArray(startNum: number, endNum: number) {
  let a = [];
  if (startNum == endNum) {
    a = [startNum];
  } else if (startNum < endNum) {
    while (startNum <= endNum) {
      a.push(startNum);
      startNum++;
    }
  } else if (startNum > endNum) {
    while (startNum >= endNum) {
      a.push(startNum);
      startNum--;
    }
  }
  return a;
}