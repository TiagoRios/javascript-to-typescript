function truncarString(str: string, numero: number) {
  return str.length > numero ? str.slice(0, numero) + "..." : str;
}

//1ª solução do site
function truncateString(str: string, num: number) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

//2ª solução do site. igual a minha

export {
  truncarString
};