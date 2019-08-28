import { Injectable } from '@angular/core';

import { tap, map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Http } from '@angular/http';
import { Config } from '../config';

@Injectable()
export class MqttProvider {
 
  constructor(private http: Http) {
  }

  callArest(fnName: string, speed: String) : Observable<any> {
    console.log('fnName: ', fnName);
    // this.msg = fnName; // for css
    // return this.http.get(`${Config.apiUrl}/${Config.deviceId}/${fnName}?key=${Config.apiKey}`)
    return this.http.get(`${Config.apiUrl}/${Config.deviceId}/${fnName}?params=${speed}`)
    // return this.http.get(`${Config.apiUrl}update?api_key=${Config.apiKey}&field1=${fnName}`)
      .pipe(
        // tap(console.log),
        catchError(this.handleError)
      )
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
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }

}
