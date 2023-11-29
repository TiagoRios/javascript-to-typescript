/**
 * Função que procura uma determinada string e substitui por outras.
 * 
 * Se a string original estiver capitalizada, a substituta também deve ser. e vice-versa.
 * 
 * @param {String} str Frase que será feita a busca.
 * @param {String} before string procurada para substituir.
 * @param {String} after string que substituirá a procura.
 * @returns String com a substituição.
 */
function myReplace(str: string, before: string, after: string) {

  if (before[0].match(/[a-z]/)) {
    after = after[0].toLowerCase() + after.substring(1);

  } else {
    after = after[0].toUpperCase() + after.substring(1);
  }

  return str.replace(before, after);
}

/* ==================================================
                    Outras soluções
   ================================================== */

//1ª solução do site. Parecida com a minha. utiliza
function myReplace1(str: string, before: string, after: string) {
  let index = str.indexOf(before);

  if (str[index] === str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);

  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }

  return str.replace(before, after);
}

//2ª solução do site. parecida com a minha. seu if = /^[A-Z]/.test(before)

//3ª solução do site. Díficil de realizar manutenção.
function myReplace3(str: string, before: string, after: string) {
  function applyCasing(source: any, target: any) {
    let targetArr = target.split("");
    let sourceArr = source.split("");

    for (let i = 0; i < Math.min(targetArr.length, sourceArr.length); i++) {
      if (/[A-Z]/.test(sourceArr[i])) {
        targetArr[i] = targetArr[i].toUpperCase();

      } else
        targetArr[i] = targetArr[i].toLowerCase();
    }

    return targetArr.join("");
  }

  return str.replace(before, applyCasing(before, after));
}

//4ª solução do site. Díficil de realizar manutenção.
//Tomar no seu c#.
//Um cara desse que gosta de complicar as coisas.

// Em typescript ele reclama. pois esta modificando um tipo interno da linguagem

// Add new method to the String object, not overriding it if one exists already
// String.prototype.capitalize =
//   String.prototype.capitalize ||
//   function () {
//     return this[0].toUpperCase() + this.slice(1);
//   };

const Util = (() => {
  // Create utility module to hold helper functions
  function textCase(str: string, tCase?: string) {
    // Depending if the tCase argument is passed we either set the case of the
    // given string or we get it.
    // Those functions can be expanded for other text cases.

    if (tCase) {
      return setCase(str, tCase);

    } else {
      return getCase(str);
    }

    function setCase(str: string, tCase: string) {
      switch (tCase) {
        case "uppercase":
          return str.toUpperCase();

        case "lowercase":
          return str.toLowerCase();

        case "capitalized":
          // return str.capitalize(); // TS não aceita modificar tipos de dados internos
          return str[0].toUpperCase() + str.slice(1)

        default:
          return str;
      }
    }

    function getCase(str: string) {
      if (str === str.toUpperCase()) {
        return "uppercase";
      }

      if (str === str.toLowerCase()) {
        return "lowercase";
      }
      // if (str === str.capitalize()) { // TS não aceita modificar tipos de dados internos
      if (str === (str[0].toUpperCase() + str.slice(1))) {
        return "capitalized";
      }

      return "normal";
    }
  }

  return {
    textCase
  };
})();

function myReplace4(str: string, before: string, after: string) {
  const { textCase } = Util;
  const regex = new RegExp(before, "gi");
  const replacingStr = textCase(after, textCase(before));

  return str.replace(regex, replacingStr);
}

//5ª solução do site. Utilizando ternarios
function myReplace5(str: string, before: string, after: string) {
  const strArr = str.split(" "); //transforma array de strings
  const [wordToReplace] = strArr.filter(item => item === before); //filtra até encontrar o que substituir
  //ternário. Verificar se capitaliza ou descapitaliza primeira letra.
  const replacement = wordToReplace[0] === wordToReplace[0].toUpperCase()
    ? after[0].toUpperCase() + after.slice(1)
    : after[0].toLowerCase() + after.slice(1);

  return strArr
    .map(item => (item === before
      ? replacement //substitui se o elemento é igual ao pesquisado. 
      : item)) //Senão não altera o elemento no array.
    .join(" ");//transforma o Array em uma string novamente.
}

export {
  myReplace
}