/* This decorator denotes this class as a candidate for Angular’s dependency injection mechanism. For now just think of adding
** the @Injectable as a required convention for all services that you write
*/
import { Injectable } from '@angular/core';

import { map, catchError } from 'rxjs/operators';
import { Observable, throwError, from } from 'rxjs';
//import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Config } from '../config';
import { IrobotState } from '~/home/models/robotState';
import { request, HttpResponse } from "tns-core-modules/http";

@Injectable()
export class MqttProvider {

  constructor() { };

  // URLs are strings and all values in a URL are strings. When you see i=0 in a URL, 0 is a string.
  // When you see b=true, true is a string. When you see s=, the value is an empty string.
  // publish(fnName: string, s: IrobotState): Observable<any> {
  publish(topic: string, devId: string, s: IrobotState): any {
    // const url = `${Config.apiUrl}/${Config.deviceId}/${fnName}?params=${s.speed.toString()},${s.disToWall.toString()},${s.direction.toString()},${s.autoPilot.toString()}`;
    const url = `${Config.apiUrl}/${topic}?devId=${devId}&payload=${s.speed.toString()},${s.disToWall.toString()},${s.direction.toString()},${s.autoPilot.toString()}`;
    console.log(url);
    // this.msg = fnName; // for css
    // return this.http.get(`${Config.apiUrl}/${Config.deviceId}/${fnName}?key=${Config.apiKey}`)
    // convert promise to obserable via from
    return from(request({ url: url, method: "GET" }))
      .pipe(map((res: HttpResponse) => res.statusCode));

    /*
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
    */

    // return this.http.get(`${Config.apiUrl}update?api_key=${Config.apiKey}&field1=${fnName}`)
    //.pipe(
    // tap(console.log),
    //catchError(this.handleError)
    //)
  }

  sub(topic: string): Observable<any> {
    const url = `${Config.apiUrl}/${topic}`;
    console.log(url);
    return from(request({ url: url, method: "GET" }))
      .pipe(map((res: HttpResponse) => res.content.toString()))
  }

  /*
    private handleError(error: HttpErrorResponse) {
      let errorMessage = '';
  
      errorMessage = `Error: ${error.error.message}`;
  
      // server-side error
      errorMessage = errorMessage + `Error Code: ${error.status}\nMessage: ${error.message}`;
  
      // window.alert(errorMessage);
      return throwError(errorMessage);
    }
    */
}
