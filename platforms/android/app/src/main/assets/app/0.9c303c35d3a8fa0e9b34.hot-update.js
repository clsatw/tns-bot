webpackHotUpdate(0,{

/***/ "./home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./home/operators/selectDistinctState.ts");
/* harmony import */ var _providers_mqtt_mqtt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./home/providers/mqtt/mqtt.ts");
// import { ItemEventData } from "tns-core-modules/ui/list-view"





var HomeComponent = /** @class */ (function () {
    function HomeComponent(mqtt) {
        var _this = this;
        this.mqtt = mqtt;
        this.errorMessage = 'Iot Self-Driving Car';
        this.initialRobotState = {
            direction: "stop" /* STOP */,
            speed: 50,
            disToWall: 10,
            autoPilot: false
        };
        this.btnS$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.btnF$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.btnL$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.btnR$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.btnB$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.inputSpeed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.disToWall$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.autoPilot$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.robotCommands$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.btnS$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) {
            return ({ direction: "stop" /* STOP */ });
        })), this.btnF$.pipe(
        // tap(e => console.log(e.action)),           
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) {
            return e.action === 'up' ? ({ direction: "stop" /* STOP */ }) : ({ direction: "forward" /* FORWARD */ });
        })), this.btnB$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) {
            return e.action === 'up' ? ({ direction: "stop" /* STOP */ }) : ({ direction: "back" /* BACK */ });
        })), this.btnL$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) {
            return e.action === 'up' ? ({ direction: "stop" /* STOP */ }) : ({ direction: "left" /* LEFT */ });
        })), this.btnR$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) {
            return e.action === 'up' ? ({ direction: "stop" /* STOP */ }) : ({ direction: "right" /* RIGHT */ });
        })), 
        // car speed (0-255)
        this.inputSpeed$.pipe(
        //tap(console.log),
        // tap(n => console.log('speed: ' + n))),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (n) { return n !== undefined; }), Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["inputToValue"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (n) { return ({ speed: n }); })), this.disToWall$.pipe(Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["inputToValue"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (n) { return ({ disToWall: n }); })), this.autoPilot$.pipe(
        // tap(n=>console.log(n.action)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (n) { return ({ autoPilot: n }); })));
        this.robotState$ = this.robotCommands$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(this.initialRobotState), 
        // touch event 'move' keeps being fired as long as not releasing.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(function (state, command) {
            return (__assign({}, state, command));
        }), 
        // distinctUntilChanged((prev: IrobotState, curr: IrobotState) => prev.direction === curr.direction),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
        this.direction$ = this.robotState$.pipe(Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["selectDistinctState"])('direction'));
        this.navMode$ = this.robotState$.pipe(Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["selectDistinctState"])('autoPilot'));
        // discard emitted values that take < 1s. inputvalue keeps firing when sliding 
        this.speed$ = this.robotState$.pipe(Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["selectDistinctState"])('speed')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000));
        this.navigation$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.direction$, this.navMode$, this.speed$)
            .pipe(
        // withLatestFrom takes 2 obs$, in this case we ignore 1st one(direction$), and take state$ only
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.robotState$, function (_, s) { return s; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (s) {
            // console.log(s.direction)
            _this.moveCar(s);
        })
        // replace tap w/ exhaustMap so any coming direction event will be ignore if moveCar isn't completed. 
        //tap( console.log('s.direction') ),
        //exhaustMap((s)=>this.moveCar(s))
        );
        // this.robotState$.subscribe(console.log);
        // this.direction$.subscribe(console.log);       
        // ** this console.log shows everything!
        this.navigation$.subscribe(console.log);
    }
    // @ViewChild('btnF', { static: true }) btnF: ElementRef;
    // @ViewChild('btnL', { static: true }) btnL: ElementRef;
    HomeComponent.prototype.moveCar = function (s) {
        return this.mqtt.callArest(s.autoPilot === true ? "autoPilot" /* AUTO */ : s.direction, s.speed.toString())
            .subscribe(function () { console.log('arest ok'); }, function (err) { return alert(err); });
    };
    HomeComponent.prototype.ngOnInit = function () {
        // this.robotCommands$.subscribe(n => console.log(n));
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _providers_mqtt_mqtt__WEBPACK_IMPORTED_MODULE_4__["MqttProvider"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __webpack_require__("./home/home.component.html"),
            styles: [__webpack_require__("./home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_providers_mqtt_mqtt__WEBPACK_IMPORTED_MODULE_4__["MqttProvider"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0VBQWdFO0FBQ1M7QUFDRztBQUN5STtBQUVqSTtBQUUvQjtBQVNyRDtJQStGSSx1QkFBb0IsSUFBa0I7UUFBdEMsaUJBS0M7UUFMbUIsU0FBSSxHQUFKLElBQUksQ0FBYztRQTdGdEMsaUJBQVksR0FBRyxzQkFBc0IsQ0FBQztRQUN0QyxzQkFBaUIsR0FBZ0I7WUFDN0IsU0FBUyxtQkFBYztZQUN2QixLQUFLLEVBQUUsRUFBRTtZQUNULFNBQVMsRUFBRSxFQUFFO1lBQ2IsU0FBUyxFQUFFLEtBQUs7U0FDbkI7UUFFRCxVQUFLLEdBQUcsSUFBSSw0Q0FBTyxFQUF5QixDQUFDO1FBQzdDLFVBQUssR0FBRyxJQUFJLDRDQUFPLEVBQXlCLENBQUM7UUFDN0MsVUFBSyxHQUFHLElBQUksNENBQU8sRUFBeUIsQ0FBQztRQUM3QyxVQUFLLEdBQUcsSUFBSSw0Q0FBTyxFQUF5QixDQUFDO1FBQzdDLFVBQUssR0FBRyxJQUFJLDRDQUFPLEVBQXlCLENBQUM7UUFDN0MsZ0JBQVcsR0FBRyxJQUFJLDRDQUFPLEVBQVMsQ0FBQztRQUNuQyxlQUFVLEdBQUcsSUFBSSw0Q0FBTyxFQUFTLENBQUM7UUFDbEMsZUFBVSxHQUFHLElBQUksNENBQU8sRUFBTyxDQUFDO1FBWWhDLG1CQUFjLEdBQUcsa0RBQUssQ0FDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ1gsMERBQUcsQ0FBQyxXQUFDO1lBQ0QsUUFBQyxFQUFFLFNBQVMsbUJBQWMsRUFBRSxDQUFDO1FBQTdCLENBQTZCLENBQ2hDLENBQUMsRUFDTixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7UUFDWCw4Q0FBOEM7UUFDOUMsMERBQUcsQ0FBQyxXQUFDO1lBQ0QsUUFBQyxDQUFDLE1BQU0sS0FB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ZmlsZSI6IjAuOWMzMDNjMzVkM2E4ZmEwZTliMzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBvZiwgU3ViamVjdCwgT2JzZXJ2YWJsZSwgbWVyZ2UsIGNvbWJpbmVMYXRlc3QsIE5FVkVSIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBleGhhdXN0TWFwLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc3RhcnRXaXRoLCBzY2FuLCBtYXAsIHNoYXJlUmVwbGF5LCBzd2l0Y2hNYXAsIHRhcCwgZmlsdGVyLCB3aXRoTGF0ZXN0RnJvbSwgbGFzdCwgdGFrZUxhc3QsIGRlYm91bmNlLCB0aHJvdHRsZVRpbWUsIHRha2UsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElyb2JvdFN0YXRlLCBjbWRFbnVtIH0gZnJvbSBcIi4vbW9kZWxzL3JvYm90U3RhdGVcIjtcbmltcG9ydCB7IHNlbGVjdERpc3RpbmN0U3RhdGUsIGlucHV0VG9WYWx1ZSB9IGZyb20gXCIuL29wZXJhdG9ycy9zZWxlY3REaXN0aW5jdFN0YXRlXCI7XG5pbXBvcnQgeyBUb3VjaEdlc3R1cmVFdmVudERhdGEgfSBmcm9tICd1aS9nZXN0dXJlcyc7XG5pbXBvcnQgeyBNcXR0UHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9tcXR0L21xdHQnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9ob21lLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBlcnJvck1lc3NhZ2UgPSAnSW90IFNlbGYtRHJpdmluZyBDYXInO1xuICAgIGluaXRpYWxSb2JvdFN0YXRlOiBJcm9ib3RTdGF0ZSA9IHtcbiAgICAgICAgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AsXG4gICAgICAgIHNwZWVkOiA1MCxcbiAgICAgICAgZGlzVG9XYWxsOiAxMCxcbiAgICAgICAgYXV0b1BpbG90OiBmYWxzZVxuICAgIH1cblxuICAgIGJ0blMkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xuICAgIGJ0bkYkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xuICAgIGJ0bkwkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xuICAgIGJ0blIkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xuICAgIGJ0bkIkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xuICAgIGlucHV0U3BlZWQkID0gbmV3IFN1YmplY3Q8RXZlbnQ+KCk7XG4gICAgZGlzVG9XYWxsJCA9IG5ldyBTdWJqZWN0PEV2ZW50PigpO1xuICAgIGF1dG9QaWxvdCQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgLy8gQFZpZXdDaGlsZCgnYnRuRicsIHsgc3RhdGljOiB0cnVlIH0pIGJ0bkY6IEVsZW1lbnRSZWY7XG4gICAgLy8gQFZpZXdDaGlsZCgnYnRuTCcsIHsgc3RhdGljOiB0cnVlIH0pIGJ0bkw6IEVsZW1lbnRSZWY7XG5cbiAgICBtb3ZlQ2FyKHM6IElyb2JvdFN0YXRlKTphbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5tcXR0LmNhbGxBcmVzdChzLmF1dG9QaWxvdCA9PT0gdHJ1ZSA/IGNtZEVudW0uQVVUTyA6IHMuZGlyZWN0aW9uLCBzLnNwZWVkLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICgpID0+IHtjb25zb2xlLmxvZygnYXJlc3Qgb2snKX0sICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIChlcnIpID0+IGFsZXJ0KGVycilcbiAgICAgICAgICAgIClcbiAgICB9XG5cbiAgICByb2JvdENvbW1hbmRzJCA9IG1lcmdlKFxuICAgICAgICB0aGlzLmJ0blMkLnBpcGUoICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgbWFwKGUgPT5cbiAgICAgICAgICAgICAgICAoeyBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCB9KVxuICAgICAgICAgICAgKSksXG4gICAgICAgIHRoaXMuYnRuRiQucGlwZShcbiAgICAgICAgICAgIC8vIHRhcChlID0+IGNvbnNvbGUubG9nKGUuYWN0aW9uKSksICAgICAgICAgICBcbiAgICAgICAgICAgIG1hcChlID0+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGUuYWN0aW9uID09PSAndXAnID8gKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AgfSkgOiAoeyBkaXJlY3Rpb246IGNtZEVudW0uRk9SV0FSRCB9KVxuICAgICAgICAgICAgKSksXG4gICAgICAgIHRoaXMuYnRuQiQucGlwZShtYXAoZSA9PlxuICAgICAgICAgICAgZS5hY3Rpb24gPT09ICd1cCcgPyAoeyBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCB9KSA6ICh7IGRpcmVjdGlvbjogY21kRW51bS5CQUNLIH0pXG4gICAgICAgICkpLFxuICAgICAgICB0aGlzLmJ0bkwkLnBpcGUobWFwKGUgPT5cbiAgICAgICAgICAgIGUuYWN0aW9uID09PSAndXAnID8gKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AgfSkgOiAoeyBkaXJlY3Rpb246IGNtZEVudW0uTEVGVCB9KVxuICAgICAgICApKSxcbiAgICAgICAgdGhpcy5idG5SJC5waXBlKG1hcChlID0+XG4gICAgICAgICAgICBlLmFjdGlvbiA9PT0gJ3VwJyA/ICh7IGRpcmVjdGlvbjogY21kRW51bS5TVE9QIH0pIDogKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlJJR0hUIH0pXG4gICAgICAgICkpLFxuICAgICAgICAvLyBjYXIgc3BlZWQgKDAtMjU1KVxuICAgICAgICB0aGlzLmlucHV0U3BlZWQkLnBpcGUoXG4gICAgICAgICAgICAvL3RhcChjb25zb2xlLmxvZyksXG4gICAgICAgICAgICAvLyB0YXAobiA9PiBjb25zb2xlLmxvZygnc3BlZWQ6ICcgKyBuKSkpLFxuICAgICAgICAgICAgZmlsdGVyKG4gPT4gbiAhPT0gdW5kZWZpbmVkKSxcbiAgICAgICAgICAgIGlucHV0VG9WYWx1ZSgpLCAgICAgICAgICAgXG4gICAgICAgICAgICBtYXAobiA9PiAoeyBzcGVlZDogbiB9KSlcbiAgICAgICAgKSxcblxuICAgICAgICB0aGlzLmRpc1RvV2FsbCQucGlwZShpbnB1dFRvVmFsdWUoKSwgbWFwKG4gPT4gKHsgZGlzVG9XYWxsOiBuIH0pKSksXG4gICAgICAgIHRoaXMuYXV0b1BpbG90JC5waXBlKFxuICAgICAgICAgICAgLy8gdGFwKG49PmNvbnNvbGUubG9nKG4uYWN0aW9uKSksXG4gICAgICAgICAgICBtYXAobiA9PiAoeyBhdXRvUGlsb3Q6IG4gfSkpKVxuICAgIClcblxuICAgIHJvYm90U3RhdGUkOiBPYnNlcnZhYmxlPElyb2JvdFN0YXRlPiA9IHRoaXMucm9ib3RDb21tYW5kcyRcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBzdGFydFdpdGgodGhpcy5pbml0aWFsUm9ib3RTdGF0ZSksXG4gICAgICAgICAgICAvLyB0b3VjaCBldmVudCAnbW92ZScga2VlcHMgYmVpbmcgZmlyZWQgYXMgbG9uZyBhcyBub3QgcmVsZWFzaW5nLlxuICAgICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgICAgIHNjYW4oKHN0YXRlOiBJcm9ib3RTdGF0ZSwgY29tbWFuZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoeyAuLi5zdGF0ZSwgLi4uY29tbWFuZCB9KTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgLy8gZGlzdGluY3RVbnRpbENoYW5nZWQoKHByZXY6IElyb2JvdFN0YXRlLCBjdXJyOiBJcm9ib3RTdGF0ZSkgPT4gcHJldi5kaXJlY3Rpb24gPT09IGN1cnIuZGlyZWN0aW9uKSxcbiAgICAgICAgICAgIHNoYXJlUmVwbGF5KDEpXG4gICAgICAgICk7XG5cbiAgICBkaXJlY3Rpb24kID0gdGhpcy5yb2JvdFN0YXRlJC5waXBlKHNlbGVjdERpc3RpbmN0U3RhdGUoJ2RpcmVjdGlvbicpKTtcbiAgICBuYXZNb2RlJCA9IHRoaXMucm9ib3RTdGF0ZSQucGlwZShzZWxlY3REaXN0aW5jdFN0YXRlKCdhdXRvUGlsb3QnKSk7XG4gICAgLy8gZGlzY2FyZCBlbWl0dGVkIHZhbHVlcyB0aGF0IHRha2UgPCAxcy4gaW5wdXR2YWx1ZSBrZWVwcyBmaXJpbmcgd2hlbiBzbGlkaW5nIFxuICAgIHNwZWVkJDpPYnNlcnZhYmxlPGFueT4gPSB0aGlzLnJvYm90U3RhdGUkLnBpcGUoc2VsZWN0RGlzdGluY3RTdGF0ZSgnc3BlZWQnKSkucGlwZShkZWJvdW5jZVRpbWUoMTAwMCkpOyAgICBcblxuICAgIG5hdmlnYXRpb24kID0gY29tYmluZUxhdGVzdCh0aGlzLmRpcmVjdGlvbiQsIHRoaXMubmF2TW9kZSQsIHRoaXMuc3BlZWQkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICAgIC8vIHdpdGhMYXRlc3RGcm9tIHRha2VzIDIgb2JzJCwgaW4gdGhpcyBjYXNlIHdlIGlnbm9yZSAxc3Qgb25lKGRpcmVjdGlvbiQpLCBhbmQgdGFrZSBzdGF0ZSQgb25seVxuICAgICAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5yb2JvdFN0YXRlJCwgKF8sIHMpID0+IHMpLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0YXAoKHM6IElyb2JvdFN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocy5kaXJlY3Rpb24pXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ2FyKHMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAvLyByZXBsYWNlIHRhcCB3LyBleGhhdXN0TWFwIHNvIGFueSBjb21pbmcgZGlyZWN0aW9uIGV2ZW50IHdpbGwgYmUgaWdub3JlIGlmIG1vdmVDYXIgaXNuJ3QgY29tcGxldGVkLiBcbiAgICAgICAgICAgLy90YXAoIGNvbnNvbGUubG9nKCdzLmRpcmVjdGlvbicpICksXG4gICAgICAgICAgIC8vZXhoYXVzdE1hcCgocyk9PnRoaXMubW92ZUNhcihzKSlcbiAgICAgICAgKVxuICAgICAgICAgICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtcXR0OiBNcXR0UHJvdmlkZXIpIHtcbiAgICAgICAgLy8gdGhpcy5yb2JvdFN0YXRlJC5zdWJzY3JpYmUoY29uc29sZS5sb2cpO1xuICAgICAgICAvLyB0aGlzLmRpcmVjdGlvbiQuc3Vic2NyaWJlKGNvbnNvbGUubG9nKTsgICAgICAgXG4gICAgICAgIC8vICoqIHRoaXMgY29uc29sZS5sb2cgc2hvd3MgZXZlcnl0aGluZyFcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uJC5zdWJzY3JpYmUoY29uc29sZS5sb2cpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyB0aGlzLnJvYm90Q29tbWFuZHMkLnN1YnNjcmliZShuID0+IGNvbnNvbGUubG9nKG4pKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9