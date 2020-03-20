webpackHotUpdate(0,{

/***/ "./home/providers/mqtt/mqtt.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MqttProvider", function() { return MqttProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./home/providers/config.ts");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tns-core-modules/http");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__);
/* This decorator denotes this class as a candidate for Angular’s dependency injection mechanism. For now just think of adding
** the @Injectable as a required convention for all services that you write
*/



//import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';


var MqttProvider = /** @class */ (function () {
    function MqttProvider() {
    }
    // constructor(private http: HttpClient) {}
    // URLs are strings and all values in a URL are strings. When you see i=0 in a URL, 0 is a string.
    // When you see b=true, true is a string. When you see s=, the value is an empty string.
    // publish(fnName: string, s: IrobotState): Observable<any> {
    MqttProvider.prototype.publish = function (topic, s) {
        // const url = `${Config.apiUrl}/${Config.deviceId}/${fnName}?params=${s.speed.toString()},${s.disToWall.toString()},${s.direction.toString()},${s.autoPilot.toString()}`;
        var url = _config__WEBPACK_IMPORTED_MODULE_3__["Config"].apiUrl + "/" + topic + "?payload=" + s.speed.toString() + "," + s.disToWall.toString() + "," + s.direction.toString() + "," + s.autoPilot.toString();
        console.log(url);
        // this.msg = fnName; // for css
        // return this.http.get(`${Config.apiUrl}/${Config.deviceId}/${fnName}?key=${Config.apiKey}`)
        // convert promise to obserable via from
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({ url: url, method: "GET" }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.statusCode; }));
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
    };
    MqttProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MqttProvider);
    return MqttProvider;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL3Byb3ZpZGVycy9tcXR0L21xdHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztFQUVFO0FBQ3lDO0FBRVc7QUFDSTtBQUMxRCxxRkFBcUY7QUFDbEQ7QUFFa0U7QUFHckc7SUFBQTtJQXVFQSxDQUFDO0lBckVDLDJDQUEyQztJQUczQyxrR0FBa0c7SUFDbEcsd0ZBQXdGO0lBQ3hGLDZEQUE2RDtJQUM3RCw4QkFBTyxHQUFQLFVBQVEsS0FBYSxFQUFFLENBQWM7UUFDbkMsMEtBQTBLO1FBQzFLLElBQU0sR0FBRyxHQUFNLDhDQUFNLENBQUMsTUFBTSxTQUFJLEtBQUssaUJBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsU0FBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxTQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFNBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUksQ0FBQztRQUNwSixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGdDQUFnQztRQUNoQyw2RkFBNkY7UUFDN0Ysd0NBQXdDO1FBQ3hDLE9BQU8saURBQUksQ0FBQyxxRUFBTyxDQUFDLEVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQzthQUM1QyxJQUFJLENBQUMsMERBQUcsQ0FBQyxVQUFDLEdBQWlCLElBQUssVUFBRyxDQUFDLFVBQVUsRUFBZCxDQUFjLENBQUMsQ0FBQyxDQUFDO1FBRXBEOzs7O1VBSUU7UUFFRiwyRkFBMkY7UUFDM0YsUUFBUTtRQUNSLG9CQUFvQjtRQUNwQiw4QkFBOEI7UUFDOUIsR0FBRztJQUNMLENBQUM7SUE3QlUsWUFBWTtRQUR4QixnRUFBVSxFQUFFO09BQ0EsWUFBWSxDQXVFeEI7SUFBRCxtQkFBQztDQUFBO0FBdkV3QiIsImZpbGUiOiIwLmExOTY0NGUxYjU4NzBkNzY4MmZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUaGlzIGRlY29yYXRvciBkZW5vdGVzIHRoaXMgY2xhc3MgYXMgYSBjYW5kaWRhdGUgZm9yIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIG1lY2hhbmlzbS4gRm9yIG5vdyBqdXN0IHRoaW5rIG9mIGFkZGluZ1xyXG4qKiB0aGUgQEluamVjdGFibGUgYXMgYSByZXF1aXJlZCBjb252ZW50aW9uIGZvciBhbGwgc2VydmljZXMgdGhhdCB5b3Ugd3JpdGVcclxuKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgdGFwLCBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IsIGZyb20sIHBpcGUgfSBmcm9tICdyeGpzJztcclxuLy9pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVzcG9uc2UsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgeyBJcm9ib3RTdGF0ZSB9IGZyb20gJ34vaG9tZS9tb2RlbHMvcm9ib3RTdGF0ZSc7XHJcbmltcG9ydCB7IGdldEZpbGUsIGdldEltYWdlLCBnZXRKU09OLCBnZXRTdHJpbmcsIHJlcXVlc3QsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1xdHRQcm92aWRlciB7XHJcblxyXG4gIC8vIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcblxyXG4gIC8vIFVSTHMgYXJlIHN0cmluZ3MgYW5kIGFsbCB2YWx1ZXMgaW4gYSBVUkwgYXJlIHN0cmluZ3MuIFdoZW4geW91IHNlZSBpPTAgaW4gYSBVUkwsIDAgaXMgYSBzdHJpbmcuXHJcbiAgLy8gV2hlbiB5b3Ugc2VlIGI9dHJ1ZSwgdHJ1ZSBpcyBhIHN0cmluZy4gV2hlbiB5b3Ugc2VlIHM9LCB0aGUgdmFsdWUgaXMgYW4gZW1wdHkgc3RyaW5nLlxyXG4gIC8vIHB1Ymxpc2goZm5OYW1lOiBzdHJpbmcsIHM6IElyb2JvdFN0YXRlKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICBwdWJsaXNoKHRvcGljOiBzdHJpbmcsIHM6IElyb2JvdFN0YXRlKTogYW55IHtcclxuICAgIC8vIGNvbnN0IHVybCA9IGAke0NvbmZpZy5hcGlVcmx9LyR7Q29uZmlnLmRldmljZUlkfS8ke2ZuTmFtZX0/cGFyYW1zPSR7cy5zcGVlZC50b1N0cmluZygpfSwke3MuZGlzVG9XYWxsLnRvU3RyaW5nKCl9LCR7cy5kaXJlY3Rpb24udG9TdHJpbmcoKX0sJHtzLmF1dG9QaWxvdC50b1N0cmluZygpfWA7XHJcbiAgICBjb25zdCB1cmwgPSBgJHtDb25maWcuYXBpVXJsfS8ke3RvcGljfT9wYXlsb2FkPSR7cy5zcGVlZC50b1N0cmluZygpfSwke3MuZGlzVG9XYWxsLnRvU3RyaW5nKCl9LCR7cy5kaXJlY3Rpb24udG9TdHJpbmcoKX0sJHtzLmF1dG9QaWxvdC50b1N0cmluZygpfWA7XHJcbiAgICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gICAgLy8gdGhpcy5tc2cgPSBmbk5hbWU7IC8vIGZvciBjc3NcclxuICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke0NvbmZpZy5hcGlVcmx9LyR7Q29uZmlnLmRldmljZUlkfS8ke2ZuTmFtZX0/a2V5PSR7Q29uZmlnLmFwaUtleX1gKVxyXG4gICAgLy8gY29udmVydCBwcm9taXNlIHRvIG9ic2VyYWJsZSB2aWEgZnJvbVxyXG4gICAgcmV0dXJuIGZyb20ocmVxdWVzdCh7dXJsOiB1cmwsIG1ldGhvZDogXCJHRVRcIn0pKVxyXG4gICAgICAucGlwZShtYXAoKHJlczogSHR0cFJlc3BvbnNlKSA9PiByZXMuc3RhdHVzQ29kZSkpO1xyXG5cclxuICAgIC8qXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpLnBpcGUoXHJcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcclxuICAgICk7XHJcbiAgICAqL1xyXG5cclxuICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke0NvbmZpZy5hcGlVcmx9dXBkYXRlP2FwaV9rZXk9JHtDb25maWcuYXBpS2V5fSZmaWVsZDE9JHtmbk5hbWV9YClcclxuICAgIC8vLnBpcGUoXHJcbiAgICAvLyB0YXAoY29uc29sZS5sb2cpLFxyXG4gICAgLy9jYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICAvLylcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICBjYWxsQXJlc3QoZm5OYW1lOiBzdHJpbmcsIHNwZWVkOiBTdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICBjb25zdCB1cmwgPSBgJHtDb25maWcuYXBpVXJsfS8ke0NvbmZpZy5kZXZpY2VJZH0vJHtmbk5hbWV9P3BhcmFtcz0ke3NwZWVkfWA7XHJcbiAgICAgIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICAgIC8vIHRoaXMubXNnID0gZm5OYW1lOyAvLyBmb3IgY3NzXHJcbiAgICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke0NvbmZpZy5hcGlVcmx9LyR7Q29uZmlnLmRldmljZUlkfS8ke2ZuTmFtZX0/a2V5PSR7Q29uZmlnLmFwaUtleX1gKVxyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpLnBpcGUoXHJcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgICApO1xyXG4gICAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHtDb25maWcuYXBpVXJsfXVwZGF0ZT9hcGlfa2V5PSR7Q29uZmlnLmFwaUtleX0mZmllbGQxPSR7Zm5OYW1lfWApXHJcbiAgICAgIC8vLnBpcGUoXHJcbiAgICAgIC8vIHRhcChjb25zb2xlLmxvZyksXHJcbiAgICAgIC8vY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgICAvLylcclxuICAgIH1cclxuICBcclxuICAgIGNhbGxBcmVzdFdpdGhQYXJhbShmbk5hbWU6IHN0cmluZywgc3BlZWQ6IG51bWJlciwgZGlzdFRvV2FsbDogbnVtYmVyLCBkZWxheTogc3RyaW5nKSB7XHJcbiAgICAgIFxyXG4gICAgICAvLyBjb25zb2xlLmxvZygnc3BlZWQ6ICcsIHNwZWVkKTtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cmx9LyR7dGhpcy5kZXZpY2VfaWR9LyR7Zm5OYW1lfT9rZXk9JHt0aGlzLmFwaUtleX0mcGFyYW1zPSR7c3BlZWR9LCR7ZGlzdFRvV2FsbH0sJHtkZWxheX1gKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgdGFwKGNvbnNvbGUubG9nKSxcclxuICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcclxuICAgICAgICApXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkge1xyXG4gICAgbGV0IGVycm9yTWVzc2FnZSA9ICcnO1xyXG5cclxuICAgIGVycm9yTWVzc2FnZSA9IGBFcnJvcjogJHtlcnJvci5lcnJvci5tZXNzYWdlfWA7XHJcblxyXG4gICAgLy8gc2VydmVyLXNpZGUgZXJyb3JcclxuICAgIGVycm9yTWVzc2FnZSA9IGVycm9yTWVzc2FnZSArIGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c31cXG5NZXNzYWdlOiAke2Vycm9yLm1lc3NhZ2V9YDtcclxuXHJcbiAgICAvLyB3aW5kb3cuYWxlcnQoZXJyb3JNZXNzYWdlKTtcclxuICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yTWVzc2FnZSk7XHJcbiAgfVxyXG4gICovXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==