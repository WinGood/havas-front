import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ApiService {
    getResultsOfPlayers() {
        return new BehaviorSubject<any>([{
            patients: ['p1_1.jpg', 'p1_2.jpg', 'p1_3.jpg', 'p2_1.jpg', 'p2_2.jpg'],
            score: 5
        }, {
            patients: ['p1_1.jpg', 'p1_2.jpg', 'p1_3.jpg', 'p2_2.jpg'],
            score: 4
        }, {
            patients: ['p1_1.jpg', 'p2_1.jpg', 'p2_2.jpg'],
            score: 3
        }, {
            patients: ['p2_1.jpg', 'p2_2.jpg'],
            score: 2
        }]);
    }
}