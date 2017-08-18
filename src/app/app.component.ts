import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.scss']
})

export class AppComponent {
  currentPageIndex: number = 0;
  private currentQuestionIndex: number = 0;
  private questions = [{
    title: 'What age',
    subtitle: 'are your patients with diabetes?',
    answers: [{
      portrait: 'assets/p1_1.jpg',
      selected: false,
      desc: '20-35 years'
    }, {
      portrait: 'assets/p1_2.jpg',
      selected: false,
      desc: '35-65 years'
    }, {
      portrait: 'assets/p1_3.jpg',
      selected: false,
      desc: 'over 65 years'
    }]
  }];

  diversityProfile = [];

  ngOnInit() {
    // for(let i = 0; i < 7; i++) {
    //   this.diversityProfile.push('assets/p1_1.jpg');
    // }
  }

  get question() {
    return this.questions[this.currentQuestionIndex];
  }
  
  get hasSelectedAnswers() {
    return (this.question.answers.filter(question => question.selected)) ? true : false;
  }

  toggleSelected(index) {
    const currentValue = !this.question.answers[index].selected;
    this.question.answers[index].selected = currentValue;
    
    if (currentValue) {
      this.diversityProfile.push('assets/p1_1.jpg');
    } else {
      this.diversityProfile.pop();
    }
  }
  
  nextStep() {
    this.currentPageIndex += 1; 
  }
  
  resetStep() {
    this.currentPageIndex = 0;
  }
}
