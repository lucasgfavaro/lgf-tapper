import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, map, delay } from 'rxjs/operators';
import { Consumption } from '../domain/consumption';
import { Page } from '../domain/page';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { MessageService } from './message.service';
import { RepositionScrollStrategy } from '@angular/cdk/overlay';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ConsumptionService {
  private consumptionsUrl = 'http://localhost:9091/api/consumptions';

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  getConsumptions(sort: string, order: string, pageNumber: number, pageSize: number): Observable<Page> {
    this.messageService.add('ConsumptionService: fetched consumptions');
    const options = { params: new HttpParams().set('pageNumber', pageNumber.toString()).set('pageSize', pageSize.toString()) };

    return this.http.get<Page>(this.consumptionsUrl, options).pipe(
      map(response =>
        new Page(response.content, response.totalElements)
      ), delay(2000)); // TODO: REMOVE DELAY
  }

  addConsumption(consumption: Consumption): Observable<Consumption> {
    this.messageService.add('ConsumptionService: Post consumption');
    return this.http.post<Consumption>(this.consumptionsUrl, consumption, httpOptions);
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
