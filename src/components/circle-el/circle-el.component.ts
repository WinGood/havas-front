import { Component, Input, ElementRef } from '@angular/core';

@Component({
    selector: 'circle-el',
    templateUrl: './circle-el.html',
    styleUrls: ['./circle-el.scss']
})

export class CircleEl {
    @Input() withAnimation: boolean = true;
    @Input() longDelayAnimation: boolean;
    @Input() shortDelayAnimation: boolean;

    private longAnimationDelay: number = 3100;
    private shortAnimationDelay: number = 0;
    private animationTime: number = 600;
    private timeOutId: number;

    constructor(
        private el: ElementRef
    ) {}

    ngOnInit() {
        if (this.withAnimation) {
            if (this.el.nativeElement) {
                if (this.longDelayAnimation) {
                    this.el.nativeElement.className += ' long-animation-delay';
                }

                if (this.shortDelayAnimation) {
                    this.el.nativeElement.className += ' short-animation-delay';
                }

                this.el.nativeElement.className += ' hide-content';
            }
        }

        if (this.withAnimation && (this.longDelayAnimation || this.shortDelayAnimation)) {
            let delay = (this.longDelayAnimation) ? this.longAnimationDelay + this.animationTime : this.shortAnimationDelay + this.animationTime;
            
            this.timeOutId = setTimeout(() => {
                if (this.el.nativeElement) {
                    this.el.nativeElement.classList.remove('hide-content');
                }
            }, delay);
        }
    }
    
    ngOnDestroy() {
        clearTimeout(this.timeOutId);
    }
}