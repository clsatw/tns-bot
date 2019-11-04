(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./home/home.component.ts");



var routes = [
    { path: "", component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".home-panel{\n    vertical-align: center; \n    font-size: 20;\n    margin: 15;\n}\n\n.description-label{\n    margin-bottom: 15;\n}\n.btn {\n    margin:15px;\n    border-radius: 80;\n    background-color: lightgreen;\n    color: darkred;\n}\n\n.btn:pressed{\n    transform: scale(1.2, 1.2);\n    background-color: darkgreen;\n    color: lightpink;\n}\n\n.switch{\n    color: darkorange;\n    background-color: darkred;    \n}\n\nActionBar {\n    background-color:  #3C5AFD;\n    color: white;\n}\n"

/***/ }),

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<page>\n<ActionBar title=\"{{errorMessage}}\"></ActionBar>\n\n<ScrollView>\n    <StackLayout verticalAlignment='center' horizontalAlignment='center'>\n        <GridLayout columns='auto, auto, auto' rows='auto, auto, auto'>\n            <Button class='btn' (touch)=\"btnF$.next($event)\" text='Forward' row='0' col='1'></Button>\n            <Button class='btn' (touch)=\"btnL$.next($event)\" text='Left' row='1' col='0'></Button>\n            <ActivityIndicator row='1' col='1' [busy]='this.navMode$ | async' class=\"activity-indicator\">\n            </ActivityIndicator>\n            <Button  visibility=\"{{(this.navMode$|async)? 'collapse':'visible'}}\" class='btn' (touch)=\"btnS$.next($event)\" text='Stop' row='1' col='1'></Button>\n            <Button class='btn' (touch)=\"btnR$.next($event)\" text='Right' row='1' col='2'></Button>\n            <Button class='btn' (touch)=\"btnB$.next($event)\" text='Back' row='2' col='1'></Button>\n        </GridLayout>\n\n        <label></label>\n        <label textAlignment='center' textWrap='true' text='Max distance to wall' class='h3 description-label'></label>\n        <Slider (valueChange)=\"disToWall$.next($event)\" value=\"10\" minValue=\"10\" maxValue=\"200\">\n        </Slider>\n        <label textAlignment='center' textWrap='true' text='Speed' class='h3 description-label'></label>\n        <Slider (valueChange)=\"inputSpeed$.next($event)\" value=\"50\" minValue=\"10\" maxValue=\"255\"></Slider>\n        <label textAlignment='center' text='AutoPilot' textWrap='true'></label>\n        <Switch checked=\"false\" (checkedChange)=\"autoPilot$.next($event.value)\" class='switch'></Switch>\n    </StackLayout>\n</ScrollView>\n</page>"

/***/ }),

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
        this.errorMessage = 'Iot Self-Driving Car';
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
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (s) { return _this.moveCar(s); }));
        // this.robotState$.subscribe(console.log);
        // this.direction$.subscribe(console.log);       
        // ** this console.log shows everything!
        this.navSubscription = this.navigation$.subscribe(function (res) {
            if (res.connected === false) {
                console.dir(res);
                // alert(res.message+res.id);
            }
        });
    }
    // @ViewChild('btnF', { static: true }) btnF: ElementRef;
    // @ViewChild('btnL', { static: true }) btnL: ElementRef;
    HomeComponent.prototype.moveCar = function (s) {
        // if no return here, it will fire an error at runtime. don't know why?
        // return this.mqtt.callArest(s.autoPilot === true ? cmdEnum.AUTO : s.direction, s.speed.toString())
        return this.mqtt.callArest('moveCar', s);
    };
    HomeComponent.prototype.ngOnInit = function () {
        // this.robotCommands$.subscribe(console.log);        
        this.robotState$.subscribe(console.log);
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



/***/ }),

/***/ "./home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/forms");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./home/home.component.ts");
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("nativescript-angular/http-client");
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _providers_mqtt_mqtt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./home/providers/mqtt/mqtt.ts");







var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NativeScriptFormsModule"],
                nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_5__["NativeScriptHttpClientModule"],
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
            ],
            providers: [
                _providers_mqtt_mqtt__WEBPACK_IMPORTED_MODULE_6__["MqttProvider"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            // Currently the context is needed only for application style modules.
            const moduleContext = {};
            global.hmrRefresh(moduleContext);
        });
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./home/operators/selectDistinctState.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDistinctState", function() { return selectDistinctState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputToValue", function() { return inputToValue; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);


function selectDistinctState(key) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])(key), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
}
function inputToValue(defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (event) {
        var parsed = event ? parseInt(event.value, 10) : defaultValue;
        return (parsed === 0 || parsed) ? parsed : defaultValue;
    }));
}


/***/ }),

