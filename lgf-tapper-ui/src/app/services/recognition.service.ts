import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { IndexFace } from '../domain/indexFace';
import { RecognFace } from '../domain/recognFace';
import { RecognFaceResults } from '../domain/recognFaceResults';
import { IndexFaceResults } from "../domain/indexFaceResults";
import { MessageService } from './message.service';

const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
          })
        };

@Injectable({
  providedIn: 'root'
})
export class RecognitionService {
    
  private faceIndexUrl = 'http://localhost:9091/api/faceIndex';
  private faceRecognUrl = 'http://localhost:9091/api/faceRecogn';

  constructor(private http: HttpClient,
  private messageService: MessageService) { }

  indexFace( indexFace : IndexFace ) : Observable<IndexFaceResults> {
    this.messageService.add('ReconitionService: Indexed Face');
    return this.http.post<IndexFaceResults>(this.faceIndexUrl,indexFace,httpOptions);
  }
  
  recognFace( recognFace : RecognFace ) : Observable<RecognFaceResults> {
      this.messageService.add('ReconitionService: Recogn Face');
      //return this.http.post<RecognFaceResults>(this.faceRecognUrl,recognFace,httpOptions);
   return null;
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


