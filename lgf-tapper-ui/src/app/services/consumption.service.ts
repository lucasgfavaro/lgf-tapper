import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Consumption } from '../domain/consumption';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { RequestOptions  } from '@angular/http';
import { MessageService } from './message.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    })
  };

@Injectable({
  providedIn: 'root'
})
export class ConsumptionService {
  private consumptionsUrl = 'http://localhost:8080/api/consumptions';

  constructor(private http: HttpClient,
  private messageService: MessageService) { }

  getConsumptions(): Observable<Consumption[]> {
    this.messageService.add('ConsumptionService: fetched consumptions');
    return this.http.get<Consumption[]>(this.consumptionsUrl);
  }

  addConsumption(consumption: Consumption) {
    this.messageService.add('ConsumptionService: Post consumption');
    return this.http.post<Consumption>(this.consumptionsUrl,consumption,httpOptions).subscribe();
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
