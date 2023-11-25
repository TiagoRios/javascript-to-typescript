function confirmeFinal(texto: string, alvo: string = "") {
  return new RegExp(alvo + '$').test(texto);
}

//1ª solução do site
function confirmEnding1(str: string, target: string) {
  return str.slice(str.length - target.length) === target;
}

//2ª solução do site
function confirmEnding2(str: string, target: string) {
  let re = new RegExp(target + "$", "i");
  return re.test(str);
}

//3ª solução do site
function confirmEnding3(str: string, target: string) {
  return str.slice(-target.length) === target
}

export {
  confirmeFinal
};