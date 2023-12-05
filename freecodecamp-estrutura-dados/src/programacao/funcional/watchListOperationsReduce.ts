const { watchList } = require("./watchList");

function getRating(watchList: any) {
  let averageRating = watchList
    .filter((a: any) => a.Director === 'Christopher Nolan')
    .map((b: any) => Number(b.imdbRating))
    .reduce((soma: any, item: any) => soma + item) / watchList.filter((a: any) => a.Director === 'Christopher Nolan').length;

  return averageRating;
}

type directorImdbRating = {
  Director: string,
  imdbRating: number
}

function getRating2(watchList: any) {
  const nolanData = watchList
    .reduce((data: any, { Director: director, imdbRating: rating }: directorImdbRating) => {
      if (director === 'Christopher Nolan') {
        data.count++;
        data.sum += Number(rating);
      }

      return data;
    }, { sum: 0, count: 0 });

  return nolanData.sum / nolanData.count;
}

export {
  getRating,
  getRating2
}