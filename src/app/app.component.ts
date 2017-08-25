import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService, PageScrollInstance } from 'ng2-page-scroll';

import { ApiService } from '../services/api.service';

declare var window;
declare var document;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.scss']
})

export class AppComponent {
  public currentPageIndex: number = 4;
  public diversityProfile = [];
  public diversityScore: number = 0;
  public appIsReady: boolean = false;
  public questionIsReady: boolean = false;
  public portraitRows = [];
  public playerResults = [];
  public playerResultsWasLoaded: boolean;
  public showGoToTopButton: boolean = false;
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

  private flipAnimationTimeoutId: number;
  private flipAnimationIntervalId: number;
  private questionTimeoutId: number;
  private countOfLoadedImages: number = 0;
  private currentQuestionIndex: number = 0;
  private questions = [{
    title: 'What age',
    subtitle: 'are your patients with diabetes?',
    answers: [{
      portrait: 'p1_1.jpg',
      selected: false,
      desc: 'under 20-35 years'
    }, {
      portrait: 'p1_2.jpg',
      selected: false,
      desc: '35-65 years'
    }, {
      portrait: 'p1_3.jpg',
      selected: false,
      desc: 'over 65 years'
    }]
  }, {
    title: 'What is the mean HbA<span class="down">1c</span>',
    subtitle: 'of your diabetes patients?',
    answers: [{
      portrait: 'p2_1.jpg',
      selected: false,
      desc: 'HbA<span class="down">1C</span> <5.0%'
    }, {
      portrait: 'p2_2.jpg',
      selected: false,
      desc: 'HbA<span class="down">1C</span> 5.0% to 7%'
    }, {
      portrait: 'p2_3.jpg',
      selected: false,
      desc: 'HbA<span class="down">1C</span> >7%'
    }]
  }, {
    title: 'What glucose control',
    subtitle: 'do your diabetes patients exhibit?',
    answers: [{
      portrait: 'p3_1.jpg',
      selected: false,
      desc: 'Stable blood glucose'
    }, {
      portrait: 'p3_2.jpg',
      selected: false,
      desc: 'Fluctuating blood<br/>glucose'
    }, {
      portrait: 'p3_3.jpg',
      selected: false,
      desc: 'High risk of<br/>hypoglycaemic episodes'
    }]
  }, {
    title: 'What Body Mass Index',
    subtitle: 'do your patients with type 2 diabetes have?',
    answers: [{
      portrait: 'p4_1.jpg',
      selected: false,
      desc: 'BMI <25 kg/m<span class="up">2</span>'
    }, {
      portrait: 'p4_2.jpg',
      selected: false,
      desc: 'BMI 25–30 kg/m<span class="up">2</span>'
    }, {
      portrait: 'p4_3.jpg',
      selected: false,
      desc: 'BMI >30 kg/m<span class="up">2</span>'
    }]
  }, {
    title: 'What level of activity',
    subtitle: 'do your patients with diabetes undertake?',
    answers: [{
      portrait: 'p5_1.jpg',
      selected: false,
      desc: 'Little or no<br/>exercise'
    }, {
      portrait: 'p5_2.jpg',
      selected: false,
      desc: 'Exercise 1–3<br/>times per week'
    }, {
      portrait: 'p5_3.jpg',
      selected: false,
      desc: 'Exercise > 3<br/>times per week'
    }]
  }, {
    title: 'What waist measurement',
    subtitle: 'do your patients with diabetes have?',
    answers: [{
      portrait: 'p6_1.jpg',
      selected: false,
      desc: '< 70 cm'
    }, {
      portrait: 'p6_2.jpg',
      selected: false,
      desc: '70–100 cm'
    }, {
      portrait: 'p6_3.jpg',
      selected: false,
      desc: '> 100 cm'
    }]
  }, {
    title: 'For how long have your',
    subtitle: 'patients been diagnosed with diabetes?',
    answers: [{
      portrait: 'p7_1.jpg',
      selected: false,
      desc: '< 1 year'
    }, {
      portrait: 'p7_2.jpg',
      selected: false,
      desc: '1–10 years'
    }, {
      portrait: 'p7_3.jpg',
      selected: false,
      desc: '> 10 years'
    }]
  }, {
    title: 'What Total Cholesterol levels',
    subtitle: 'do your patients with diabetes exhibit?',
    answers: [{
      portrait: 'p8_1.jpg',
      selected: false,
      desc: 'LDL <2.5 mmol/L'
    }, {
      portrait: 'p8_2.jpg',
      selected: false,
      desc: 'LDL 2.5–3.0 mmol/L'
    }, {
      portrait: 'p8_3.jpg',
      selected: false,
      desc: 'LDL >3.0 mmol/L'
    }]
  }, {
    title: 'How many medicines',
    subtitle: 'do your patients take to control their diabetes?',
    answers: [{
      portrait: 'p9_1.jpg',
      selected: false,
      desc: 'None'
    }, {
      portrait: 'p9_2.jpg',
      selected: false,
      desc: '1–2'
    }, {
      portrait: 'p9_3.jpg',
      selected: false,
      desc: '≥ 3'
    }]
  }];

