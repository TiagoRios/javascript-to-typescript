/**
 * Método que cria um novo array com somente as propriedades title e imdbRating. 
 * 
 * @param Array contendo lista de filmes 
 * @returns Array de objetos filmes com title e imdbRatidn.
 */
function findTitleAndImdbRating(list: any) {
    const ratings = [];
    for (const element of list) {
        ratings.push({
            title: element['Title'],
            rating: element.imdbRating
        });
    }
    return ratings;
}

//Com funcional
function findTitleAndImdbRatingComMap(list: any) {
    return list.map(
        (a: any) => ({
            title: a.Title,
            rating: a['imdbRating'],
        })
    )
}

//Modificar prototype do objeto Array para criar um map com loop
// Array.prototype.meuMapLoop = function (callback: any) {
//     const newArray = [];
//     for (let i = 0; i < this.length; i++) {
//         newArray.push(callback(this[i]));
//     }
//     return newArray;
// };

const meuMapLoop = function (list: any, callback: any) {
    const newArray = [];
    for (let i = 0; i < list.length; i++) {
        newArray.push(callback(list[i]));
    }

    return newArray;
} as any

function findTitleAndImdbRatingComMeuMapLoop(list: any) {
    return new meuMapLoop(list, (a: any) => ({
        title: a.Title,
        rating: a['imdbRating']
    }))
}

//Modificar prototype do objeto Array para criar um map com forEach
// Array.prototype.meuMapForEach = function (callback: any) {
//     const newArray = [];
//     this.forEach(a => newArray.push(callback(a)));
//     return newArray;
// };

const meuMapForEach = function (list: any, callback: any) {
    const newArray: any = [];
    list.forEach((a: any) => newArray.push(callback(a)));
    return newArray;
} as any

function findTitleAndImdbRatingComMeuMapForEach(list: any) {
    return new meuMapForEach(list, (a: any) => ({ title: a['Title'], rating: a['imdbRating'] }))
}

export {
    findTitleAndImdbRating,
    findTitleAndImdbRatingComMap,
    findTitleAndImdbRatingComMeuMapLoop,
    findTitleAndImdbRatingComMeuMapForEach,
}