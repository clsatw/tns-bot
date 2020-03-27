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
        this.devId = '';
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
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (e) { return e.action !== 'move'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) { return e.action === 'up' ? ({ direction: 0 /* STOP */ }) : ({ direction: 1 /* FORWARD */ }); })), this.btnB$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (e) { return e.action !== 'move'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) { return e.action === 'up' ? ({ direction: 0 /* STOP */ }) : ({ direction: 2 /* BACK */ }); })), this.btnL$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (e) { return e.action !== 'move'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) { return e.action === 'up' ? ({ direction: 0 /* STOP */ }) : ({ direction: 4 /* LEFT */ }); })), this.btnR$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (e) { return e.action !== 'move'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) { return e.action === 'up' ? ({ direction: 0 /* STOP */ }) : ({ direction: 3 /* RIGHT */ }); })), 
        // car speed (0-255)
        this.inputSpeed$.pipe(
        //tap(console.log),
        // tap(n => console.log('speed: ' + n))),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (n) { return n !== undefined; }), Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["inputToValue"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (n) { return ({ speed: n }); })), this.disToWall$.pipe(Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["inputToValue"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (n) { return ({ disToWall: n }); })), this.autoPilot$.pipe(
        // don't know how to send true or false in http request, so i use 0 and 1
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (n) { return ({ autoPilot: n ? 1 : 0 }); })));
        this.robotState$ = this.robotCommands$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(this.initialRobotState), 
        // ** touch event 'move' keeps being fired as long as not releasing.           
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(function (state, command) {
            return (__assign({}, state, command));
        }), 
        // distinctUntilChanged(),
        // distinctUntilChanged((prev: IrobotState, curr: IrobotState) => prev.direction === curr.direction),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
        this.navMode$ = this.robotState$.pipe(Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["selectDistinctState"])('autoPilot'));
        this.direction$ = this.robotState$.pipe(Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["selectDistinctState"])('direction'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.navMode$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (dir, nav) {
            return nav === 0;
        }));
        // ** discard emitted values that take < 1s coz inputvalue keeps firing when sliding on slider.
        this.speed$ = this.robotState$.pipe(Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["selectDistinctState"])('speed')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000));
        // any of the observables emits a vaule, group the latest change together
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
        // debounce is to prevent sneding stop right after direction cmd if slightly touch
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1500), 
        // switchmap is only for switching obs$ to another obs$. whereas in here s isn't obs$
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (s) { return _this.moveCar(s); }));
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
    HomeComponent.prototype.moveCar = function (s) {
        // if no return here, it will fire an error at runtime. don't know why?
        // return this.mqtt.callArest(s.autoPilot === true ? cmdEnum.AUTO : s.direction, s.speed.toString()) 
        return this.mqtt.publish('moveCar', this.devId, s);
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.robotCommands$.subscribe(console.log);  
        // start to receive commands  
        this.mqtt.sub('devId').subscribe(function (data) {
            _this.devId = data;
            // console.log('devId: ', this.devId);
            // dialogs.alert(this.devId);
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0VBQWdFO0FBQ29CO0FBQ0w7QUFDa0k7QUFFN0g7QUFFL0I7QUFHckQseUVBQXlFO0FBQ3pFLDZFQUE2RTtBQVM3RTtJQTBHSSx1QkFBb0IsSUFBa0I7UUFBdEMsaUJBZ0JDO1FBaEJtQixTQUFJLEdBQUosSUFBSSxDQUFjO1FBeEd0QyxpQkFBWSxHQUFHLFVBQVUsQ0FBQztRQUMxQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsc0JBQWlCLEdBQWdCO1lBQzdCLFNBQVMsY0FBYztZQUN2QixLQUFLLEVBQUUsRUFBRTtZQUNULFNBQVMsRUFBRSxFQUFFO1lBQ2IsU0FBUyxFQUFFLENBQUM7U0FDZjtRQUNELGdGQUFnRjtRQUNoRixnREFBZ0Q7UUFDaEQsVUFBSyxHQUFHLElBQUksNENBQU8sRUFBeUIsQ0FBQztRQUM3QyxVQUFLLEdBQUcsSUFBSSw0Q0FBTyxFQUF5QixDQUFDO1FBQzdDLFVBQUssR0FBRyxJQUFJLDRDQUFPLEVBQXlCLENBQUM7UUFDN0MsVUFBSyxHQUFHLElBQUksNENBQU8sRUFBeUIsQ0FBQztRQUM3QyxVQUFLLEdBQUcsSUFBSSw0Q0FBTyxFQUF5QixDQUFDO1FBQzdDLGdCQUFXLEdBQUcsSUFBSSw0Q0FBTyxFQUFTLENBQUM7UUFDbkMsZUFBVSxHQUFHLElBQUksNENBQU8sRUFBUyxDQUFDO1FBQ2xDLGVBQVUsR0FBRyxJQUFJLDRDQUFPLEVBQU8sQ0FBQztRQVNoQywrREFBK0Q7UUFDL0QsbUJBQWMsR0FBRyxrREFBSztRQUNsQiw2REFBNkQ7UUFDN0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO1FBQ1gsbUNBQW1DO1FBQ25DLDZEQUFNLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxNQUFNLEtBQUssTUFBTSxF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QUNOLENBQUM7SUF0R0QseURBQXlEO0lBQ3pELHlEQUF5RDtJQUV6RCwrQkFBTyxHQUFQLFVBQVEsQ0FBYztRQUNsQix1RUFBdUU7UUFDdkUscUdBQXFHO1FBQ3JHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQWlHRCxnQ0FBUSxHQUFSO1FBQUEsaUJBV0M7UUFWRyxnREFBZ0Q7UUFDaEQsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxjQUFJO1lBQ2pDLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLHNDQUFzQztZQUN0Qyw2QkFBNkI7UUFDakMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzdCLHdDQUF3QztJQUM1QyxDQUFDO0lBQ0QsbUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7Z0JBaEN5QixpRUFBWTs7SUExRzdCLGFBQWE7UUFQekIsK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFNBQVMsRUFBRSxDQUFDLGlFQUFZLENBQUM7WUFFekIsMkRBQW9DOztTQUV2QyxDQUFDO3lDQTJHNEIsaUVBQVk7T0ExRzdCLGFBQWEsQ0EySXpCO0lBQUQsb0JBQUM7Q0FBQTtBQTNJeUIiLCJmaWxlIjoiMC4wY2Q3MWRhNTIyNjg5YTk0NGY1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiXHJcbmltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUsIG1lcmdlLCBjb21iaW5lTGF0ZXN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZXhoYXVzdE1hcCwgZGlzdGluY3RVbnRpbENoYW5nZWQsIHN0YXJ0V2l0aCwgc2NhbiwgbWFwLCBzaGFyZVJlcGxheSwgdGFwLCBmaWx0ZXIsIHdpdGhMYXRlc3RGcm9tLCBkZWJvdW5jZVRpbWUsIHRocm90dGxlVGltZSwgc2tpcFdoaWxlLCB0YWtlV2hpbGUsIHN3aXRjaE1hcCwgbGFzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgSXJvYm90U3RhdGUsIGNtZEVudW0gfSBmcm9tIFwiLi9tb2RlbHMvcm9ib3RTdGF0ZVwiO1xyXG5pbXBvcnQgeyBzZWxlY3REaXN0aW5jdFN0YXRlLCBpbnB1dFRvVmFsdWUgfSBmcm9tIFwiLi9vcGVyYXRvcnMvc2VsZWN0RGlzdGluY3RTdGF0ZVwiO1xyXG5pbXBvcnQgeyBUb3VjaEdlc3R1cmVFdmVudERhdGEgfSBmcm9tICd1aS9nZXN0dXJlcyc7XHJcbmltcG9ydCB7IE1xdHRQcm92aWRlciB9IGZyb20gJy4vcHJvdmlkZXJzL21xdHQvbXF0dCc7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5cclxuLy8gaW1wb3J0IHsgZ2V0RXZlbnRPckdlc3R1cmVOYW1lIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XHJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gICAgcHJvdmlkZXJzOiBbTXF0dFByb3ZpZGVyXSxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9ob21lLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBuYXZTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICAgIGVycm9yTWVzc2FnZSA9ICdXaWZpIOmBmeaOp+i7iic7XHJcbiAgICBkZXZJZCA9ICcnO1xyXG4gICAgaW5pdGlhbFJvYm90U3RhdGU6IElyb2JvdFN0YXRlID0ge1xyXG4gICAgICAgIGRpcmVjdGlvbjogY21kRW51bS5TVE9QLFxyXG4gICAgICAgIHNwZWVkOiA1MCxcclxuICAgICAgICBkaXNUb1dhbGw6IDEwLFxyXG4gICAgICAgIGF1dG9QaWxvdDogMFxyXG4gICAgfVxyXG4gICAgLy8gbGFzdCBldmVudCBpcyBhbHdheXMgdXAsIHNvIHRoaXMgaXMgZmlsdGVyZWQgYnkgZGlzdGluY3RVbnRpbENoYW5nZSBvcGVyYXRvci5cclxuICAgIC8vIGJ0blMkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xyXG4gICAgYnRuRiQgPSBuZXcgU3ViamVjdDxUb3VjaEdlc3R1cmVFdmVudERhdGE+KCk7XHJcbiAgICBidG5MJCA9IG5ldyBTdWJqZWN0PFRvdWNoR2VzdHVyZUV2ZW50RGF0YT4oKTtcclxuICAgIGJ0blIkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xyXG4gICAgYnRuQiQgPSBuZXcgU3ViamVjdDxUb3VjaEdlc3R1cmVFdmVudERhdGE+KCk7XHJcbiAgICBidG5TJCA9IG5ldyBTdWJqZWN0PFRvdWNoR2VzdHVyZUV2ZW50RGF0YT4oKTtcclxuICAgIGlucHV0U3BlZWQkID0gbmV3IFN1YmplY3Q8RXZlbnQ+KCk7XHJcbiAgICBkaXNUb1dhbGwkID0gbmV3IFN1YmplY3Q8RXZlbnQ+KCk7XHJcbiAgICBhdXRvUGlsb3QkID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gICAgLy8gQFZpZXdDaGlsZCgnYnRuRicsIHsgc3RhdGljOiB0cnVlIH0pIGJ0bkY6IEVsZW1lbnRSZWY7XHJcbiAgICAvLyBAVmlld0NoaWxkKCdidG5MJywgeyBzdGF0aWM6IHRydWUgfSkgYnRuTDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBtb3ZlQ2FyKHM6IElyb2JvdFN0YXRlKTogYW55IHtcclxuICAgICAgICAvLyBpZiBubyByZXR1cm4gaGVyZSwgaXQgd2lsbCBmaXJlIGFuIGVycm9yIGF0IHJ1bnRpbWUuIGRvbid0IGtub3cgd2h5P1xyXG4gICAgICAgIC8vIHJldHVybiB0aGlzLm1xdHQuY2FsbEFyZXN0KHMuYXV0b1BpbG90ID09PSB0cnVlID8gY21kRW51bS5BVVRPIDogcy5kaXJlY3Rpb24sIHMuc3BlZWQudG9TdHJpbmcoKSkgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubXF0dC5wdWJsaXNoKCdtb3ZlQ2FyJywgdGhpcy5kZXZJZCwgcyk7XHJcbiAgICB9XHJcbiAgICAvLyB3aGVuIHRhcCBvbiBidXR0b24sIHRoZXJlIGEgZG93biwgbWFueSBtb3ZlLi4uIGFuIHVwIGV2ZW50cy5cclxuICAgIHJvYm90Q29tbWFuZHMkID0gbWVyZ2UoXHJcbiAgICAgICAgLy8gdGhpcy5idG5TJC5waXBlKCBtYXAoZSA9PiAoeyBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCB9KSkpLFxyXG4gICAgICAgIHRoaXMuYnRuRiQucGlwZShcclxuICAgICAgICAgICAgLy8gZS5hY3Rpb246IG1vdmUsIGNhbmNlbCBkb3duLCB1cC5cclxuICAgICAgICAgICAgZmlsdGVyKGUgPT4gZS5hY3Rpb24gIT09ICdtb3ZlJyksXHJcbiAgICAgICAgICAgIG1hcCgoZTogVG91Y2hHZXN0dXJlRXZlbnREYXRhKSA9PiBlLmFjdGlvbiA9PT0gJ3VwJyA/ICh7IGRpcmVjdGlvbjogY21kRW51bS5TVE9QIH0pIDogKHsgZGlyZWN0aW9uOiBjbWRFbnVtLkZPUldBUkQgfSlcclxuICAgICAgICAgICAgKSksXHJcblxyXG4gICAgICAgIHRoaXMuYnRuQiQucGlwZShcclxuICAgICAgICAgICAgZmlsdGVyKGUgPT4gZS5hY3Rpb24gIT09ICdtb3ZlJyksXHJcbiAgICAgICAgICAgIG1hcCgoZTogVG91Y2hHZXN0dXJlRXZlbnREYXRhKSA9PiBlLmFjdGlvbiA9PT0gJ3VwJyA/ICh7IGRpcmVjdGlvbjogY21kRW51bS5TVE9QIH0pIDogKHsgZGlyZWN0aW9uOiBjbWRFbnVtLkJBQ0sgfSlcclxuICAgICAgICAgICAgKSksXHJcbiAgICAgICAgdGhpcy5idG5MJC5waXBlKFxyXG4gICAgICAgICAgICBmaWx0ZXIoZSA9PiBlLmFjdGlvbiAhPT0gJ21vdmUnKSxcclxuICAgICAgICAgICAgbWFwKGUgPT4gZS5hY3Rpb24gPT09ICd1cCcgPyAoeyBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCB9KSA6ICh7IGRpcmVjdGlvbjogY21kRW51bS5MRUZUIH0pXHJcbiAgICAgICAgICAgICkpLFxyXG4gICAgICAgIHRoaXMuYnRuUiQucGlwZShcclxuICAgICAgICAgICAgZmlsdGVyKGUgPT4gZS5hY3Rpb24gIT09ICdtb3ZlJyksXHJcbiAgICAgICAgICAgIG1hcChlID0+IGUuYWN0aW9uID09PSAndXAnID8gKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AgfSkgOiAoeyBkaXJlY3Rpb246IGNtZEVudW0uUklHSFQgfSlcclxuICAgICAgICAgICAgKSksXHJcbiAgICAgICAgLy8gY2FyIHNwZWVkICgwLTI1NSlcclxuICAgICAgICB0aGlzLmlucHV0U3BlZWQkLnBpcGUoXHJcbiAgICAgICAgICAgIC8vdGFwKGNvbnNvbGUubG9nKSxcclxuICAgICAgICAgICAgLy8gdGFwKG4gPT4gY29uc29sZS5sb2coJ3NwZWVkOiAnICsgbikpKSxcclxuICAgICAgICAgICAgZmlsdGVyKG4gPT4gbiAhPT0gdW5kZWZpbmVkKSxcclxuICAgICAgICAgICAgaW5wdXRUb1ZhbHVlKCksXHJcbiAgICAgICAgICAgIG1hcChuID0+ICh7IHNwZWVkOiBuIH0pKVxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIHRoaXMuZGlzVG9XYWxsJC5waXBlKGlucHV0VG9WYWx1ZSgpLCBtYXAobiA9PiAoeyBkaXNUb1dhbGw6IG4gfSkpKSxcclxuICAgICAgICB0aGlzLmF1dG9QaWxvdCQucGlwZShcclxuICAgICAgICAgICAgLy8gZG9uJ3Qga25vdyBob3cgdG8gc2VuZCB0cnVlIG9yIGZhbHNlIGluIGh0dHAgcmVxdWVzdCwgc28gaSB1c2UgMCBhbmQgMVxyXG4gICAgICAgICAgICBtYXAobiA9PiAoeyBhdXRvUGlsb3Q6IG4gPyAxIDogMCB9KSkpXHJcbiAgICApXHJcblxyXG4gICAgcm9ib3RTdGF0ZSQ6IE9ic2VydmFibGU8SXJvYm90U3RhdGU+ID0gdGhpcy5yb2JvdENvbW1hbmRzJFxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICBzdGFydFdpdGgodGhpcy5pbml0aWFsUm9ib3RTdGF0ZSksXHJcbiAgICAgICAgICAgIC8vICoqIHRvdWNoIGV2ZW50ICdtb3ZlJyBrZWVwcyBiZWluZyBmaXJlZCBhcyBsb25nIGFzIG5vdCByZWxlYXNpbmcuICAgICAgICAgICBcclxuICAgICAgICAgICAgc2Nhbigoc3RhdGU6IElyb2JvdFN0YXRlLCBjb21tYW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHsgLi4uc3RhdGUsIC4uLmNvbW1hbmQgfSk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAvLyBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxyXG4gICAgICAgICAgICAvLyBkaXN0aW5jdFVudGlsQ2hhbmdlZCgocHJldjogSXJvYm90U3RhdGUsIGN1cnI6IElyb2JvdFN0YXRlKSA9PiBwcmV2LmRpcmVjdGlvbiA9PT0gY3Vyci5kaXJlY3Rpb24pLFxyXG4gICAgICAgICAgICBzaGFyZVJlcGxheSgxKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgbmF2TW9kZSQgPSB0aGlzLnJvYm90U3RhdGUkLnBpcGUoc2VsZWN0RGlzdGluY3RTdGF0ZSgnYXV0b1BpbG90JykpOyAgICBcclxuICAgIGRpcmVjdGlvbiQgPSB0aGlzLnJvYm90U3RhdGUkLnBpcGUoXHJcbiAgICAgICAgc2VsZWN0RGlzdGluY3RTdGF0ZSgnZGlyZWN0aW9uJyksXHJcbiAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5uYXZNb2RlJCksIFxyXG4gICAgICAgIGZpbHRlcigoZGlyLCBuYXYpPT57XHJcbiAgICAgICAgICAgIHJldHVybiBuYXYgPT09IDA7XHJcbiAgICAgICAgfSkpXHJcblxyXG4gICAgLy8gKiogZGlzY2FyZCBlbWl0dGVkIHZhbHVlcyB0aGF0IHRha2UgPCAxcyBjb3ogaW5wdXR2YWx1ZSBrZWVwcyBmaXJpbmcgd2hlbiBzbGlkaW5nIG9uIHNsaWRlci5cclxuICAgIHNwZWVkJDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5yb2JvdFN0YXRlJC5waXBlKHNlbGVjdERpc3RpbmN0U3RhdGUoJ3NwZWVkJykpLnBpcGUoZGVib3VuY2VUaW1lKDEwMDApKTtcclxuXHJcbiAgICAvLyBhbnkgb2YgdGhlIG9ic2VydmFibGVzIGVtaXRzIGEgdmF1bGUsIGdyb3VwIHRoZSBsYXRlc3QgY2hhbmdlIHRvZ2V0aGVyXHJcbiAgICBuYXZpZ2F0aW9uJCA9IGNvbWJpbmVMYXRlc3QodGhpcy5kaXJlY3Rpb24kLCB0aGlzLm5hdk1vZGUkLCB0aGlzLnNwZWVkJClcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgLy8gd2l0aExhdGVzdEZyb20gdGFrZXMgMiBvYnMkLCBpbiB0aGlzIGNhc2Ugd2UgaWdub3JlIDFzdCBvbmUoZGlyZWN0aW9uJCksIGFuZCB0YWtlIHN0YXRlJCBvbmx5XHJcbiAgICAgICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMucm9ib3RTdGF0ZSQsIChfLCBzKSA9PiBzKSxcclxuICAgICAgICAgICAgLyogICAgICAgICAgICBcclxuICAgICAgICAgICAgdGFwKChzOiBJcm9ib3RTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocy5kaXJlY3Rpb24pXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVDYXIocyk7XHJcbiAgICAgICAgICAgIH0pICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgdGFwIHcvIGV4aGF1c3RNYXAgc28gYW55IGNvbWluZyBkaXJlY3Rpb24gZXZlbnQgd2lsbCBiZSBpZ25vcmUgaWYgbW92ZUNhciBpc24ndCBjb21wbGV0ZWQuIFxyXG4gICAgICAgICAgICAvLyB0YXAoIGNvbnNvbGUubG9nKCdzLmRpcmVjdGlvbicpICksXHJcbiAgICAgICAgICAgIC8vIGRlYm91bmNlIGlzIHRvIHByZXZlbnQgc25lZGluZyBzdG9wIHJpZ2h0IGFmdGVyIGRpcmVjdGlvbiBjbWQgaWYgc2xpZ2h0bHkgdG91Y2hcclxuICAgICAgICAgICAgZGVib3VuY2VUaW1lKDE1MDApLFxyXG4gICAgICAgICAgICAvLyBzd2l0Y2htYXAgaXMgb25seSBmb3Igc3dpdGNoaW5nIG9icyQgdG8gYW5vdGhlciBvYnMkLiB3aGVyZWFzIGluIGhlcmUgcyBpc24ndCBvYnMkXHJcbiAgICAgICAgICAgIG1hcCgoczogSXJvYm90U3RhdGUpID0+IHRoaXMubW92ZUNhcihzKSlcclxuICAgICAgICApXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtcXR0OiBNcXR0UHJvdmlkZXIpIHtcclxuICAgICAgICAvLyB0aGlzLnJvYm90U3RhdGUkLnN1YnNjcmliZShjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgLy8gdGhpcy5kaXJlY3Rpb24kLnN1YnNjcmliZShjb25zb2xlLmxvZyk7ICAgICAgIFxyXG4gICAgICAgIC8vICoqIHRoaXMgY29uc29sZS5sb2cgc2hvd3MgZXZlcnl0aGluZyFcclxuICAgICAgICB0aGlzLm5hdlN1YnNjcmlwdGlvbiA9IHRoaXMubmF2aWdhdGlvbiQuc3Vic2NyaWJlKChyZXM6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAvLyBzZWUgaWYgaW5pdCBodHRwIHJlcXVlc3Qgc3VjY2Vzc2Z1bGx5LlxyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICBpZiAocmVzICE9IDIwMCApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KFwiQ2Fubm90IGNvbm5lY3QgdG8gdGhlIGNhciFcIikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gYWxlcnQocmVzLm1lc3NhZ2UrcmVzLmlkKTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRoaXMucm9ib3RDb21tYW5kcyQuc3Vic2NyaWJlKGNvbnNvbGUubG9nKTsgIFxyXG4gICAgICAgIC8vIHN0YXJ0IHRvIHJlY2VpdmUgY29tbWFuZHMgIFxyXG4gICAgICAgIHRoaXMubXF0dC5zdWIoJ2RldklkJykuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRldklkID0gZGF0YTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2RldklkOiAnLCB0aGlzLmRldklkKTtcclxuICAgICAgICAgICAgLy8gZGlhbG9ncy5hbGVydCh0aGlzLmRldklkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5yb2JvdFN0YXRlJC5zdWJzY3JpYmUoKTtcclxuICAgICAgICAvLyB0aGlzLm5hdk1vZGUkLnN1YnNjcmliZShjb25zb2xlLmxvZyk7XHJcbiAgICB9XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5hdlN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=