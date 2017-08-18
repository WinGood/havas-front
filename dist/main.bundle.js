webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"welcomePage\"\n     (click)=\"nextStep()\"\n     *ngIf=\"currentPageIndex === 0\">\n  <div class=\"welcomePage__column\">\n    <div class=\"welcomePage__columnTop welcomePage__columnTop--alignBottom\">\n      <h1>What type<br>of diabetes<br>patients do<br>you see?</h1>\n    </div>\n    <div class=\"welcomePage__columnBottom\">\n      <p class=\"big-text\">\n        In a picture quiz format, clinicians<br>are asked to select patients\n        that are<br>typical of their practice.<br>More than one selection is allowed.<br>After the interaction clinicians can<br>compare their results with those of<br>their colleagues.\n      </p>\n    </div>\n  </div>\n  <div class=\"dashed-delimiter\"></div>\n  <div class=\"welcomePage__column\">\n    <div class=\"welcomePage__columnTop\"></div>\n    <div class=\"welcomePage__columnBottom\">\n      <h3>How the game works</h3>\n      <p>\n        Clinicians are asked to touch the screen to start the game. They are then shown images of three di erent patients whose speci c clinical characteristics are provided. This clinician is asked to tap on the faces of patients that are typical of those found in their clinic’s patient population.\n      </p>\n      <p>\n        After completing the screens, all the faces selected appear\n        on a screen. A diversity score is supplied and whatever their  nal score, each participant is reminded that unlike controlled clinical trials in which patients are carefully  ltered, real life studies obtain results from populations that re ect those found in everyday clinical practice.\n      </p>\n    </div>\n  </div>\n</div>\n<div\n    (click)=\"nextStep()\"\n    class=\"pageContainer pageContainer--briefing pageContainer--withGameScore\"\n    *ngIf=\"currentPageIndex === 1\">\n  <div class=\"pageContainer__header\">\n    <hr class=\"horizontalDottedDelimiter\" />\n  </div>\n  <div class=\"pageContainer__content pageContainer__content--withoutBg\">\n    <div class=\"portraitRow portraitRow--first\">\n      <div class=\"portraitRow__col\"\n           [ngStyle]=\"{'background-image': 'url(assets/p1_1.jpg)'}\"></div>\n      <div class=\"portraitRow__col\"\n           [ngStyle]=\"{'background-image': 'url(assets/p1_2.jpg)'}\"></div>\n      <div class=\"portraitRow__col\"\n           [ngStyle]=\"{'background-image': 'url(assets/p1_3.jpg)'}\"></div>\n      <div class=\"portraitRow__col\"\n           [ngStyle]=\"{'background-image': 'url(assets/p1_1.jpg)'}\"></div>\n      <div class=\"portraitRow__col\"\n           [ngStyle]=\"{'background-image': 'url(assets/p1_2.jpg)'}\"></div>\n      <div class=\"portraitRow__col\"\n           [ngStyle]=\"{'background-image': 'url(assets/p1_3.jpg)'}\"></div>\n      <div class=\"portraitRow__col\"\n           [ngStyle]=\"{'background-image': 'url(assets/p1_1.jpg)'}\"></div>\n      <div class=\"portraitRow__col\"\n           [ngStyle]=\"{'background-image': 'url(assets/p1_2.jpg)'}\"></div>\n    </div>\n    <div class=\"portraitRow portraitRow--second\">\n      <div class=\"portraitRow__col\"\n           [ngStyle]=\"{'background-image': 'url(assets/p1_3.jpg)'}\"></div>\n      <div class=\"portraitRow__col\"\n           [ngStyle]=\"{'background-image': 'url(assets/p1_2.jpg)'}\"></div>\n      <div class=\"portraitRow__col\"\n           [ngStyle]=\"{'background-image': 'url(assets/p1_1.jpg)'}\"></div>\n      <div class=\"portraitRow__col\"\n           [ngStyle]=\"{'background-image': 'url(assets/p1_3.jpg)'}\"></div>\n      <div class=\"portraitRow__col\"\n           [ngStyle]=\"{'background-image': 'url(assets/p1_2.jpg)'}\"></div>\n      <div class=\"portraitRow__col\"\n           [ngStyle]=\"{'background-image': 'url(assets/p1_1.jpg)'}\"></div>\n      <div class=\"portraitRow__col\"\n           [ngStyle]=\"{'background-image': 'url(assets/p1_2.jpg)'}\"></div>\n      <div class=\"portraitRow__col\"\n           [ngStyle]=\"{'background-image': 'url(assets/p1_3.jpg)'}\"></div>\n    </div>\n    <div class=\"portraitRow portraitRow--third\">\n      <div class=\"portraitRow__col\"\n           [ngStyle]=\"{'background-image': 'url(assets/p1_2.jpg)'}\"></div>\n      <div class=\"portraitRow__col\"\n           [ngStyle]=\"{'background-image': 'url(assets/p1_3.jpg)'}\"></div>\n      <div class=\"portraitRow__col\"\n           [ngStyle]=\"{'background-image': 'url(assets/p1_1.jpg)'}\"></div>\n      <div class=\"portraitRow__col\"\n           [ngStyle]=\"{'background-image': 'url(assets/p1_2.jpg)'}\"></div>\n      <div class=\"portraitRow__col\"\n           [ngStyle]=\"{'background-image': 'url(assets/p1_3.jpg)'}\"></div>\n      <div class=\"portraitRow__col\"\n           [ngStyle]=\"{'background-image': 'url(assets/p1_1.jpg)'}\"></div>\n      <div class=\"portraitRow__col\"\n           [ngStyle]=\"{'background-image': 'url(assets/p1_2.jpg)'}\"></div>\n      <div class=\"portraitRow__col\"\n           [ngStyle]=\"{'background-image': 'url(assets/p1_3.jpg)'}\"></div>\n    </div>\n    <div class=\"circleWrapper\">\n      <div class=\"circleContainer\">\n        <div class=\"circleContainer__inner\">\n          <div class=\"circleContainer__outerBorder\">\n            <div class=\"circleContainer__content\">\n              <h3 class=\"circleContainer__heading\">\n                What type of<br>patients do you see?\n              </h3>\n              <div class=\"circleContainer__text\">\n                <p>\n                  Please look at the following screens to see if any of the\n                  patient characteristics described t the pro le of patients in\n                  your care.\n                </p>\n                <p>\n                  <strong>More than one answer can be selected</strong><br>on\n                  each\n                  screen.</p>\n                <p>\n                  At the end of the activity, you will be able to compare your\n                  answers with those of your colleagues.\n                </p>\n              </div>\n              <div class=\"circleContainer__logoContainer\">\n                <img src=\"assets/logo.png\" />\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"pageContainer__footer pageContainer__footer--withoutRefInfo\">\n    <hr class=\"horizontalDottedDelimiter\" />\n    <span>Toujeo® (insulin glargine 300 U/mL) is registered in Portugal but not marketed. Toujeo® (insulin glargine 300 U/mL) está registado em Portugal mas não é comercializado. Always refer to the prescribing information available in your country. Prescribing information is available at this booth. SAGLB.TJO.17.07.0790 August 2017</span>\n  </div>\n</div>\n\n<div class=\"pageContainer\" *ngIf=\"currentPageIndex === 2\" [class.pageContainer--quiz]=\"currentPageIndex === 2\">\n  <div class=\"pageContainer__header\">\n    <hr class=\"horizontalDottedDelimiter\" />\n  </div>\n  <div class=\"pageContainer__content\">\n    <div class=\"pageLogo\">\n      <img src=\"assets/logo.png\" />\n    </div>\n    <div class=\"quizContainer\">\n      <div class=\"question\">\n        <p class=\"question__title\">{{question.title}}</p>\n        <p class=\"question__subtitle\">{{question.subtitle}}</p>\n      </div>\n      <div class=\"answersContainer\" [class.answersContainer--hasSelectedAnswer]=\"hasSelectedAnswers\">\n        <div class=\"answer\" *ngFor=\"let answer of question.answers; let index = index\" [class.answer--selected]=\"answer.selected\" (click)=\"toggleSelected(index)\">\n          <div class=\"answer__portrait\">\n            <img [src]=\"answer.portrait\" />\n          </div>\n          <div class=\"answer__desc\">\n            <p class=\"answer__selectedText\">Selected</p>\n            <span>{{answer.desc}}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"answersTip\" (click)=\"nextStep()\">\n        <span [hidden]=\"diversityProfile.length != 0\">\n          Tap on the face (or faces) of those you<br>typically see in clinical practice.\n        </span>\n      </div>\n    </div>\n    <div class=\"diversityProfile\" [hidden]=\"diversityProfile.length === 0\">\n      <p class=\"diversityProfile__text\">Your diversity profile</p>\n      <div class=\"diversityProfile__portraitContainer\">\n        <img *ngFor=\"let profile of diversityProfile\" [src]=\"profile\" class=\"diversityProfile__portrait\">\n      </div>\n    </div>\n    <div class=\"diversityScore\" (click)=\"nextStep()\">\n      <p class=\"diversityScore__text\">Diversity score</p>\n      <span class=\"diversityScore__score\">\n        <span class=\"diversityScore__number\">0</span>\n        <span class=\"diversityScore__number\">0</span>\n      </span>\n    </div>\n  </div>\n  <div class=\"pageContainer__footer pageContainer__footer--withoutRefInfo\">\n    <hr class=\"horizontalDottedDelimiter\" />\n    <!--<span>Ref information</span>-->\n  </div>\n</div>\n\n<div class=\"pageContainer\" *ngIf=\"currentPageIndex === 3\">\n  <div class=\"pageContainer__header\">\n    <hr class=\"horizontalDottedDelimiter\" />\n  </div>\n  <div class=\"pageContainer__content\">\n    <div class=\"circleWrapper circleWrapper--сongratulations\">\n      <div class=\"circleContainer\">\n        <div class=\"circleContainer__inner\">\n          <div class=\"circleContainer__outerBorder\">\n            <div class=\"circleContainer__content\">\n              <h3 class=\"circleContainer__heading\">\n                Congratulations!\n              </h3>\n              <div class=\"circleContainer__text\">\n                <p>\n                  As you know, the clinical characteristics of patients with\n                  diabetes can vary considerably. In a typical practice, there\n                  is no such thing as a typical patient. Ask one of the Sanofi\n                  team if you have any questions about patients characteristics\n                  and their relevance to your real-world experience.\n                </p>\n              </div>\n              <div class=\"circleContainer__logoContainer\">\n                <img src=\"assets/logo.png\" />\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"answersCompareContainer\">\n      <div class=\"answersCompareContainer__btn\" (click)=\"nextStep()\">\n        See how your answers compare<br>with those of your colleagues\n      </div>\n    </div>\n    <div class=\"diversityScore\" (click)=\"nextStep()\">\n      <p class=\"diversityScore__text\">Diversity score</p>\n      <span class=\"diversityScore__score\">\n        <span class=\"diversityScore__number\">0</span>\n        <span class=\"diversityScore__number\">8</span>\n      </span>\n    </div>\n  </div>\n  <div class=\"pageContainer__footer\">\n    <hr class=\"horizontalDottedDelimiter\" />\n    <span>Toujeo® (insulin glargine 300 U/mL) is registered in Portugal but not marketed. Toujeo® (insulin glargine 300 U/mL) está registado em Portugal mas não é comercializado. Always refer to the prescribing information available in your country. Prescribing information is available at this booth. SAGLB.TJO.17.07.0790 August 2017</span>\n  </div>\n</div>\n\n<div class=\"pageContainer\" *ngIf=\"currentPageIndex === 4\">\n  <div class=\"pageContainer__header\">\n    <hr class=\"horizontalDottedDelimiter\" />\n  </div>\n  <div class=\"pageContainer__content pageContainer__content--withoutBg\"\n       (click)=\"resetStep()\">\n    <div class=\"gameResultsHeading\">\n      <span>How your answers compare<br>to your colleagues</span>\n    </div>\n    <table class=\"gameResultsTable\" width=\"100%\" cellpadding=\"0\"\n           cellspacing=\"0\">\n      <thead>\n      <tr>\n        <th width=\"15%\">Position</th>\n        <th>Patients</th>\n        <th width=\"20%\">Diversity score</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr class=\"gameResultsTable__result\">\n        <td class=\"gameResultsTable__resultPlace\">1st</td>\n        <td>\n          <div class=\"gameResultsTable__patients\">\n            <div><img src=\"../assets/p1_1.jpg\" /></div>\n            <div><img src=\"../assets/p1_2.jpg\" /></div>\n            <div><img src=\"../assets/p1_3.jpg\" /></div>\n            <div><img src=\"../assets/p1_1.jpg\" /></div>\n            <div><img src=\"../assets/p1_2.jpg\" /></div>\n            <div><img src=\"../assets/p1_3.jpg\" /></div>\n            <div><img src=\"../assets/p1_1.jpg\" /></div>\n            <div><img src=\"../assets/p1_2.jpg\" /></div>\n            <div><img src=\"../assets/p1_3.jpg\" /></div>\n            <div><img src=\"../assets/p1_1.jpg\" /></div>\n            <div><img src=\"../assets/p1_2.jpg\" /></div>\n            <div><img src=\"../assets/p1_3.jpg\" /></div>\n            <div><img src=\"../assets/p1_1.jpg\" /></div>\n            <div><img src=\"../assets/p1_2.jpg\" /></div>\n            <div><img src=\"../assets/p1_3.jpg\" /></div>\n            <div><img src=\"../assets/p1_1.jpg\" /></div>\n            <div><img src=\"../assets/p1_2.jpg\" /></div>\n            <div><img src=\"../assets/p1_3.jpg\" /></div>\n          </div>\n        </td>\n        <td class=\"gameResultsTable__resultScore\">29</td>\n      </tr>\n      <tr class=\"gameResultsTable__result\">\n        <td class=\"gameResultsTable__resultPlace\">9th</td>\n        <td>\n          <div class=\"gameResultsTable__patients\">\n            <div><img src=\"../assets/p1_1.jpg\" /></div>\n            <div><img src=\"../assets/p1_2.jpg\" /></div>\n            <div><img src=\"../assets/p1_3.jpg\" /></div>\n            <div><img src=\"../assets/p1_1.jpg\" /></div>\n            <div><img src=\"../assets/p1_2.jpg\" /></div>\n            <div><img src=\"../assets/p1_3.jpg\" /></div>\n            <div><img src=\"../assets/p1_1.jpg\" /></div>\n            <div><img src=\"../assets/p1_2.jpg\" /></div>\n          </div>\n        </td>\n        <td class=\"gameResultsTable__resultScore\">12</td>\n      </tr>\n      <tr class=\"gameResultsTable__result gameResultsTable__result--myResult\">\n        <td class=\"gameResultsTable__resultPlace gameResultsTable__resultPlace--myResult\">\n          <div class=\"circleWrapper\">\n            <div class=\"circleContainer\">\n              <div class=\"circleContainer__inner\">\n                <div class=\"circleContainer__outerBorder\">\n                  <div class=\"circleContainer__content\">\n                    <h3 class=\"circleContainer__heading\">\n                      You\n                    </h3>\n                    <div class=\"circleContainer__text\">10th</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </td>\n        <td>\n          <div class=\"gameResultsTable__patients\">\n            <div><img src=\"../assets/p1_1.jpg\" /></div>\n            <div><img src=\"../assets/p1_2.jpg\" /></div>\n            <div><img src=\"../assets/p1_3.jpg\" /></div>\n            <div><img src=\"../assets/p1_1.jpg\" /></div>\n            <div><img src=\"../assets/p1_2.jpg\" /></div>\n          </div>\n        </td>\n        <td class=\"gameResultsTable__resultScore\">9</td>\n      </tr>\n      <tr class=\"gameResultsTable__result\">\n        <td class=\"gameResultsTable__resultPlace\">11th</td>\n        <td>\n          <div class=\"gameResultsTable__patients\">\n            <div><img src=\"../assets/p1_1.jpg\" /></div>\n            <div><img src=\"../assets/p1_2.jpg\" /></div>\n            <div><img src=\"../assets/p1_3.jpg\" /></div>\n            <div><img src=\"../assets/p1_1.jpg\" /></div>\n          </div>\n        </td>\n        <td class=\"gameResultsTable__resultScore\">8</td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"pageContainer__footer\">\n    <hr class=\"horizontalDottedDelimiter\" />\n    <span>Toujeo® (insulin glargine 300 U/mL) is registered in Portugal but not marketed. Toujeo® (insulin glargine 300 U/mL) está registado em Portugal mas não é comercializado. Always refer to the prescribing information available in your country. Prescribing information is available at this booth. SAGLB.TJO.17.07.0790 August 2017</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.currentPageIndex = 0;
        this.currentQuestionIndex = 0;
        this.questions = [{
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
        this.diversityProfile = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        // for(let i = 0; i < 7; i++) {
        //   this.diversityProfile.push('assets/p1_1.jpg');
        // }
    };
    Object.defineProperty(AppComponent.prototype, "question", {
        get: function () {
            return this.questions[this.currentQuestionIndex];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "hasSelectedAnswers", {
        get: function () {
            return (this.question.answers.filter(function (question) { return question.selected; })) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.toggleSelected = function (index) {
        var currentValue = !this.question.answers[index].selected;
        this.question.answers[index].selected = currentValue;
        if (currentValue) {
            this.diversityProfile.push('assets/p1_1.jpg');
        }
        else {
            this.diversityProfile.pop();
        }
    };
    AppComponent.prototype.nextStep = function () {
        this.currentPageIndex += 1;
    };
    AppComponent.prototype.resetStep = function () {
        this.currentPageIndex = 0;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__("../../../../../src/pages/welcome/welcome.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\nimg {\n  display: block;\n  max-width: 100%; }\n\n.welcomePage {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 70%;\n  height: 100%;\n  margin: 0 auto; }\n  .welcomePage__column {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding: 0 50px; }\n  .welcomePage__columnTop, .welcomePage__columnBottom {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n    .welcomePage__columnTop--alignBottom, .welcomePage__columnBottom--alignBottom {\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; }\n  .welcomePage .dashed-delimiter {\n    border-left: 8px dotted #7ebe71;\n    height: 90%;\n    position: relative;\n    top: 5%; }\n  .welcomePage h1 {\n    font-size: 48px;\n    margin-bottom: 20px;\n    color: #37225c; }\n  .welcomePage h3 {\n    font-size: 24px;\n    color: #37225c;\n    font-weight: bold;\n    margin-bottom: 20px; }\n  .welcomePage p {\n    font-size: 16px;\n    line-height: 18px;\n    margin-bottom: 15px; }\n  .welcomePage .big-text {\n    font-size: 22px;\n    line-height: 26px;\n    margin-bottom: 0; }\n\n.pageContainer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 100vh;\n  background: #f2f1f1; }\n  .pageContainer__header, .pageContainer__footer {\n    height: 50px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    color: #37225c;\n    font-size: 12px;\n    text-align: center; }\n  .pageContainer__header {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .pageContainer__footer {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .pageContainer__content {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    position: relative;\n    background: #f2f1f1 url(" + __webpack_require__("../../../../../src/assets/equalizer.png") + ") center center no-repeat;\n    background-size: contain; }\n    .pageContainer__content--withoutBg {\n      background: none; }\n  .pageContainer .pageLogo {\n    width: 9%;\n    position: absolute;\n    left: 50px;\n    top: 15px; }\n  .pageContainer .diversityProfile {\n    position: absolute;\n    left: 0px;\n    bottom: -50px; }\n  .pageContainer .diversityScore {\n    position: absolute;\n    right: 30px;\n    bottom: -35px; }\n\n.horizontalDottedDelimiter {\n  border: none;\n  border-top: 8px dotted #7ebe71;\n  color: #f2f1f1;\n  background-color: #f2f1f1;\n  height: 1px;\n  width: 100%;\n  margin: 5px 0; }\n\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .row__column {\n    width: calc(12.5% - 10px);\n    margin: 0 10px; }\n\n.answersCompareContainer {\n  margin-top: 25px;\n  text-align: center; }\n  .answersCompareContainer__btn {\n    width: 40%;\n    display: inline-block;\n    background-color: #ddeeda;\n    box-shadow: 0 0 12px #7ebe71;\n    color: #7ebe71;\n    padding: 10px 0px;\n    border-radius: 12px;\n    font-size: 1.6vw;\n    line-height: 2vw; }\n\n.circleWrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 2; }\n  .circleWrapper--сongratulations {\n    display: block;\n    position: static;\n    margin-top: 60px; }\n    .circleWrapper--сongratulations .circleContainer {\n      margin: 0 auto; }\n    .circleWrapper--сongratulations .circleContainer__content {\n      max-width: calc(100% - 180px);\n      padding-top: 18%;\n      padding-bottom: 4%; }\n\n.circleContainer {\n  position: relative;\n  width: 40%;\n  border-radius: 50%;\n  background-color: #fff; }\n  .circleContainer__inner {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    text-align: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    background-color: #fff;\n    border-radius: 50%;\n    left: 0px;\n    right: 0px;\n    top: 0;\n    bottom: 0;\n    position: absolute;\n    width: 100%;\n    height: 100%; }\n  .circleContainer__outerBorder {\n    width: calc(100% - 40px);\n    height: calc(100% - 40px);\n    border-radius: 50%;\n    border: 8px dotted #7ebe71;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .circleContainer__content {\n    max-width: calc(100% - 180px);\n    padding-top: 10%;\n    padding-bottom: 4%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .circleContainer__heading {\n    color: #37225c;\n    font-size: 56px;\n    font-size: 2.9vw;\n    line-height: 3vw;\n    font-weight: normal;\n    margin-bottom: 20px; }\n  .circleContainer__text p {\n    color: #37225c;\n    margin-bottom: 15px;\n    font-size: 24px;\n    font-size: 1.4vw;\n    line-height: 1.8vw;\n    font-family: \"AvantGardeRegular\", Arial; }\n    .circleContainer__text p:last-child {\n      margin-bottom: 0; }\n  .circleContainer__logoContainer {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    margin: 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .circleContainer:after {\n    content: \"\";\n    display: block;\n    padding-bottom: 100%; }\n\n.portraitRow {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 33.333333%; }\n  .portraitRow__col {\n    width: calc(12.5% - 10px);\n    height: 100%;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    margin-right: 10px; }\n    .portraitRow__col:last-child {\n      width: 12.5%;\n      margin-right: 0; }\n  .portraitRow--first {\n    top: 0; }\n  .portraitRow--second {\n    top: calc(33.333333% + 10px);\n    height: calc(33.333333% - 10px); }\n  .portraitRow--third {\n    top: calc(33.333333% + 33.333333% + 10px);\n    height: calc(33.333333% - 10px); }\n\n.quizContainer {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .quizContainer .question {\n    -webkit-box-flex: 1.6;\n        -ms-flex: 1.6;\n            flex: 1.6; }\n  .quizContainer .answersTip {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n\n.question {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 20px;\n  color: #37225c; }\n  .question__title {\n    font-size: 34px;\n    font-size: 5.2vw; }\n  .question__subtitle {\n    font-size: 16px;\n    font-size: 3.2vw; }\n\n.answersContainer {\n  width: 50%;\n  max-width: 960px;\n  margin: 0 auto; }\n  .answersContainer .answer {\n    width: calc(33.333333% - 10px);\n    float: left;\n    margin: 0 5px; }\n    .answersContainer .answer:last-child {\n      margin-right: 0; }\n  .answersContainer:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n\n.answersTip {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n  width: 60%;\n  margin: 0 auto;\n  color: #7ebe71;\n  font-size: 15px;\n  font-size: 1.8vw;\n  margin-top: 35px; }\n\n.answer__selectedText {\n  font-family: Arial;\n  text-transform: uppercase;\n  color: transparent;\n  font-weight: bold;\n  margin-bottom: 4px; }\n\n.answer__desc {\n  text-align: center;\n  padding: 10px;\n  margin-top: 10px;\n  color: #37225c; }\n\n.answer__portrait {\n  padding: 5px;\n  max-width: calc(100% - 14px);\n  margin: 0 auto;\n  border: 2px solid transparent; }\n\n.answer--selected .answer__portrait {\n  border: 2px solid #7ebe71; }\n\n.answer--selected .answer__desc {\n  border-radius: 8px;\n  background-color: #f2f7ea;\n  box-shadow: 0px 0px 8px #7ebe71; }\n\n.answer--selected .answer__selectedText {\n  color: #7ebe71; }\n\n.diversityProfile {\n  width: calc(100% - 340px); }\n  .diversityProfile__text {\n    margin-bottom: 10px;\n    margin-left: 10px;\n    color: #7ebe71;\n    font-family: Arial; }\n  .diversityProfile__portraitContainer {\n    width: 100%; }\n    .diversityProfile__portraitContainer:after {\n      content: \"\";\n      display: table;\n      clear: both; }\n  .diversityProfile__portrait {\n    max-width: 5%;\n    margin-right: 5px;\n    float: left; }\n    .diversityProfile__portrait:last-child {\n      margin-right: 0; }\n\n.diversityScore {\n  max-width: 230px;\n  text-align: center;\n  background-color: #fff;\n  border-radius: 16px;\n  border: 3px solid #7ebe71;\n  color: #37225c;\n  padding: 15px 20px; }\n  .diversityScore__text {\n    text-transform: uppercase;\n    margin-bottom: 5px;\n    font-size: 24px;\n    white-space: nowrap; }\n  .diversityScore__score {\n    font-weight: bold;\n    font-size: 7vw;\n    font-family: Arial;\n    line-height: 6.8vw;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .diversityScore__number {\n    margin-right: 5px; }\n    .diversityScore__number:last-child {\n      margin-right: 0; }\n\n.gameResultsHeading {\n  color: #37225c;\n  font-size: 34px;\n  font-size: 2.8vw;\n  text-align: center;\n  margin-top: 60px;\n  margin-bottom: 25px; }\n\n.gameResultsTable {\n  color: #37225c; }\n  .gameResultsTable thead th {\n    text-transform: uppercase;\n    text-align: left;\n    padding-bottom: 20px;\n    border-bottom: 10px solid #fff; }\n    .gameResultsTable thead th:first-child, .gameResultsTable thead th:last-child {\n      text-align: center; }\n  .gameResultsTable__result {\n    text-align: center; }\n    .gameResultsTable__result td {\n      border-bottom: 10px solid #fff;\n      padding: 20px 0;\n      vertical-align: middle; }\n    .gameResultsTable__result:first-child td {\n      vertical-align: top; }\n    .gameResultsTable__result--myResult {\n      background-color: #d0e1c2; }\n      .gameResultsTable__result--myResult .gameResultsTable__resultScore {\n        color: #37225c; }\n  .gameResultsTable__patients {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n    .gameResultsTable__patients > div {\n      width: 8%;\n      margin: 5px; }\n  .gameResultsTable__resultPlace, .gameResultsTable__resultScore {\n    color: #7ebe71;\n    font-weight: bold; }\n  .gameResultsTable__resultPlace {\n    font-size: 30px;\n    font-size: 2.4vw; }\n  .gameResultsTable__resultPlace--myResult {\n    position: relative; }\n    .gameResultsTable__resultPlace--myResult .circleContainer {\n      width: 80%; }\n    .gameResultsTable__resultPlace--myResult .circleContainer__content {\n      max-width: 100%;\n      padding: 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    .gameResultsTable__resultPlace--myResult .circleContainer__heading {\n      font-size: 26px;\n      font-size: 2vw;\n      line-height: 2.2vw;\n      margin-bottom: 0px; }\n    .gameResultsTable__resultPlace--myResult .circleContainer__text {\n      color: #37225c;\n      font-size: 32px;\n      font-size: 2.8vw;\n      line-height: 3vw;\n      font-weight: bold; }\n  .gameResultsTable__resultScore {\n    font-size: 34px;\n    font-size: 2.8vw; }\n\n@media screen and (min-width: 767px) {\n  .welcomePage h1 {\n    font-size: 58px; }\n  .welcomePage .big-text {\n    font-size: 22px;\n    line-height: 28px; }\n  .welcomePage p {\n    font-size: 18px;\n    line-height: 24px; }\n  .welcomePage h3 {\n    font-size: 26px;\n    line-height: 30px; }\n  .welcomePage__column {\n    padding: 0 50px; }\n  .circleContainer__heading {\n    font-size: 36px;\n    line-height: 42px; }\n  .circleContainer__text p {\n    font-size: 18px;\n    line-height: 22px; }\n  .circleContainer__logoContainer img {\n    max-width: 80%;\n    margin: 0 auto; } }\n\n@media screen and (min-width: 1440px) {\n  .welcomePage h1 {\n    font-size: 82px; }\n  .welcomePage .big-text {\n    font-size: 24px;\n    line-height: 30px; }\n  .welcomePage p {\n    font-size: 20px;\n    line-height: 26px; }\n  .welcomePage h3 {\n    font-size: 28px;\n    line-height: 32px; }\n  .welcomePage__column:first-child {\n    padding: 0 70px 0 100px; }\n  .welcomePage__column {\n    padding: 0 100px; }\n  .circleContainer__heading {\n    font-size: 52px;\n    line-height: 56px; }\n  .circleContainer__text p {\n    font-size: 28px;\n    line-height: 32px; }\n  .circleContainer__logoContainer img {\n    max-width: 90%;\n    margin: 0 auto; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/assets/equalizer.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "equalizer.b03c85cf91172758e3fa.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/pages/welcome/welcome.html":
/***/ (function(module, exports) {

module.exports = "<h1>welcome page</h1>"

/***/ }),

/***/ "../../../../../src/pages/welcome/welcome.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/pages/welcome/welcome.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WelcomePage = (function () {
    function WelcomePage() {
    }
    return WelcomePage;
}());
WelcomePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'welcome',
        template: __webpack_require__("../../../../../src/pages/welcome/welcome.html"),
        styles: [__webpack_require__("../../../../../src/pages/welcome/welcome.scss")]
    })
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map