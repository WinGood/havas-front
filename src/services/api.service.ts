import { Injectable } from '@angular/core';
import { Response, Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';

import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
    private apiUrl: string = 'http://localhost:8000';
    
    constructor(private http: Http) {
        if (environment.production) {
            this.apiUrl = 'http://46.101.61.67';
        }
    }

    getResultsOfPlayers(): Observable<any> {
        return this.http.get(this.apiUrl + '/getResults.php')
          .map(this.extractData);
    }

    saveResultOfPlayer(result: {score: number, patients: any[]}) {
        const patients = result.patients.join(',');
        return this.http.get(this.apiUrl + `/saveResult.php?score=${result.score}&patients=${patients}`);
    }

    private extractData(res: Response) {
        let body = res.json();
        
        if (body && body.length > 0) {
            return body.map(record => {
                record['patients'] = record['patients'].split(',');
                return record;
            });
        }
        
        return [];
    }
}