/* This decorator denotes this class as a candidate for Angular’s dependency injection mechanism. For now just think of adding
** the @Injectable as a required convention for all services that you write
*/
import { Injectable } from '@angular/core';

import { tap, map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config';

@Injectable()
export class MqttProvider {

  constructor(private http: HttpClient) {
  }

  callArest(fnName: string, speed: String): Observable<any> {
    const url = `${Config.apiUrl}/${Config.deviceId}/${fnName}?params=${speed}`;
    console.log(url);
    // this.msg = fnName; // for css
    // return this.http.get(`${Config.apiUrl}/${Config.deviceId}/${fnName}?key=${Config.apiKey}`)
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
    // return this.http.get(`${Config.apiUrl}update?api_key=${Config.apiKey}&field1=${fnName}`)
    //.pipe(
    // tap(console.log),
    //catchError(this.handleError)
    //)
  }

  callArestWithParam(fnName: string, speed: number, distToWall: number, delay: string) {
    /*
    // console.log('speed: ', speed);
    return this.http.get(`${this.url}/${this.device_id}/${fnName}?key=${this.apiKey}&params=${speed},${distToWall},${delay}`)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      )
      */
  }

  private handleError(error: Response) {
    console.log('Handling error locally and rethrowing it...', JSON.stringify(error.json()));
    //return Observable.throw(error);
    return throwError(error);
  }

}
