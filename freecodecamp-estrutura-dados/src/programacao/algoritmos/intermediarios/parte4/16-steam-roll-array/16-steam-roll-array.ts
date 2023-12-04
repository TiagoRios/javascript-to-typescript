/**
 * Funcão que elimina todos os arrays internos.
 * 
 * @param {Array} arr O array que contém arrays internos.
 * @returns Um array sem arrays internos.
 */
function steamrollArray(arr: any[]) {
    let arrRetorno: any[] = [];
    arr.forEach(x => Array.isArray(x) ? arrRetorno.push(...steamrollArray(x)) : arrRetorno.push(x));

    return arrRetorno;
}

// 1ª solução do site.
function steamrollArray1(arr: any[]): any {
    const flattenedArray = [];
    // Loop over array contents
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // Recursively flatten entries that are arrays
            //  and push into the flattenedArray
            flattenedArray.push(...steamrollArray1(arr[i]));
        } else {
            // Copy contents that are not arrays
            flattenedArray.push(arr[i]);
        }
    }

    return flattenedArray;
};

// 2ª solução do site.
function steamrollArray2(arr: any[]) {
    const flat = [].concat(...arr);

    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

// 3ª solução do site.
function steamrollArray3(arr: any[]) {
    return arr
        .toString()
        .replace(",,", ",") // "1,2,,3" => "1,2,3"
        .split(",") // ['1','2','3']
        .map(function (v) {
            if (v == "[object Object]") {
                // bring back empty objects
                return {};
            } else if (isNaN(Number(v))) {
                // if not a number (string)
                return v;
            } else {
                return parseInt(v); // if a number in a string, convert it
            }
        });
}

export {
    steamrollArray,
    steamrollArray1
}