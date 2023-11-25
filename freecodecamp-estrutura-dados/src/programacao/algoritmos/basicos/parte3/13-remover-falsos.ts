function removerFalsos(arr: any) {
  let arr2 = [];

  for (let e of arr) {
    if (Boolean(e) === true) { //Mosquei. Não precisava do objeto Boolean.
      arr2.push(e);
    }
  }

  return arr2;
}

//1ª solução do site. parecida com a minha.

//2ª solução do site.
function bouncer(arr: any) {
  return arr.filter(Boolean);
}

export {
  removerFalsos
};