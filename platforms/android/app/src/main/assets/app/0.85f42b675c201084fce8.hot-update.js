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
        return Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_2__["request"])({
            url: url,
            method: "GET"
        }).then(function (res) {
            return res.statusCode;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL3Byb3ZpZGVycy9tcXR0L21xdHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7RUFFRTtBQUN5QztBQUkzQyxxRkFBcUY7QUFDbEQ7QUFFa0U7QUFHckc7SUFBQTtJQTRFQSxDQUFDO0lBMUVDLDJDQUEyQztJQUczQyxrR0FBa0c7SUFDbEcsd0ZBQXdGO0lBQ3hGLDZEQUE2RDtJQUM3RCw4QkFBTyxHQUFQLFVBQVEsS0FBYSxFQUFFLENBQWM7UUFDbkMsMEtBQTBLO1FBQzFLLElBQU0sR0FBRyxHQUFNLDhDQUFNLENBQUMsTUFBTSxTQUFJLEtBQUssaUJBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsU0FBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxTQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFNBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUksQ0FBQztRQUNwSixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGdDQUFnQztRQUNoQyw2RkFBNkY7UUFDN0YsT0FBTyxxRUFBTyxDQUFDO1lBQ2IsR0FBRyxFQUFFLEdBQUc7WUFDUixNQUFNLEVBQUUsS0FBSztTQUNkLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFpQjtZQUN4QixPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFJSDs7OztVQUlFO1FBRUYsMkZBQTJGO1FBQzNGLFFBQVE7UUFDUixvQkFBb0I7UUFDcEIsOEJBQThCO1FBQzlCLEdBQUc7SUFDTCxDQUFDO0lBbENVLFlBQVk7UUFEeEIsZ0VBQVUsRUFBRTtPQUNBLFlBQVksQ0E0RXhCO0lBQUQsbUJBQUM7Q0FBQTtBQTVFd0IiLCJmaWxlIjoiMC44NWY0MmI2NzVjMjAxMDg0ZmNlOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhpcyBkZWNvcmF0b3IgZGVub3RlcyB0aGlzIGNsYXNzIGFzIGEgY2FuZGlkYXRlIGZvciBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBtZWNoYW5pc20uIEZvciBub3cganVzdCB0aGluayBvZiBhZGRpbmdcclxuKiogdGhlIEBJbmplY3RhYmxlIGFzIGEgcmVxdWlyZWQgY29udmVudGlvbiBmb3IgYWxsIHNlcnZpY2VzIHRoYXQgeW91IHdyaXRlXHJcbiovXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHRhcCwgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbi8vaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlLCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHsgSXJvYm90U3RhdGUgfSBmcm9tICd+L2hvbWUvbW9kZWxzL3JvYm90U3RhdGUnO1xyXG5pbXBvcnQgeyBnZXRGaWxlLCBnZXRJbWFnZSwgZ2V0SlNPTiwgZ2V0U3RyaW5nLCByZXF1ZXN0LCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNcXR0UHJvdmlkZXIge1xyXG5cclxuICAvLyBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XHJcblxyXG5cclxuICAvLyBVUkxzIGFyZSBzdHJpbmdzIGFuZCBhbGwgdmFsdWVzIGluIGEgVVJMIGFyZSBzdHJpbmdzLiBXaGVuIHlvdSBzZWUgaT0wIGluIGEgVVJMLCAwIGlzIGEgc3RyaW5nLlxyXG4gIC8vIFdoZW4geW91IHNlZSBiPXRydWUsIHRydWUgaXMgYSBzdHJpbmcuIFdoZW4geW91IHNlZSBzPSwgdGhlIHZhbHVlIGlzIGFuIGVtcHR5IHN0cmluZy5cclxuICAvLyBwdWJsaXNoKGZuTmFtZTogc3RyaW5nLCBzOiBJcm9ib3RTdGF0ZSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgcHVibGlzaCh0b3BpYzogc3RyaW5nLCBzOiBJcm9ib3RTdGF0ZSk6IGFueSB7XHJcbiAgICAvLyBjb25zdCB1cmwgPSBgJHtDb25maWcuYXBpVXJsfS8ke0NvbmZpZy5kZXZpY2VJZH0vJHtmbk5hbWV9P3BhcmFtcz0ke3Muc3BlZWQudG9TdHJpbmcoKX0sJHtzLmRpc1RvV2FsbC50b1N0cmluZygpfSwke3MuZGlyZWN0aW9uLnRvU3RyaW5nKCl9LCR7cy5hdXRvUGlsb3QudG9TdHJpbmcoKX1gO1xyXG4gICAgY29uc3QgdXJsID0gYCR7Q29uZmlnLmFwaVVybH0vJHt0b3BpY30/cGF5bG9hZD0ke3Muc3BlZWQudG9TdHJpbmcoKX0sJHtzLmRpc1RvV2FsbC50b1N0cmluZygpfSwke3MuZGlyZWN0aW9uLnRvU3RyaW5nKCl9LCR7cy5hdXRvUGlsb3QudG9TdHJpbmcoKX1gO1xyXG4gICAgY29uc29sZS5sb2codXJsKTtcclxuICAgIC8vIHRoaXMubXNnID0gZm5OYW1lOyAvLyBmb3IgY3NzXHJcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHtDb25maWcuYXBpVXJsfS8ke0NvbmZpZy5kZXZpY2VJZH0vJHtmbk5hbWV9P2tleT0ke0NvbmZpZy5hcGlLZXl9YClcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIlxyXG4gICAgfSkudGhlbigocmVzOiBIdHRwUmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXNDb2RlO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAvKlxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKS5waXBlKFxyXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICApO1xyXG4gICAgKi9cclxuXHJcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHtDb25maWcuYXBpVXJsfXVwZGF0ZT9hcGlfa2V5PSR7Q29uZmlnLmFwaUtleX0mZmllbGQxPSR7Zm5OYW1lfWApXHJcbiAgICAvLy5waXBlKFxyXG4gICAgLy8gdGFwKGNvbnNvbGUubG9nKSxcclxuICAgIC8vY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgLy8pXHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAgY2FsbEFyZXN0KGZuTmFtZTogc3RyaW5nLCBzcGVlZDogU3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgY29uc3QgdXJsID0gYCR7Q29uZmlnLmFwaVVybH0vJHtDb25maWcuZGV2aWNlSWR9LyR7Zm5OYW1lfT9wYXJhbXM9JHtzcGVlZH1gO1xyXG4gICAgICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gICAgICAvLyB0aGlzLm1zZyA9IGZuTmFtZTsgLy8gZm9yIGNzc1xyXG4gICAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHtDb25maWcuYXBpVXJsfS8ke0NvbmZpZy5kZXZpY2VJZH0vJHtmbk5hbWV9P2tleT0ke0NvbmZpZy5hcGlLZXl9YClcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKS5waXBlKFxyXG4gICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcclxuICAgICAgKTtcclxuICAgICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7Q29uZmlnLmFwaVVybH11cGRhdGU/YXBpX2tleT0ke0NvbmZpZy5hcGlLZXl9JmZpZWxkMT0ke2ZuTmFtZX1gKVxyXG4gICAgICAvLy5waXBlKFxyXG4gICAgICAvLyB0YXAoY29uc29sZS5sb2cpLFxyXG4gICAgICAvL2NhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcclxuICAgICAgLy8pXHJcbiAgICB9XHJcbiAgXHJcbiAgICBjYWxsQXJlc3RXaXRoUGFyYW0oZm5OYW1lOiBzdHJpbmcsIHNwZWVkOiBudW1iZXIsIGRpc3RUb1dhbGw6IG51bWJlciwgZGVsYXk6IHN0cmluZykge1xyXG4gICAgICBcclxuICAgICAgLy8gY29uc29sZS5sb2coJ3NwZWVkOiAnLCBzcGVlZCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJsfS8ke3RoaXMuZGV2aWNlX2lkfS8ke2ZuTmFtZX0/a2V5PSR7dGhpcy5hcGlLZXl9JnBhcmFtcz0ke3NwZWVkfSwke2Rpc3RUb1dhbGx9LCR7ZGVsYXl9YClcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHRhcChjb25zb2xlLmxvZyksXHJcbiAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpIHtcclxuICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICBlcnJvck1lc3NhZ2UgPSBgRXJyb3I6ICR7ZXJyb3IuZXJyb3IubWVzc2FnZX1gO1xyXG5cclxuICAgIC8vIHNlcnZlci1zaWRlIGVycm9yXHJcbiAgICBlcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2UgKyBgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9XFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWA7XHJcblxyXG4gICAgLy8gd2luZG93LmFsZXJ0KGVycm9yTWVzc2FnZSk7XHJcbiAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gIH1cclxuICAqL1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=