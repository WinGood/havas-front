import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.scss']
})

export class AppComponent {
  currentPageIndex: number = 2;
  private currentQuestionIndex: number = 0;
  private questions = [{
    title: 'What age',
    subtitle: 'are your patients with diabetes?',
    answers: [{
      portrait: 'assets/p1_1.jpg',
      selected: false,
      desc: 'under 20-35 years'
    }, {
      portrait: 'assets/p1_2.jpg',
      selected: false,
      desc: '35-65 years'
    }, {
      portrait: 'assets/p1_3.jpg',
      selected: false,
      desc: 'over 65 years'
    }]
  }, {
    title: 'What is the mean HbA1c',
    subtitle: 'of your diabetes patients?',
    answers: [{
      portrait: 'assets/p1_1.jpg',
      selected: false,
      desc: 'HbA1C <5.0%'
    }, {
      portrait: 'assets/p1_2.jpg',
      selected: false,
      desc: 'HbA1C 5.0% to 7%'
    }, {
      portrait: 'assets/p1_3.jpg',
      selected: false,
      desc: 'HbA1C >7%'
    }]
  }, {
    title: 'What glucose control',
    subtitle: 'do your diabetes patients exhibit?',
    answers: [{
      portrait: 'assets/p1_1.jpg',
      selected: false,
      desc: 'Stable blood glucose'
    }, {
      portrait: 'assets/p1_2.jpg',
      selected: false,
      desc: 'Fluctuating blood<br/>glucose'
    }, {
      portrait: 'assets/p1_3.jpg',
      selected: false,
      desc: 'High risk of<br/>hypoglycaemic episodes'
    }]
  }, {
    title: 'What Body Mass Index',
    subtitle: 'do your patients with type 2 diabetes have?',
    answers: [{
      portrait: 'assets/p1_1.jpg',
      selected: false,
      desc: 'BMI <25 kg/m2'
    }, {
      portrait: 'assets/p1_2.jpg',
      selected: false,
      desc: 'BMI 25–30 kg/m2'
    }, {
      portrait: 'assets/p1_3.jpg',
      selected: false,
      desc: 'BMI >30 kg/m2'
    }]
  }, {
    title: 'What level of activity',
    subtitle: 'do your patients with diabetes undertake?',
    answers: [{
      portrait: 'assets/p1_1.jpg',
      selected: false,
      desc: 'Little or no<br/>exercise'
    }, {
      portrait: 'assets/p1_2.jpg',
      selected: false,
      desc: 'Exercise 1–3<br/>times per week'
    }, {
      portrait: 'assets/p1_3.jpg',
      selected: false,
      desc: 'Exercise > 3<br/>times per week'
    }]
  }, {
    title: 'What waist measurement',
    subtitle: 'do your patients with diabetes have?',
    answers: [{
      portrait: 'assets/p1_1.jpg',
      selected: false,
      desc: '< 70 cm'
    }, {
      portrait: 'assets/p1_2.jpg',
      selected: false,
      desc: '70–100 cm'
    }, {
      portrait: 'assets/p1_3.jpg',
      selected: false,
      desc: '> 100 cm'
    }]
  }, {
    title: 'For how long have your',
    subtitle: 'patients been diagnosed with diabetes?',
    answers: [{
      portrait: 'assets/p1_1.jpg',
      selected: false,
      desc: '< 1 year'
    }, {
      portrait: 'assets/p1_2.jpg',
      selected: false,
      desc: '1–10 years'
    }, {
      portrait: 'assets/p1_3.jpg',
      selected: false,
      desc: '> 10 years'
    }]
  }, {
    title: 'What Total Cholesterol levels',
    subtitle: 'do your patients with diabetes exhibit?',
    answers: [{
      portrait: 'assets/p1_1.jpg',
      selected: false,
      desc: 'LDL <2.5 mmol/L'
    }, {
      portrait: 'assets/p1_2.jpg',
      selected: false,
      desc: 'LDL 2.5–3.0 mmol/L'
    }, {
      portrait: 'assets/p1_3.jpg',
      selected: false,
      desc: 'LDL >3.0 mmol/L'
    }]
  }, {
    title: 'How many medicines',
    subtitle: 'do your patients take to control their diabetes?',
    answers: [{
      portrait: 'assets/p1_1.jpg',
      selected: false,
      desc: 'None'
    }, {
      portrait: 'assets/p1_2.jpg',
      selected: false,
      desc: '1–2'
    }, {
      portrait: 'assets/p1_3.jpg',
      selected: false,
      desc: '≥ 3'
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
    return this.question.answers.some(question => question.selected === true);
  }
  
  nextQuestion() {
    let currentIndex = this.currentQuestionIndex;
    let hasNextQuestion = this.questions[currentIndex += 1];

    if (hasNextQuestion) {
      this.currentQuestionIndex += 1;
    } else {
      this.nextStep();
    }
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
