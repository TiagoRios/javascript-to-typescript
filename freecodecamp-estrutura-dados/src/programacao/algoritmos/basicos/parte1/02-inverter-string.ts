function inverterString(str: string) {
  let arr = [];
  arr = str.split('');
  arr.reverse();

  return arr.join('');
}

//1ª solução do site
function reverseString(str: string) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

//2ª solução do site. parecida com a minha mas aqui ele não inicializou um array
function reverseString2(str: string) {
  return str
    .split("")
    .reverse()
    .join("");
}

export {
  inverterString,
};