import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'numberWithLeadingZero'})
export class numberWithLeadingZero implements PipeTransform {
    transform(num: number, size: number = 2): string {
        let s = num + '';
        while (s.length < size) s = '0' + s;
        return s;
    }
}
