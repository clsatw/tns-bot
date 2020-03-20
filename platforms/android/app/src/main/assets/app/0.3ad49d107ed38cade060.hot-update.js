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
            /*
            if (res != 200 ) {
                console.log(res);
                dialogs.alert("Cannot connect to the car!").then(() => {
                    console.log("Dialog closed!");
                });
                // alert(res.message+res.id);
            }
            */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0VBQWdFO0FBQ29CO0FBQ0w7QUFDNEg7QUFFdkg7QUFFL0I7QUFHckQseUVBQXlFO0FBQ3pFLDZFQUE2RTtBQVM3RTtJQXVHSSx1QkFBb0IsSUFBa0I7UUFBdEMsaUJBZ0JDO1FBaEJtQixTQUFJLEdBQUosSUFBSSxDQUFjO1FBckd0QyxpQkFBWSxHQUFHLFVBQVUsQ0FBQztRQUMxQixzQkFBaUIsR0FBZ0I7WUFDN0IsU0FBUyxjQUFjO1lBQ3ZCLEtBQUssRUFBRSxFQUFFO1lBQ1QsU0FBUyxFQUFFLEVBQUU7WUFDYixTQUFTLEVBQUUsQ0FBQztTQUNmO1FBQ0QsZ0ZBQWdGO1FBQ2hGLGdEQUFnRDtRQUNoRCxVQUFLLEdBQUcsSUFBSSw0Q0FBTyxFQUF5QixDQUFDO1FBQzdDLFVBQUssR0FBRyxJQUFJLDRDQUFPLEVBQXlCLENBQUM7UUFDN0MsVUFBSyxHQUFHLElBQUksNENBQU8sRUFBeUIsQ0FBQztRQUM3QyxVQUFLLEdBQUcsSUFBSSw0Q0FBTyxFQUF5QixDQUFDO1FBQzdDLFVBQUssR0FBRyxJQUFJLDRDQUFPLEVBQXlCLENBQUM7UUFDN0MsZ0JBQVcsR0FBRyxJQUFJLDRDQUFPLEVBQVMsQ0FBQztRQUNuQyxlQUFVLEdBQUcsSUFBSSw0Q0FBTyxFQUFTLENBQUM7UUFDbEMsZUFBVSxHQUFHLElBQUksNENBQU8sRUFBTyxDQUFDO1FBVWhDLCtEQUErRDtRQUMvRCxtQkFBYyxHQUFHLGtEQUFLO1FBQ2xCLDZEQUE2RDtRQUM3RCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7UUFDWCxtQ0FBbUM7UUFDbkMsNkRBQU0sQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLE1BQU0sS0FBSyxNQUFNLEVBQW5CLENBQW1CLENBQUMsRUFDaEMsMERB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LEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUE4RkQsZ0NBQVEsR0FBUjtRQUNJLHNEQUFzRDtRQUN0RCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzdCLHdDQUF3QztJQUM1QyxDQUFDO0lBQ0QsbUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7Z0JBekJ5QixpRUFBWTs7SUF2RzdCLGFBQWE7UUFQekIsK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFNBQVMsRUFBRSxDQUFDLGlFQUFZLENBQUM7WUFFekIsMkRBQW9DOztTQUV2QyxDQUFDO3lDQXdHNEIsaUVBQVk7T0F2RzdCLGFBQWEsQ0FpSXpCO0lBQUQsb0JBQUM7Q0FBQTtBQWpJeUIiLCJmaWxlIjoiMC4zYWQ0OWQxMDdlZDM4Y2FkZTA2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiXHJcbmltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUsIG1lcmdlLCBjb21iaW5lTGF0ZXN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZXhoYXVzdE1hcCwgZGlzdGluY3RVbnRpbENoYW5nZWQsIHN0YXJ0V2l0aCwgc2NhbiwgbWFwLCBzaGFyZVJlcGxheSwgdGFwLCBmaWx0ZXIsIHdpdGhMYXRlc3RGcm9tLCBkZWJvdW5jZVRpbWUsIHRocm90dGxlVGltZSwgc2tpcFdoaWxlLCB0YWtlV2hpbGUsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgSXJvYm90U3RhdGUsIGNtZEVudW0gfSBmcm9tIFwiLi9tb2RlbHMvcm9ib3RTdGF0ZVwiO1xyXG5pbXBvcnQgeyBzZWxlY3REaXN0aW5jdFN0YXRlLCBpbnB1dFRvVmFsdWUgfSBmcm9tIFwiLi9vcGVyYXRvcnMvc2VsZWN0RGlzdGluY3RTdGF0ZVwiO1xyXG5pbXBvcnQgeyBUb3VjaEdlc3R1cmVFdmVudERhdGEgfSBmcm9tICd1aS9nZXN0dXJlcyc7XHJcbmltcG9ydCB7IE1xdHRQcm92aWRlciB9IGZyb20gJy4vcHJvdmlkZXJzL21xdHQvbXF0dCc7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5cclxuLy8gaW1wb3J0IHsgZ2V0RXZlbnRPckdlc3R1cmVOYW1lIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XHJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gICAgcHJvdmlkZXJzOiBbTXF0dFByb3ZpZGVyXSxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9ob21lLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBuYXZTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICAgIGVycm9yTWVzc2FnZSA9ICdXaWZpIOmBmeaOp+i7iic7XHJcbiAgICBpbml0aWFsUm9ib3RTdGF0ZTogSXJvYm90U3RhdGUgPSB7XHJcbiAgICAgICAgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AsXHJcbiAgICAgICAgc3BlZWQ6IDUwLFxyXG4gICAgICAgIGRpc1RvV2FsbDogMTAsXHJcbiAgICAgICAgYXV0b1BpbG90OiAwXHJcbiAgICB9XHJcbiAgICAvLyBsYXN0IGV2ZW50IGlzIGFsd2F5cyB1cCwgc28gdGhpcyBpcyBmaWx0ZXJlZCBieSBkaXN0aW5jdFVudGlsQ2hhbmdlIG9wZXJhdG9yLlxyXG4gICAgLy8gYnRuUyQgPSBuZXcgU3ViamVjdDxUb3VjaEdlc3R1cmVFdmVudERhdGE+KCk7XHJcbiAgICBidG5GJCA9IG5ldyBTdWJqZWN0PFRvdWNoR2VzdHVyZUV2ZW50RGF0YT4oKTtcclxuICAgIGJ0bkwkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xyXG4gICAgYnRuUiQgPSBuZXcgU3ViamVjdDxUb3VjaEdlc3R1cmVFdmVudERhdGE+KCk7XHJcbiAgICBidG5CJCA9IG5ldyBTdWJqZWN0PFRvdWNoR2VzdHVyZUV2ZW50RGF0YT4oKTtcclxuICAgIGJ0blMkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xyXG4gICAgaW5wdXRTcGVlZCQgPSBuZXcgU3ViamVjdDxFdmVudD4oKTtcclxuICAgIGRpc1RvV2FsbCQgPSBuZXcgU3ViamVjdDxFdmVudD4oKTtcclxuICAgIGF1dG9QaWxvdCQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgICAvLyBAVmlld0NoaWxkKCdidG5GJywgeyBzdGF0aWM6IHRydWUgfSkgYnRuRjogRWxlbWVudFJlZjtcclxuICAgIC8vIEBWaWV3Q2hpbGQoJ2J0bkwnLCB7IHN0YXRpYzogdHJ1ZSB9KSBidG5MOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIG1vdmVDYXIodG9waWM6c3RyaW5nLCBzOiBJcm9ib3RTdGF0ZSk6IGFueSB7XHJcbiAgICAgICAgLy8gaWYgbm8gcmV0dXJuIGhlcmUsIGl0IHdpbGwgZmlyZSBhbiBlcnJvciBhdCBydW50aW1lLiBkb24ndCBrbm93IHdoeT9cclxuICAgICAgICAvLyByZXR1cm4gdGhpcy5tcXR0LmNhbGxBcmVzdChzLmF1dG9QaWxvdCA9PT0gdHJ1ZSA/IGNtZEVudW0uQVVUTyA6IHMuZGlyZWN0aW9uLCBzLnNwZWVkLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dvaW5nIHRvIG1vdmUgY2FyIScpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1xdHQucHVibGlzaCh0b3BpYywgcyk7XHJcbiAgICB9XHJcbiAgICAvLyB3aGVuIHRhcCBvbiBidXR0b24sIHRoZXJlIGEgZG93biwgbWFueSBtb3ZlLi4uIGFuIHVwIGV2ZW50cy5cclxuICAgIHJvYm90Q29tbWFuZHMkID0gbWVyZ2UoXHJcbiAgICAgICAgLy8gdGhpcy5idG5TJC5waXBlKCBtYXAoZSA9PiAoeyBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCB9KSkpLFxyXG4gICAgICAgIHRoaXMuYnRuRiQucGlwZShcclxuICAgICAgICAgICAgLy8gZS5hY3Rpb246IG1vdmUsIGNhbmNlbCBkb3duLCB1cC5cclxuICAgICAgICAgICAgZmlsdGVyKGUgPT4gZS5hY3Rpb24gIT09ICdtb3ZlJyksXHJcbiAgICAgICAgICAgIG1hcCgoZTogVG91Y2hHZXN0dXJlRXZlbnREYXRhKSA9PiBlLmFjdGlvbiA9PT0gJ3VwJyA/ICh7IGRpcmVjdGlvbjogY21kRW51bS5TVE9QIH0pIDogKHsgZGlyZWN0aW9uOiBjbWRFbnVtLkZPUldBUkQgfSlcclxuICAgICAgICAgICAgKSksXHJcblxyXG4gICAgICAgIHRoaXMuYnRuQiQucGlwZShcclxuICAgICAgICAgICAgZmlsdGVyKGUgPT4gZS5hY3Rpb24gIT09ICdtb3ZlJyksXHJcbiAgICAgICAgICAgIG1hcCgoZTogVG91Y2hHZXN0dXJlRXZlbnREYXRhKSA9PiBlLmFjdGlvbiA9PT0gJ3VwJyA/ICh7IGRpcmVjdGlvbjogY21kRW51bS5TVE9QIH0pIDogKHsgZGlyZWN0aW9uOiBjbWRFbnVtLkJBQ0sgfSlcclxuICAgICAgICAgICAgKSksXHJcbiAgICAgICAgdGhpcy5idG5MJC5waXBlKFxyXG4gICAgICAgICAgICBmaWx0ZXIoZSA9PiBlLmFjdGlvbiAhPT0gJ21vdmUnKSxcclxuICAgICAgICAgICAgbWFwKGUgPT4gZS5hY3Rpb24gPT09ICd1cCcgPyAoeyBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCB9KSA6ICh7IGRpcmVjdGlvbjogY21kRW51bS5MRUZUIH0pXHJcbiAgICAgICAgICAgICkpLFxyXG4gICAgICAgIHRoaXMuYnRuUiQucGlwZShcclxuICAgICAgICAgICAgZmlsdGVyKGUgPT4gZS5hY3Rpb24gIT09ICdtb3ZlJyksXHJcbiAgICAgICAgICAgIG1hcChlID0+IGUuYWN0aW9uID09PSAndXAnID8gKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AgfSkgOiAoeyBkaXJlY3Rpb246IGNtZEVudW0uUklHSFQgfSlcclxuICAgICAgICAgICAgKSksXHJcbiAgICAgICAgLy8gY2FyIHNwZWVkICgwLTI1NSlcclxuICAgICAgICB0aGlzLmlucHV0U3BlZWQkLnBpcGUoXHJcbiAgICAgICAgICAgIC8vdGFwKGNvbnNvbGUubG9nKSxcclxuICAgICAgICAgICAgLy8gdGFwKG4gPT4gY29uc29sZS5sb2coJ3NwZWVkOiAnICsgbikpKSxcclxuICAgICAgICAgICAgZmlsdGVyKG4gPT4gbiAhPT0gdW5kZWZpbmVkKSxcclxuICAgICAgICAgICAgaW5wdXRUb1ZhbHVlKCksXHJcbiAgICAgICAgICAgIG1hcChuID0+ICh7IHNwZWVkOiBuIH0pKVxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIHRoaXMuZGlzVG9XYWxsJC5waXBlKGlucHV0VG9WYWx1ZSgpLCBtYXAobiA9PiAoeyBkaXNUb1dhbGw6IG4gfSkpKSxcclxuICAgICAgICB0aGlzLmF1dG9QaWxvdCQucGlwZShcclxuICAgICAgICAgICAgLy8gdGFwKG49PmNvbnNvbGUubG9nKG4uYWN0aW9uKSksXHJcbiAgICAgICAgICAgIG1hcChuID0+ICh7IGF1dG9QaWxvdDogbiA/IDEgOiAwIH0pKSlcclxuICAgICkucGlwZShcclxuICAgICAgICAvLyBkZWJvdW5jZVRpbWUoNTAwKVxyXG4gICAgKVxyXG5cclxuICAgIHJvYm90U3RhdGUkOiBPYnNlcnZhYmxlPElyb2JvdFN0YXRlPiA9IHRoaXMucm9ib3RDb21tYW5kcyRcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgc3RhcnRXaXRoKHRoaXMuaW5pdGlhbFJvYm90U3RhdGUpLFxyXG4gICAgICAgICAgICAvLyAqKiB0b3VjaCBldmVudCAnbW92ZScga2VlcHMgYmVpbmcgZmlyZWQgYXMgbG9uZyBhcyBub3QgcmVsZWFzaW5nLlxyXG5cclxuICAgICAgICAgICAgc2Nhbigoc3RhdGU6IElyb2JvdFN0YXRlLCBjb21tYW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHsgLi4uc3RhdGUsIC4uLmNvbW1hbmQgfSk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAvLyBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxyXG4gICAgICAgICAgICAvLyBkaXN0aW5jdFVudGlsQ2hhbmdlZCgocHJldjogSXJvYm90U3RhdGUsIGN1cnI6IElyb2JvdFN0YXRlKSA9PiBwcmV2LmRpcmVjdGlvbiA9PT0gY3Vyci5kaXJlY3Rpb24pLFxyXG4gICAgICAgICAgICBzaGFyZVJlcGxheSgxKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgZGlyZWN0aW9uJCA9IHRoaXMucm9ib3RTdGF0ZSQucGlwZShzZWxlY3REaXN0aW5jdFN0YXRlKCdkaXJlY3Rpb24nKSk7XHJcbiAgICBuYXZNb2RlJCA9IHRoaXMucm9ib3RTdGF0ZSQucGlwZShzZWxlY3REaXN0aW5jdFN0YXRlKCdhdXRvUGlsb3QnKSk7XHJcblxyXG4gICAgLy8gKiogZGlzY2FyZCBlbWl0dGVkIHZhbHVlcyB0aGF0IHRha2UgPCAxcyBjb3ogaW5wdXR2YWx1ZSBrZWVwcyBmaXJpbmcgd2hlbiBzbGlkaW5nIG9uIHNsaWRlci5cclxuICAgIHNwZWVkJDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5yb2JvdFN0YXRlJC5waXBlKHNlbGVjdERpc3RpbmN0U3RhdGUoJ3NwZWVkJykpLnBpcGUoZGVib3VuY2VUaW1lKDEwMDApKTtcclxuXHJcbiAgICBuYXZpZ2F0aW9uJCA9IGNvbWJpbmVMYXRlc3QodGhpcy5kaXJlY3Rpb24kLCB0aGlzLm5hdk1vZGUkLCB0aGlzLnNwZWVkJClcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgLy8gd2l0aExhdGVzdEZyb20gdGFrZXMgMiBvYnMkLCBpbiB0aGlzIGNhc2Ugd2UgaWdub3JlIDFzdCBvbmUoZGlyZWN0aW9uJCksIGFuZCB0YWtlIHN0YXRlJCBvbmx5XHJcbiAgICAgICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMucm9ib3RTdGF0ZSQsIChfLCBzKSA9PiBzKSxcclxuICAgICAgICAgICAgLyogICAgICAgICAgICBcclxuICAgICAgICAgICAgdGFwKChzOiBJcm9ib3RTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocy5kaXJlY3Rpb24pXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVDYXIocyk7XHJcbiAgICAgICAgICAgIH0pICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgdGFwIHcvIGV4aGF1c3RNYXAgc28gYW55IGNvbWluZyBkaXJlY3Rpb24gZXZlbnQgd2lsbCBiZSBpZ25vcmUgaWYgbW92ZUNhciBpc24ndCBjb21wbGV0ZWQuIFxyXG4gICAgICAgICAgICAvLyB0YXAoIGNvbnNvbGUubG9nKCdzLmRpcmVjdGlvbicpICksXHJcbiAgICAgICAgICAgIC8vIHRocm90dGxlVGltZSgxNTAwKSxcclxuICAgICAgICAgICAgZGVib3VuY2VUaW1lKDE1MDApLFxyXG4gICAgICAgICAgICAvLyBzd2l0Y2htYXAgaXMgb25seSBmb3Igc3dpdGNoaW5nIG9icyQgdG8gYW5vdGhlciBvYnMkLiB3aGVyZWFzIGluIGhlcmUgcyBpc24ndCBvYnMkXHJcbiAgICAgICAgICAgIG1hcCgoczogSXJvYm90U3RhdGUpID0+IHRoaXMubW92ZUNhcignbW92ZUNhcicsIHMpKVxyXG4gICAgICAgIClcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1xdHQ6IE1xdHRQcm92aWRlcikge1xyXG4gICAgICAgIC8vIHRoaXMucm9ib3RTdGF0ZSQuc3Vic2NyaWJlKGNvbnNvbGUubG9nKTtcclxuICAgICAgICAvLyB0aGlzLmRpcmVjdGlvbiQuc3Vic2NyaWJlKGNvbnNvbGUubG9nKTsgICAgICAgXHJcbiAgICAgICAgLy8gKiogdGhpcyBjb25zb2xlLmxvZyBzaG93cyBldmVyeXRoaW5nIVxyXG4gICAgICAgIHRoaXMubmF2U3Vic2NyaXB0aW9uID0gdGhpcy5uYXZpZ2F0aW9uJC5zdWJzY3JpYmUoKHJlczogbnVtYmVyKSA9PiB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIHNlZSBpZiBpbml0IGh0dHAgcmVxdWVzdCBzdWNjZXNzZnVsbHkuXHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgIGlmIChyZXMgIT0gMjAwICkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoXCJDYW5ub3QgY29ubmVjdCB0byB0aGUgY2FyIVwiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBhbGVydChyZXMubWVzc2FnZStyZXMuaWQpO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAqLyAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLnJvYm90Q29tbWFuZHMkLnN1YnNjcmliZShjb25zb2xlLmxvZyk7ICAgICAgICBcclxuICAgICAgICB0aGlzLnJvYm90U3RhdGUkLnN1YnNjcmliZSgpO1xyXG4gICAgICAgIC8vIHRoaXMubmF2TW9kZSQuc3Vic2NyaWJlKGNvbnNvbGUubG9nKTtcclxuICAgIH1cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubmF2U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==