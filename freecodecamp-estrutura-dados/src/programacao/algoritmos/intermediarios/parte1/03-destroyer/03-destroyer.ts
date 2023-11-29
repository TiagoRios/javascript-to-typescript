/**
 * Função que remove do Array os argumentos extras passados dentro dela.
 * 
 * Não modifica o Array orginal.
 * 
 * @param {Array} arr Array a ser pesquisado. 
 * @returns Array com elementos já removidos.
 */
function destroyer(arr: any, a?: any, b?: any) { // com typescript melhor não usar o arguments
  const arrArguments = Object.values(arguments).slice(1)
  // filtra elementos de arr que não estão no "arrArguments"
  return arr.filter((a: any) => arrArguments.indexOf(a) === -1)
}

/* ==================================================
                    Outras soluções
   ================================================== */

//1ª solução do site. Nem compensa. Muito verbosa e difícil de manter
//2ª solução do site. Parecida com a minha.
function destroyer2(arr: any) {
  const valsToRemove = Array.from(arguments).slice(1);

  return arr.filter(function (val: any) {
    return !valsToRemove.includes(val);
  });
}

//3ª solução do site.
function destroyer3(arr: any, ...valsToRemove: any) {
  return arr.filter((elem: any) => !valsToRemove.includes(elem));
}

export {
  destroyer3
}