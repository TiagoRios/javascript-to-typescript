/**
 * Retorna o primeiro elemento que corresponde ou retorno da função de callback.
 * 
 * @param {Array} arr 
 * @param {Function} funcao 
 * @returns 
 */
function encontrarElemento(arr: any, funcao: Function) {
  for (const element of arr) {
    if (funcao(element)) {
      return element;
    }
  }
  return undefined;
}

//1ª solução do site. parecida com a minha.
//2ª solução do site.
function findElement2(arr: any, func: Function) {
  return arr.find(func); //estudar documentação de arrays MDN
}

//3ª solução do site.
function findElement3(arr: any, func: Function) {
  return arr[arr.map(func).indexOf(true)];
}

//4ª solução do site.
function findElement4(arr: any, func: Function) {
  if (arr.length > 0 && !func(arr[0])) {
    return findElement4(arr.slice(1), func);
  } else {
    return arr[0];
  }
}

//4ª modificada com operador ternario
export function findElement5(arr: any, func: Function): any {
  return arr.length > 0 && !func(arr[0])
    ? findElement5(arr.slice(1), func)
    : arr[0];
}

export {
  encontrarElemento
};