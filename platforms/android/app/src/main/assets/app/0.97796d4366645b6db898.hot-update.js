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
        this.speed$ = this.robotState$.pipe(Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["selectDistinctState"])('speed'));
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
        this.speed$
            .pipe(debounceTime(1000))
            .subscribe(console.log);
        // ** this console.log shows everything!
        // this.navigation$.subscribe(console.log);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0VBQWdFO0FBQ1M7QUFDRztBQUMySDtBQUVuSDtBQUUvQjtBQVNyRDtJQThGSSx1QkFBb0IsSUFBa0I7UUFBdEMsaUJBUUM7UUFSbUIsU0FBSSxHQUFKLElBQUksQ0FBYztRQTVGdEMsaUJBQVksR0FBRyxzQkFBc0IsQ0FBQztRQUN0QyxzQkFBaUIsR0FBZ0I7WUFDN0IsU0FBUyxtQkFBYztZQUN2QixLQUFLLEVBQUUsRUFBRTtZQUNULFNBQVMsRUFBRSxFQUFFO1lBQ2IsU0FBUyxFQUFFLEtBQUs7U0FDbkI7UUFFRCxVQUFLLEdBQUcsSUFBSSw0Q0FBTyxFQUF5QixDQUFDO1FBQzdDLFVBQUssR0FBRyxJQUFJLDRDQUFPLEVBQXlCLENBQUM7UUFDN0MsVUFBSyxHQUFHLElBQUksNENBQU8sRUFBeUIsQ0FBQztRQUM3QyxVQUFLLEdBQUcsSUFBSSw0Q0FBTyxFQUF5QixDQUFDO1FBQzdDLFVBQUssR0FBRyxJQUFJLDRDQUFPLEVBQXlCLENBQUM7UUFDN0MsZ0JBQVcsR0FBRyxJQUFJLDRDQUFPLEVBQVMsQ0FBQztRQUNuQyxlQUFVLEdBQUcsSUFBSSw0Q0FBTyxFQUFTLENBQUM7UUFDbEMsZUFBVSxHQUFHLElBQUksNENBQU8sRUFBTyxDQUFDO1FBWWhDLG1CQUFjLEdBQUcsa0RBQUssQ0FDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ1gsMERBQUcsQ0FBQyxXQUFDO1lBQ0QsUUFBQyxFQUFFLFNBQVMsbUJBQWMsRUFBRSxDQUFDO1FBQTdCLENBQTZCLENBQ2hDLENBQUMsRUFDTixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7UUFDWCw4Q0FBOEM7UUFDOUMsMERBQUcsQ0FBQyxXQUFDO1lBQ0QsUUFBQyxDQUFDLE1BQU0sS0FB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ZmlsZSI6IjAuOTc3OTZkNDM2NjY0NWI2ZGI4OTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBvZiwgU3ViamVjdCwgT2JzZXJ2YWJsZSwgbWVyZ2UsIGNvbWJpbmVMYXRlc3QsIE5FVkVSIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBleGhhdXN0TWFwLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc3RhcnRXaXRoLCBzY2FuLCBtYXAsIHNoYXJlUmVwbGF5LCBzd2l0Y2hNYXAsIHRhcCwgZmlsdGVyLCB3aXRoTGF0ZXN0RnJvbSwgbGFzdCwgdGFrZUxhc3QsIGRlYm91bmNlLCB0aHJvdHRsZVRpbWUsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJcm9ib3RTdGF0ZSwgY21kRW51bSB9IGZyb20gXCIuL21vZGVscy9yb2JvdFN0YXRlXCI7XG5pbXBvcnQgeyBzZWxlY3REaXN0aW5jdFN0YXRlLCBpbnB1dFRvVmFsdWUgfSBmcm9tIFwiLi9vcGVyYXRvcnMvc2VsZWN0RGlzdGluY3RTdGF0ZVwiO1xuaW1wb3J0IHsgVG91Y2hHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSAndWkvZ2VzdHVyZXMnO1xuaW1wb3J0IHsgTXF0dFByb3ZpZGVyIH0gZnJvbSAnLi9wcm92aWRlcnMvbXF0dC9tcXR0JztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgZXJyb3JNZXNzYWdlID0gJ0lvdCBTZWxmLURyaXZpbmcgQ2FyJztcbiAgICBpbml0aWFsUm9ib3RTdGF0ZTogSXJvYm90U3RhdGUgPSB7XG4gICAgICAgIGRpcmVjdGlvbjogY21kRW51bS5TVE9QLFxuICAgICAgICBzcGVlZDogNTAsXG4gICAgICAgIGRpc1RvV2FsbDogMTAsXG4gICAgICAgIGF1dG9QaWxvdDogZmFsc2VcbiAgICB9XG5cbiAgICBidG5TJCA9IG5ldyBTdWJqZWN0PFRvdWNoR2VzdHVyZUV2ZW50RGF0YT4oKTtcbiAgICBidG5GJCA9IG5ldyBTdWJqZWN0PFRvdWNoR2VzdHVyZUV2ZW50RGF0YT4oKTtcbiAgICBidG5MJCA9IG5ldyBTdWJqZWN0PFRvdWNoR2VzdHVyZUV2ZW50RGF0YT4oKTtcbiAgICBidG5SJCA9IG5ldyBTdWJqZWN0PFRvdWNoR2VzdHVyZUV2ZW50RGF0YT4oKTtcbiAgICBidG5CJCA9IG5ldyBTdWJqZWN0PFRvdWNoR2VzdHVyZUV2ZW50RGF0YT4oKTtcbiAgICBpbnB1dFNwZWVkJCA9IG5ldyBTdWJqZWN0PEV2ZW50PigpO1xuICAgIGRpc1RvV2FsbCQgPSBuZXcgU3ViamVjdDxFdmVudD4oKTtcbiAgICBhdXRvUGlsb3QkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIC8vIEBWaWV3Q2hpbGQoJ2J0bkYnLCB7IHN0YXRpYzogdHJ1ZSB9KSBidG5GOiBFbGVtZW50UmVmO1xuICAgIC8vIEBWaWV3Q2hpbGQoJ2J0bkwnLCB7IHN0YXRpYzogdHJ1ZSB9KSBidG5MOiBFbGVtZW50UmVmO1xuXG4gICAgbW92ZUNhcihzOiBJcm9ib3RTdGF0ZSk6YW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubXF0dC5jYWxsQXJlc3Qocy5hdXRvUGlsb3QgPT09IHRydWUgPyBjbWRFbnVtLkFVVE8gOiBzLmRpcmVjdGlvbiwgcy5zcGVlZC50b1N0cmluZygpKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoKSA9PiB7Y29uc29sZS5sb2coJ2FyZXN0IG9rJyl9LCAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAoZXJyKSA9PiBhbGVydChlcnIpXG4gICAgICAgICAgICApXG4gICAgfVxuXG4gICAgcm9ib3RDb21tYW5kcyQgPSBtZXJnZShcbiAgICAgICAgdGhpcy5idG5TJC5waXBlKCAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIG1hcChlID0+XG4gICAgICAgICAgICAgICAgKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AgfSlcbiAgICAgICAgICAgICkpLFxuICAgICAgICB0aGlzLmJ0bkYkLnBpcGUoXG4gICAgICAgICAgICAvLyB0YXAoZSA9PiBjb25zb2xlLmxvZyhlLmFjdGlvbikpLCAgICAgICAgICAgXG4gICAgICAgICAgICBtYXAoZSA9PiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBlLmFjdGlvbiA9PT0gJ3VwJyA/ICh7IGRpcmVjdGlvbjogY21kRW51bS5TVE9QIH0pIDogKHsgZGlyZWN0aW9uOiBjbWRFbnVtLkZPUldBUkQgfSlcbiAgICAgICAgICAgICkpLFxuICAgICAgICB0aGlzLmJ0bkIkLnBpcGUobWFwKGUgPT5cbiAgICAgICAgICAgIGUuYWN0aW9uID09PSAndXAnID8gKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AgfSkgOiAoeyBkaXJlY3Rpb246IGNtZEVudW0uQkFDSyB9KVxuICAgICAgICApKSxcbiAgICAgICAgdGhpcy5idG5MJC5waXBlKG1hcChlID0+XG4gICAgICAgICAgICBlLmFjdGlvbiA9PT0gJ3VwJyA/ICh7IGRpcmVjdGlvbjogY21kRW51bS5TVE9QIH0pIDogKHsgZGlyZWN0aW9uOiBjbWRFbnVtLkxFRlQgfSlcbiAgICAgICAgKSksXG4gICAgICAgIHRoaXMuYnRuUiQucGlwZShtYXAoZSA9PlxuICAgICAgICAgICAgZS5hY3Rpb24gPT09ICd1cCcgPyAoeyBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCB9KSA6ICh7IGRpcmVjdGlvbjogY21kRW51bS5SSUdIVCB9KVxuICAgICAgICApKSxcbiAgICAgICAgLy8gY2FyIHNwZWVkICgwLTI1NSlcbiAgICAgICAgdGhpcy5pbnB1dFNwZWVkJC5waXBlKFxuICAgICAgICAgICAgLy90YXAoY29uc29sZS5sb2cpLFxuICAgICAgICAgICAgLy8gdGFwKG4gPT4gY29uc29sZS5sb2coJ3NwZWVkOiAnICsgbikpKSxcbiAgICAgICAgICAgIGZpbHRlcihuID0+IG4gIT09IHVuZGVmaW5lZCksXG4gICAgICAgICAgICBpbnB1dFRvVmFsdWUoKSwgICAgICAgICAgIFxuICAgICAgICAgICAgbWFwKG4gPT4gKHsgc3BlZWQ6IG4gfSkpXG4gICAgICAgICksXG5cbiAgICAgICAgdGhpcy5kaXNUb1dhbGwkLnBpcGUoaW5wdXRUb1ZhbHVlKCksIG1hcChuID0+ICh7IGRpc1RvV2FsbDogbiB9KSkpLFxuICAgICAgICB0aGlzLmF1dG9QaWxvdCQucGlwZShcbiAgICAgICAgICAgIC8vIHRhcChuPT5jb25zb2xlLmxvZyhuLmFjdGlvbikpLFxuICAgICAgICAgICAgbWFwKG4gPT4gKHsgYXV0b1BpbG90OiBuIH0pKSlcbiAgICApXG5cbiAgICByb2JvdFN0YXRlJDogT2JzZXJ2YWJsZTxJcm9ib3RTdGF0ZT4gPSB0aGlzLnJvYm90Q29tbWFuZHMkXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgICAgc3RhcnRXaXRoKHRoaXMuaW5pdGlhbFJvYm90U3RhdGUpLFxuICAgICAgICAgICAgLy8gdG91Y2ggZXZlbnQgJ21vdmUnIGtlZXBzIGJlaW5nIGZpcmVkIGFzIGxvbmcgYXMgbm90IHJlbGVhc2luZy5cbiAgICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgICAgICBzY2FuKChzdGF0ZTogSXJvYm90U3RhdGUsIGNvbW1hbmQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHsgLi4uc3RhdGUsIC4uLmNvbW1hbmQgfSk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIC8vIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChwcmV2OiBJcm9ib3RTdGF0ZSwgY3VycjogSXJvYm90U3RhdGUpID0+IHByZXYuZGlyZWN0aW9uID09PSBjdXJyLmRpcmVjdGlvbiksXG4gICAgICAgICAgICBzaGFyZVJlcGxheSgxKVxuICAgICAgICApO1xuXG4gICAgZGlyZWN0aW9uJCA9IHRoaXMucm9ib3RTdGF0ZSQucGlwZShzZWxlY3REaXN0aW5jdFN0YXRlKCdkaXJlY3Rpb24nKSk7XG4gICAgbmF2TW9kZSQgPSB0aGlzLnJvYm90U3RhdGUkLnBpcGUoc2VsZWN0RGlzdGluY3RTdGF0ZSgnYXV0b1BpbG90JykpO1xuICAgIHNwZWVkJDpPYnNlcnZhYmxlPGFueT4gPSB0aGlzLnJvYm90U3RhdGUkLnBpcGUoc2VsZWN0RGlzdGluY3RTdGF0ZSgnc3BlZWQnKSApOyAgICBcblxuICAgIG5hdmlnYXRpb24kID0gY29tYmluZUxhdGVzdCh0aGlzLmRpcmVjdGlvbiQsIHRoaXMubmF2TW9kZSQsIHRoaXMuc3BlZWQkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICAgIC8vIHdpdGhMYXRlc3RGcm9tIHRha2VzIDIgb2JzJCwgaW4gdGhpcyBjYXNlIHdlIGlnbm9yZSAxc3Qgb25lKGRpcmVjdGlvbiQpLCBhbmQgdGFrZSBzdGF0ZSQgb25seVxuICAgICAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5yb2JvdFN0YXRlJCwgKF8sIHMpID0+IHMpLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0YXAoKHM6IElyb2JvdFN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocy5kaXJlY3Rpb24pXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ2FyKHMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAvLyByZXBsYWNlIHRhcCB3LyBleGhhdXN0TWFwIHNvIGFueSBjb21pbmcgZGlyZWN0aW9uIGV2ZW50IHdpbGwgYmUgaWdub3JlIGlmIG1vdmVDYXIgaXNuJ3QgY29tcGxldGVkLiBcbiAgICAgICAgICAgLy90YXAoIGNvbnNvbGUubG9nKCdzLmRpcmVjdGlvbicpICksXG4gICAgICAgICAgIC8vZXhoYXVzdE1hcCgocyk9PnRoaXMubW92ZUNhcihzKSlcbiAgICAgICAgKVxuICAgICAgICAgICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtcXR0OiBNcXR0UHJvdmlkZXIpIHtcbiAgICAgICAgLy8gdGhpcy5yb2JvdFN0YXRlJC5zdWJzY3JpYmUoY29uc29sZS5sb2cpO1xuICAgICAgICAvLyB0aGlzLmRpcmVjdGlvbiQuc3Vic2NyaWJlKGNvbnNvbGUubG9nKTtcbiAgICAgICAgdGhpcy5zcGVlZCRcbiAgICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDEwMDApKVxuICAgICAgICAuc3Vic2NyaWJlKGNvbnNvbGUubG9nKTtcbiAgICAgICAgLy8gKiogdGhpcyBjb25zb2xlLmxvZyBzaG93cyBldmVyeXRoaW5nIVxuICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb24kLnN1YnNjcmliZShjb25zb2xlLmxvZyk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIHRoaXMucm9ib3RDb21tYW5kcyQuc3Vic2NyaWJlKG4gPT4gY29uc29sZS5sb2cobikpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=