//NÃO CONSEGUI RESOLVER.
//Minha versão VEM da 2ª solução do site.
function maiorNumeroCadaArrayDentroArray(arr: any): number[] {
  return arr.map((a: any) => {
    return a.reduce((anterior: any, atual: any) => {
      return Math.max(anterior, atual)
    })
  });
}

//1ª solução do site. abordagem procedural
function largestOfFour1(arr: any): number[] {
  const results = [];

  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];

    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }

    results[i] = largestNumber;
  }

  return results;
}

//2ª solução do site. abordagem declarativa
function largestOfFour2(arr: any): number[] {
  return arr.map(function (group: number[]) {
    return group.reduce(function (prev, current) {
      return current > prev ? current : prev;
    });
  });
}

//3ª solução do site. abordagem declarativa
function largestOfFour3(arr: any) {
  return arr.map(Function.apply.bind(Math.max, null));
}

//4ª solução do site. abordagem recursiva
function largestOfFour4(arr: any, finalArr: any = []): any {
  return !arr.length
    ? finalArr
    : largestOfFour4(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
  // : largestOfFour4(arr.slice(1), [...finalArr, Math.max(...arr[0])])
}

/* ==================================================
                  Benchmark by @P1xt
 ================================================== */

//solução mais rapida e eficiente segundo o benchmark
function largestOfFourVanilla(arr: any) {
  return arr.map(function (a: any) {
    return Math.max.apply(null, a);
  });
}

function largestOfFourES6(arr: any) {
  return arr.map((a: any) => Math.max(...a));
}

function largestOfFourBind(arr: any) {
  return arr.map(Function.apply.bind(Math.max, null));
}
/* ================================================== */

export {
  maiorNumeroCadaArrayDentroArray,
  largestOfFourES6,
  largestOfFour4
};