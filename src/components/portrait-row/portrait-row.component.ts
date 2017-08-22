import { Component, Input, ElementRef } from '@angular/core';

@Component({
    selector: 'portrait-row',
    templateUrl: './portrait-row.html',
    styleUrls: ['./portrait-row.scss']
})

export class PortraitRow {
    @Input() rowIndex: number = 0;
    @Input() portraitsInRow: number = 0;

    constructor(
        private el: ElementRef
    ) {}

    ngOnInit() {
        // 100ms it's time for css animation
        let delay = this.rowIndex * (this.portraitsInRow * 100);
        
        setTimeout(() => {
            if (this.el.nativeElement) {
                this.el.nativeElement.className += ' fade-animate';
            }
        }, delay);
    }
}