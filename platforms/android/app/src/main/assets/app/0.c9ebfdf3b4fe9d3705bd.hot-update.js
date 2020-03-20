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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL3Byb3ZpZGVycy9tcXR0L21xdHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7RUFFRTtBQUN5QztBQUkzQyxxRkFBcUY7QUFDbEQ7QUFFa0U7QUFHckc7SUFBQTtJQTRFQSxDQUFDO0lBMUVDLDJDQUEyQztJQUczQyxrR0FBa0c7SUFDbEcsd0ZBQXdGO0lBQ3hGLDZEQUE2RDtJQUM3RCw4QkFBTyxHQUFQLFVBQVEsS0FBYSxFQUFFLENBQWM7UUFDbkMsMEtBQTBLO1FBQzFLLElBQU0sR0FBRyxHQUFNLDhDQUFNLENBQUMsTUFBTSxTQUFJLEtBQUssaUJBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsU0FBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxTQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFNBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUksQ0FBQztRQUNwSixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGdDQUFnQztRQUNoQyw2RkFBNkY7UUFDN0YsT0FBTyxxRUFBTyxDQUFDO1lBQ2IsR0FBRyxFQUFFLEdBQUc7WUFDUixNQUFNLEVBQUUsS0FBSztTQUNkLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFpQjtRQUUxQixDQUFDLENBQUM7UUFJSjs7OztVQUlFO1FBRUYsMkZBQTJGO1FBQzNGLFFBQVE7UUFDUixvQkFBb0I7UUFDcEIsOEJBQThCO1FBQzlCLEdBQUc7SUFDTCxDQUFDO0lBbENZLFlBQVk7UUFEeEIsZ0VBQVUsRUFBRTtPQUNBLFlBQVksQ0E0RXhCO0lBQUQsbUJBQUM7Q0FBQTtBQTVFd0IiLCJmaWxlIjoiMC5jOWViZmRmM2I0ZmU5ZDM3MDViZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhpcyBkZWNvcmF0b3IgZGVub3RlcyB0aGlzIGNsYXNzIGFzIGEgY2FuZGlkYXRlIGZvciBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBtZWNoYW5pc20uIEZvciBub3cganVzdCB0aGluayBvZiBhZGRpbmdcclxuKiogdGhlIEBJbmplY3RhYmxlIGFzIGEgcmVxdWlyZWQgY29udmVudGlvbiBmb3IgYWxsIHNlcnZpY2VzIHRoYXQgeW91IHdyaXRlXHJcbiovXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHRhcCwgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbi8vaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlLCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHsgSXJvYm90U3RhdGUgfSBmcm9tICd+L2hvbWUvbW9kZWxzL3JvYm90U3RhdGUnO1xyXG5pbXBvcnQgeyBnZXRGaWxlLCBnZXRJbWFnZSwgZ2V0SlNPTiwgZ2V0U3RyaW5nLCByZXF1ZXN0LCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNcXR0UHJvdmlkZXIge1xyXG5cclxuICAvLyBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XHJcblxyXG5cclxuICAvLyBVUkxzIGFyZSBzdHJpbmdzIGFuZCBhbGwgdmFsdWVzIGluIGEgVVJMIGFyZSBzdHJpbmdzLiBXaGVuIHlvdSBzZWUgaT0wIGluIGEgVVJMLCAwIGlzIGEgc3RyaW5nLlxyXG4gIC8vIFdoZW4geW91IHNlZSBiPXRydWUsIHRydWUgaXMgYSBzdHJpbmcuIFdoZW4geW91IHNlZSBzPSwgdGhlIHZhbHVlIGlzIGFuIGVtcHR5IHN0cmluZy5cclxuICAvLyBwdWJsaXNoKGZuTmFtZTogc3RyaW5nLCBzOiBJcm9ib3RTdGF0ZSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgcHVibGlzaCh0b3BpYzogc3RyaW5nLCBzOiBJcm9ib3RTdGF0ZSk6IGFueSB7XHJcbiAgICAvLyBjb25zdCB1cmwgPSBgJHtDb25maWcuYXBpVXJsfS8ke0NvbmZpZy5kZXZpY2VJZH0vJHtmbk5hbWV9P3BhcmFtcz0ke3Muc3BlZWQudG9TdHJpbmcoKX0sJHtzLmRpc1RvV2FsbC50b1N0cmluZygpfSwke3MuZGlyZWN0aW9uLnRvU3RyaW5nKCl9LCR7cy5hdXRvUGlsb3QudG9TdHJpbmcoKX1gO1xyXG4gICAgY29uc3QgdXJsID0gYCR7Q29uZmlnLmFwaVVybH0vJHt0b3BpY30/cGF5bG9hZD0ke3Muc3BlZWQudG9TdHJpbmcoKX0sJHtzLmRpc1RvV2FsbC50b1N0cmluZygpfSwke3MuZGlyZWN0aW9uLnRvU3RyaW5nKCl9LCR7cy5hdXRvUGlsb3QudG9TdHJpbmcoKX1gO1xyXG4gICAgY29uc29sZS5sb2codXJsKTtcclxuICAgIC8vIHRoaXMubXNnID0gZm5OYW1lOyAvLyBmb3IgY3NzXHJcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHtDb25maWcuYXBpVXJsfS8ke0NvbmZpZy5kZXZpY2VJZH0vJHtmbk5hbWV9P2tleT0ke0NvbmZpZy5hcGlLZXl9YClcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIlxyXG4gICAgfSkudGhlbigocmVzOiBIdHRwUmVzcG9uc2UpPT57XHJcblxyXG4gICAgfSlcclxuICAgIFxyXG4gIFxyXG5cclxuICAvKlxyXG4gIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCkucGlwZShcclxuICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcclxuICApO1xyXG4gICovXHJcblxyXG4gIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke0NvbmZpZy5hcGlVcmx9dXBkYXRlP2FwaV9rZXk9JHtDb25maWcuYXBpS2V5fSZmaWVsZDE9JHtmbk5hbWV9YClcclxuICAvLy5waXBlKFxyXG4gIC8vIHRhcChjb25zb2xlLmxvZyksXHJcbiAgLy9jYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgLy8pXHJcbn1cclxuXHJcbiAgLypcclxuICAgIGNhbGxBcmVzdChmbk5hbWU6IHN0cmluZywgc3BlZWQ6IFN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgIGNvbnN0IHVybCA9IGAke0NvbmZpZy5hcGlVcmx9LyR7Q29uZmlnLmRldmljZUlkfS8ke2ZuTmFtZX0/cGFyYW1zPSR7c3BlZWR9YDtcclxuICAgICAgY29uc29sZS5sb2codXJsKTtcclxuICAgICAgLy8gdGhpcy5tc2cgPSBmbk5hbWU7IC8vIGZvciBjc3NcclxuICAgICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7Q29uZmlnLmFwaVVybH0vJHtDb25maWcuZGV2aWNlSWR9LyR7Zm5OYW1lfT9rZXk9JHtDb25maWcuYXBpS2V5fWApXHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCkucGlwZShcclxuICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICAgICk7XHJcbiAgICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke0NvbmZpZy5hcGlVcmx9dXBkYXRlP2FwaV9rZXk9JHtDb25maWcuYXBpS2V5fSZmaWVsZDE9JHtmbk5hbWV9YClcclxuICAgICAgLy8ucGlwZShcclxuICAgICAgLy8gdGFwKGNvbnNvbGUubG9nKSxcclxuICAgICAgLy9jYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICAgIC8vKVxyXG4gICAgfVxyXG4gIFxyXG4gICAgY2FsbEFyZXN0V2l0aFBhcmFtKGZuTmFtZTogc3RyaW5nLCBzcGVlZDogbnVtYmVyLCBkaXN0VG9XYWxsOiBudW1iZXIsIGRlbGF5OiBzdHJpbmcpIHtcclxuICAgICAgXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzcGVlZDogJywgc3BlZWQpO1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVybH0vJHt0aGlzLmRldmljZV9pZH0vJHtmbk5hbWV9P2tleT0ke3RoaXMuYXBpS2V5fSZwYXJhbXM9JHtzcGVlZH0sJHtkaXN0VG9XYWxsfSwke2RlbGF5fWApXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICB0YXAoY29uc29sZS5sb2cpLFxyXG4gICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgICAgIClcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSB7XHJcbiAgICBsZXQgZXJyb3JNZXNzYWdlID0gJyc7XHJcblxyXG4gICAgZXJyb3JNZXNzYWdlID0gYEVycm9yOiAke2Vycm9yLmVycm9yLm1lc3NhZ2V9YDtcclxuXHJcbiAgICAvLyBzZXJ2ZXItc2lkZSBlcnJvclxyXG4gICAgZXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlICsgYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfVxcbk1lc3NhZ2U6ICR7ZXJyb3IubWVzc2FnZX1gO1xyXG5cclxuICAgIC8vIHdpbmRvdy5hbGVydChlcnJvck1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICB9XHJcbiAgKi9cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9