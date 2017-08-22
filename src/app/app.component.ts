import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.scss']
})

export class AppComponent {
  public currentPageIndex: number = 2;
  public diversityProfile = [];
  public diversityScore: number = 0;
  public appIsReady: boolean = false;
  public preloadImagesList = [
    'p1_1.jpg', 'p1_2.jpg', 'p1_3.jpg',
    'p2_1.jpg', 'p2_2.jpg', 'p2_3.jpg',
    'p3_1.jpg', 'p3_2.jpg', 'p3_3.jpg',
    'p4_1.jpg', 'p4_2.jpg', 'p4_3.jpg',
    'p5_1.jpg', 'p5_2.jpg', 'p5_3.jpg',
    'p6_1.jpg', 'p6_2.jpg', 'p6_3.jpg',
    'p7_1.jpg', 'p7_2.jpg', 'p7_3.jpg',
    'p8_1.jpg', 'p8_2.jpg', 'p8_3.jpg',
    'p9_1.jpg', 'p9_2.jpg', 'p9_3.jpg',
    'equalizer.png', 'logo.png'
  ];

  public portraitRows = [];

  private generatePortraitsRow() {
    let result = [];
    let portraitsInRow = 8;
    let currentQuestionIndex = 1;
    let currentQuestionPortrainIndex = 0;
    let rows = 3;

    for (let i = 0; i < rows; i++) {
      let columns = [];

      for (let j = 0; j < portraitsInRow; j++) {
        currentQuestionPortrainIndex += 1;

        if (currentQuestionPortrainIndex === 4) {
          currentQuestionIndex += 1;
          currentQuestionPortrainIndex = 1;
        }

        columns[j] = {
          frontImage: `assets/p${currentQuestionIndex}_${currentQuestionPortrainIndex}.jpg`,
          backImage: `assets/p${currentQuestionIndex}_${currentQuestionPortrainIndex}.jpg`,
          flip: false
        };
      }

      result[i] = columns;
    }

    return result;
  }

