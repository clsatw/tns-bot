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

module.exports = ".home-panel{\n    vertical-align: center; \n    font-size: 20;\n    margin: 15;\n}\n\n.description-label{\n    margin-bottom: 15;\n}\n.stopBtn,\n.btn {\n    margin:15px;\n    border-radius: 80;\n    background-color: lightgreen;\n    color: darkslategray;\n}\n\n.stopBtn{\n    background-color: darkgray;\n    color: snow;\n}\n\n.btn:pressed{\n    transform: scale(1.2, 1.2);\n    background-color: darkgreen;\n    color: lightslategray;\n}\n\n.switch{\n    color: darkorange;\n    background-color: darkred;    \n}\n\nActionBar {\n    text-align: center;\n    background-color:  #3C5AFD;\n    color: white;\n}\n"

/***/ }),

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<Page class='page'>\n    <Page.actionBar>\n        <ActionBar class='action-bar' title=\"{{errorMessage}}\"></ActionBar>\n    </Page.actionBar>\n    <ScrollView>\n        <StackLayout verticalAlignment='center' horizontalAlignment='center'>\n            <GridLayout columns='auto, auto, auto' rows='auto, auto, auto'>\n                <Button class='btn' (touch)=\"btnF$.next($event)\" text='Forward' row='0' col='1'></Button>\n                <Button class='btn' (touch)=\"btnL$.next($event)\" text='Left' row='1' col='0'></Button>\n                <ActivityIndicator row='1' col='1' [busy]='this.navMode$ | async' class=\"activity-indicator\">\n                </ActivityIndicator>\n                <Button visibility=\"{{(this.navMode$|async)? 'collapse':'visible'}}\" class='stopBtn'\n                    (touch)=\"btnS$.next($event)\" text='Stop' row='1' col='1'></Button>\n                <Button class='btn' (touch)=\"btnR$.next($event)\" text='Right' row='1' col='2'></Button>\n                <Button class='btn' (touch)=\"btnB$.next($event)\" text='Back' row='2' col='1'></Button>\n            </GridLayout>\n            <label class=\"hr-dark m-10\"></label>\n\n            <label textAlignment='center' textWrap='true' text='離障礙物最短距離'\n                class='text-primary h3 description-label'></label>\n            <Slider (valueChange)=\"disToWall$.next($event)\" value=\"10\" minValue=\"10\" maxValue=\"200\" class='slider'>\n            </Slider>\n            <label textAlignment='center' textWrap='true' text='速度' class='h3 description-label'></label>\n            <Slider (valueChange)=\"inputSpeed$.next($event)\" value=\"50\" minValue=\"10\" maxValue=\"255\"></Slider>\n            <label class='text-danger' textAlignment='center' text='自駕模式' textWrap='true'></label>\n            <Switch checked=\"false\" (checkedChange)=\"autoPilot$.next($event.value)\" class=\"switch\" horizontalAlignment=\"center\"></Switch>\n        </StackLayout>\n    </ScrollView>\n</Page>"

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
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/tns-core-modules/ui/dialogs/dialogs.js");
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
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (s) { return _this.moveCar(s); }));
        // this.robotState$.subscribe(console.log);
        // this.direction$.subscribe(console.log);       
        // ** this console.log shows everything!
        this.navSubscription = this.navigation$.subscribe(function (res) {
            if (res.connected === false) {
                console.dir(res);
                tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_5__["alert"]("Cannot connect to the car!").then(function () {
                    console.log("Dialog closed!");
                });
                // alert(res.message+res.id);
            }
        });
    }
    // @ViewChild('btnF', { static: true }) btnF: ElementRef;
    // @ViewChild('btnL', { static: true }) btnL: ElementRef;
    HomeComponent.prototype.moveCar = function (s) {
        // if no return here, it will fire an error at runtime. don't know why?
        // return this.mqtt.callArest(s.autoPilot === true ? cmdEnum.AUTO : s.direction, s.speed.toString())
        console.log('going to move car!');
        return this.mqtt.publish('moveCar', s);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
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
    if (false) {}


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
    // static apiUrl = 'https://cloud.arest.io';  
    Config.apiUrl = 'http://ajoan.com';
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
    MqttProvider.prototype.publish = function (fnName, s) {
        // const url = `${Config.apiUrl}/${Config.deviceId}/${fnName}?params=${s.speed.toString()},${s.disToWall.toString()},${s.direction.toString()},${s.autoPilot.toString()}`;
        var url = _config__WEBPACK_IMPORTED_MODULE_4__["Config"].apiUrl + "/moveCar?payload=" + s.speed.toString() + "," + s.disToWall.toString() + "," + s.direction.toString() + "," + s.autoPilot.toString();
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
        console.log('Handling error locally and rethrowing it...', JSON.stringify(error));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9ob21lL29wZXJhdG9ycy9zZWxlY3REaXN0aW5jdFN0YXRlLnRzIiwid2VicGFjazovLy8uL2hvbWUvcHJvdmlkZXJzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9ob21lL3Byb3ZpZGVycy9tcXR0L21xdHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBRThCO0FBRXRCO0FBRWpELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsNkRBQWEsRUFBRTtDQUN6QyxDQUFDO0FBTUY7SUFBQTtJQUFpQyxDQUFDO0lBQXJCLGlCQUFpQjtRQUo3Qiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7QUNkOUIsOEJBQThCLDZCQUE2QixxQkFBcUIsaUJBQWlCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLG1CQUFtQixrQkFBa0Isd0JBQXdCLG1DQUFtQywyQkFBMkIsR0FBRyxhQUFhLGlDQUFpQyxrQkFBa0IsR0FBRyxpQkFBaUIsaUNBQWlDLGtDQUFrQyw0QkFBNEIsR0FBRyxZQUFZLHdCQUF3QixnQ0FBZ0MsT0FBTyxlQUFlLHlC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RUFBRSxDQUFjO1FBQ3BDLDBLQUEwSztRQUMxSyxJQUFNLEdBQUcsR0FBTSw4Q0FBTSxDQUFDLE1BQU0seUJBQW9CLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFNBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsU0FBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxTQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFJLENBQUM7UUFDbkosT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixnQ0FBZ0M7UUFDaEMsNkZBQTZGO1FBQzdGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUM1QixpRUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDN0IsQ0FBQztRQUNGLDJGQUEyRjtRQUMzRixRQUFRO1FBQ1Isb0JBQW9CO1FBQ3BCLDhCQUE4QjtRQUM5QixHQUFHO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQTBCRTtJQUVNLGtDQUFXLEdBQW5CLFVBQW9CLEtBQWU7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2Q0FBNkMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbEYsaUNBQWlDO1FBQ2pDLE9BQU8sdURBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOztnQkFyRHlCLCtEQUFVOztJQUZ6QixZQUFZO1FBRHhCLGdFQUFVLEVBQUU7eUNBR2UsK0RBQVU7T0FGekIsWUFBWSxDQXlEeEI7SUFBRCxtQkFBQztDQUFBO0FBekR3QiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5ob21lLXBhbmVse1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyBcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgbWFyZ2luOiAxNTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWxhYmVse1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG59XFxuLnN0b3BCdG4sXFxuLmJ0biB7XFxuICAgIG1hcmdpbjoxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4MDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG4gICAgY29sb3I6IGRhcmtzbGF0ZWdyYXk7XFxufVxcblxcbi5zdG9wQnRue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXG4gICAgY29sb3I6IHNub3c7XFxufVxcblxcbi5idG46cHJlc3NlZHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcXG4gICAgY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xcbn1cXG5cXG4uc3dpdGNoe1xcbiAgICBjb2xvcjogZGFya29yYW5nZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDsgICAgXFxufVxcblxcbkFjdGlvbkJhciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICMzQzVBRkQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgY2xhc3M9J3BhZ2UnPlxcbiAgICA8UGFnZS5hY3Rpb25CYXI+XFxuICAgICAgICA8QWN0aW9uQmFyIGNsYXNzPSdhY3Rpb24tYmFyJyB0aXRsZT1cXFwie3tlcnJvck1lc3NhZ2V9fVxcXCI+PC9BY3Rpb25CYXI+XFxuICAgIDwvUGFnZS5hY3Rpb25CYXI+XFxuICAgIDxTY3JvbGxWaWV3PlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IHZlcnRpY2FsQWxpZ25tZW50PSdjZW50ZXInIGhvcml6b250YWxBbGlnbm1lbnQ9J2NlbnRlcic+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz0nYXV0bywgYXV0bywgYXV0bycgcm93cz0nYXV0bywgYXV0bywgYXV0byc+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9J2J0bicgKHRvdWNoKT1cXFwiYnRuRiQubmV4dCgkZXZlbnQpXFxcIiB0ZXh0PSdGb3J3YXJkJyByb3c9JzAnIGNvbD0nMSc+PC9CdXR0b24+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9J2J0bicgKHRvdWNoKT1cXFwiYnRuTCQubmV4dCgkZXZlbnQpXFxcIiB0ZXh0PSdMZWZ0JyByb3c9JzEnIGNvbD0nMCc+PC9CdXR0b24+XFxuICAgICAgICAgICAgICAgIDxBY3Rpdml0eUluZGljYXRvciByb3c9JzEnIGNvbD0nMScgW2J1c3ldPSd0aGlzLm5hdk1vZGUkIHwgYXN5bmMnIGNsYXNzPVxcXCJhY3Rpdml0eS1pbmRpY2F0b3JcXFwiPlxcbiAgICAgICAgICAgICAgICA8L0FjdGl2aXR5SW5kaWNhdG9yPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZpc2liaWxpdHk9XFxcInt7KHRoaXMubmF2TW9kZSR8YXN5bmMpPyAnY29sbGFwc2UnOid2aXNpYmxlJ319XFxcIiBjbGFzcz0nc3RvcEJ0bidcXG4gICAgICAgICAgICAgICAgICAgICh0b3VjaCk9XFxcImJ0blMkLm5leHQoJGV2ZW50KVxcXCIgdGV4dD0nU3RvcCcgcm93PScxJyBjb2w9JzEnPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPSdidG4nICh0b3VjaCk9XFxcImJ0blIkLm5leHQoJGV2ZW50KVxcXCIgdGV4dD0nUmlnaHQnIHJvdz0nMScgY29sPScyJz48L0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz0nYnRuJyAodG91Y2gpPVxcXCJidG5CJC5uZXh0KCRldmVudClcXFwiIHRleHQ9J0JhY2snIHJvdz0nMicgY29sPScxJz48L0J1dHRvbj5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJoci1kYXJrIG0tMTBcXFwiPjwvbGFiZWw+XFxuXFxuICAgICAgICAgICAgPGxhYmVsIHRleHRBbGlnbm1lbnQ9J2NlbnRlcicgdGV4dFdyYXA9J3RydWUnIHRleHQ9J+mboumanOekmeeJqeacgOefrei3nemboidcXG4gICAgICAgICAgICAgICAgY2xhc3M9J3RleHQtcHJpbWFyeSBoMyBkZXNjcmlwdGlvbi1sYWJlbCc+PC9sYWJlbD5cXG4gICAgICAgICAgICA8U2xpZGVyICh2YWx1ZUNoYW5nZSk9XFxcImRpc1RvV2FsbCQubmV4dCgkZXZlbnQpXFxcIiB2YWx1ZT1cXFwiMTBcXFwiIG1pblZhbHVlPVxcXCIxMFxcXCIgbWF4VmFsdWU9XFxcIjIwMFxcXCIgY2xhc3M9J3NsaWRlcic+XFxuICAgICAgICAgICAgPC9TbGlkZXI+XFxuICAgICAgICAgICAgPGxhYmVsIHRleHRBbGlnbm1lbnQ9J2NlbnRlcicgdGV4dFdyYXA9J3RydWUnIHRleHQ9J+mAn+W6picgY2xhc3M9J2gzIGRlc2NyaXB0aW9uLWxhYmVsJz48L2xhYmVsPlxcbiAgICAgICAgICAgIDxTbGlkZXIgKHZhbHVlQ2hhbmdlKT1cXFwiaW5wdXRTcGVlZCQubmV4dCgkZXZlbnQpXFxcIiB2YWx1ZT1cXFwiNTBcXFwiIG1pblZhbHVlPVxcXCIxMFxcXCIgbWF4VmFsdWU9XFxcIjI1NVxcXCI+PC9TbGlkZXI+XFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSd0ZXh0LWRhbmdlcicgdGV4dEFsaWdubWVudD0nY2VudGVyJyB0ZXh0PSfoh6rpp5XmqKHlvI8nIHRleHRXcmFwPSd0cnVlJz48L2xhYmVsPlxcbiAgICAgICAgICAgIDxTd2l0Y2ggY2hlY2tlZD1cXFwiZmFsc2VcXFwiIChjaGVja2VkQ2hhbmdlKT1cXFwiYXV0b1BpbG90JC5uZXh0KCRldmVudC52YWx1ZSlcXFwiIGNsYXNzPVxcXCJzd2l0Y2hcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+PC9Td2l0Y2g+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L1Njcm9sbFZpZXc+XFxuPC9QYWdlPlwiIiwiLy8gaW1wb3J0IHsgSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiXHJcbmltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUsIG1lcmdlLCBjb21iaW5lTGF0ZXN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZXhoYXVzdE1hcCwgZGlzdGluY3RVbnRpbENoYW5nZWQsIHN0YXJ0V2l0aCwgc2NhbiwgbWFwLCBzaGFyZVJlcGxheSwgdGFwLCBmaWx0ZXIsIHdpdGhMYXRlc3RGcm9tLCBkZWJvdW5jZVRpbWUsIHRocm90dGxlVGltZSwgc2tpcFdoaWxlLCB0YWtlV2hpbGUsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgSXJvYm90U3RhdGUsIGNtZEVudW0gfSBmcm9tIFwiLi9tb2RlbHMvcm9ib3RTdGF0ZVwiO1xyXG5pbXBvcnQgeyBzZWxlY3REaXN0aW5jdFN0YXRlLCBpbnB1dFRvVmFsdWUgfSBmcm9tIFwiLi9vcGVyYXRvcnMvc2VsZWN0RGlzdGluY3RTdGF0ZVwiO1xyXG5pbXBvcnQgeyBUb3VjaEdlc3R1cmVFdmVudERhdGEgfSBmcm9tICd1aS9nZXN0dXJlcyc7XHJcbmltcG9ydCB7IE1xdHRQcm92aWRlciB9IGZyb20gJy4vcHJvdmlkZXJzL21xdHQvbXF0dCc7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5cclxuLy8gaW1wb3J0IHsgZ2V0RXZlbnRPckdlc3R1cmVOYW1lIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XHJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gICAgcHJvdmlkZXJzOiBbTXF0dFByb3ZpZGVyXSxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9ob21lLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveXtcclxuICAgIG5hdlN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gICAgZXJyb3JNZXNzYWdlID0gJ1dpZmkg6YGZ5o6n6LuKJztcclxuICAgIGluaXRpYWxSb2JvdFN0YXRlOiBJcm9ib3RTdGF0ZSA9IHtcclxuICAgICAgICBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCxcclxuICAgICAgICBzcGVlZDogNTAsXHJcbiAgICAgICAgZGlzVG9XYWxsOiAxMCxcclxuICAgICAgICBhdXRvUGlsb3Q6IDBcclxuICAgIH1cclxuICAgIC8vIGxhc3QgZXZlbnQgaXMgYWx3YXlzIHVwLCBzbyB0aGlzIGlzIGZpbHRlcmVkIGJ5IGRpc3RpbmN0VW50aWxDaGFuZ2Ugb3BlcmF0b3IuXHJcbiAgICAvLyBidG5TJCA9IG5ldyBTdWJqZWN0PFRvdWNoR2VzdHVyZUV2ZW50RGF0YT4oKTtcclxuICAgIGJ0bkYkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xyXG4gICAgYnRuTCQgPSBuZXcgU3ViamVjdDxUb3VjaEdlc3R1cmVFdmVudERhdGE+KCk7XHJcbiAgICBidG5SJCA9IG5ldyBTdWJqZWN0PFRvdWNoR2VzdHVyZUV2ZW50RGF0YT4oKTtcclxuICAgIGJ0bkIkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xyXG4gICAgYnRuUyQgPSBuZXcgU3ViamVjdDxUb3VjaEdlc3R1cmVFdmVudERhdGE+KCk7XHJcbiAgICBpbnB1dFNwZWVkJCA9IG5ldyBTdWJqZWN0PEV2ZW50PigpO1xyXG4gICAgZGlzVG9XYWxsJCA9IG5ldyBTdWJqZWN0PEV2ZW50PigpO1xyXG4gICAgYXV0b1BpbG90JCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICAgIC8vIEBWaWV3Q2hpbGQoJ2J0bkYnLCB7IHN0YXRpYzogdHJ1ZSB9KSBidG5GOiBFbGVtZW50UmVmO1xyXG4gICAgLy8gQFZpZXdDaGlsZCgnYnRuTCcsIHsgc3RhdGljOiB0cnVlIH0pIGJ0bkw6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgbW92ZUNhcihzOklyb2JvdFN0YXRlKTphbnkge1xyXG4gICAgICAgIC8vIGlmIG5vIHJldHVybiBoZXJlLCBpdCB3aWxsIGZpcmUgYW4gZXJyb3IgYXQgcnVudGltZS4gZG9uJ3Qga25vdyB3aHk/XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMubXF0dC5jYWxsQXJlc3Qocy5hdXRvUGlsb3QgPT09IHRydWUgPyBjbWRFbnVtLkFVVE8gOiBzLmRpcmVjdGlvbiwgcy5zcGVlZC50b1N0cmluZygpKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnb2luZyB0byBtb3ZlIGNhciEnKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5tcXR0LnB1Ymxpc2goJ21vdmVDYXInLCBzKTsgICBcclxuICAgIH1cclxuICAgIC8vIHdoZW4gdGFwIG9uIGJ1dHRvbiwgdGhlcmUgYSBkb3duLCBtYW55IG1vdmUuLi4gYW4gdXAgZXZlbnRzLlxyXG4gICAgcm9ib3RDb21tYW5kcyQgPSBtZXJnZShcclxuICAgICAgICAvLyB0aGlzLmJ0blMkLnBpcGUoIG1hcChlID0+ICh7IGRpcmVjdGlvbjogY21kRW51bS5TVE9QIH0pKSksXHJcbiAgICAgICAgdGhpcy5idG5GJC5waXBlKFxyXG4gICAgICAgICAgICAvLyBlLmFjdGlvbjogbW92ZSwgY2FuY2VsIGRvd24sIHVwLlxyXG4gICAgICAgICAgICBmaWx0ZXIoZSA9PiBlLmFjdGlvbiAhPT0gJ21vdmUnKSxcclxuICAgICAgICAgICAgbWFwKChlOiBUb3VjaEdlc3R1cmVFdmVudERhdGEpID0+IGUuYWN0aW9uID09PSAndXAnID8gKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AgfSkgOiAoeyBkaXJlY3Rpb246IGNtZEVudW0uRk9SV0FSRCB9KVxyXG4gICAgICAgICAgICApKSxcclxuXHJcbiAgICAgICAgdGhpcy5idG5CJC5waXBlKFxyXG4gICAgICAgICAgICBmaWx0ZXIoZSA9PiBlLmFjdGlvbiAhPT0gJ21vdmUnKSxcclxuICAgICAgICAgICAgbWFwKChlOiBUb3VjaEdlc3R1cmVFdmVudERhdGEpID0+IGUuYWN0aW9uID09PSAndXAnID8gKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AgfSkgOiAoeyBkaXJlY3Rpb246IGNtZEVudW0uQkFDSyB9KVxyXG4gICAgICAgICAgICApKSxcclxuICAgICAgICB0aGlzLmJ0bkwkLnBpcGUoXHJcbiAgICAgICAgICAgIGZpbHRlcihlID0+IGUuYWN0aW9uICE9PSAnbW92ZScpLFxyXG4gICAgICAgICAgICBtYXAoZSA9PiBlLmFjdGlvbiA9PT0gJ3VwJyA/ICh7IGRpcmVjdGlvbjogY21kRW51bS5TVE9QIH0pIDogKHsgZGlyZWN0aW9uOiBjbWRFbnVtLkxFRlQgfSlcclxuICAgICAgICAgICAgKSksXHJcbiAgICAgICAgdGhpcy5idG5SJC5waXBlKFxyXG4gICAgICAgICAgICBmaWx0ZXIoZSA9PiBlLmFjdGlvbiAhPT0gJ21vdmUnKSxcclxuICAgICAgICAgICAgbWFwKGUgPT4gZS5hY3Rpb24gPT09ICd1cCcgPyAoeyBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCB9KSA6ICh7IGRpcmVjdGlvbjogY21kRW51bS5SSUdIVCB9KVxyXG4gICAgICAgICAgICApKSxcclxuICAgICAgICAvLyBjYXIgc3BlZWQgKDAtMjU1KVxyXG4gICAgICAgIHRoaXMuaW5wdXRTcGVlZCQucGlwZShcclxuICAgICAgICAgICAgLy90YXAoY29uc29sZS5sb2cpLFxyXG4gICAgICAgICAgICAvLyB0YXAobiA9PiBjb25zb2xlLmxvZygnc3BlZWQ6ICcgKyBuKSkpLFxyXG4gICAgICAgICAgICBmaWx0ZXIobiA9PiBuICE9PSB1bmRlZmluZWQpLFxyXG4gICAgICAgICAgICBpbnB1dFRvVmFsdWUoKSxcclxuICAgICAgICAgICAgbWFwKG4gPT4gKHsgc3BlZWQ6IG4gfSkpXHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgdGhpcy5kaXNUb1dhbGwkLnBpcGUoaW5wdXRUb1ZhbHVlKCksIG1hcChuID0+ICh7IGRpc1RvV2FsbDogbiB9KSkpLFxyXG4gICAgICAgIHRoaXMuYXV0b1BpbG90JC5waXBlKFxyXG4gICAgICAgICAgICAvLyB0YXAobj0+Y29uc29sZS5sb2cobi5hY3Rpb24pKSxcclxuICAgICAgICAgICAgbWFwKG4gPT4gKHsgYXV0b1BpbG90OiBuPyAxOjAgfSkpKVxyXG4gICAgKS5waXBlKFxyXG4gICAgICAgIC8vIGRlYm91bmNlVGltZSg1MDApXHJcbiAgICApXHJcblxyXG4gICAgcm9ib3RTdGF0ZSQ6IE9ic2VydmFibGU8SXJvYm90U3RhdGU+ID0gdGhpcy5yb2JvdENvbW1hbmRzJFxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICBzdGFydFdpdGgodGhpcy5pbml0aWFsUm9ib3RTdGF0ZSksXHJcbiAgICAgICAgICAgIC8vICoqIHRvdWNoIGV2ZW50ICdtb3ZlJyBrZWVwcyBiZWluZyBmaXJlZCBhcyBsb25nIGFzIG5vdCByZWxlYXNpbmcuXHJcblxyXG4gICAgICAgICAgICBzY2FuKChzdGF0ZTogSXJvYm90U3RhdGUsIGNvbW1hbmQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoeyAuLi5zdGF0ZSwgLi4uY29tbWFuZCB9KTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIC8vIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgICAgICAgIC8vIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChwcmV2OiBJcm9ib3RTdGF0ZSwgY3VycjogSXJvYm90U3RhdGUpID0+IHByZXYuZGlyZWN0aW9uID09PSBjdXJyLmRpcmVjdGlvbiksXHJcbiAgICAgICAgICAgIHNoYXJlUmVwbGF5KDEpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICBkaXJlY3Rpb24kID0gdGhpcy5yb2JvdFN0YXRlJC5waXBlKHNlbGVjdERpc3RpbmN0U3RhdGUoJ2RpcmVjdGlvbicpKTtcclxuICAgIG5hdk1vZGUkID0gdGhpcy5yb2JvdFN0YXRlJC5waXBlKHNlbGVjdERpc3RpbmN0U3RhdGUoJ2F1dG9QaWxvdCcpKTtcclxuXHJcbiAgICAvLyAqKiBkaXNjYXJkIGVtaXR0ZWQgdmFsdWVzIHRoYXQgdGFrZSA8IDFzIGNveiBpbnB1dHZhbHVlIGtlZXBzIGZpcmluZyB3aGVuIHNsaWRpbmcgb24gc2xpZGVyLlxyXG4gICAgc3BlZWQkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLnJvYm90U3RhdGUkLnBpcGUoc2VsZWN0RGlzdGluY3RTdGF0ZSgnc3BlZWQnKSkucGlwZShkZWJvdW5jZVRpbWUoMTAwMCkpO1xyXG5cclxuICAgIG5hdmlnYXRpb24kID0gY29tYmluZUxhdGVzdCh0aGlzLmRpcmVjdGlvbiQsIHRoaXMubmF2TW9kZSQsIHRoaXMuc3BlZWQkKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAvLyB3aXRoTGF0ZXN0RnJvbSB0YWtlcyAyIG9icyQsIGluIHRoaXMgY2FzZSB3ZSBpZ25vcmUgMXN0IG9uZShkaXJlY3Rpb24kKSwgYW5kIHRha2Ugc3RhdGUkIG9ubHlcclxuICAgICAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5yb2JvdFN0YXRlJCwgKF8sIHMpID0+IHMpLFxyXG4gICAgICAgICAgICAvKiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0YXAoKHM6IElyb2JvdFN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzLmRpcmVjdGlvbilcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUNhcihzKTtcclxuICAgICAgICAgICAgfSkgICAgICAgICAgICBcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgLy8gcmVwbGFjZSB0YXAgdy8gZXhoYXVzdE1hcCBzbyBhbnkgY29taW5nIGRpcmVjdGlvbiBldmVudCB3aWxsIGJlIGlnbm9yZSBpZiBtb3ZlQ2FyIGlzbid0IGNvbXBsZXRlZC4gXHJcbiAgICAgICAgICAgIC8vIHRhcCggY29uc29sZS5sb2coJ3MuZGlyZWN0aW9uJykgKSxcclxuICAgICAgICAgICAgc3dpdGNoTWFwKChzOiBJcm9ib3RTdGF0ZSkgPT4gdGhpcy5tb3ZlQ2FyKHMpKVxyXG4gICAgICAgIClcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1xdHQ6IE1xdHRQcm92aWRlcikge1xyXG4gICAgICAgIC8vIHRoaXMucm9ib3RTdGF0ZSQuc3Vic2NyaWJlKGNvbnNvbGUubG9nKTtcclxuICAgICAgICAvLyB0aGlzLmRpcmVjdGlvbiQuc3Vic2NyaWJlKGNvbnNvbGUubG9nKTsgICAgICAgXHJcbiAgICAgICAgLy8gKiogdGhpcyBjb25zb2xlLmxvZyBzaG93cyBldmVyeXRoaW5nIVxyXG4gICAgICAgIHRoaXMubmF2U3Vic2NyaXB0aW9uID0gdGhpcy5uYXZpZ2F0aW9uJC5zdWJzY3JpYmUoKHJlczogYW55KT0+e1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvbm5lY3RlZD09PWZhbHNlKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKHJlcyk7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KFwiQ2Fubm90IGNvbm5lY3QgdG8gdGhlIGNhciFcIikudGhlbigoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBhbGVydChyZXMubWVzc2FnZStyZXMuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLnJvYm90Q29tbWFuZHMkLnN1YnNjcmliZShjb25zb2xlLmxvZyk7ICAgICAgICBcclxuICAgICAgICB0aGlzLnJvYm90U3RhdGUkLnN1YnNjcmliZShjb25zb2xlLmxvZylcclxuICAgICAgICAvLyB0aGlzLm5hdk1vZGUkLnN1YnNjcmliZShjb25zb2xlLmxvZyk7XHJcbiAgICB9XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5hdlN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ob21lLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnQnO1xyXG5pbXBvcnQgeyBNcXR0UHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9tcXR0L21xdHQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFsgICAgICAgXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIEhvbWVSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgSG9tZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIE1xdHRQcm92aWRlclxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBVbmFyeUZ1bmN0aW9uLCBwaXBlLCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIHBsdWNrLCBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3REaXN0aW5jdFN0YXRlPFQsIEk+KGtleTogc3RyaW5nKTogVW5hcnlGdW5jdGlvbjxPYnNlcnZhYmxlPFQ+LCBPYnNlcnZhYmxlPEk+PiB7XHJcbiAgICByZXR1cm4gcGlwZShcclxuICAgICAgICBwbHVjazxULCBJPihrZXkpLFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkPEk+KClcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnB1dFRvVmFsdWUoZGVmYXVsdFZhbHVlOiBudW1iZXIgPSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHBpcGUoXHJcbiAgICAgICAgICAgIG1hcCgoZXZlbnQ6IGFueSk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBldmVudCA/IHBhcnNlSW50KGV2ZW50LnZhbHVlLCAxMCkgOiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHBhcnNlZCA9PT0gMCB8fCBwYXJzZWQpID8gcGFyc2VkIDogZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4iLCIvLyBHRVQgaHR0cHM6Ly9hcGkudGhpbmdzcGVhay5jb20vdXBkYXRlP2FwaV9rZXk9R1UzVDJDVlZIWFJaVVdIUSZmaWVsZDE9MFxyXG5leHBvcnQgY2xhc3MgQ29uZmlnIHtcclxuICAgIC8vIHN0YXRpYyBhcGlVcmwgPSBcImh0dHBzOi8vYXBpLnRoaW5nc3BlYWsuY29tL1wiO1xyXG4gICAgLy8gc3RhdGljIGFwaUtleSA9IFwiR1UzVDJDVlZIWFJaVVdIUVwiO1xyXG5cclxuICAgIC8vIHN0YXRpYyBhcGlVcmwgPSAnaHR0cHM6Ly9jbG91ZC5hcmVzdC5pbyc7ICBcclxuICAgIHN0YXRpYyBhcGlVcmwgPSAnaHR0cDovL2Fqb2FuLmNvbSc7ICBcclxuICAgIHN0YXRpYyBkZXZpY2VJZCA9ICcxMDc5MjknOyAvLyB0aGUgY2FyJ3MgaWQgcmVnaXN0ZXJkIGluIGFyZXN0IHdlYnNpdGUgICBcclxuICB9XHJcblxyXG4gIC8vIHByaXZhdGUgYXBpS2V5ID0gJzFvYnF6Y2g4eDNlN2U2MjYnOyAgXHJcbiAgLy8gcHJpdmF0ZSB1cmwgPSAnaHR0cHM6Ly9jbG91ZC5hcmVzdC5pbzsnXHJcbiAgLy8gZS5nLiwgaHR0cHM6Ly9jbG91ZC5hcmVzdC5pby8ke2RldklkfS9mb3J3YXJkIiwiLyogVGhpcyBkZWNvcmF0b3IgZGVub3RlcyB0aGlzIGNsYXNzIGFzIGEgY2FuZGlkYXRlIGZvciBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBtZWNoYW5pc20uIEZvciBub3cganVzdCB0aGluayBvZiBhZGRpbmdcclxuKiogdGhlIEBJbmplY3RhYmxlIGFzIGEgcmVxdWlyZWQgY29udmVudGlvbiBmb3IgYWxsIHNlcnZpY2VzIHRoYXQgeW91IHdyaXRlXHJcbiovXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHRhcCwgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IElyb2JvdFN0YXRlIH0gZnJvbSAnfi9ob21lL21vZGVscy9yb2JvdFN0YXRlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1xdHRQcm92aWRlciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xyXG4gIH1cclxuXHJcbiAgLy8gVVJMcyBhcmUgc3RyaW5ncyBhbmQgYWxsIHZhbHVlcyBpbiBhIFVSTCBhcmUgc3RyaW5ncy4gV2hlbiB5b3Ugc2VlIGk9MCBpbiBhIFVSTCwgMCBpcyBhIHN0cmluZy5cclxuICAvLyBXaGVuIHlvdSBzZWUgYj10cnVlLCB0cnVlIGlzIGEgc3RyaW5nLiBXaGVuIHlvdSBzZWUgcz0sIHRoZSB2YWx1ZSBpcyBhbiBlbXB0eSBzdHJpbmcuXHJcbiAgcHVibGlzaChmbk5hbWU6IHN0cmluZywgczogSXJvYm90U3RhdGUpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgLy8gY29uc3QgdXJsID0gYCR7Q29uZmlnLmFwaVVybH0vJHtDb25maWcuZGV2aWNlSWR9LyR7Zm5OYW1lfT9wYXJhbXM9JHtzLnNwZWVkLnRvU3RyaW5nKCl9LCR7cy5kaXNUb1dhbGwudG9TdHJpbmcoKX0sJHtzLmRpcmVjdGlvbi50b1N0cmluZygpfSwke3MuYXV0b1BpbG90LnRvU3RyaW5nKCl9YDtcclxuICAgIGNvbnN0IHVybCA9IGAke0NvbmZpZy5hcGlVcmx9L21vdmVDYXI/cGF5bG9hZD0ke3Muc3BlZWQudG9TdHJpbmcoKX0sJHtzLmRpc1RvV2FsbC50b1N0cmluZygpfSwke3MuZGlyZWN0aW9uLnRvU3RyaW5nKCl9LCR7cy5hdXRvUGlsb3QudG9TdHJpbmcoKX1gO1xyXG4gICAgY29uc29sZS5sb2codXJsKTtcclxuICAgIC8vIHRoaXMubXNnID0gZm5OYW1lOyAvLyBmb3IgY3NzXHJcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHtDb25maWcuYXBpVXJsfS8ke0NvbmZpZy5kZXZpY2VJZH0vJHtmbk5hbWV9P2tleT0ke0NvbmZpZy5hcGlLZXl9YClcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCkucGlwZShcclxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgKTtcclxuICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke0NvbmZpZy5hcGlVcmx9dXBkYXRlP2FwaV9rZXk9JHtDb25maWcuYXBpS2V5fSZmaWVsZDE9JHtmbk5hbWV9YClcclxuICAgIC8vLnBpcGUoXHJcbiAgICAvLyB0YXAoY29uc29sZS5sb2cpLFxyXG4gICAgLy9jYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICAvLylcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICBjYWxsQXJlc3QoZm5OYW1lOiBzdHJpbmcsIHNwZWVkOiBTdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICBjb25zdCB1cmwgPSBgJHtDb25maWcuYXBpVXJsfS8ke0NvbmZpZy5kZXZpY2VJZH0vJHtmbk5hbWV9P3BhcmFtcz0ke3NwZWVkfWA7XHJcbiAgICAgIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICAgIC8vIHRoaXMubXNnID0gZm5OYW1lOyAvLyBmb3IgY3NzXHJcbiAgICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke0NvbmZpZy5hcGlVcmx9LyR7Q29uZmlnLmRldmljZUlkfS8ke2ZuTmFtZX0/a2V5PSR7Q29uZmlnLmFwaUtleX1gKVxyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpLnBpcGUoXHJcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgICApO1xyXG4gICAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHtDb25maWcuYXBpVXJsfXVwZGF0ZT9hcGlfa2V5PSR7Q29uZmlnLmFwaUtleX0mZmllbGQxPSR7Zm5OYW1lfWApXHJcbiAgICAgIC8vLnBpcGUoXHJcbiAgICAgIC8vIHRhcChjb25zb2xlLmxvZyksXHJcbiAgICAgIC8vY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgICAvLylcclxuICAgIH1cclxuICBcclxuICAgIGNhbGxBcmVzdFdpdGhQYXJhbShmbk5hbWU6IHN0cmluZywgc3BlZWQ6IG51bWJlciwgZGlzdFRvV2FsbDogbnVtYmVyLCBkZWxheTogc3RyaW5nKSB7XHJcbiAgICAgIFxyXG4gICAgICAvLyBjb25zb2xlLmxvZygnc3BlZWQ6ICcsIHNwZWVkKTtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cmx9LyR7dGhpcy5kZXZpY2VfaWR9LyR7Zm5OYW1lfT9rZXk9JHt0aGlzLmFwaUtleX0mcGFyYW1zPSR7c3BlZWR9LCR7ZGlzdFRvV2FsbH0sJHtkZWxheX1gKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgdGFwKGNvbnNvbGUubG9nKSxcclxuICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcclxuICAgICAgICApXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgKi9cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgIGNvbnNvbGUubG9nKCdIYW5kbGluZyBlcnJvciBsb2NhbGx5IGFuZCByZXRocm93aW5nIGl0Li4uJywgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgIC8vcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xyXG4gIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==