  constructor(
    private apiService: ApiService,
    private pageScrollService: PageScrollService, 
    @Inject(DOCUMENT) private document: any
  ) {
    this.portraitRows = this.generatePortraitsRow();
    window.onscroll = () => {
      if (this.currentPageIndex === 4) {
        let scrollPos = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollPos >= 400 && this.showGoToTopButton === false) {
          this.showGoToTopButton = true;
        }

        if (scrollPos <= 400 && this.showGoToTopButton === true) {
          this.showGoToTopButton = false;
        }
      }
    }
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
    
    if (this.currentPageIndex === 2) {
      this.startNewQuestion();
    }

    if (this.currentPageIndex === 4) {
      this.getPlayersResults();
    }
  }
  
  nextQuestion() {
    let currentIndex = this.currentQuestionIndex;
    let hasNextQuestion = this.questions[currentIndex += 1];
    
    this.questionIsReady = false;
    
    if (hasNextQuestion) {
      this.currentQuestionIndex += 1;
      this.startNewQuestion();
    } else {
      this.currentQuestionIndex = 0;
      this.nextStep();
    }
  }

  toggleSelected(answer) {
    answer.selected = !answer.selected;

    if (answer.selected) {
      this.diversityScore += 1;
      this.diversityProfile.push(answer.portrait);
    } else {
      const findedIndex = this.diversityProfile.indexOf(answer.portrait);
      if (findedIndex !== -1) {
        this.diversityScore -= 1;
        this.diversityProfile.splice(findedIndex, 1);
      }
    }
  }
  
  nextStep() {
    clearTimeout(this.flipAnimationTimeoutId);
    clearInterval(this.flipAnimationIntervalId);
    clearTimeout(this.questionTimeoutId);

    this.currentPageIndex += 1;
    if (this.currentPageIndex === 1) {
      this.startFlipAnimation();
    }
    
    if (this.currentQuestionIndex === 2) {
      this.startNewQuestion();
    }

    if (this.currentPageIndex === 4) {
      this.getPlayersResults();
    }
  }

  resetQuiz() {
    this.diversityScore = 0;
    this.currentQuestionIndex = 0;
    this.diversityProfile = [];
    this.questions.forEach(question => {
      question.answers.forEach(answer => answer.selected = false);
    });
  }

  resetGame() {
    this.currentPageIndex = 0;
    this.showGoToTopButton = false;
    this.resetQuiz();
  }
  
  imageWasLoaded() {
    this.countOfLoadedImages += 1;
    
    if (this.countOfLoadedImages === this.preloadImagesList.length) {
      this.appIsReady = true;
    }
  }
  
  goToTop(event) {
    event.stopPropagation();
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({document: this.document, scrollTarget: '.pageContainer', verticalScrolling: true, pageScrollDuration: 600});
    this.pageScrollService.start(pageScrollInstance); 
  }

  private getPlayersResults() {
    const currentPlayerResult = {
      score: this.diversityScore,
      displayedScore: 0,
      patients: this.diversityProfile,
      isMy: true
    };

    this.playerResultsWasLoaded = false;

    this.apiService.getResultsOfPlayers().subscribe(results => {
      const data  = results.map(res => {
        res.displayedScore = 0;
        return res;
      });

      const array = data.concat([currentPlayerResult]);

      this.playerResultsWasLoaded = true;
      this.playerResults = array.sort((prev, next) => next.score - prev.score);

      setTimeout(() => {
        let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({document: this.document, scrollTarget: '.gameResultsTable__result--myResult', verticalScrolling: true});
        this.pageScrollService.start(pageScrollInstance);
      }, 1000);

      if (currentPlayerResult.score > 0) {
        this.apiService.saveResultOfPlayer(currentPlayerResult).subscribe(result => {
          console.log(result);
        }, err => {
          console.log(err);
        });
      }
    });
  }

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

  private startNewQuestion() {
    clearTimeout(this.questionTimeoutId);

    // this.questionTimeoutId = setTimeout(() => {
    //   this.questionIsReady = true;
    // }, 150);
  }

  private startFlipAnimation() {
    clearTimeout(this.flipAnimationTimeoutId);
    clearInterval(this.flipAnimationIntervalId);

    setTimeout(() => {
      this.flipAnimation();
    }, 5500);
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
}
