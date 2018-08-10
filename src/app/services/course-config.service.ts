import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry, delay } from 'rxjs/operators';

const COURSE_CONFIG_URL = '/assets/course-config.json';

export interface CourseConfig {
  courseName: string;
  welcomeHtml: string;
  chaptersJSONUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class CourseConfigService {
  private _isReady = false;
  private _hasErrorOccured = false;
  private _courseName: string;
  private _welcomeHtml: string;
  private _chaptersJSONUrl: string;

  constructor(private http: HttpClient) { }

  load() {
    this.http.get<CourseConfig>(COURSE_CONFIG_URL)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      )
      .subscribe(
        courseConfigJSON => {
          this._courseName = courseConfigJSON.courseName;
          this._welcomeHtml = courseConfigJSON.welcomeHtml;
          this._chaptersJSONUrl = courseConfigJSON.chaptersJSONUrl;

          this._isReady = true;
        },
        error => {
          this._hasErrorOccured = true;
      });
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error: could not get course-config.json.');
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An client-side or network error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Error: could not get course-config.json. Please try again later.');
  }

  get isReady() { return this._isReady; }
  get hasErrorOccured() { return this._hasErrorOccured; }
  get courseName() { return this._courseName; }
  get welcomeHtml() { return this._welcomeHtml; }
  get chaptersJSONUrl() { return this._chaptersJSONUrl; }
}
