import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, of } from 'rxjs';
import { Splash } from '../models/splash';

@Injectable({
  providedIn: 'root',
})
export class SplashService {
  private URL = 'api/splashes';

  constructor(private http: HttpClient) {}

  getSplashes(): Observable<Splash[]> {
    return this.http
      .get<Splash[]>(this.URL)
      .pipe(catchError(this.handleError<Splash[]>('getSplashes', [])));
  }

  createSplash() {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
