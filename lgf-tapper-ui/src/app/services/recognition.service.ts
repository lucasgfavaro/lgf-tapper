import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { IndexFace } from '../domain/indexFace';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { HttpErrorResponse } from "@angular/common/http";

const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
          })
        };

@Injectable({
  providedIn: 'root'
})
export class RecognitionService {
  private recognitionUrl = 'http://localhost:9091/api/recognitions';

  constructor(private http: HttpClient,
  private messageService: MessageService) { }

  indexFace( indexFace : IndexFace ) : Observable<Map<String,string>> {
    this.messageService.add('ReconitionService: Indexed Face');
    // TODO: Fix response 
    return this.http.post<Map<String,string>>(this.recognitionUrl,indexFace,httpOptions);
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


