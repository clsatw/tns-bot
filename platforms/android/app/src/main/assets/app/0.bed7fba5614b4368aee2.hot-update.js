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
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("tns-core-modules/ui/dialogs");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_5__);
// import { ItemEventData } from "tns-core-modules/ui/list-view"






// import { getEventOrGestureName } from "tns-core-modules/ui/page/page";
// import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
var HomeComponent = /** @class */ (function () {
    function HomeComponent(mqtt) {
        var _this = this;
        this.mqtt = mqtt;
        this.errorMessage = 'Wifi 遙控車';
        this.initialRobotState = {
            direction: 0 /* STOP */,
            speed: 50,
            disToWall: 10,
            autoPilot: 0
        };
        // last event is always up, so this is filtered by distinctUntilChange operator.
        // btnS$ = new Subject<TouchGestureEventData>();
        this.btnF$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.btnL$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.btnR$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.btnB$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.btnS$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.inputSpeed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.disToWall$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.autoPilot$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // when tap on button, there a down, many move... an up events.
        this.robotCommands$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(
        // this.btnS$.pipe( map(e => ({ direction: cmdEnum.STOP }))),
        this.btnF$.pipe(
        // e.action: move, cancel down, up.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (e) { return e.action !== 'move'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) { return e.action === 'up' ? ({ direction: 0 /* STOP */ }) : ({ direction: 1 /* FORWARD */ }); })), this.btnB$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (e) { return e.action !== 'move'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) { return e.action === 'up' ? ({ direction: 0 /* STOP */ }) : ({ direction: 4 /* BACK */ }); })), this.btnL$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (e) { return e.action !== 'move'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) { return e.action === 'up' ? ({ direction: 0 /* STOP */ }) : ({ direction: 2 /* LEFT */ }); })), this.btnR$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (e) { return e.action !== 'move'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) { return e.action === 'up' ? ({ direction: 0 /* STOP */ }) : ({ direction: 3 /* RIGHT */ }); })), 
        // car speed (0-255)
        this.inputSpeed$.pipe(
        //tap(console.log),
        // tap(n => console.log('speed: ' + n))),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (n) { return n !== undefined; }), Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["inputToValue"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (n) { return ({ speed: n }); })), this.disToWall$.pipe(Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["inputToValue"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (n) { return ({ disToWall: n }); })), this.autoPilot$.pipe(
        // tap(n=>console.log(n.action)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (n) { return ({ autoPilot: n ? 1 : 0 }); }))).pipe(
        // debounceTime(500)
        );
        this.robotState$ = this.robotCommands$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(this.initialRobotState), 
        // ** touch event 'move' keeps being fired as long as not releasing.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(function (state, command) {
            return (__assign({}, state, command));
        }), 
        // distinctUntilChanged(),
        // distinctUntilChanged((prev: IrobotState, curr: IrobotState) => prev.direction === curr.direction),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
        this.direction$ = this.robotState$.pipe(Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["selectDistinctState"])('direction'));
        this.navMode$ = this.robotState$.pipe(Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["selectDistinctState"])('autoPilot'));
        // ** discard emitted values that take < 1s coz inputvalue keeps firing when sliding on slider.
        this.speed$ = this.robotState$.pipe(Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["selectDistinctState"])('speed')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000));
        this.navigation$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.direction$, this.navMode$, this.speed$)
            .pipe(
        // withLatestFrom takes 2 obs$, in this case we ignore 1st one(direction$), and take state$ only
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.robotState$, function (_, s) { return s; }), 
        /*
        tap((s: IrobotState) => {
            // console.log(s.direction)
            this.moveCar(s);
        })
        */
        // replace tap w/ exhaustMap so any coming direction event will be ignore if moveCar isn't completed. 
        // tap( console.log('s.direction') ),
        // throttleTime(1500),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1500), 
        // switchmap is only for switching obs$ to another obs$. whereas in here s isn't obs$
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (s) { return _this.moveCar('moveCar', s); }));
        // this.robotState$.subscribe(console.log);
        // this.direction$.subscribe(console.log);       
        // ** this console.log shows everything!
        this.navSubscription = this.navigation$.subscribe(function (res) {
            // see if init http request successfully.
            if (res != 200) {
                console.log(res);
                tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_5__["alert"]("Cannot connect to the car!").then(function () {
                    console.log("Dialog closed!");
                });
                // alert(res.message+res.id);
            }
        });
    }
    // @ViewChild('btnF', { static: true }) btnF: ElementRef;
    // @ViewChild('btnL', { static: true }) btnL: ElementRef;
    HomeComponent.prototype.moveCar = function (topic, s) {
        // if no return here, it will fire an error at runtime. don't know why?
        // return this.mqtt.callArest(s.autoPilot === true ? cmdEnum.AUTO : s.direction, s.speed.toString())
        console.log('going to move car!');
        return this.mqtt.publish(topic, s);
    };
    HomeComponent.prototype.ngOnInit = function () {
        // this.robotCommands$.subscribe(console.log);        
        this.robotState$.subscribe();
        // this.navMode$.subscribe(console.log);
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.navSubscription.unsubscribe();
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _providers_mqtt_mqtt__WEBPACK_IMPORTED_MODULE_4__["MqttProvider"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            providers: [_providers_mqtt_mqtt__WEBPACK_IMPORTED_MODULE_4__["MqttProvider"]],
            template: __webpack_require__("./home/home.component.html"),
            styles: [__webpack_require__("./home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_providers_mqtt_mqtt__WEBPACK_IMPORTED_MODULE_4__["MqttProvider"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdFQUFnRTtBQUNvQjtBQUNMO0FBQzRIO0FBRXZIO0FBRS9CO0FBQ0U7QUFFdkQseUVBQXlFO0FBQ3pFLDZFQUE2RTtBQVM3RTtJQXVHSSx1QkFBb0IsSUFBa0I7UUFBdEMsaUJBY0M7UUFkbUIsU0FBSSxHQUFKLElBQUksQ0FBYztRQXJHdEMsaUJBQVksR0FBRyxVQUFVLENBQUM7UUFDMUIsc0JBQWlCLEdBQWdCO1lBQzdCLFNBQVMsY0FBYztZQUN2QixLQUFLLEVBQUUsRUFBRTtZQUNULFNBQVMsRUFBRSxFQUFFO1lBQ2IsU0FBUyxFQUFFLENBQUM7U0FDZjtRQUNELGdGQUFnRjtRQUNoRixnREFBZ0Q7UUFDaEQsVUFBSyxHQUFHLElBQUksNENBQU8sRUFBeUIsQ0FBQztRQUM3QyxVQUFLLEdBQUcsSUFBSSw0Q0FBTyxFQUF5QixDQUFDO1FBQzdDLFVBQUssR0FBRyxJQUFJLDRDQUFPLEVBQXlCLENBQUM7UUFDN0MsVUFBSyxHQUFHLElBQUksNENBQU8sRUFBeUIsQ0FBQztRQUM3QyxVQUFLLEdBQUcsSUFBSSw0Q0FBTyxFQUF5QixDQUFDO1FBQzdDLGdCQUFXLEdBQUcsSUFBSSw0Q0FBTyxFQUFTLENBQUM7UUFDbkMsZUFBVSxHQUFHLElBQUksNENBQU8sRUFBUyxDQUFDO1FBQ2xDLGVBQVUsR0FBRyxJQUFJLDRDQUFPLEVBQU8sQ0FBQztRQVVoQywrREFBK0Q7UUFDL0QsbUJBQWMsR0FBRyxrREFBSztRQUNsQiw2REFBNkQ7UUFDN0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO1FBQ1gsbUNBQW1DO1FBQ25DLDZEQUFNLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFuQixDQUFtQixD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R0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ2xDLENBQUMsQ0FBQyxDQUFDO2dCQUNILDZCQUE2QjthQUNoQztRQUNMLENBQUMsQ0FBQztJQUNOLENBQUM7SUFsR0QseURBQXlEO0lBQ3pELHlEQUF5RDtJQUV6RCwrQkFBTyxHQUFQLFVBQVEsS0FBWSxFQUFFLENBQWM7UUFDaEMsdUVBQXVFO1FBQ3ZFLG9HQUFvRztRQUNwRyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQTRGRCxnQ0FBUSxHQUFSO1FBQ0ksc0RBQXNEO1FBQ3RELElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDN0Isd0NBQXdDO0lBQzVDLENBQUM7SUFDRCxtQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDOztnQkF2QnlCLGlFQUFZOztJQXZHN0IsYUFBYTtRQVB6QiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsU0FBUyxFQUFFLENBQUMsaUVBQVksQ0FBQztZQUV6QiwyREFBb0M7O1NBRXZDLENBQUM7eUNBd0c0QixpRUFBWTtPQXZHN0IsYUFBYSxDQStIekI7SUFBRCxvQkFBQztDQUFBO0FBL0h5QiIsImZpbGUiOiIwLmJlZDdmYmE1NjE0YjQzNjhhZWUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCJcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSwgbWVyZ2UsIGNvbWJpbmVMYXRlc3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBleGhhdXN0TWFwLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc3RhcnRXaXRoLCBzY2FuLCBtYXAsIHNoYXJlUmVwbGF5LCB0YXAsIGZpbHRlciwgd2l0aExhdGVzdEZyb20sIGRlYm91bmNlVGltZSwgdGhyb3R0bGVUaW1lLCBza2lwV2hpbGUsIHRha2VXaGlsZSwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBJcm9ib3RTdGF0ZSwgY21kRW51bSB9IGZyb20gXCIuL21vZGVscy9yb2JvdFN0YXRlXCI7XHJcbmltcG9ydCB7IHNlbGVjdERpc3RpbmN0U3RhdGUsIGlucHV0VG9WYWx1ZSB9IGZyb20gXCIuL29wZXJhdG9ycy9zZWxlY3REaXN0aW5jdFN0YXRlXCI7XHJcbmltcG9ydCB7IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gJ3VpL2dlc3R1cmVzJztcclxuaW1wb3J0IHsgTXF0dFByb3ZpZGVyIH0gZnJvbSAnLi9wcm92aWRlcnMvbXF0dC9tcXR0JztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcblxyXG4vLyBpbXBvcnQgeyBnZXRFdmVudE9yR2VzdHVyZU5hbWUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICBwcm92aWRlcnM6IFtNcXR0UHJvdmlkZXJdLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIG5hdlN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gICAgZXJyb3JNZXNzYWdlID0gJ1dpZmkg6YGZ5o6n6LuKJztcclxuICAgIGluaXRpYWxSb2JvdFN0YXRlOiBJcm9ib3RTdGF0ZSA9IHtcclxuICAgICAgICBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCxcclxuICAgICAgICBzcGVlZDogNTAsXHJcbiAgICAgICAgZGlzVG9XYWxsOiAxMCxcclxuICAgICAgICBhdXRvUGlsb3Q6IDBcclxuICAgIH1cclxuICAgIC8vIGxhc3QgZXZlbnQgaXMgYWx3YXlzIHVwLCBzbyB0aGlzIGlzIGZpbHRlcmVkIGJ5IGRpc3RpbmN0VW50aWxDaGFuZ2Ugb3BlcmF0b3IuXHJcbiAgICAvLyBidG5TJCA9IG5ldyBTdWJqZWN0PFRvdWNoR2VzdHVyZUV2ZW50RGF0YT4oKTtcclxuICAgIGJ0bkYkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xyXG4gICAgYnRuTCQgPSBuZXcgU3ViamVjdDxUb3VjaEdlc3R1cmVFdmVudERhdGE+KCk7XHJcbiAgICBidG5SJCA9IG5ldyBTdWJqZWN0PFRvdWNoR2VzdHVyZUV2ZW50RGF0YT4oKTtcclxuICAgIGJ0bkIkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xyXG4gICAgYnRuUyQgPSBuZXcgU3ViamVjdDxUb3VjaEdlc3R1cmVFdmVudERhdGE+KCk7XHJcbiAgICBpbnB1dFNwZWVkJCA9IG5ldyBTdWJqZWN0PEV2ZW50PigpO1xyXG4gICAgZGlzVG9XYWxsJCA9IG5ldyBTdWJqZWN0PEV2ZW50PigpO1xyXG4gICAgYXV0b1BpbG90JCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICAgIC8vIEBWaWV3Q2hpbGQoJ2J0bkYnLCB7IHN0YXRpYzogdHJ1ZSB9KSBidG5GOiBFbGVtZW50UmVmO1xyXG4gICAgLy8gQFZpZXdDaGlsZCgnYnRuTCcsIHsgc3RhdGljOiB0cnVlIH0pIGJ0bkw6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgbW92ZUNhcih0b3BpYzpzdHJpbmcsIHM6IElyb2JvdFN0YXRlKTogYW55IHtcclxuICAgICAgICAvLyBpZiBubyByZXR1cm4gaGVyZSwgaXQgd2lsbCBmaXJlIGFuIGVycm9yIGF0IHJ1bnRpbWUuIGRvbid0IGtub3cgd2h5P1xyXG4gICAgICAgIC8vIHJldHVybiB0aGlzLm1xdHQuY2FsbEFyZXN0KHMuYXV0b1BpbG90ID09PSB0cnVlID8gY21kRW51bS5BVVRPIDogcy5kaXJlY3Rpb24sIHMuc3BlZWQudG9TdHJpbmcoKSlcclxuICAgICAgICBjb25zb2xlLmxvZygnZ29pbmcgdG8gbW92ZSBjYXIhJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubXF0dC5wdWJsaXNoKHRvcGljLCBzKTtcclxuICAgIH1cclxuICAgIC8vIHdoZW4gdGFwIG9uIGJ1dHRvbiwgdGhlcmUgYSBkb3duLCBtYW55IG1vdmUuLi4gYW4gdXAgZXZlbnRzLlxyXG4gICAgcm9ib3RDb21tYW5kcyQgPSBtZXJnZShcclxuICAgICAgICAvLyB0aGlzLmJ0blMkLnBpcGUoIG1hcChlID0+ICh7IGRpcmVjdGlvbjogY21kRW51bS5TVE9QIH0pKSksXHJcbiAgICAgICAgdGhpcy5idG5GJC5waXBlKFxyXG4gICAgICAgICAgICAvLyBlLmFjdGlvbjogbW92ZSwgY2FuY2VsIGRvd24sIHVwLlxyXG4gICAgICAgICAgICBmaWx0ZXIoZSA9PiBlLmFjdGlvbiAhPT0gJ21vdmUnKSxcclxuICAgICAgICAgICAgbWFwKChlOiBUb3VjaEdlc3R1cmVFdmVudERhdGEpID0+IGUuYWN0aW9uID09PSAndXAnID8gKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AgfSkgOiAoeyBkaXJlY3Rpb246IGNtZEVudW0uRk9SV0FSRCB9KVxyXG4gICAgICAgICAgICApKSxcclxuXHJcbiAgICAgICAgdGhpcy5idG5CJC5waXBlKFxyXG4gICAgICAgICAgICBmaWx0ZXIoZSA9PiBlLmFjdGlvbiAhPT0gJ21vdmUnKSxcclxuICAgICAgICAgICAgbWFwKChlOiBUb3VjaEdlc3R1cmVFdmVudERhdGEpID0+IGUuYWN0aW9uID09PSAndXAnID8gKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AgfSkgOiAoeyBkaXJlY3Rpb246IGNtZEVudW0uQkFDSyB9KVxyXG4gICAgICAgICAgICApKSxcclxuICAgICAgICB0aGlzLmJ0bkwkLnBpcGUoXHJcbiAgICAgICAgICAgIGZpbHRlcihlID0+IGUuYWN0aW9uICE9PSAnbW92ZScpLFxyXG4gICAgICAgICAgICBtYXAoZSA9PiBlLmFjdGlvbiA9PT0gJ3VwJyA/ICh7IGRpcmVjdGlvbjogY21kRW51bS5TVE9QIH0pIDogKHsgZGlyZWN0aW9uOiBjbWRFbnVtLkxFRlQgfSlcclxuICAgICAgICAgICAgKSksXHJcbiAgICAgICAgdGhpcy5idG5SJC5waXBlKFxyXG4gICAgICAgICAgICBmaWx0ZXIoZSA9PiBlLmFjdGlvbiAhPT0gJ21vdmUnKSxcclxuICAgICAgICAgICAgbWFwKGUgPT4gZS5hY3Rpb24gPT09ICd1cCcgPyAoeyBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCB9KSA6ICh7IGRpcmVjdGlvbjogY21kRW51bS5SSUdIVCB9KVxyXG4gICAgICAgICAgICApKSxcclxuICAgICAgICAvLyBjYXIgc3BlZWQgKDAtMjU1KVxyXG4gICAgICAgIHRoaXMuaW5wdXRTcGVlZCQucGlwZShcclxuICAgICAgICAgICAgLy90YXAoY29uc29sZS5sb2cpLFxyXG4gICAgICAgICAgICAvLyB0YXAobiA9PiBjb25zb2xlLmxvZygnc3BlZWQ6ICcgKyBuKSkpLFxyXG4gICAgICAgICAgICBmaWx0ZXIobiA9PiBuICE9PSB1bmRlZmluZWQpLFxyXG4gICAgICAgICAgICBpbnB1dFRvVmFsdWUoKSxcclxuICAgICAgICAgICAgbWFwKG4gPT4gKHsgc3BlZWQ6IG4gfSkpXHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgdGhpcy5kaXNUb1dhbGwkLnBpcGUoaW5wdXRUb1ZhbHVlKCksIG1hcChuID0+ICh7IGRpc1RvV2FsbDogbiB9KSkpLFxyXG4gICAgICAgIHRoaXMuYXV0b1BpbG90JC5waXBlKFxyXG4gICAgICAgICAgICAvLyB0YXAobj0+Y29uc29sZS5sb2cobi5hY3Rpb24pKSxcclxuICAgICAgICAgICAgbWFwKG4gPT4gKHsgYXV0b1BpbG90OiBuID8gMSA6IDAgfSkpKVxyXG4gICAgKS5waXBlKFxyXG4gICAgICAgIC8vIGRlYm91bmNlVGltZSg1MDApXHJcbiAgICApXHJcblxyXG4gICAgcm9ib3RTdGF0ZSQ6IE9ic2VydmFibGU8SXJvYm90U3RhdGU+ID0gdGhpcy5yb2JvdENvbW1hbmRzJFxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICBzdGFydFdpdGgodGhpcy5pbml0aWFsUm9ib3RTdGF0ZSksXHJcbiAgICAgICAgICAgIC8vICoqIHRvdWNoIGV2ZW50ICdtb3ZlJyBrZWVwcyBiZWluZyBmaXJlZCBhcyBsb25nIGFzIG5vdCByZWxlYXNpbmcuXHJcblxyXG4gICAgICAgICAgICBzY2FuKChzdGF0ZTogSXJvYm90U3RhdGUsIGNvbW1hbmQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoeyAuLi5zdGF0ZSwgLi4uY29tbWFuZCB9KTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIC8vIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgICAgICAgIC8vIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChwcmV2OiBJcm9ib3RTdGF0ZSwgY3VycjogSXJvYm90U3RhdGUpID0+IHByZXYuZGlyZWN0aW9uID09PSBjdXJyLmRpcmVjdGlvbiksXHJcbiAgICAgICAgICAgIHNoYXJlUmVwbGF5KDEpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICBkaXJlY3Rpb24kID0gdGhpcy5yb2JvdFN0YXRlJC5waXBlKHNlbGVjdERpc3RpbmN0U3RhdGUoJ2RpcmVjdGlvbicpKTtcclxuICAgIG5hdk1vZGUkID0gdGhpcy5yb2JvdFN0YXRlJC5waXBlKHNlbGVjdERpc3RpbmN0U3RhdGUoJ2F1dG9QaWxvdCcpKTtcclxuXHJcbiAgICAvLyAqKiBkaXNjYXJkIGVtaXR0ZWQgdmFsdWVzIHRoYXQgdGFrZSA8IDFzIGNveiBpbnB1dHZhbHVlIGtlZXBzIGZpcmluZyB3aGVuIHNsaWRpbmcgb24gc2xpZGVyLlxyXG4gICAgc3BlZWQkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLnJvYm90U3RhdGUkLnBpcGUoc2VsZWN0RGlzdGluY3RTdGF0ZSgnc3BlZWQnKSkucGlwZShkZWJvdW5jZVRpbWUoMTAwMCkpO1xyXG5cclxuICAgIG5hdmlnYXRpb24kID0gY29tYmluZUxhdGVzdCh0aGlzLmRpcmVjdGlvbiQsIHRoaXMubmF2TW9kZSQsIHRoaXMuc3BlZWQkKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAvLyB3aXRoTGF0ZXN0RnJvbSB0YWtlcyAyIG9icyQsIGluIHRoaXMgY2FzZSB3ZSBpZ25vcmUgMXN0IG9uZShkaXJlY3Rpb24kKSwgYW5kIHRha2Ugc3RhdGUkIG9ubHlcclxuICAgICAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5yb2JvdFN0YXRlJCwgKF8sIHMpID0+IHMpLFxyXG4gICAgICAgICAgICAvKiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0YXAoKHM6IElyb2JvdFN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzLmRpcmVjdGlvbilcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUNhcihzKTtcclxuICAgICAgICAgICAgfSkgICAgICAgICAgICBcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgLy8gcmVwbGFjZSB0YXAgdy8gZXhoYXVzdE1hcCBzbyBhbnkgY29taW5nIGRpcmVjdGlvbiBldmVudCB3aWxsIGJlIGlnbm9yZSBpZiBtb3ZlQ2FyIGlzbid0IGNvbXBsZXRlZC4gXHJcbiAgICAgICAgICAgIC8vIHRhcCggY29uc29sZS5sb2coJ3MuZGlyZWN0aW9uJykgKSxcclxuICAgICAgICAgICAgLy8gdGhyb3R0bGVUaW1lKDE1MDApLFxyXG4gICAgICAgICAgICBkZWJvdW5jZVRpbWUoMTUwMCksXHJcbiAgICAgICAgICAgIC8vIHN3aXRjaG1hcCBpcyBvbmx5IGZvciBzd2l0Y2hpbmcgb2JzJCB0byBhbm90aGVyIG9icyQuIHdoZXJlYXMgaW4gaGVyZSBzIGlzbid0IG9icyRcclxuICAgICAgICAgICAgbWFwKChzOiBJcm9ib3RTdGF0ZSkgPT4gdGhpcy5tb3ZlQ2FyKCdtb3ZlQ2FyJywgcykpXHJcbiAgICAgICAgKVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbXF0dDogTXF0dFByb3ZpZGVyKSB7XHJcbiAgICAgICAgLy8gdGhpcy5yb2JvdFN0YXRlJC5zdWJzY3JpYmUoY29uc29sZS5sb2cpO1xyXG4gICAgICAgIC8vIHRoaXMuZGlyZWN0aW9uJC5zdWJzY3JpYmUoY29uc29sZS5sb2cpOyAgICAgICBcclxuICAgICAgICAvLyAqKiB0aGlzIGNvbnNvbGUubG9nIHNob3dzIGV2ZXJ5dGhpbmchXHJcbiAgICAgICAgdGhpcy5uYXZTdWJzY3JpcHRpb24gPSB0aGlzLm5hdmlnYXRpb24kLnN1YnNjcmliZSgocmVzOiBudW1iZXIpID0+IHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gc2VlIGlmIGluaXQgaHR0cCByZXF1ZXN0IHN1Y2Nlc3NmdWxseS5cclxuICAgICAgICAgICAgaWYgKHJlcyAhPSAyMDAgKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydChcIkNhbm5vdCBjb25uZWN0IHRvIHRoZSBjYXIhXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KHJlcy5tZXNzYWdlK3Jlcy5pZCk7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRoaXMucm9ib3RDb21tYW5kcyQuc3Vic2NyaWJlKGNvbnNvbGUubG9nKTsgICAgICAgIFxyXG4gICAgICAgIHRoaXMucm9ib3RTdGF0ZSQuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgLy8gdGhpcy5uYXZNb2RlJC5zdWJzY3JpYmUoY29uc29sZS5sb2cpO1xyXG4gICAgfVxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5uYXZTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9