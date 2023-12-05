/**
 * Exibe apenas o título e a avaliação IMDB do filme.
 * Filtra filmes com avaliação IMDB maior ou igual a 9.
 * 
 * @param Array contendo a lista de filmes
 * @returns Array de objetos filmes
 */
function findTitleAndImdbRatingComFilter(list: any) {
    return list
        .filter((f: any) => f.imdbRating >= 9)
        .map((a: any) => ({ title: a.Title, rating: a['imdbRating'] }))//Só para limitar dados retornados.
}

// prototype do ARRAY modificado - problemas com typescript
// Array.prototype.meuFilterLoop = function (callback: any) {
//     const newArray = [];
//     for (let i = 0; i < this.length; i++) { // this é o próprio Array
//         if (callback(this[i]) === true) // this[i] é passado como argumento para a função callback.  
//             newArray.push(this[i]);
//     }
//     return newArray;
// };

// Array.prototype.meuFilterForEach = function (callback: any) {
//     const newArray: any = [];
//     this.forEach(a => {
//         if (callback(a) === true)
//             newArray.push(a)
//     })
//     return newArray;
// };

const meuFilterLoop = function (arr: any, callback: any) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) { // this é o próprio Array
        if (callback(arr[i]) === true) // this[i] é passado como argumento para a função callback.  
            newArray.push(arr[i]);
    }

    return newArray;
} as any as { new(...args: any): any }

function findTitleAndImdbRatingComMeuFilterLoop(list: any) {
    return new meuFilterLoop(list, (f: any) => f.imdbRating >= 9)
        .map((a: any) => ({ title: a.Title, rating: a['imdbRating'] }))
}

const meuFilterForEach = function (list: any, callback: any) {
    const newArray: any = [];
    list.forEach((a: any) => {
        if (callback(a) === true)
            newArray.push(a)
    })

    return newArray;
} as any as { new(...args: any): any }

function findTitleAndImdbRatingComMeuFilterForEach(list: any) {
    return new meuFilterForEach(list, (f: any) => f.imdbRating >= 9)
        .map((a: any) => ({ title: a['Title'], rating: a['imdbRating'] }))
}

export {
    findTitleAndImdbRatingComFilter,
    findTitleAndImdbRatingComMeuFilterLoop,
    findTitleAndImdbRatingComMeuFilterForEach
}