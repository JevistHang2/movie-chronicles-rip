import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({ name: 'convertHourMinute' })
export class ConvertHourMinutePipe implements PipeTransform {
    transform(time: number) {
        const hours = Math.floor(time / 60);
        const minutes = time % 60;
        return `${hours} Hour ${minutes} Minute`;
    }
}