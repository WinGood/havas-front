import { Component, Input, SimpleChanges } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'portrait-col',
    templateUrl: './portrait-col.html',
    styleUrls: ['./portrait-col.scss'],
    animations: [
        trigger('flipState', [
            state('active', style({
                transform: 'rotateY(179.9deg)'
            })),
            state('inactive', style({
                transform: 'rotateY(0)'
            })),
            transition('active => inactive', animate('450ms ease-out')),
            transition('inactive => active', animate('450ms ease-in'))
        ])
    ]
})

export class PortraitCol {
    @Input() frontImage: string;
    @Input() backImage: string;
    @Input() triggerFlipAnimation: boolean;

    public flip: string = 'inactive';

    ngOnChanges(changes: SimpleChanges) {
        if (changes['triggerFlipAnimation'] && changes['triggerFlipAnimation'].previousValue !== undefined) {
            if (changes['triggerFlipAnimation'].currentValue) {
                this.flip = 'active';
            } else {
                this.flip = 'inactive';
            }
        }
    }

    toggleFlip() {
        this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
    }
}