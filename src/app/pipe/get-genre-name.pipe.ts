import { Pipe, PipeTransform } from '@angular/core';
import { Genre } from '../home/movie/movie-list/model/genre';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({ name: 'getGenreName' })
export class GetGenreNamePipe implements PipeTransform {
    transform(genreId: number, genres: Genre[]) {
        const findGenre = genres.find((item) => item.id === genreId)
        return findGenre?.name
    }
}