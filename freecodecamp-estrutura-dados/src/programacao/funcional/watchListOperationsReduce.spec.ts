import { watchList } from './watchList';
import { getRating, getRating2 } from './watchListOperationsReduce';

describe('Programação FUNCIONAL - REDUCE', () => {
    test('Deve retornar a media de imdbRating dos filmes de Christopher Nolan', () => {
        expect(getRating(watchList)).toEqual(8.675);
    })
    test('Deve retornar a media de imdbRating dos filmes de Christopher Nolan 2ª função', () => {
        expect(getRating2(watchList)).toEqual(8.675);
    })
})