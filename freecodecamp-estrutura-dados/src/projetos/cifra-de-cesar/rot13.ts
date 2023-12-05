function rot13(str: string) {
  let arrayString = str.split(" ");
  let resultado: string[] = [];

  arrayString.forEach(palavra => {
    resultado.push(
      palavra.split("").map((x: string, index) => {
        let charCode = x.charCodeAt(0);

        if (charCode >= 65 && charCode <= 77) {
          return String.fromCharCode(charCode + 13)

        } else if (charCode >= 78 && charCode <= 90) {
          return String.fromCharCode(charCode - 13)

        } else {
          return x
        }
      }).join("") // após mapeamento transformo em string.
    );
  });

  return resultado.join(" ");
}

export {
  rot13
}