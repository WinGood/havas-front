import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'numberWithSuffix'})
export class numberWithSuffix implements PipeTransform {
    transform(num: number): string {
        let j = num % 10,
            k = num % 100;

        if (j == 1 && k != 11) {
            return num + "st";
        }

        if (j == 2 && k != 12) {
            return num + "nd";
        }

        if (j == 3 && k != 13) {
            return num + "rd";
        }

        return num + "th";
    }
}
