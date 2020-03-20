webpackHotUpdate(0,{

/***/ "./home/providers/mqtt/mqtt.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MqttProvider", function() { return MqttProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./home/providers/config.ts");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tns-core-modules/http");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_2__);
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
        var url = _config__WEBPACK_IMPORTED_MODULE_1__["Config"].apiUrl + "/" + topic + "?payload=" + s.speed.toString() + "," + s.disToWall.toString() + "," + s.direction.toString() + "," + s.autoPilot.toString();
        console.log(url);
        // this.msg = fnName; // for css
        // return this.http.get(`${Config.apiUrl}/${Config.deviceId}/${fnName}?key=${Config.apiKey}`)
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_2__["request"])({
            url: url,
            method: "GET"
        }).then(function (res) {
            console.log(res.statusCode);
            return res.statusCode;
            // Argument (response) is HttpResponse
        }, function (e) {
            console.log('fuck!');
            return e;
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL3Byb3ZpZGVycy9tcXR0L21xdHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7RUFFRTtBQUN5QztBQUkzQyxxRkFBcUY7QUFDbEQ7QUFFa0U7QUFHckc7SUFBQTtJQStFQSxDQUFDO0lBN0VDLDJDQUEyQztJQUczQyxrR0FBa0c7SUFDbEcsd0ZBQXdGO0lBQ3hGLDZEQUE2RDtJQUM3RCw4QkFBTyxHQUFQLFVBQVEsS0FBYSxFQUFFLENBQWM7UUFDbkMsMEtBQTBLO1FBQzFLLElBQU0sR0FBRyxHQUFNLDhDQUFNLENBQUMsTUFBTSxTQUFJLEtBQUssaUJBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsU0FBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxTQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFNBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUksQ0FBQztRQUNwSixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGdDQUFnQztRQUNoQyw2RkFBNkY7UUFDN0YscUVBQU8sQ0FBQztZQUNOLEdBQUcsRUFBRSxHQUFHO1lBQ1IsTUFBTSxFQUFFLEtBQUs7U0FDZCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBaUI7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDNUIsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQ3RCLHNDQUFzQztRQUN4QyxDQUFDLEVBQUUsVUFBQyxDQUFDO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQixPQUFPLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO1FBRUg7Ozs7VUFJRTtRQUVGLDJGQUEyRjtRQUMzRixRQUFRO1FBQ1Isb0JBQW9CO1FBQ3BCLDhCQUE4QjtRQUM5QixHQUFHO0lBQ0wsQ0FBQztJQXJDVSxZQUFZO1FBRHhCLGdFQUFVLEVBQUU7T0FDQSxZQUFZLENBK0V4QjtJQUFELG1CQUFDO0NBQUE7QUEvRXdCIiwiZmlsZSI6IjAuNzAzNjg0ODBiNDY1M2Q0NjA3MjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRoaXMgZGVjb3JhdG9yIGRlbm90ZXMgdGhpcyBjbGFzcyBhcyBhIGNhbmRpZGF0ZSBmb3IgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gbWVjaGFuaXNtLiBGb3Igbm93IGp1c3QgdGhpbmsgb2YgYWRkaW5nXHJcbioqIHRoZSBASW5qZWN0YWJsZSBhcyBhIHJlcXVpcmVkIGNvbnZlbnRpb24gZm9yIGFsbCBzZXJ2aWNlcyB0aGF0IHlvdSB3cml0ZVxyXG4qL1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyB0YXAsIG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG4vL2ltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXNwb25zZSwgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IElyb2JvdFN0YXRlIH0gZnJvbSAnfi9ob21lL21vZGVscy9yb2JvdFN0YXRlJztcclxuaW1wb3J0IHsgZ2V0RmlsZSwgZ2V0SW1hZ2UsIGdldEpTT04sIGdldFN0cmluZywgcmVxdWVzdCwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTXF0dFByb3ZpZGVyIHtcclxuXHJcbiAgLy8gY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuXHJcbiAgLy8gVVJMcyBhcmUgc3RyaW5ncyBhbmQgYWxsIHZhbHVlcyBpbiBhIFVSTCBhcmUgc3RyaW5ncy4gV2hlbiB5b3Ugc2VlIGk9MCBpbiBhIFVSTCwgMCBpcyBhIHN0cmluZy5cclxuICAvLyBXaGVuIHlvdSBzZWUgYj10cnVlLCB0cnVlIGlzIGEgc3RyaW5nLiBXaGVuIHlvdSBzZWUgcz0sIHRoZSB2YWx1ZSBpcyBhbiBlbXB0eSBzdHJpbmcuXHJcbiAgLy8gcHVibGlzaChmbk5hbWU6IHN0cmluZywgczogSXJvYm90U3RhdGUpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gIHB1Ymxpc2godG9waWM6IHN0cmluZywgczogSXJvYm90U3RhdGUpOiBhbnkge1xyXG4gICAgLy8gY29uc3QgdXJsID0gYCR7Q29uZmlnLmFwaVVybH0vJHtDb25maWcuZGV2aWNlSWR9LyR7Zm5OYW1lfT9wYXJhbXM9JHtzLnNwZWVkLnRvU3RyaW5nKCl9LCR7cy5kaXNUb1dhbGwudG9TdHJpbmcoKX0sJHtzLmRpcmVjdGlvbi50b1N0cmluZygpfSwke3MuYXV0b1BpbG90LnRvU3RyaW5nKCl9YDtcclxuICAgIGNvbnN0IHVybCA9IGAke0NvbmZpZy5hcGlVcmx9LyR7dG9waWN9P3BheWxvYWQ9JHtzLnNwZWVkLnRvU3RyaW5nKCl9LCR7cy5kaXNUb1dhbGwudG9TdHJpbmcoKX0sJHtzLmRpcmVjdGlvbi50b1N0cmluZygpfSwke3MuYXV0b1BpbG90LnRvU3RyaW5nKCl9YDtcclxuICAgIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICAvLyB0aGlzLm1zZyA9IGZuTmFtZTsgLy8gZm9yIGNzc1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7Q29uZmlnLmFwaVVybH0vJHtDb25maWcuZGV2aWNlSWR9LyR7Zm5OYW1lfT9rZXk9JHtDb25maWcuYXBpS2V5fWApXHJcbiAgICByZXF1ZXN0KHtcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIlxyXG4gICAgfSkudGhlbigocmVzOiBIdHRwUmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzLnN0YXR1c0NvZGUpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1c0NvZGU7XHJcbiAgICAgIC8vIEFyZ3VtZW50IChyZXNwb25zZSkgaXMgSHR0cFJlc3BvbnNlXHJcbiAgICB9LCAoZSkgPT4geyAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZygnZnVjayEnKTtcclxuICAgICAgcmV0dXJuIGU7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKlxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKS5waXBlKFxyXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICApO1xyXG4gICAgKi9cclxuXHJcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHtDb25maWcuYXBpVXJsfXVwZGF0ZT9hcGlfa2V5PSR7Q29uZmlnLmFwaUtleX0mZmllbGQxPSR7Zm5OYW1lfWApXHJcbiAgICAvLy5waXBlKFxyXG4gICAgLy8gdGFwKGNvbnNvbGUubG9nKSxcclxuICAgIC8vY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgLy8pXHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAgY2FsbEFyZXN0KGZuTmFtZTogc3RyaW5nLCBzcGVlZDogU3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgY29uc3QgdXJsID0gYCR7Q29uZmlnLmFwaVVybH0vJHtDb25maWcuZGV2aWNlSWR9LyR7Zm5OYW1lfT9wYXJhbXM9JHtzcGVlZH1gO1xyXG4gICAgICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gICAgICAvLyB0aGlzLm1zZyA9IGZuTmFtZTsgLy8gZm9yIGNzc1xyXG4gICAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHtDb25maWcuYXBpVXJsfS8ke0NvbmZpZy5kZXZpY2VJZH0vJHtmbk5hbWV9P2tleT0ke0NvbmZpZy5hcGlLZXl9YClcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKS5waXBlKFxyXG4gICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcclxuICAgICAgKTtcclxuICAgICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7Q29uZmlnLmFwaVVybH11cGRhdGU/YXBpX2tleT0ke0NvbmZpZy5hcGlLZXl9JmZpZWxkMT0ke2ZuTmFtZX1gKVxyXG4gICAgICAvLy5waXBlKFxyXG4gICAgICAvLyB0YXAoY29uc29sZS5sb2cpLFxyXG4gICAgICAvL2NhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcclxuICAgICAgLy8pXHJcbiAgICB9XHJcbiAgXHJcbiAgICBjYWxsQXJlc3RXaXRoUGFyYW0oZm5OYW1lOiBzdHJpbmcsIHNwZWVkOiBudW1iZXIsIGRpc3RUb1dhbGw6IG51bWJlciwgZGVsYXk6IHN0cmluZykge1xyXG4gICAgICBcclxuICAgICAgLy8gY29uc29sZS5sb2coJ3NwZWVkOiAnLCBzcGVlZCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJsfS8ke3RoaXMuZGV2aWNlX2lkfS8ke2ZuTmFtZX0/a2V5PSR7dGhpcy5hcGlLZXl9JnBhcmFtcz0ke3NwZWVkfSwke2Rpc3RUb1dhbGx9LCR7ZGVsYXl9YClcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHRhcChjb25zb2xlLmxvZyksXHJcbiAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpIHtcclxuICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICBlcnJvck1lc3NhZ2UgPSBgRXJyb3I6ICR7ZXJyb3IuZXJyb3IubWVzc2FnZX1gO1xyXG5cclxuICAgIC8vIHNlcnZlci1zaWRlIGVycm9yXHJcbiAgICBlcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2UgKyBgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9XFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWA7XHJcblxyXG4gICAgLy8gd2luZG93LmFsZXJ0KGVycm9yTWVzc2FnZSk7XHJcbiAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gIH1cclxuICAqL1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=