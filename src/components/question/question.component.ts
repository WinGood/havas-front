import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
    selector: 'question',
    templateUrl: './question.html',
    styleUrls: ['./question.scss']
})

export class Question {
    @Input() question: {title: string, subtitle: string};
    public showQuestion: boolean;
    private timeoutId;

    ngOnChanges(changes: SimpleChanges) {
        clearTimeout(this.timeoutId);
        this.showQuestion = false;

        this.timeoutId = setTimeout(() => {
            this.showQuestion = true;
        }, 100);
    }

    ngOnDestroy() {
        clearTimeout(this.timeoutId);
    }
}