/***/ "./home/providers/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
// GET https://api.thingspeak.com/update?api_key=GU3T2CVVHXRZUWHQ&field1=0
var Config = /** @class */ (function () {
    function Config() {
    }
    // static apiUrl = "https://api.thingspeak.com/";
    // static apiKey = "GU3T2CVVHXRZUWHQ";
    Config.apiUrl = 'https://cloud.arest.io';
    Config.deviceId = '107929'; // the car's id registerd in arest website   
    return Config;
}());

// private apiKey = '1obqzch8x3e7e626';  
// private url = 'https://cloud.arest.io;'
// e.g., https://cloud.arest.io/${devId}/forward


/***/ }),

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./home/providers/config.ts");
/* This decorator denotes this class as a candidate for Angular’s dependency injection mechanism. For now just think of adding
** the @Injectable as a required convention for all services that you write
*/





var MqttProvider = /** @class */ (function () {
    function MqttProvider(http) {
        this.http = http;
    }
    // URLs are strings and all values in a URL are strings. When you see i=0 in a URL, 0 is a string.
    // When you see b=true, true is a string. When you see s=, the value is an empty string.
    MqttProvider.prototype.callArest = function (fnName, s) {
        var url = _config__WEBPACK_IMPORTED_MODULE_4__["Config"].apiUrl + "/" + _config__WEBPACK_IMPORTED_MODULE_4__["Config"].deviceId + "/" + fnName + "?params=" + s.speed.toString() + "," + s.disToWall.toString() + "," + s.direction.toString() + "," + s.autoPilot.toString();
        console.log(url);
        // this.msg = fnName; // for css
        // return this.http.get(`${Config.apiUrl}/${Config.deviceId}/${fnName}?key=${Config.apiKey}`)
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
        // return this.http.get(`${Config.apiUrl}update?api_key=${Config.apiKey}&field1=${fnName}`)
        //.pipe(
        // tap(console.log),
        //catchError(this.handleError)
        //)
    };
    /*
      callArest(fnName: string, speed: String): Observable<any> {
        const url = `${Config.apiUrl}/${Config.deviceId}/${fnName}?params=${speed}`;
        console.log(url);
        // this.msg = fnName; // for css
        // return this.http.get(`${Config.apiUrl}/${Config.deviceId}/${fnName}?key=${Config.apiKey}`)
        return this.http.get(url).pipe(
          catchError(this.handleError)
        );
        // return this.http.get(`${Config.apiUrl}update?api_key=${Config.apiKey}&field1=${fnName}`)
        //.pipe(
        // tap(console.log),
        //catchError(this.handleError)
        //)
      }
    
      callArestWithParam(fnName: string, speed: number, distToWall: number, delay: string) {
        
        // console.log('speed: ', speed);
        return this.http.get(`${this.url}/${this.device_id}/${fnName}?key=${this.apiKey}&params=${speed},${distToWall},${delay}`)
          .pipe(
            tap(console.log),
            catchError(this.handleError)
          )
          
      }
    */
    MqttProvider.prototype.handleError = function (error) {
        console.log('Handling error locally and rethrowing it...', JSON.stringify(error.json()));
        //return Observable.throw(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    };
    MqttProvider.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    MqttProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], MqttProvider);
    return MqttProvider;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9ob21lL29wZXJhdG9ycy9zZWxlY3REaXN0aW5jdFN0YXRlLnRzIiwid2VicGFjazovLy8uL2hvbWUvcHJvdmlkZXJzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9ob21lL3Byb3ZpZGVycy9tcXR0L21xdHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFdEI7QUFFakQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw2REFBYSxFQUFFO0NBQ3pDLENBQUM7QUFNRjtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBSjdCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGlCQUFpQixDQUFJO0lBQUQsd0JBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ2Q5Qiw4QkFBOEIsNkJBQTZCLHFCQUFxQixpQkFBaUIsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsUUFBUSxrQkFBa0Isd0JBQXdCLG1DQUFtQyxxQkFBcUIsR0FBRyxpQkFBaUIsaUNBQWlDLGtDQUFrQyx1QkFBdUIsR0FBRyxZQUFZLHdCQUF3QixnQ0FBZ0MsT0FBTyxlQUFlLGlDQUFpQyxtQkFBbUIsR0FBRyxHOzs7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U0FBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxTQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFJLENBQUM7UUFDdkssT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixnQ0FBZ0M7UUFDaEMsNkZBQTZGO1FBQzdGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUM1QixpRUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDN0IsQ0FBQztRQUNGLDJGQUEyRjtRQUMzRixRQUFRO1FBQ1Isb0JBQW9CO1FBQ3BCLDhCQUE4QjtRQUM5QixHQUFHO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQTBCRTtJQUVNLGtDQUFXLEdBQW5CLFVBQW9CLEtBQWU7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2Q0FBNkMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekYsaUNBQWlDO1FBQ2pDLE9BQU8sdURBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOztnQkFwRHlCLCtEQUFVOztJQUZ6QixZQUFZO1FBRHhCLGdFQUFVLEVBQUU7eUNBR2UsK0RBQVU7T0FGekIsWUFBWSxDQXdEeEI7SUFBRCxtQkFBQztDQUFBO0FBeER3QiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5ob21lLXBhbmVse1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyBcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgbWFyZ2luOiAxNTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWxhYmVse1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG59XFxuLmJ0biB7XFxuICAgIG1hcmdpbjoxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4MDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG4gICAgY29sb3I6IGRhcmtyZWQ7XFxufVxcblxcbi5idG46cHJlc3NlZHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcXG4gICAgY29sb3I6IGxpZ2h0cGluaztcXG59XFxuXFxuLnN3aXRjaHtcXG4gICAgY29sb3I6IGRhcmtvcmFuZ2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7ICAgIFxcbn1cXG5cXG5BY3Rpb25CYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzNDNUFGRDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8cGFnZT5cXG48QWN0aW9uQmFyIHRpdGxlPVxcXCJ7e2Vycm9yTWVzc2FnZX19XFxcIj48L0FjdGlvbkJhcj5cXG5cXG48U2Nyb2xsVmlldz5cXG4gICAgPFN0YWNrTGF5b3V0IHZlcnRpY2FsQWxpZ25tZW50PSdjZW50ZXInIGhvcml6b250YWxBbGlnbm1lbnQ9J2NlbnRlcic+XFxuICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPSdhdXRvLCBhdXRvLCBhdXRvJyByb3dzPSdhdXRvLCBhdXRvLCBhdXRvJz5cXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzPSdidG4nICh0b3VjaCk9XFxcImJ0bkYkLm5leHQoJGV2ZW50KVxcXCIgdGV4dD0nRm9yd2FyZCcgcm93PScwJyBjb2w9JzEnPjwvQnV0dG9uPlxcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9J2J0bicgKHRvdWNoKT1cXFwiYnRuTCQubmV4dCgkZXZlbnQpXFxcIiB0ZXh0PSdMZWZ0JyByb3c9JzEnIGNvbD0nMCc+PC9CdXR0b24+XFxuICAgICAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIHJvdz0nMScgY29sPScxJyBbYnVzeV09J3RoaXMubmF2TW9kZSQgfCBhc3luYycgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+XFxuICAgICAgICAgICAgPC9BY3Rpdml0eUluZGljYXRvcj5cXG4gICAgICAgICAgICA8QnV0dG9uICB2aXNpYmlsaXR5PVxcXCJ7eyh0aGlzLm5hdk1vZGUkfGFzeW5jKT8gJ2NvbGxhcHNlJzondmlzaWJsZSd9fVxcXCIgY2xhc3M9J2J0bicgKHRvdWNoKT1cXFwiYnRuUyQubmV4dCgkZXZlbnQpXFxcIiB0ZXh0PSdTdG9wJyByb3c9JzEnIGNvbD0nMSc+PC9CdXR0b24+XFxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz0nYnRuJyAodG91Y2gpPVxcXCJidG5SJC5uZXh0KCRldmVudClcXFwiIHRleHQ9J1JpZ2h0JyByb3c9JzEnIGNvbD0nMic+PC9CdXR0b24+XFxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz0nYnRuJyAodG91Y2gpPVxcXCJidG5CJC5uZXh0KCRldmVudClcXFwiIHRleHQ9J0JhY2snIHJvdz0nMicgY29sPScxJz48L0J1dHRvbj5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgIDxsYWJlbD48L2xhYmVsPlxcbiAgICAgICAgPGxhYmVsIHRleHRBbGlnbm1lbnQ9J2NlbnRlcicgdGV4dFdyYXA9J3RydWUnIHRleHQ9J01heCBkaXN0YW5jZSB0byB3YWxsJyBjbGFzcz0naDMgZGVzY3JpcHRpb24tbGFiZWwnPjwvbGFiZWw+XFxuICAgICAgICA8U2xpZGVyICh2YWx1ZUNoYW5nZSk9XFxcImRpc1RvV2FsbCQubmV4dCgkZXZlbnQpXFxcIiB2YWx1ZT1cXFwiMTBcXFwiIG1pblZhbHVlPVxcXCIxMFxcXCIgbWF4VmFsdWU9XFxcIjIwMFxcXCI+XFxuICAgICAgICA8L1NsaWRlcj5cXG4gICAgICAgIDxsYWJlbCB0ZXh0QWxpZ25tZW50PSdjZW50ZXInIHRleHRXcmFwPSd0cnVlJyB0ZXh0PSdTcGVlZCcgY2xhc3M9J2gzIGRlc2NyaXB0aW9uLWxhYmVsJz48L2xhYmVsPlxcbiAgICAgICAgPFNsaWRlciAodmFsdWVDaGFuZ2UpPVxcXCJpbnB1dFNwZWVkJC5uZXh0KCRldmVudClcXFwiIHZhbHVlPVxcXCI1MFxcXCIgbWluVmFsdWU9XFxcIjEwXFxcIiBtYXhWYWx1ZT1cXFwiMjU1XFxcIj48L1NsaWRlcj5cXG4gICAgICAgIDxsYWJlbCB0ZXh0QWxpZ25tZW50PSdjZW50ZXInIHRleHQ9J0F1dG9QaWxvdCcgdGV4dFdyYXA9J3RydWUnPjwvbGFiZWw+XFxuICAgICAgICA8U3dpdGNoIGNoZWNrZWQ9XFxcImZhbHNlXFxcIiAoY2hlY2tlZENoYW5nZSk9XFxcImF1dG9QaWxvdCQubmV4dCgkZXZlbnQudmFsdWUpXFxcIiBjbGFzcz0nc3dpdGNoJz48L1N3aXRjaD5cXG4gICAgPC9TdGFja0xheW91dD5cXG48L1Njcm9sbFZpZXc+XFxuPC9wYWdlPlwiIiwiLy8gaW1wb3J0IHsgSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiXG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSwgbWVyZ2UsIGNvbWJpbmVMYXRlc3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZXhoYXVzdE1hcCwgZGlzdGluY3RVbnRpbENoYW5nZWQsIHN0YXJ0V2l0aCwgc2NhbiwgbWFwLCBzaGFyZVJlcGxheSwgdGFwLCBmaWx0ZXIsIHdpdGhMYXRlc3RGcm9tLCBkZWJvdW5jZVRpbWUsIHRocm90dGxlVGltZSwgc2tpcFdoaWxlLCB0YWtlV2hpbGUsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElyb2JvdFN0YXRlLCBjbWRFbnVtIH0gZnJvbSBcIi4vbW9kZWxzL3JvYm90U3RhdGVcIjtcbmltcG9ydCB7IHNlbGVjdERpc3RpbmN0U3RhdGUsIGlucHV0VG9WYWx1ZSB9IGZyb20gXCIuL29wZXJhdG9ycy9zZWxlY3REaXN0aW5jdFN0YXRlXCI7XG5pbXBvcnQgeyBUb3VjaEdlc3R1cmVFdmVudERhdGEgfSBmcm9tICd1aS9nZXN0dXJlcyc7XG5pbXBvcnQgeyBNcXR0UHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9tcXR0L21xdHQnO1xuLy8gaW1wb3J0IHsgZ2V0RXZlbnRPckdlc3R1cmVOYW1lIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC9hbmd1bGFyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBwcm92aWRlcnM6IFtNcXR0UHJvdmlkZXJdLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XG4gICAgbmF2U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgZXJyb3JNZXNzYWdlID0gJ0lvdCBTZWxmLURyaXZpbmcgQ2FyJztcbiAgICBpbml0aWFsUm9ib3RTdGF0ZTogSXJvYm90U3RhdGUgPSB7XG4gICAgICAgIGRpcmVjdGlvbjogY21kRW51bS5TVE9QLFxuICAgICAgICBzcGVlZDogNTAsXG4gICAgICAgIGRpc1RvV2FsbDogMTAsXG4gICAgICAgIGF1dG9QaWxvdDogMFxuICAgIH1cbiAgICAvLyBsYXN0IGV2ZW50IGlzIGFsd2F5cyB1cCwgc28gdGhpcyBpcyBmaWx0ZXJlZCBieSBkaXN0aW5jdFVudGlsQ2hhbmdlIG9wZXJhdG9yLlxuICAgIC8vIGJ0blMkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xuICAgIGJ0bkYkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xuICAgIGJ0bkwkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xuICAgIGJ0blIkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xuICAgIGJ0bkIkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xuICAgIGJ0blMkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xuICAgIGlucHV0U3BlZWQkID0gbmV3IFN1YmplY3Q8RXZlbnQ+KCk7XG4gICAgZGlzVG9XYWxsJCA9IG5ldyBTdWJqZWN0PEV2ZW50PigpO1xuICAgIGF1dG9QaWxvdCQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgLy8gQFZpZXdDaGlsZCgnYnRuRicsIHsgc3RhdGljOiB0cnVlIH0pIGJ0bkY6IEVsZW1lbnRSZWY7XG4gICAgLy8gQFZpZXdDaGlsZCgnYnRuTCcsIHsgc3RhdGljOiB0cnVlIH0pIGJ0bkw6IEVsZW1lbnRSZWY7XG5cbiAgICBtb3ZlQ2FyKHM6SXJvYm90U3RhdGUpOmFueSB7XG4gICAgICAgIC8vIGlmIG5vIHJldHVybiBoZXJlLCBpdCB3aWxsIGZpcmUgYW4gZXJyb3IgYXQgcnVudGltZS4gZG9uJ3Qga25vdyB3aHk/XG4gICAgICAgIC8vIHJldHVybiB0aGlzLm1xdHQuY2FsbEFyZXN0KHMuYXV0b1BpbG90ID09PSB0cnVlID8gY21kRW51bS5BVVRPIDogcy5kaXJlY3Rpb24sIHMuc3BlZWQudG9TdHJpbmcoKSlcbiAgICAgICAgcmV0dXJuIHRoaXMubXF0dC5jYWxsQXJlc3QoJ21vdmVDYXInLCBzKTsgICBcbiAgICB9XG4gICAgLy8gd2hlbiB0YXAgb24gYnV0dG9uLCB0aGVyZSBhIGRvd24sIG1hbnkgbW92ZS4uLiBhbiB1cCBldmVudHMuXG4gICAgcm9ib3RDb21tYW5kcyQgPSBtZXJnZShcbiAgICAgICAgLy8gdGhpcy5idG5TJC5waXBlKCBtYXAoZSA9PiAoeyBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCB9KSkpLFxuICAgICAgICB0aGlzLmJ0bkYkLnBpcGUoXG4gICAgICAgICAgICAvLyBlLmFjdGlvbjogbW92ZSwgY2FuY2VsIGRvd24sIHVwLlxuICAgICAgICAgICAgZmlsdGVyKGUgPT4gZS5hY3Rpb24gIT09ICdtb3ZlJyksXG4gICAgICAgICAgICBtYXAoKGU6IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSkgPT4gZS5hY3Rpb24gPT09ICd1cCcgPyAoeyBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCB9KSA6ICh7IGRpcmVjdGlvbjogY21kRW51bS5GT1JXQVJEIH0pXG4gICAgICAgICAgICApKSxcblxuICAgICAgICB0aGlzLmJ0bkIkLnBpcGUoXG4gICAgICAgICAgICBmaWx0ZXIoZSA9PiBlLmFjdGlvbiAhPT0gJ21vdmUnKSxcbiAgICAgICAgICAgIG1hcCgoZTogVG91Y2hHZXN0dXJlRXZlbnREYXRhKSA9PiBlLmFjdGlvbiA9PT0gJ3VwJyA/ICh7IGRpcmVjdGlvbjogY21kRW51bS5TVE9QIH0pIDogKHsgZGlyZWN0aW9uOiBjbWRFbnVtLkJBQ0sgfSlcbiAgICAgICAgICAgICkpLFxuICAgICAgICB0aGlzLmJ0bkwkLnBpcGUoXG4gICAgICAgICAgICBmaWx0ZXIoZSA9PiBlLmFjdGlvbiAhPT0gJ21vdmUnKSxcbiAgICAgICAgICAgIG1hcChlID0+IGUuYWN0aW9uID09PSAndXAnID8gKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AgfSkgOiAoeyBkaXJlY3Rpb246IGNtZEVudW0uTEVGVCB9KVxuICAgICAgICAgICAgKSksXG4gICAgICAgIHRoaXMuYnRuUiQucGlwZShcbiAgICAgICAgICAgIGZpbHRlcihlID0+IGUuYWN0aW9uICE9PSAnbW92ZScpLFxuICAgICAgICAgICAgbWFwKGUgPT4gZS5hY3Rpb24gPT09ICd1cCcgPyAoeyBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCB9KSA6ICh7IGRpcmVjdGlvbjogY21kRW51bS5SSUdIVCB9KVxuICAgICAgICAgICAgKSksXG4gICAgICAgIC8vIGNhciBzcGVlZCAoMC0yNTUpXG4gICAgICAgIHRoaXMuaW5wdXRTcGVlZCQucGlwZShcbiAgICAgICAgICAgIC8vdGFwKGNvbnNvbGUubG9nKSxcbiAgICAgICAgICAgIC8vIHRhcChuID0+IGNvbnNvbGUubG9nKCdzcGVlZDogJyArIG4pKSksXG4gICAgICAgICAgICBmaWx0ZXIobiA9PiBuICE9PSB1bmRlZmluZWQpLFxuICAgICAgICAgICAgaW5wdXRUb1ZhbHVlKCksXG4gICAgICAgICAgICBtYXAobiA9PiAoeyBzcGVlZDogbiB9KSlcbiAgICAgICAgKSxcblxuICAgICAgICB0aGlzLmRpc1RvV2FsbCQucGlwZShpbnB1dFRvVmFsdWUoKSwgbWFwKG4gPT4gKHsgZGlzVG9XYWxsOiBuIH0pKSksXG4gICAgICAgIHRoaXMuYXV0b1BpbG90JC5waXBlKFxuICAgICAgICAgICAgLy8gdGFwKG49PmNvbnNvbGUubG9nKG4uYWN0aW9uKSksXG4gICAgICAgICAgICBtYXAobiA9PiAoeyBhdXRvUGlsb3Q6IG4/IDE6MCB9KSkpXG4gICAgKS5waXBlKFxuICAgICAgICAvLyBkZWJvdW5jZVRpbWUoNTAwKVxuICAgIClcblxuICAgIHJvYm90U3RhdGUkOiBPYnNlcnZhYmxlPElyb2JvdFN0YXRlPiA9IHRoaXMucm9ib3RDb21tYW5kcyRcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBzdGFydFdpdGgodGhpcy5pbml0aWFsUm9ib3RTdGF0ZSksXG4gICAgICAgICAgICAvLyAqKiB0b3VjaCBldmVudCAnbW92ZScga2VlcHMgYmVpbmcgZmlyZWQgYXMgbG9uZyBhcyBub3QgcmVsZWFzaW5nLlxuXG4gICAgICAgICAgICBzY2FuKChzdGF0ZTogSXJvYm90U3RhdGUsIGNvbW1hbmQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHsgLi4uc3RhdGUsIC4uLmNvbW1hbmQgfSk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIC8vIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgICAgICAvLyBkaXN0aW5jdFVudGlsQ2hhbmdlZCgocHJldjogSXJvYm90U3RhdGUsIGN1cnI6IElyb2JvdFN0YXRlKSA9PiBwcmV2LmRpcmVjdGlvbiA9PT0gY3Vyci5kaXJlY3Rpb24pLFxuICAgICAgICAgICAgc2hhcmVSZXBsYXkoMSlcbiAgICAgICAgKTtcblxuICAgIGRpcmVjdGlvbiQgPSB0aGlzLnJvYm90U3RhdGUkLnBpcGUoc2VsZWN0RGlzdGluY3RTdGF0ZSgnZGlyZWN0aW9uJykpO1xuICAgIG5hdk1vZGUkID0gdGhpcy5yb2JvdFN0YXRlJC5waXBlKHNlbGVjdERpc3RpbmN0U3RhdGUoJ2F1dG9QaWxvdCcpKTtcblxuICAgIC8vICoqIGRpc2NhcmQgZW1pdHRlZCB2YWx1ZXMgdGhhdCB0YWtlIDwgMXMgY296IGlucHV0dmFsdWUga2VlcHMgZmlyaW5nIHdoZW4gc2xpZGluZyBvbiBzbGlkZXIuXG4gICAgc3BlZWQkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLnJvYm90U3RhdGUkLnBpcGUoc2VsZWN0RGlzdGluY3RTdGF0ZSgnc3BlZWQnKSkucGlwZShkZWJvdW5jZVRpbWUoMTAwMCkpO1xuXG4gICAgbmF2aWdhdGlvbiQgPSBjb21iaW5lTGF0ZXN0KHRoaXMuZGlyZWN0aW9uJCwgdGhpcy5uYXZNb2RlJCwgdGhpcy5zcGVlZCQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgICAgLy8gd2l0aExhdGVzdEZyb20gdGFrZXMgMiBvYnMkLCBpbiB0aGlzIGNhc2Ugd2UgaWdub3JlIDFzdCBvbmUoZGlyZWN0aW9uJCksIGFuZCB0YWtlIHN0YXRlJCBvbmx5XG4gICAgICAgICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLnJvYm90U3RhdGUkLCAoXywgcykgPT4gcyksXG4gICAgICAgICAgICAvKiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGFwKChzOiBJcm9ib3RTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHMuZGlyZWN0aW9uKVxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUNhcihzKTtcbiAgICAgICAgICAgIH0pICAgICAgICAgICAgXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgLy8gcmVwbGFjZSB0YXAgdy8gZXhoYXVzdE1hcCBzbyBhbnkgY29taW5nIGRpcmVjdGlvbiBldmVudCB3aWxsIGJlIGlnbm9yZSBpZiBtb3ZlQ2FyIGlzbid0IGNvbXBsZXRlZC4gXG4gICAgICAgICAgICAvLyB0YXAoIGNvbnNvbGUubG9nKCdzLmRpcmVjdGlvbicpICksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKHM6IElyb2JvdFN0YXRlKSA9PiB0aGlzLm1vdmVDYXIocykpXG4gICAgICAgIClcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbXF0dDogTXF0dFByb3ZpZGVyKSB7XG4gICAgICAgIC8vIHRoaXMucm9ib3RTdGF0ZSQuc3Vic2NyaWJlKGNvbnNvbGUubG9nKTtcbiAgICAgICAgLy8gdGhpcy5kaXJlY3Rpb24kLnN1YnNjcmliZShjb25zb2xlLmxvZyk7ICAgICAgIFxuICAgICAgICAvLyAqKiB0aGlzIGNvbnNvbGUubG9nIHNob3dzIGV2ZXJ5dGhpbmchXG4gICAgICAgIHRoaXMubmF2U3Vic2NyaXB0aW9uID0gdGhpcy5uYXZpZ2F0aW9uJC5zdWJzY3JpYmUoKHJlczogYW55KT0+e1xuICAgICAgICAgICAgaWYgKHJlcy5jb25uZWN0ZWQ9PT1mYWxzZSl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kaXIocmVzKTtcbiAgICAgICAgICAgICAgICAvLyBhbGVydChyZXMubWVzc2FnZStyZXMuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyB0aGlzLnJvYm90Q29tbWFuZHMkLnN1YnNjcmliZShjb25zb2xlLmxvZyk7ICAgICAgICBcbiAgICAgICAgdGhpcy5yb2JvdFN0YXRlJC5zdWJzY3JpYmUoY29uc29sZS5sb2cpXG4gICAgICAgIC8vIHRoaXMubmF2TW9kZSQuc3Vic2NyaWJlKGNvbnNvbGUubG9nKTtcbiAgICB9XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMubmF2U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ob21lLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudCc7XG5pbXBvcnQgeyBNcXR0UHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9tcXR0L21xdHQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFsgICAgICAgXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgSG9tZVJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEhvbWVDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBNcXR0UHJvdmlkZXJcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IFVuYXJ5RnVuY3Rpb24sIHBpcGUsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgcGx1Y2ssIG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdERpc3RpbmN0U3RhdGU8VCwgST4oa2V5OiBzdHJpbmcpOiBVbmFyeUZ1bmN0aW9uPE9ic2VydmFibGU8VD4sIE9ic2VydmFibGU8ST4+IHtcclxuICAgIHJldHVybiBwaXBlKFxyXG4gICAgICAgIHBsdWNrPFQsIEk+KGtleSksXHJcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQ8ST4oKVxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlucHV0VG9WYWx1ZShkZWZhdWx0VmFsdWU6IG51bWJlciA9IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gcGlwZShcclxuICAgICAgICAgICAgbWFwKChldmVudDogYW55KTogbnVtYmVyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IGV2ZW50ID8gcGFyc2VJbnQoZXZlbnQudmFsdWUsIDEwKSA6IGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAocGFyc2VkID09PSAwIHx8IHBhcnNlZCkgPyBwYXJzZWQgOiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiIsIi8vIEdFVCBodHRwczovL2FwaS50aGluZ3NwZWFrLmNvbS91cGRhdGU/YXBpX2tleT1HVTNUMkNWVkhYUlpVV0hRJmZpZWxkMT0wXHJcbmV4cG9ydCBjbGFzcyBDb25maWcge1xyXG4gICAgLy8gc3RhdGljIGFwaVVybCA9IFwiaHR0cHM6Ly9hcGkudGhpbmdzcGVhay5jb20vXCI7XHJcbiAgICAvLyBzdGF0aWMgYXBpS2V5ID0gXCJHVTNUMkNWVkhYUlpVV0hRXCI7XHJcblxyXG4gICAgc3RhdGljIGFwaVVybCA9ICdodHRwczovL2Nsb3VkLmFyZXN0LmlvJzsgICAgXHJcbiAgICBzdGF0aWMgZGV2aWNlSWQgPSAnMTA3OTI5JzsgLy8gdGhlIGNhcidzIGlkIHJlZ2lzdGVyZCBpbiBhcmVzdCB3ZWJzaXRlICAgXHJcbiAgfVxyXG5cclxuICAvLyBwcml2YXRlIGFwaUtleSA9ICcxb2JxemNoOHgzZTdlNjI2JzsgIFxyXG4gIC8vIHByaXZhdGUgdXJsID0gJ2h0dHBzOi8vY2xvdWQuYXJlc3QuaW87J1xyXG4gIC8vIGUuZy4sIGh0dHBzOi8vY2xvdWQuYXJlc3QuaW8vJHtkZXZJZH0vZm9yd2FyZCIsIi8qIFRoaXMgZGVjb3JhdG9yIGRlbm90ZXMgdGhpcyBjbGFzcyBhcyBhIGNhbmRpZGF0ZSBmb3IgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gbWVjaGFuaXNtLiBGb3Igbm93IGp1c3QgdGhpbmsgb2YgYWRkaW5nXHJcbioqIHRoZSBASW5qZWN0YWJsZSBhcyBhIHJlcXVpcmVkIGNvbnZlbnRpb24gZm9yIGFsbCBzZXJ2aWNlcyB0aGF0IHlvdSB3cml0ZVxyXG4qL1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyB0YXAsIG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgeyBJcm9ib3RTdGF0ZSB9IGZyb20gJ34vaG9tZS9tb2RlbHMvcm9ib3RTdGF0ZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNcXR0UHJvdmlkZXIge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICB9XHJcbiAgXHJcbiAgLy8gVVJMcyBhcmUgc3RyaW5ncyBhbmQgYWxsIHZhbHVlcyBpbiBhIFVSTCBhcmUgc3RyaW5ncy4gV2hlbiB5b3Ugc2VlIGk9MCBpbiBhIFVSTCwgMCBpcyBhIHN0cmluZy5cclxuICAvLyBXaGVuIHlvdSBzZWUgYj10cnVlLCB0cnVlIGlzIGEgc3RyaW5nLiBXaGVuIHlvdSBzZWUgcz0sIHRoZSB2YWx1ZSBpcyBhbiBlbXB0eSBzdHJpbmcuXHJcbiAgY2FsbEFyZXN0KGZuTmFtZTogc3RyaW5nLCBzOklyb2JvdFN0YXRlKTogT2JzZXJ2YWJsZTxhbnk+IHsgICAgXHJcbiAgICBjb25zdCB1cmwgPSBgJHtDb25maWcuYXBpVXJsfS8ke0NvbmZpZy5kZXZpY2VJZH0vJHtmbk5hbWV9P3BhcmFtcz0ke3Muc3BlZWQudG9TdHJpbmcoKX0sJHtzLmRpc1RvV2FsbC50b1N0cmluZygpfSwke3MuZGlyZWN0aW9uLnRvU3RyaW5nKCl9LCR7cy5hdXRvUGlsb3QudG9TdHJpbmcoKX1gO1xyXG4gICAgY29uc29sZS5sb2codXJsKTtcclxuICAgIC8vIHRoaXMubXNnID0gZm5OYW1lOyAvLyBmb3IgY3NzXHJcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHtDb25maWcuYXBpVXJsfS8ke0NvbmZpZy5kZXZpY2VJZH0vJHtmbk5hbWV9P2tleT0ke0NvbmZpZy5hcGlLZXl9YClcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCkucGlwZShcclxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgKTtcclxuICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke0NvbmZpZy5hcGlVcmx9dXBkYXRlP2FwaV9rZXk9JHtDb25maWcuYXBpS2V5fSZmaWVsZDE9JHtmbk5hbWV9YClcclxuICAgIC8vLnBpcGUoXHJcbiAgICAvLyB0YXAoY29uc29sZS5sb2cpLFxyXG4gICAgLy9jYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICAvLylcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICBjYWxsQXJlc3QoZm5OYW1lOiBzdHJpbmcsIHNwZWVkOiBTdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICBjb25zdCB1cmwgPSBgJHtDb25maWcuYXBpVXJsfS8ke0NvbmZpZy5kZXZpY2VJZH0vJHtmbk5hbWV9P3BhcmFtcz0ke3NwZWVkfWA7XHJcbiAgICAgIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICAgIC8vIHRoaXMubXNnID0gZm5OYW1lOyAvLyBmb3IgY3NzXHJcbiAgICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke0NvbmZpZy5hcGlVcmx9LyR7Q29uZmlnLmRldmljZUlkfS8ke2ZuTmFtZX0/a2V5PSR7Q29uZmlnLmFwaUtleX1gKVxyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpLnBpcGUoXHJcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgICApO1xyXG4gICAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHtDb25maWcuYXBpVXJsfXVwZGF0ZT9hcGlfa2V5PSR7Q29uZmlnLmFwaUtleX0mZmllbGQxPSR7Zm5OYW1lfWApXHJcbiAgICAgIC8vLnBpcGUoXHJcbiAgICAgIC8vIHRhcChjb25zb2xlLmxvZyksXHJcbiAgICAgIC8vY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgICAvLylcclxuICAgIH1cclxuICBcclxuICAgIGNhbGxBcmVzdFdpdGhQYXJhbShmbk5hbWU6IHN0cmluZywgc3BlZWQ6IG51bWJlciwgZGlzdFRvV2FsbDogbnVtYmVyLCBkZWxheTogc3RyaW5nKSB7XHJcbiAgICAgIFxyXG4gICAgICAvLyBjb25zb2xlLmxvZygnc3BlZWQ6ICcsIHNwZWVkKTtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cmx9LyR7dGhpcy5kZXZpY2VfaWR9LyR7Zm5OYW1lfT9rZXk9JHt0aGlzLmFwaUtleX0mcGFyYW1zPSR7c3BlZWR9LCR7ZGlzdFRvV2FsbH0sJHtkZWxheX1gKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgdGFwKGNvbnNvbGUubG9nKSxcclxuICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcclxuICAgICAgICApXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgKi9cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgIGNvbnNvbGUubG9nKCdIYW5kbGluZyBlcnJvciBsb2NhbGx5IGFuZCByZXRocm93aW5nIGl0Li4uJywgSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XHJcbiAgICAvL3JldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcclxuICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=