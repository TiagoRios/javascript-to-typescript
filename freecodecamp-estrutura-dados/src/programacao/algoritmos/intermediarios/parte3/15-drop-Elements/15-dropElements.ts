/**
 * Remove os elementos que satisfazem a callback.
 * 
 * Esta função não altera o array original.
 * 
 * @param {Array} arr Array que deve ser removido elementos.
 * @param {Function} func callback que define quais elementos devem ser excluidos. 
 * @returns Array filtrado.
 */
function dropElements(arr: any, func: (x: number) => boolean) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr.slice(i);
    }
  }

  return [];
}

export {
  dropElements
}