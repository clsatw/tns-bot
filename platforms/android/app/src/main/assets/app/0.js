(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
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

module.exports = ".home-panel{\n    vertical-align: center; \n    font-size: 20;\n    margin: 15;\n}\n\n.description-label{\n    margin-bottom: 15;\n}\n.btn {\n    background-color: lightgreen;\n    color: darkred;\n}\n\n.btn:pressed{\n    transform: scale(1.2, 1.2);\n    background-color: darkgreen;\n    color: lightpink;\n}\n\n.switch{\n    color: darkorange;\n    background-color: darkred;\n    off-background-color: black;  \n}\n\nActionBar {\n    background-color:  #3C5AFD;\n    color: white;\n}"

/***/ }),

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<page>\n<ActionBar title=\"{{errorMessage}}\"></ActionBar>\n\n<ScrollView>\n    <StackLayout verticalAlignment='center' horizontalAlignment='center'>\n        <GridLayout columns='auto, auto, auto' rows='auto, auto, auto'>\n            w<Button class='btn' (touch)=\"btnF$.next($event)\" text='Forward' row='0' col='1'></Button>\n            <Button class='btn' (touch)=\"btnL$.next($event)\" text='Left' row='1' col='0'></Button>\n            <ActivityIndicator row='1' col='1' [busy]='this.navMode$ | async' class=\"activity-indicator\">\n            </ActivityIndicator>\n            <Button class='btn' (touch)=\"btnR$.next($event)\" text='Right' row='1' col='2'></Button>\n            <Button class='btn' (touch)=\"btnB$.next($event)\" text='Back' row='2' col='1'></Button>\n        </GridLayout>\n        <label></label>\n        <label textAlignment='center' textWrap='true' text='Max distance to wall' class='h3 description-label'></label>\n        <Slider (valueChange)=\"disToWall$.next($event)\" value=\"10\" minValue=\"10\" maxValue=\"200\">\n        </Slider>\n        <label textAlignment='center' textWrap='true' text='Speed' class='h3 description-label'></label>\n        <Slider (valueChange)=\"inputSpeed$.next($event)\" value=\"50\" minValue=\"10\" maxValue=\"255\"></Slider>\n        <label textAlignment='center' text='AutoPilot' textWrap='true'></label>\n        <Switch checked=\"false\" (checkedChange)=\"autoPilot$.next($event.value)\" class='switch'></Switch>\n    </StackLayout>\n</ScrollView>\n</page>"

/***/ }),

