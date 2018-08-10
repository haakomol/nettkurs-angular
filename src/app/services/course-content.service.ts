import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

const CHAPTERS_JSON_URL = '/assets/chapters.json';

interface ChapterDataModel {
  title: string;
  image: string;
  json: string;
}

@Injectable({
  providedIn: 'root'
})
export class CourseContentService {
  private _isLoading = false;
  private _hasErrorOccured = false;

  private _chaptersData: ChapterDataModel[];

  constructor(private http: HttpClient) { }

  get isLoading(): boolean { return this._isLoading; }
  get hasErrorOccured(): boolean { return this._hasErrorOccured; }
  get chaptersData(): ChapterDataModel[] { return this._chaptersData; }

  loadChapters(): Promise<void> {

    this.http.get<ChapterDataModel[]>(CHAPTERS_JSON_URL)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      )
      .subscribe(
        chaptersData => {
          this._chaptersData = chaptersData['chapters'];
        },
        error => {
          this._hasErrorOccured = true;
          console.error(`Error in course-content-service, could not retrive ${CHAPTERS_JSON_URL}. Details:`);
          console.log(error);
        });

    return Promise.resolve();
  }

  private handleError(error: HttpErrorResponse) {
    let errorText: string;
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      errorText = `An client-side or network error occurred: ${error.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      errorText = `Backend returned code ${error.status}, body was: ${error.error}`;
    }
    // return an observable with a user-facing error message
    return throwError(errorText);
  }
}