  private flipAnimationTimeoutId: number;
  private flipAnimationIntervalId: number;
  private countOfLoadedImages: number = 0;
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
    title: 'What is the mean HbA<span class="down">1c</span>',
    subtitle: 'of your diabetes patients?',
    answers: [{
      portrait: 'assets/p2_1.jpg',
      selected: false,
      desc: 'HbA<span class="down">1C</span> <5.0%'
    }, {
      portrait: 'assets/p2_2.jpg',
      selected: false,
      desc: 'HbA<span class="down">1C</span> 5.0% to 7%'
    }, {
      portrait: 'assets/p2_3.jpg',
      selected: false,
      desc: 'HbA<span class="down">1C</span> >7%'
    }]
  }, {
    title: 'What glucose control',
    subtitle: 'do your diabetes patients exhibit?',
    answers: [{
      portrait: 'assets/p3_1.jpg',
      selected: false,
      desc: 'Stable blood glucose'
    }, {
      portrait: 'assets/p3_2.jpg',
      selected: false,
      desc: 'Fluctuating blood<br/>glucose'
    }, {
      portrait: 'assets/p3_3.jpg',
      selected: false,
      desc: 'High risk of<br/>hypoglycaemic episodes'
    }]
  }, {
    title: 'What Body Mass Index',
    subtitle: 'do your patients with type 2 diabetes have?',
    answers: [{
      portrait: 'assets/p4_1.jpg',
      selected: false,
      desc: 'BMI <25 kg/m<span class="up">2</span>'
    }, {
      portrait: 'assets/p4_2.jpg',
      selected: false,
      desc: 'BMI 25–30 kg/m<span class="up">2</span>'
    }, {
      portrait: 'assets/p4_3.jpg',
      selected: false,
      desc: 'BMI >30 kg/m<span class="up">2</span>'
    }]
  }, {
    title: 'What level of activity',
    subtitle: 'do your patients with diabetes undertake?',
    answers: [{
      portrait: 'assets/p5_1.jpg',
      selected: false,
      desc: 'Little or no<br/>exercise'
    }, {
      portrait: 'assets/p5_2.jpg',
      selected: false,
      desc: 'Exercise 1–3<br/>times per week'
    }, {
      portrait: 'assets/p5_3.jpg',
      selected: false,
      desc: 'Exercise > 3<br/>times per week'
    }]
  }, {
    title: 'What waist measurement',
    subtitle: 'do your patients with diabetes have?',
    answers: [{
      portrait: 'assets/p6_1.jpg',
      selected: false,
      desc: '< 70 cm'
    }, {
      portrait: 'assets/p6_2.jpg',
      selected: false,
      desc: '70–100 cm'
    }, {
      portrait: 'assets/p6_3.jpg',
      selected: false,
      desc: '> 100 cm'
    }]
  }, {
    title: 'For how long have your',
    subtitle: 'patients been diagnosed with diabetes?',
    answers: [{
      portrait: 'assets/p7_1.jpg',
      selected: false,
      desc: '< 1 year'
    }, {
      portrait: 'assets/p7_2.jpg',
      selected: false,
      desc: '1–10 years'
    }, {
      portrait: 'assets/p7_3.jpg',
      selected: false,
      desc: '> 10 years'
    }]
  }, {
    title: 'What Total Cholesterol levels',
    subtitle: 'do your patients with diabetes exhibit?',
    answers: [{
      portrait: 'assets/p8_1.jpg',
      selected: false,
      desc: 'LDL <2.5 mmol/L'
    }, {
      portrait: 'assets/p8_2.jpg',
      selected: false,
      desc: 'LDL 2.5–3.0 mmol/L'
    }, {
      portrait: 'assets/p8_3.jpg',
      selected: false,
      desc: 'LDL >3.0 mmol/L'
    }]
  }, {
    title: 'How many medicines',
    subtitle: 'do your patients take to control their diabetes?',
    answers: [{
      portrait: 'assets/p9_1.jpg',
      selected: false,
      desc: 'None'
    }, {
      portrait: 'assets/p9_2.jpg',
      selected: false,
      desc: '1–2'
    }, {
      portrait: 'assets/p9_3.jpg',
      selected: false,
      desc: '≥ 3'
    }]
  }];

  constructor() {
    this.portraitRows = this.generatePortraitsRow();
  }

  get question() {
    return this.questions[this.currentQuestionIndex];
  }
  
  get hasSelectedAnswers() {
    return this.question.answers.some(question => question.selected === true);
  }

  ngOnInit() {
    if (this.currentPageIndex === 1) {
      this.startFlipAnimation();
    }
  }

  private startFlipAnimation() {
    clearTimeout(this.flipAnimationTimeoutId);
    clearInterval(this.flipAnimationIntervalId);

    setTimeout(() => {
      this.flipAnimation();
    }, 6000);
  }

  private flipAnimation() {
    let portraitCount = this.portraitRows.reduce((sum, row) => sum + row.length, 0);
    
    this.flipAnimationIntervalId = setInterval(() => {
      const indexes = this.getFlipStartEndIndexes(portraitCount);
      const firstInd = this.getPortraintByIndex(indexes[0]);
      const secondInd = this.getPortraintByIndex(indexes[1]);

      const firstPortrait = this.portraitRows[firstInd[0]][firstInd[1]];
      const secondPortrait = this.portraitRows[secondInd[0]][secondInd[1]];

      if (firstPortrait.flip === false) {
        firstPortrait.backImage = (secondPortrait.flip) ? secondPortrait.backImage : secondPortrait.frontImage;
      } else {
        firstPortrait.frontImage = (secondPortrait.flip) ? secondPortrait.backImage : secondPortrait.frontImage;
      }

      if (secondPortrait.flip === false) {
        secondPortrait.backImage = (firstPortrait.flip) ? firstPortrait.backImage : firstPortrait.frontImage;
      } else {
        secondPortrait.frontImage = (firstPortrait.flip) ? firstPortrait.backImage : firstPortrait.frontImage;
      }

      firstPortrait.flip = !firstPortrait.flip;
      secondPortrait.flip = !secondPortrait.flip;

    }, 1500);
  }

  private getPortraintByIndex(index: number) {
    const portraitInRow = this.portraitRows[0].length;
    const rowsCount = this.portraitRows.length;
    const row = Math.abs((Math.ceil(index / portraitInRow)));
    const rowIndex = row > rowsCount ? rowsCount : row;
    const maxValue = rowIndex * portraitInRow;
    const minValue = (maxValue - portraitInRow) < 0 ? 0 : maxValue - portraitInRow;
    const columnIndex = index - minValue;

    return [(rowIndex !== 0) ? rowIndex - 1 : rowIndex, (columnIndex !== 0) ? columnIndex - 1 : columnIndex];
  }

  private getFlipStartEndIndexes(end: number) {
    let flipStartIndex = this.getRandomNumber(end);
    let flipEndIndex = this.getRandomNumber(end);

    do {
      flipEndIndex = this.getRandomNumber(end);
    } while(flipStartIndex === flipEndIndex);

    return [flipStartIndex, flipEndIndex];
  }

  private getRandomNumber(end: number) {
    return Math.floor(Math.random() * end);
  }
  
  nextQuestion() {
    let currentIndex = this.currentQuestionIndex;
    let hasNextQuestion = this.questions[currentIndex += 1];

    if (hasNextQuestion) {
      this.currentQuestionIndex += 1;
    } else {
      this.currentQuestionIndex = 0;
      this.nextStep();
    }
  }

  toggleSelected(answer, index) {
    const currentValue = !this.question.answers[index].selected;
    this.question.answers[index].selected = currentValue;
    
    if (currentValue) {
      this.diversityScore += 1;
      this.diversityProfile.push(answer.portrait);
    } else {
      this.diversityScore -= 1;
      this.diversityProfile.pop();
    }
  }
  
  nextStep() {
    clearTimeout(this.flipAnimationTimeoutId);
    clearInterval(this.flipAnimationIntervalId);

    this.currentPageIndex += 1;
    if (this.currentPageIndex === 1) {
      this.startFlipAnimation();
    }
  }

  resetGame() {
    this.currentPageIndex = 0;
    this.diversityScore = 0;
    this.diversityProfile = [];
    this.questions.forEach(question => {
      question.answers.forEach(answer => answer.selected = false);
    });
  }
  
  imageWasLoaded() {
    this.countOfLoadedImages += 1;
    
    if (this.countOfLoadedImages === this.preloadImagesList.length) {
      this.appIsReady = true;
    }
  }
}