/***/ "./home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
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
            autoPilot: false
        };
        // last event is always up, so this is filtered by distinctUntilChange operator.
        // btnS$ = new Subject<TouchGestureEventData>();
        this.btnF$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.btnL$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.btnR$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.btnB$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
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
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (n) { return ({ autoPilot: n }); }))).pipe(
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
                // console.dir(res);
                alert(res.message + res.id);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./home/home.component.ts");
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-angular/http-client/index.js");
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9ob21lL29wZXJhdG9ycy9zZWxlY3REaXN0aW5jdFN0YXRlLnRzIiwid2VicGFjazovLy8uL2hvbWUvcHJvdmlkZXJzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9ob21lL3Byb3ZpZGVycy9tcXR0L21xdHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBRThCO0FBRXRCO0FBRWpELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsNkRBQWEsRUFBRTtDQUN6QyxDQUFDO0FBTUY7SUFBQTtJQUFpQyxDQUFDO0lBQXJCLGlCQUFpQjtRQUo3Qiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7QUNkOUIsOEJBQThCLDZCQUE2QixxQkFBcUIsaUJBQWlCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLFFBQVEsbUNBQW1DLHFCQUFxQixHQUFHLGlCQUFpQixpQ0FBaUMsa0NBQWtDLHVCQUF1QixHQUFHLFlBQVksd0JBQXdCLGdDQUFnQyxrQ0FBa0MsS0FBSyxlQUFlLGlDQUFpQyxtQkFBbUIsR0FBRyxDOzs7Ozs7O0FDQXhmLCtD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Z0NBQWdDO1FBQ2hDLDZGQUE2RjtRQUM3RixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDNUIsaUVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQzdCLENBQUM7UUFDRiwyRkFBMkY7UUFDM0YsUUFBUTtRQUNSLG9CQUFvQjtRQUNwQiw4QkFBOEI7UUFDOUIsR0FBRztJQUNMLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUEwQkU7SUFFTSxrQ0FBVyxHQUFuQixVQUFvQixLQUFlO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkNBQTZDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLGlDQUFpQztRQUNqQyxPQUFPLHVEQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Z0JBcER5QiwrREFBVTs7SUFGekIsWUFBWTtRQUR4QixnRUFBVSxFQUFFO3lDQUdlLCtEQUFVO09BRnpCLFlBQVksQ0F3RHhCO0lBQUQsbUJBQUM7Q0FBQTtBQXhEd0IiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuaG9tZS1wYW5lbHtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgXFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbjogMTU7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1sYWJlbHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxufVxcbi5idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbiAgICBjb2xvcjogZGFya3JlZDtcXG59XFxuXFxuLmJ0bjpwcmVzc2Vke1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwgMS4yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xcbiAgICBjb2xvcjogbGlnaHRwaW5rO1xcbn1cXG5cXG4uc3dpdGNoe1xcbiAgICBjb2xvcjogZGFya29yYW5nZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcXG4gICAgb2ZmLWJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAgXFxufVxcblxcbkFjdGlvbkJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjM0M1QUZEO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxwYWdlPlxcbjxBY3Rpb25CYXIgdGl0bGU9XFxcInt7ZXJyb3JNZXNzYWdlfX1cXFwiPjwvQWN0aW9uQmFyPlxcblxcbjxTY3JvbGxWaWV3PlxcbiAgICA8U3RhY2tMYXlvdXQgdmVydGljYWxBbGlnbm1lbnQ9J2NlbnRlcicgaG9yaXpvbnRhbEFsaWdubWVudD0nY2VudGVyJz5cXG4gICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9J2F1dG8sIGF1dG8sIGF1dG8nIHJvd3M9J2F1dG8sIGF1dG8sIGF1dG8nPlxcbiAgICAgICAgICAgIHc8QnV0dG9uIGNsYXNzPSdidG4nICh0b3VjaCk9XFxcImJ0bkYkLm5leHQoJGV2ZW50KVxcXCIgdGV4dD0nRm9yd2FyZCcgcm93PScwJyBjb2w9JzEnPjwvQnV0dG9uPlxcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9J2J0bicgKHRvdWNoKT1cXFwiYnRuTCQubmV4dCgkZXZlbnQpXFxcIiB0ZXh0PSdMZWZ0JyByb3c9JzEnIGNvbD0nMCc+PC9CdXR0b24+XFxuICAgICAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIHJvdz0nMScgY29sPScxJyBbYnVzeV09J3RoaXMubmF2TW9kZSQgfCBhc3luYycgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+XFxuICAgICAgICAgICAgPC9BY3Rpdml0eUluZGljYXRvcj5cXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzPSdidG4nICh0b3VjaCk9XFxcImJ0blIkLm5leHQoJGV2ZW50KVxcXCIgdGV4dD0nUmlnaHQnIHJvdz0nMScgY29sPScyJz48L0J1dHRvbj5cXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzPSdidG4nICh0b3VjaCk9XFxcImJ0bkIkLm5leHQoJGV2ZW50KVxcXCIgdGV4dD0nQmFjaycgcm93PScyJyBjb2w9JzEnPjwvQnV0dG9uPlxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgPGxhYmVsPjwvbGFiZWw+XFxuICAgICAgICA8bGFiZWwgdGV4dEFsaWdubWVudD0nY2VudGVyJyB0ZXh0V3JhcD0ndHJ1ZScgdGV4dD0nTWF4IGRpc3RhbmNlIHRvIHdhbGwnIGNsYXNzPSdoMyBkZXNjcmlwdGlvbi1sYWJlbCc+PC9sYWJlbD5cXG4gICAgICAgIDxTbGlkZXIgKHZhbHVlQ2hhbmdlKT1cXFwiZGlzVG9XYWxsJC5uZXh0KCRldmVudClcXFwiIHZhbHVlPVxcXCIxMFxcXCIgbWluVmFsdWU9XFxcIjEwXFxcIiBtYXhWYWx1ZT1cXFwiMjAwXFxcIj5cXG4gICAgICAgIDwvU2xpZGVyPlxcbiAgICAgICAgPGxhYmVsIHRleHRBbGlnbm1lbnQ9J2NlbnRlcicgdGV4dFdyYXA9J3RydWUnIHRleHQ9J1NwZWVkJyBjbGFzcz0naDMgZGVzY3JpcHRpb24tbGFiZWwnPjwvbGFiZWw+XFxuICAgICAgICA8U2xpZGVyICh2YWx1ZUNoYW5nZSk9XFxcImlucHV0U3BlZWQkLm5leHQoJGV2ZW50KVxcXCIgdmFsdWU9XFxcIjUwXFxcIiBtaW5WYWx1ZT1cXFwiMTBcXFwiIG1heFZhbHVlPVxcXCIyNTVcXFwiPjwvU2xpZGVyPlxcbiAgICAgICAgPGxhYmVsIHRleHRBbGlnbm1lbnQ9J2NlbnRlcicgdGV4dD0nQXV0b1BpbG90JyB0ZXh0V3JhcD0ndHJ1ZSc+PC9sYWJlbD5cXG4gICAgICAgIDxTd2l0Y2ggY2hlY2tlZD1cXFwiZmFsc2VcXFwiIChjaGVja2VkQ2hhbmdlKT1cXFwiYXV0b1BpbG90JC5uZXh0KCRldmVudC52YWx1ZSlcXFwiIGNsYXNzPSdzd2l0Y2gnPjwvU3dpdGNoPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbjwvU2Nyb2xsVmlldz5cXG48L3BhZ2U+XCIiLCIvLyBpbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCJcbmltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlLCBtZXJnZSwgY29tYmluZUxhdGVzdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBleGhhdXN0TWFwLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc3RhcnRXaXRoLCBzY2FuLCBtYXAsIHNoYXJlUmVwbGF5LCB0YXAsIGZpbHRlciwgd2l0aExhdGVzdEZyb20sIGRlYm91bmNlVGltZSwgdGhyb3R0bGVUaW1lLCBza2lwV2hpbGUsIHRha2VXaGlsZSwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSXJvYm90U3RhdGUsIGNtZEVudW0gfSBmcm9tIFwiLi9tb2RlbHMvcm9ib3RTdGF0ZVwiO1xuaW1wb3J0IHsgc2VsZWN0RGlzdGluY3RTdGF0ZSwgaW5wdXRUb1ZhbHVlIH0gZnJvbSBcIi4vb3BlcmF0b3JzL3NlbGVjdERpc3RpbmN0U3RhdGVcIjtcbmltcG9ydCB7IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gJ3VpL2dlc3R1cmVzJztcbmltcG9ydCB7IE1xdHRQcm92aWRlciB9IGZyb20gJy4vcHJvdmlkZXJzL21xdHQvbXF0dCc7XG4vLyBpbXBvcnQgeyBnZXRFdmVudE9yR2VzdHVyZU5hbWUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIHByb3ZpZGVyczogW01xdHRQcm92aWRlcl0sXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveXtcbiAgICBuYXZTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBlcnJvck1lc3NhZ2UgPSAnSW90IFNlbGYtRHJpdmluZyBDYXInO1xuICAgIGluaXRpYWxSb2JvdFN0YXRlOiBJcm9ib3RTdGF0ZSA9IHtcbiAgICAgICAgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AsXG4gICAgICAgIHNwZWVkOiA1MCxcbiAgICAgICAgZGlzVG9XYWxsOiAxMCxcbiAgICAgICAgYXV0b1BpbG90OiBmYWxzZVxuICAgIH1cbiAgICAvLyBsYXN0IGV2ZW50IGlzIGFsd2F5cyB1cCwgc28gdGhpcyBpcyBmaWx0ZXJlZCBieSBkaXN0aW5jdFVudGlsQ2hhbmdlIG9wZXJhdG9yLlxuICAgIC8vIGJ0blMkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xuICAgIGJ0bkYkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xuICAgIGJ0bkwkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xuICAgIGJ0blIkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xuICAgIGJ0bkIkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xuICAgIGlucHV0U3BlZWQkID0gbmV3IFN1YmplY3Q8RXZlbnQ+KCk7XG4gICAgZGlzVG9XYWxsJCA9IG5ldyBTdWJqZWN0PEV2ZW50PigpO1xuICAgIGF1dG9QaWxvdCQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgLy8gQFZpZXdDaGlsZCgnYnRuRicsIHsgc3RhdGljOiB0cnVlIH0pIGJ0bkY6IEVsZW1lbnRSZWY7XG4gICAgLy8gQFZpZXdDaGlsZCgnYnRuTCcsIHsgc3RhdGljOiB0cnVlIH0pIGJ0bkw6IEVsZW1lbnRSZWY7XG5cbiAgICBtb3ZlQ2FyKHM6SXJvYm90U3RhdGUpOmFueSB7XG4gICAgICAgIC8vIGlmIG5vIHJldHVybiBoZXJlLCBpdCB3aWxsIGZpcmUgYW4gZXJyb3IgYXQgcnVudGltZS4gZG9uJ3Qga25vdyB3aHk/XG4gICAgICAgIC8vIHJldHVybiB0aGlzLm1xdHQuY2FsbEFyZXN0KHMuYXV0b1BpbG90ID09PSB0cnVlID8gY21kRW51bS5BVVRPIDogcy5kaXJlY3Rpb24sIHMuc3BlZWQudG9TdHJpbmcoKSlcbiAgICAgICAgcmV0dXJuIHRoaXMubXF0dC5jYWxsQXJlc3QoJ21vdmVDYXInLCBzKTsgICBcbiAgICB9XG4gICAgLy8gd2hlbiB0YXAgb24gYnV0dG9uLCB0aGVyZSBhIGRvd24sIG1hbnkgbW92ZS4uLiBhbiB1cCBldmVudHMuXG4gICAgcm9ib3RDb21tYW5kcyQgPSBtZXJnZShcbiAgICAgICAgLy8gdGhpcy5idG5TJC5waXBlKCBtYXAoZSA9PiAoeyBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCB9KSkpLFxuICAgICAgICB0aGlzLmJ0bkYkLnBpcGUoXG4gICAgICAgICAgICAvLyBlLmFjdGlvbjogbW92ZSwgY2FuY2VsIGRvd24sIHVwLlxuICAgICAgICAgICAgZmlsdGVyKGUgPT4gZS5hY3Rpb24gIT09ICdtb3ZlJyksXG4gICAgICAgICAgICBtYXAoKGU6IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSkgPT4gZS5hY3Rpb24gPT09ICd1cCcgPyAoeyBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCB9KSA6ICh7IGRpcmVjdGlvbjogY21kRW51bS5GT1JXQVJEIH0pXG4gICAgICAgICAgICApKSxcblxuICAgICAgICB0aGlzLmJ0bkIkLnBpcGUoXG4gICAgICAgICAgICBmaWx0ZXIoZSA9PiBlLmFjdGlvbiAhPT0gJ21vdmUnKSxcbiAgICAgICAgICAgIG1hcCgoZTogVG91Y2hHZXN0dXJlRXZlbnREYXRhKSA9PiBlLmFjdGlvbiA9PT0gJ3VwJyA/ICh7IGRpcmVjdGlvbjogY21kRW51bS5TVE9QIH0pIDogKHsgZGlyZWN0aW9uOiBjbWRFbnVtLkJBQ0sgfSlcbiAgICAgICAgICAgICkpLFxuICAgICAgICB0aGlzLmJ0bkwkLnBpcGUoXG4gICAgICAgICAgICBmaWx0ZXIoZSA9PiBlLmFjdGlvbiAhPT0gJ21vdmUnKSxcbiAgICAgICAgICAgIG1hcChlID0+IGUuYWN0aW9uID09PSAndXAnID8gKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AgfSkgOiAoeyBkaXJlY3Rpb246IGNtZEVudW0uTEVGVCB9KVxuICAgICAgICAgICAgKSksXG4gICAgICAgIHRoaXMuYnRuUiQucGlwZShcbiAgICAgICAgICAgIGZpbHRlcihlID0+IGUuYWN0aW9uICE9PSAnbW92ZScpLFxuICAgICAgICAgICAgbWFwKGUgPT4gZS5hY3Rpb24gPT09ICd1cCcgPyAoeyBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCB9KSA6ICh7IGRpcmVjdGlvbjogY21kRW51bS5SSUdIVCB9KVxuICAgICAgICAgICAgKSksXG4gICAgICAgIC8vIGNhciBzcGVlZCAoMC0yNTUpXG4gICAgICAgIHRoaXMuaW5wdXRTcGVlZCQucGlwZShcbiAgICAgICAgICAgIC8vdGFwKGNvbnNvbGUubG9nKSxcbiAgICAgICAgICAgIC8vIHRhcChuID0+IGNvbnNvbGUubG9nKCdzcGVlZDogJyArIG4pKSksXG4gICAgICAgICAgICBmaWx0ZXIobiA9PiBuICE9PSB1bmRlZmluZWQpLFxuICAgICAgICAgICAgaW5wdXRUb1ZhbHVlKCksXG4gICAgICAgICAgICBtYXAobiA9PiAoeyBzcGVlZDogbiB9KSlcbiAgICAgICAgKSxcblxuICAgICAgICB0aGlzLmRpc1RvV2FsbCQucGlwZShpbnB1dFRvVmFsdWUoKSwgbWFwKG4gPT4gKHsgZGlzVG9XYWxsOiBuIH0pKSksXG4gICAgICAgIHRoaXMuYXV0b1BpbG90JC5waXBlKFxuICAgICAgICAgICAgLy8gdGFwKG49PmNvbnNvbGUubG9nKG4uYWN0aW9uKSksXG4gICAgICAgICAgICBtYXAobiA9PiAoeyBhdXRvUGlsb3Q6IG4gfSkpKVxuICAgICkucGlwZShcbiAgICAgICAgLy8gZGVib3VuY2VUaW1lKDUwMClcbiAgICApXG5cbiAgICByb2JvdFN0YXRlJDogT2JzZXJ2YWJsZTxJcm9ib3RTdGF0ZT4gPSB0aGlzLnJvYm90Q29tbWFuZHMkXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgICAgc3RhcnRXaXRoKHRoaXMuaW5pdGlhbFJvYm90U3RhdGUpLFxuICAgICAgICAgICAgLy8gKiogdG91Y2ggZXZlbnQgJ21vdmUnIGtlZXBzIGJlaW5nIGZpcmVkIGFzIGxvbmcgYXMgbm90IHJlbGVhc2luZy5cblxuICAgICAgICAgICAgc2Nhbigoc3RhdGU6IElyb2JvdFN0YXRlLCBjb21tYW5kKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh7IC4uLnN0YXRlLCAuLi5jb21tYW5kIH0pO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAvLyBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICAgICAgLy8gZGlzdGluY3RVbnRpbENoYW5nZWQoKHByZXY6IElyb2JvdFN0YXRlLCBjdXJyOiBJcm9ib3RTdGF0ZSkgPT4gcHJldi5kaXJlY3Rpb24gPT09IGN1cnIuZGlyZWN0aW9uKSxcbiAgICAgICAgICAgIHNoYXJlUmVwbGF5KDEpXG4gICAgICAgICk7XG5cbiAgICBkaXJlY3Rpb24kID0gdGhpcy5yb2JvdFN0YXRlJC5waXBlKHNlbGVjdERpc3RpbmN0U3RhdGUoJ2RpcmVjdGlvbicpKTtcbiAgICBuYXZNb2RlJCA9IHRoaXMucm9ib3RTdGF0ZSQucGlwZShzZWxlY3REaXN0aW5jdFN0YXRlKCdhdXRvUGlsb3QnKSk7XG5cbiAgICAvLyAqKiBkaXNjYXJkIGVtaXR0ZWQgdmFsdWVzIHRoYXQgdGFrZSA8IDFzIGNveiBpbnB1dHZhbHVlIGtlZXBzIGZpcmluZyB3aGVuIHNsaWRpbmcgb24gc2xpZGVyLlxuICAgIHNwZWVkJDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5yb2JvdFN0YXRlJC5waXBlKHNlbGVjdERpc3RpbmN0U3RhdGUoJ3NwZWVkJykpLnBpcGUoZGVib3VuY2VUaW1lKDEwMDApKTtcblxuICAgIG5hdmlnYXRpb24kID0gY29tYmluZUxhdGVzdCh0aGlzLmRpcmVjdGlvbiQsIHRoaXMubmF2TW9kZSQsIHRoaXMuc3BlZWQkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICAgIC8vIHdpdGhMYXRlc3RGcm9tIHRha2VzIDIgb2JzJCwgaW4gdGhpcyBjYXNlIHdlIGlnbm9yZSAxc3Qgb25lKGRpcmVjdGlvbiQpLCBhbmQgdGFrZSBzdGF0ZSQgb25seVxuICAgICAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5yb2JvdFN0YXRlJCwgKF8sIHMpID0+IHMpLFxuICAgICAgICAgICAgLyogICAgICAgICAgICBcbiAgICAgICAgICAgIHRhcCgoczogSXJvYm90U3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzLmRpcmVjdGlvbilcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVDYXIocyk7XG4gICAgICAgICAgICB9KSAgICAgICAgICAgIFxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIC8vIHJlcGxhY2UgdGFwIHcvIGV4aGF1c3RNYXAgc28gYW55IGNvbWluZyBkaXJlY3Rpb24gZXZlbnQgd2lsbCBiZSBpZ25vcmUgaWYgbW92ZUNhciBpc24ndCBjb21wbGV0ZWQuIFxuICAgICAgICAgICAgLy8gdGFwKCBjb25zb2xlLmxvZygncy5kaXJlY3Rpb24nKSApLFxuICAgICAgICAgICAgc3dpdGNoTWFwKChzOiBJcm9ib3RTdGF0ZSkgPT4gdGhpcy5tb3ZlQ2FyKHMpKVxuICAgICAgICApXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1xdHQ6IE1xdHRQcm92aWRlcikge1xuICAgICAgICAvLyB0aGlzLnJvYm90U3RhdGUkLnN1YnNjcmliZShjb25zb2xlLmxvZyk7XG4gICAgICAgIC8vIHRoaXMuZGlyZWN0aW9uJC5zdWJzY3JpYmUoY29uc29sZS5sb2cpOyAgICAgICBcbiAgICAgICAgLy8gKiogdGhpcyBjb25zb2xlLmxvZyBzaG93cyBldmVyeXRoaW5nIVxuICAgICAgICB0aGlzLm5hdlN1YnNjcmlwdGlvbiA9IHRoaXMubmF2aWdhdGlvbiQuc3Vic2NyaWJlKChyZXM6IGFueSk9PntcbiAgICAgICAgICAgIGlmIChyZXMuY29ubmVjdGVkPT09ZmFsc2Upe1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKHJlcyk7XG4gICAgICAgICAgICAgICAgYWxlcnQocmVzLm1lc3NhZ2UrcmVzLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhpcy5yb2JvdENvbW1hbmRzJC5zdWJzY3JpYmUoY29uc29sZS5sb2cpOyAgICAgICAgXG4gICAgICAgIHRoaXMucm9ib3RTdGF0ZSQuc3Vic2NyaWJlKGNvbnNvbGUubG9nKVxuICAgICAgICAvLyB0aGlzLm5hdk1vZGUkLnN1YnNjcmliZShjb25zb2xlLmxvZyk7XG4gICAgfVxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5hdlN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IEhvbWVSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vaG9tZS1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnQnO1xuaW1wb3J0IHsgTXF0dFByb3ZpZGVyIH0gZnJvbSAnLi9wcm92aWRlcnMvbXF0dC9tcXR0JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbICAgICAgIFxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIEhvbWVSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBIb21lQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgTXF0dFByb3ZpZGVyXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBVbmFyeUZ1bmN0aW9uLCBwaXBlLCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIHBsdWNrLCBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3REaXN0aW5jdFN0YXRlPFQsIEk+KGtleTogc3RyaW5nKTogVW5hcnlGdW5jdGlvbjxPYnNlcnZhYmxlPFQ+LCBPYnNlcnZhYmxlPEk+PiB7XHJcbiAgICByZXR1cm4gcGlwZShcclxuICAgICAgICBwbHVjazxULCBJPihrZXkpLFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkPEk+KClcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnB1dFRvVmFsdWUoZGVmYXVsdFZhbHVlOiBudW1iZXIgPSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHBpcGUoXHJcbiAgICAgICAgICAgIG1hcCgoZXZlbnQ6IGFueSk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBldmVudCA/IHBhcnNlSW50KGV2ZW50LnZhbHVlLCAxMCkgOiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHBhcnNlZCA9PT0gMCB8fCBwYXJzZWQpID8gcGFyc2VkIDogZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4iLCIvLyBHRVQgaHR0cHM6Ly9hcGkudGhpbmdzcGVhay5jb20vdXBkYXRlP2FwaV9rZXk9R1UzVDJDVlZIWFJaVVdIUSZmaWVsZDE9MFxyXG5leHBvcnQgY2xhc3MgQ29uZmlnIHtcclxuICAgIC8vIHN0YXRpYyBhcGlVcmwgPSBcImh0dHBzOi8vYXBpLnRoaW5nc3BlYWsuY29tL1wiO1xyXG4gICAgLy8gc3RhdGljIGFwaUtleSA9IFwiR1UzVDJDVlZIWFJaVVdIUVwiO1xyXG5cclxuICAgIHN0YXRpYyBhcGlVcmwgPSAnaHR0cHM6Ly9jbG91ZC5hcmVzdC5pbyc7ICAgIFxyXG4gICAgc3RhdGljIGRldmljZUlkID0gJzEwNzkyOSc7IC8vIHRoZSBjYXIncyBpZCByZWdpc3RlcmQgaW4gYXJlc3Qgd2Vic2l0ZSAgIFxyXG4gIH1cclxuXHJcbiAgLy8gcHJpdmF0ZSBhcGlLZXkgPSAnMW9icXpjaDh4M2U3ZTYyNic7ICBcclxuICAvLyBwcml2YXRlIHVybCA9ICdodHRwczovL2Nsb3VkLmFyZXN0LmlvOydcclxuICAvLyBlLmcuLCBodHRwczovL2Nsb3VkLmFyZXN0LmlvLyR7ZGV2SWR9L2ZvcndhcmQiLCIvKiBUaGlzIGRlY29yYXRvciBkZW5vdGVzIHRoaXMgY2xhc3MgYXMgYSBjYW5kaWRhdGUgZm9yIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIG1lY2hhbmlzbS4gRm9yIG5vdyBqdXN0IHRoaW5rIG9mIGFkZGluZ1xyXG4qKiB0aGUgQEluamVjdGFibGUgYXMgYSByZXF1aXJlZCBjb252ZW50aW9uIGZvciBhbGwgc2VydmljZXMgdGhhdCB5b3Ugd3JpdGVcclxuKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgdGFwLCBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHsgSXJvYm90U3RhdGUgfSBmcm9tICd+L2hvbWUvbW9kZWxzL3JvYm90U3RhdGUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTXF0dFByb3ZpZGVyIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFVSTHMgYXJlIHN0cmluZ3MgYW5kIGFsbCB2YWx1ZXMgaW4gYSBVUkwgYXJlIHN0cmluZ3MuIFdoZW4geW91IHNlZSBpPTAgaW4gYSBVUkwsIDAgaXMgYSBzdHJpbmcuXHJcbiAgLy8gV2hlbiB5b3Ugc2VlIGI9dHJ1ZSwgdHJ1ZSBpcyBhIHN0cmluZy4gV2hlbiB5b3Ugc2VlIHM9LCB0aGUgdmFsdWUgaXMgYW4gZW1wdHkgc3RyaW5nLlxyXG4gIGNhbGxBcmVzdChmbk5hbWU6IHN0cmluZywgczpJcm9ib3RTdGF0ZSk6IE9ic2VydmFibGU8YW55PiB7ICAgIFxyXG4gICAgY29uc3QgdXJsID0gYCR7Q29uZmlnLmFwaVVybH0vJHtDb25maWcuZGV2aWNlSWR9LyR7Zm5OYW1lfT9wYXJhbXM9JHtzLnNwZWVkLnRvU3RyaW5nKCl9LCR7cy5kaXNUb1dhbGwudG9TdHJpbmcoKX0sJHtzLmRpcmVjdGlvbi50b1N0cmluZygpfSwke3MuYXV0b1BpbG90LnRvU3RyaW5nKCl9YDtcclxuICAgIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICAvLyB0aGlzLm1zZyA9IGZuTmFtZTsgLy8gZm9yIGNzc1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7Q29uZmlnLmFwaVVybH0vJHtDb25maWcuZGV2aWNlSWR9LyR7Zm5OYW1lfT9rZXk9JHtDb25maWcuYXBpS2V5fWApXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpLnBpcGUoXHJcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcclxuICAgICk7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHtDb25maWcuYXBpVXJsfXVwZGF0ZT9hcGlfa2V5PSR7Q29uZmlnLmFwaUtleX0mZmllbGQxPSR7Zm5OYW1lfWApXHJcbiAgICAvLy5waXBlKFxyXG4gICAgLy8gdGFwKGNvbnNvbGUubG9nKSxcclxuICAgIC8vY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgLy8pXHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAgY2FsbEFyZXN0KGZuTmFtZTogc3RyaW5nLCBzcGVlZDogU3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgY29uc3QgdXJsID0gYCR7Q29uZmlnLmFwaVVybH0vJHtDb25maWcuZGV2aWNlSWR9LyR7Zm5OYW1lfT9wYXJhbXM9JHtzcGVlZH1gO1xyXG4gICAgICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gICAgICAvLyB0aGlzLm1zZyA9IGZuTmFtZTsgLy8gZm9yIGNzc1xyXG4gICAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHtDb25maWcuYXBpVXJsfS8ke0NvbmZpZy5kZXZpY2VJZH0vJHtmbk5hbWV9P2tleT0ke0NvbmZpZy5hcGlLZXl9YClcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKS5waXBlKFxyXG4gICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcclxuICAgICAgKTtcclxuICAgICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7Q29uZmlnLmFwaVVybH11cGRhdGU/YXBpX2tleT0ke0NvbmZpZy5hcGlLZXl9JmZpZWxkMT0ke2ZuTmFtZX1gKVxyXG4gICAgICAvLy5waXBlKFxyXG4gICAgICAvLyB0YXAoY29uc29sZS5sb2cpLFxyXG4gICAgICAvL2NhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcclxuICAgICAgLy8pXHJcbiAgICB9XHJcbiAgXHJcbiAgICBjYWxsQXJlc3RXaXRoUGFyYW0oZm5OYW1lOiBzdHJpbmcsIHNwZWVkOiBudW1iZXIsIGRpc3RUb1dhbGw6IG51bWJlciwgZGVsYXk6IHN0cmluZykge1xyXG4gICAgICBcclxuICAgICAgLy8gY29uc29sZS5sb2coJ3NwZWVkOiAnLCBzcGVlZCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJsfS8ke3RoaXMuZGV2aWNlX2lkfS8ke2ZuTmFtZX0/a2V5PSR7dGhpcy5hcGlLZXl9JnBhcmFtcz0ke3NwZWVkfSwke2Rpc3RUb1dhbGx9LCR7ZGVsYXl9YClcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHRhcChjb25zb2xlLmxvZyksXHJcbiAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICovXHJcblxyXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICBjb25zb2xlLmxvZygnSGFuZGxpbmcgZXJyb3IgbG9jYWxseSBhbmQgcmV0aHJvd2luZyBpdC4uLicsIEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xyXG4gICAgLy9yZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XHJcbiAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9