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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./home/providers/config.ts");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tns-core-modules/http");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__);
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
        var url = _config__WEBPACK_IMPORTED_MODULE_3__["Config"].apiUrl + "/" + topic + "?payload=" + s.speed.toString() + "," + s.disToWall.toString() + "," + s.direction.toString() + "," + s.autoPilot.toString();
        console.log(url);
        // this.msg = fnName; // for css
        // return this.http.get(`${Config.apiUrl}/${Config.deviceId}/${fnName}?key=${Config.apiKey}`)
        // convert promise to obserable via from
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({ url: url, method: "GET" }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.statusCode; }));
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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9ob21lL29wZXJhdG9ycy9zZWxlY3REaXN0aW5jdFN0YXRlLnRzIiwid2VicGFjazovLy8uL2hvbWUvcHJvdmlkZXJzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9ob21lL3Byb3ZpZGVycy9tcXR0L21xdHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFdEI7QUFFakQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw2REFBYSxFQUFFO0NBQ3pDLENBQUM7QUFNRjtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBSjdCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGlCQUFpQixDQUFJO0lBQUQsd0JBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ2Q5Qiw4QkFBOEIsNkJBQTZCLHFCQUFxQixpQkFBaUIsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsbUJBQW1CLGtCQUFrQix3QkFBd0IsbUNBQW1DLDJCQUEyQixHQUFHLGFBQWEsaUNBQWlDLGtCQUFrQixHQUFHLGlCQUFpQixpQ0FBaUMsa0NBQWtDLDRCQUE0QixHQUFHLFlBQVksd0JBQXdCLGdDQUFnQyxPQUFPLGVB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LE1BQU0sU0FBSSxLQUFLLGlCQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFNBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsU0FBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxTQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFJLENBQUM7UUFDcEosT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixnQ0FBZ0M7UUFDaEMsNkZBQTZGO1FBQzdGLHdDQUF3QztRQUN4QyxPQUFPLGlEQUFJLENBQUMscUVBQU8sQ0FBQyxFQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7YUFDNUMsSUFBSSxDQUFDLDBEQUFHLENBQUMsVUFBQyxHQUFpQixJQUFLLFVBQUcsQ0FBQyxVQUFVLEVBQWQsQ0FBYyxDQUFDLENBQUMsQ0FBQztRQUVwRDs7OztVQUlFO1FBRUYsMkZBQTJGO1FBQzNGLFFBQVE7UUFDUixvQkFBb0I7UUFDcEIsOEJBQThCO1FBQzlCLEdBQUc7SUFDTCxDQUFDO0lBN0JVLFlBQVk7UUFEeEIsZ0VBQVUsRUFBRTtPQUNBLFlBQVksQ0F1RXhCO0lBQUQsbUJBQUM7Q0FBQTtBQXZFd0IiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuaG9tZS1wYW5lbHtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgXFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbjogMTU7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1sYWJlbHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxufVxcbi5zdG9wQnRuLFxcbi5idG4ge1xcbiAgICBtYXJnaW46MTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogODA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxuICAgIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xcbn1cXG5cXG4uc3RvcEJ0bntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxuICAgIGNvbG9yOiBzbm93O1xcbn1cXG5cXG4uYnRuOnByZXNzZWR7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XFxuICAgIGNvbG9yOiBsaWdodHNsYXRlZ3JheTtcXG59XFxuXFxuLnN3aXRjaHtcXG4gICAgY29sb3I6IGRhcmtvcmFuZ2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7ICAgIFxcbn1cXG5cXG5BY3Rpb25CYXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjM0M1QUZEO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIGNsYXNzPSdwYWdlJz5cXG4gICAgPFBhZ2UuYWN0aW9uQmFyPlxcbiAgICAgICAgPEFjdGlvbkJhciBjbGFzcz0nYWN0aW9uLWJhcicgdGl0bGU9XFxcInt7ZXJyb3JNZXNzYWdlfX1cXFwiPjwvQWN0aW9uQmFyPlxcbiAgICA8L1BhZ2UuYWN0aW9uQmFyPlxcbiAgICA8U2Nyb2xsVmlldz5cXG4gICAgICAgIDxTdGFja0xheW91dCB2ZXJ0aWNhbEFsaWdubWVudD0nY2VudGVyJyBob3Jpem9udGFsQWxpZ25tZW50PSdjZW50ZXInPlxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9J2F1dG8sIGF1dG8sIGF1dG8nIHJvd3M9J2F1dG8sIGF1dG8sIGF1dG8nPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPSdidG4nICh0b3VjaCk9XFxcImJ0bkYkLm5leHQoJGV2ZW50KVxcXCIgdGV4dD0nRm9yd2FyZCcgcm93PScwJyBjb2w9JzEnPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPSdidG4nICh0b3VjaCk9XFxcImJ0bkwkLm5leHQoJGV2ZW50KVxcXCIgdGV4dD0nTGVmdCcgcm93PScxJyBjb2w9JzAnPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8QWN0aXZpdHlJbmRpY2F0b3Igcm93PScxJyBjb2w9JzEnIFtidXN5XT0ndGhpcy5uYXZNb2RlJCB8IGFzeW5jJyBjbGFzcz1cXFwiYWN0aXZpdHktaW5kaWNhdG9yXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9BY3Rpdml0eUluZGljYXRvcj5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2aXNpYmlsaXR5PVxcXCJ7eyh0aGlzLm5hdk1vZGUkfGFzeW5jKT8gJ2NvbGxhcHNlJzondmlzaWJsZSd9fVxcXCIgY2xhc3M9J3N0b3BCdG4nXFxuICAgICAgICAgICAgICAgICAgICAodG91Y2gpPVxcXCJidG5TJC5uZXh0KCRldmVudClcXFwiIHRleHQ9J1N0b3AnIHJvdz0nMScgY29sPScxJz48L0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz0nYnRuJyAodG91Y2gpPVxcXCJidG5SJC5uZXh0KCRldmVudClcXFwiIHRleHQ9J1JpZ2h0JyByb3c9JzEnIGNvbD0nMic+PC9CdXR0b24+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9J2J0bicgKHRvdWNoKT1cXFwiYnRuQiQubmV4dCgkZXZlbnQpXFxcIiB0ZXh0PSdCYWNrJyByb3c9JzInIGNvbD0nMSc+PC9CdXR0b24+XFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiaHItZGFyayBtLTEwXFxcIj48L2xhYmVsPlxcblxcbiAgICAgICAgICAgIDxsYWJlbCB0ZXh0QWxpZ25tZW50PSdjZW50ZXInIHRleHRXcmFwPSd0cnVlJyB0ZXh0PSfpm6LpmpznpJnnianmnIDnn63ot53pm6InXFxuICAgICAgICAgICAgICAgIGNsYXNzPSd0ZXh0LXByaW1hcnkgaDMgZGVzY3JpcHRpb24tbGFiZWwnPjwvbGFiZWw+XFxuICAgICAgICAgICAgPFNsaWRlciAodmFsdWVDaGFuZ2UpPVxcXCJkaXNUb1dhbGwkLm5leHQoJGV2ZW50KVxcXCIgdmFsdWU9XFxcIjEwXFxcIiBtaW5WYWx1ZT1cXFwiMTBcXFwiIG1heFZhbHVlPVxcXCIyMDBcXFwiIGNsYXNzPSdzbGlkZXInPlxcbiAgICAgICAgICAgIDwvU2xpZGVyPlxcbiAgICAgICAgICAgIDxsYWJlbCB0ZXh0QWxpZ25tZW50PSdjZW50ZXInIHRleHRXcmFwPSd0cnVlJyB0ZXh0PSfpgJ/luqYnIGNsYXNzPSdoMyBkZXNjcmlwdGlvbi1sYWJlbCc+PC9sYWJlbD5cXG4gICAgICAgICAgICA8U2xpZGVyICh2YWx1ZUNoYW5nZSk9XFxcImlucHV0U3BlZWQkLm5leHQoJGV2ZW50KVxcXCIgdmFsdWU9XFxcIjUwXFxcIiBtaW5WYWx1ZT1cXFwiMTBcXFwiIG1heFZhbHVlPVxcXCIyNTVcXFwiPjwvU2xpZGVyPlxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0ndGV4dC1kYW5nZXInIHRleHRBbGlnbm1lbnQ9J2NlbnRlcicgdGV4dD0n6Ieq6aeV5qih5byPJyB0ZXh0V3JhcD0ndHJ1ZSc+PC9sYWJlbD5cXG4gICAgICAgICAgICA8U3dpdGNoIGNoZWNrZWQ9XFxcImZhbHNlXFxcIiAoY2hlY2tlZENoYW5nZSk9XFxcImF1dG9QaWxvdCQubmV4dCgkZXZlbnQudmFsdWUpXFxcIiBjbGFzcz1cXFwic3dpdGNoXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPjwvU3dpdGNoPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cIiIsIi8vIGltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIlxyXG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlLCBtZXJnZSwgY29tYmluZUxhdGVzdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGV4aGF1c3RNYXAsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBzdGFydFdpdGgsIHNjYW4sIG1hcCwgc2hhcmVSZXBsYXksIHRhcCwgZmlsdGVyLCB3aXRoTGF0ZXN0RnJvbSwgZGVib3VuY2VUaW1lLCB0aHJvdHRsZVRpbWUsIHNraXBXaGlsZSwgdGFrZVdoaWxlLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IElyb2JvdFN0YXRlLCBjbWRFbnVtIH0gZnJvbSBcIi4vbW9kZWxzL3JvYm90U3RhdGVcIjtcclxuaW1wb3J0IHsgc2VsZWN0RGlzdGluY3RTdGF0ZSwgaW5wdXRUb1ZhbHVlIH0gZnJvbSBcIi4vb3BlcmF0b3JzL3NlbGVjdERpc3RpbmN0U3RhdGVcIjtcclxuaW1wb3J0IHsgVG91Y2hHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSAndWkvZ2VzdHVyZXMnO1xyXG5pbXBvcnQgeyBNcXR0UHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9tcXR0L21xdHQnO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuXHJcbi8vIGltcG9ydCB7IGdldEV2ZW50T3JHZXN0dXJlTmFtZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC9hbmd1bGFyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIHByb3ZpZGVyczogW01xdHRQcm92aWRlcl0sXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgbmF2U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgICBlcnJvck1lc3NhZ2UgPSAnV2lmaSDpgZnmjqfou4onO1xyXG4gICAgaW5pdGlhbFJvYm90U3RhdGU6IElyb2JvdFN0YXRlID0ge1xyXG4gICAgICAgIGRpcmVjdGlvbjogY21kRW51bS5TVE9QLFxyXG4gICAgICAgIHNwZWVkOiA1MCxcclxuICAgICAgICBkaXNUb1dhbGw6IDEwLFxyXG4gICAgICAgIGF1dG9QaWxvdDogMFxyXG4gICAgfVxyXG4gICAgLy8gbGFzdCBldmVudCBpcyBhbHdheXMgdXAsIHNvIHRoaXMgaXMgZmlsdGVyZWQgYnkgZGlzdGluY3RVbnRpbENoYW5nZSBvcGVyYXRvci5cclxuICAgIC8vIGJ0blMkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xyXG4gICAgYnRuRiQgPSBuZXcgU3ViamVjdDxUb3VjaEdlc3R1cmVFdmVudERhdGE+KCk7XHJcbiAgICBidG5MJCA9IG5ldyBTdWJqZWN0PFRvdWNoR2VzdHVyZUV2ZW50RGF0YT4oKTtcclxuICAgIGJ0blIkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xyXG4gICAgYnRuQiQgPSBuZXcgU3ViamVjdDxUb3VjaEdlc3R1cmVFdmVudERhdGE+KCk7XHJcbiAgICBidG5TJCA9IG5ldyBTdWJqZWN0PFRvdWNoR2VzdHVyZUV2ZW50RGF0YT4oKTtcclxuICAgIGlucHV0U3BlZWQkID0gbmV3IFN1YmplY3Q8RXZlbnQ+KCk7XHJcbiAgICBkaXNUb1dhbGwkID0gbmV3IFN1YmplY3Q8RXZlbnQ+KCk7XHJcbiAgICBhdXRvUGlsb3QkID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gICAgLy8gQFZpZXdDaGlsZCgnYnRuRicsIHsgc3RhdGljOiB0cnVlIH0pIGJ0bkY6IEVsZW1lbnRSZWY7XHJcbiAgICAvLyBAVmlld0NoaWxkKCdidG5MJywgeyBzdGF0aWM6IHRydWUgfSkgYnRuTDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBtb3ZlQ2FyKHRvcGljOnN0cmluZywgczogSXJvYm90U3RhdGUpOiBhbnkge1xyXG4gICAgICAgIC8vIGlmIG5vIHJldHVybiBoZXJlLCBpdCB3aWxsIGZpcmUgYW4gZXJyb3IgYXQgcnVudGltZS4gZG9uJ3Qga25vdyB3aHk/XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMubXF0dC5jYWxsQXJlc3Qocy5hdXRvUGlsb3QgPT09IHRydWUgPyBjbWRFbnVtLkFVVE8gOiBzLmRpcmVjdGlvbiwgcy5zcGVlZC50b1N0cmluZygpKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnb2luZyB0byBtb3ZlIGNhciEnKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5tcXR0LnB1Ymxpc2godG9waWMsIHMpO1xyXG4gICAgfVxyXG4gICAgLy8gd2hlbiB0YXAgb24gYnV0dG9uLCB0aGVyZSBhIGRvd24sIG1hbnkgbW92ZS4uLiBhbiB1cCBldmVudHMuXHJcbiAgICByb2JvdENvbW1hbmRzJCA9IG1lcmdlKFxyXG4gICAgICAgIC8vIHRoaXMuYnRuUyQucGlwZSggbWFwKGUgPT4gKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AgfSkpKSxcclxuICAgICAgICB0aGlzLmJ0bkYkLnBpcGUoXHJcbiAgICAgICAgICAgIC8vIGUuYWN0aW9uOiBtb3ZlLCBjYW5jZWwgZG93biwgdXAuXHJcbiAgICAgICAgICAgIGZpbHRlcihlID0+IGUuYWN0aW9uICE9PSAnbW92ZScpLFxyXG4gICAgICAgICAgICBtYXAoKGU6IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSkgPT4gZS5hY3Rpb24gPT09ICd1cCcgPyAoeyBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCB9KSA6ICh7IGRpcmVjdGlvbjogY21kRW51bS5GT1JXQVJEIH0pXHJcbiAgICAgICAgICAgICkpLFxyXG5cclxuICAgICAgICB0aGlzLmJ0bkIkLnBpcGUoXHJcbiAgICAgICAgICAgIGZpbHRlcihlID0+IGUuYWN0aW9uICE9PSAnbW92ZScpLFxyXG4gICAgICAgICAgICBtYXAoKGU6IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSkgPT4gZS5hY3Rpb24gPT09ICd1cCcgPyAoeyBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCB9KSA6ICh7IGRpcmVjdGlvbjogY21kRW51bS5CQUNLIH0pXHJcbiAgICAgICAgICAgICkpLFxyXG4gICAgICAgIHRoaXMuYnRuTCQucGlwZShcclxuICAgICAgICAgICAgZmlsdGVyKGUgPT4gZS5hY3Rpb24gIT09ICdtb3ZlJyksXHJcbiAgICAgICAgICAgIG1hcChlID0+IGUuYWN0aW9uID09PSAndXAnID8gKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AgfSkgOiAoeyBkaXJlY3Rpb246IGNtZEVudW0uTEVGVCB9KVxyXG4gICAgICAgICAgICApKSxcclxuICAgICAgICB0aGlzLmJ0blIkLnBpcGUoXHJcbiAgICAgICAgICAgIGZpbHRlcihlID0+IGUuYWN0aW9uICE9PSAnbW92ZScpLFxyXG4gICAgICAgICAgICBtYXAoZSA9PiBlLmFjdGlvbiA9PT0gJ3VwJyA/ICh7IGRpcmVjdGlvbjogY21kRW51bS5TVE9QIH0pIDogKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlJJR0hUIH0pXHJcbiAgICAgICAgICAgICkpLFxyXG4gICAgICAgIC8vIGNhciBzcGVlZCAoMC0yNTUpXHJcbiAgICAgICAgdGhpcy5pbnB1dFNwZWVkJC5waXBlKFxyXG4gICAgICAgICAgICAvL3RhcChjb25zb2xlLmxvZyksXHJcbiAgICAgICAgICAgIC8vIHRhcChuID0+IGNvbnNvbGUubG9nKCdzcGVlZDogJyArIG4pKSksXHJcbiAgICAgICAgICAgIGZpbHRlcihuID0+IG4gIT09IHVuZGVmaW5lZCksXHJcbiAgICAgICAgICAgIGlucHV0VG9WYWx1ZSgpLFxyXG4gICAgICAgICAgICBtYXAobiA9PiAoeyBzcGVlZDogbiB9KSlcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICB0aGlzLmRpc1RvV2FsbCQucGlwZShpbnB1dFRvVmFsdWUoKSwgbWFwKG4gPT4gKHsgZGlzVG9XYWxsOiBuIH0pKSksXHJcbiAgICAgICAgdGhpcy5hdXRvUGlsb3QkLnBpcGUoXHJcbiAgICAgICAgICAgIC8vIHRhcChuPT5jb25zb2xlLmxvZyhuLmFjdGlvbikpLFxyXG4gICAgICAgICAgICBtYXAobiA9PiAoeyBhdXRvUGlsb3Q6IG4gPyAxIDogMCB9KSkpXHJcbiAgICApLnBpcGUoXHJcbiAgICAgICAgLy8gZGVib3VuY2VUaW1lKDUwMClcclxuICAgIClcclxuXHJcbiAgICByb2JvdFN0YXRlJDogT2JzZXJ2YWJsZTxJcm9ib3RTdGF0ZT4gPSB0aGlzLnJvYm90Q29tbWFuZHMkXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgIHN0YXJ0V2l0aCh0aGlzLmluaXRpYWxSb2JvdFN0YXRlKSxcclxuICAgICAgICAgICAgLy8gKiogdG91Y2ggZXZlbnQgJ21vdmUnIGtlZXBzIGJlaW5nIGZpcmVkIGFzIGxvbmcgYXMgbm90IHJlbGVhc2luZy5cclxuXHJcbiAgICAgICAgICAgIHNjYW4oKHN0YXRlOiBJcm9ib3RTdGF0ZSwgY29tbWFuZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh7IC4uLnN0YXRlLCAuLi5jb21tYW5kIH0pO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgLy8gZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgICAgICAgICAgLy8gZGlzdGluY3RVbnRpbENoYW5nZWQoKHByZXY6IElyb2JvdFN0YXRlLCBjdXJyOiBJcm9ib3RTdGF0ZSkgPT4gcHJldi5kaXJlY3Rpb24gPT09IGN1cnIuZGlyZWN0aW9uKSxcclxuICAgICAgICAgICAgc2hhcmVSZXBsYXkoMSlcclxuICAgICAgICApO1xyXG5cclxuICAgIGRpcmVjdGlvbiQgPSB0aGlzLnJvYm90U3RhdGUkLnBpcGUoc2VsZWN0RGlzdGluY3RTdGF0ZSgnZGlyZWN0aW9uJykpO1xyXG4gICAgbmF2TW9kZSQgPSB0aGlzLnJvYm90U3RhdGUkLnBpcGUoc2VsZWN0RGlzdGluY3RTdGF0ZSgnYXV0b1BpbG90JykpO1xyXG5cclxuICAgIC8vICoqIGRpc2NhcmQgZW1pdHRlZCB2YWx1ZXMgdGhhdCB0YWtlIDwgMXMgY296IGlucHV0dmFsdWUga2VlcHMgZmlyaW5nIHdoZW4gc2xpZGluZyBvbiBzbGlkZXIuXHJcbiAgICBzcGVlZCQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMucm9ib3RTdGF0ZSQucGlwZShzZWxlY3REaXN0aW5jdFN0YXRlKCdzcGVlZCcpKS5waXBlKGRlYm91bmNlVGltZSgxMDAwKSk7XHJcblxyXG4gICAgbmF2aWdhdGlvbiQgPSBjb21iaW5lTGF0ZXN0KHRoaXMuZGlyZWN0aW9uJCwgdGhpcy5uYXZNb2RlJCwgdGhpcy5zcGVlZCQpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgIC8vIHdpdGhMYXRlc3RGcm9tIHRha2VzIDIgb2JzJCwgaW4gdGhpcyBjYXNlIHdlIGlnbm9yZSAxc3Qgb25lKGRpcmVjdGlvbiQpLCBhbmQgdGFrZSBzdGF0ZSQgb25seVxyXG4gICAgICAgICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLnJvYm90U3RhdGUkLCAoXywgcykgPT4gcyksXHJcbiAgICAgICAgICAgIC8qICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRhcCgoczogSXJvYm90U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHMuZGlyZWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ2FyKHMpO1xyXG4gICAgICAgICAgICB9KSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAvLyByZXBsYWNlIHRhcCB3LyBleGhhdXN0TWFwIHNvIGFueSBjb21pbmcgZGlyZWN0aW9uIGV2ZW50IHdpbGwgYmUgaWdub3JlIGlmIG1vdmVDYXIgaXNuJ3QgY29tcGxldGVkLiBcclxuICAgICAgICAgICAgLy8gdGFwKCBjb25zb2xlLmxvZygncy5kaXJlY3Rpb24nKSApLFxyXG4gICAgICAgICAgICAvLyB0aHJvdHRsZVRpbWUoMTUwMCksXHJcbiAgICAgICAgICAgIGRlYm91bmNlVGltZSgxNTAwKSxcclxuICAgICAgICAgICAgLy8gc3dpdGNobWFwIGlzIG9ubHkgZm9yIHN3aXRjaGluZyBvYnMkIHRvIGFub3RoZXIgb2JzJC4gd2hlcmVhcyBpbiBoZXJlIHMgaXNuJ3Qgb2JzJFxyXG4gICAgICAgICAgICBtYXAoKHM6IElyb2JvdFN0YXRlKSA9PiB0aGlzLm1vdmVDYXIoJ21vdmVDYXInLCBzKSlcclxuICAgICAgICApXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtcXR0OiBNcXR0UHJvdmlkZXIpIHtcclxuICAgICAgICAvLyB0aGlzLnJvYm90U3RhdGUkLnN1YnNjcmliZShjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgLy8gdGhpcy5kaXJlY3Rpb24kLnN1YnNjcmliZShjb25zb2xlLmxvZyk7ICAgICAgIFxyXG4gICAgICAgIC8vICoqIHRoaXMgY29uc29sZS5sb2cgc2hvd3MgZXZlcnl0aGluZyFcclxuICAgICAgICB0aGlzLm5hdlN1YnNjcmlwdGlvbiA9IHRoaXMubmF2aWdhdGlvbiQuc3Vic2NyaWJlKChyZXM6IG51bWJlcikgPT4geyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBzZWUgaWYgaW5pdCBodHRwIHJlcXVlc3Qgc3VjY2Vzc2Z1bGx5LlxyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICBpZiAocmVzICE9IDIwMCApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KFwiQ2Fubm90IGNvbm5lY3QgdG8gdGhlIGNhciFcIikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gYWxlcnQocmVzLm1lc3NhZ2UrcmVzLmlkKTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgKi8gICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhpcy5yb2JvdENvbW1hbmRzJC5zdWJzY3JpYmUoY29uc29sZS5sb2cpOyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yb2JvdFN0YXRlJC5zdWJzY3JpYmUoKTtcclxuICAgICAgICAvLyB0aGlzLm5hdk1vZGUkLnN1YnNjcmliZShjb25zb2xlLmxvZyk7XHJcbiAgICB9XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5hdlN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ob21lLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnQnO1xyXG5pbXBvcnQgeyBNcXR0UHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9tcXR0L21xdHQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFsgICAgICAgXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIEhvbWVSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgSG9tZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIE1xdHRQcm92aWRlclxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBVbmFyeUZ1bmN0aW9uLCBwaXBlLCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIHBsdWNrLCBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3REaXN0aW5jdFN0YXRlPFQsIEk+KGtleTogc3RyaW5nKTogVW5hcnlGdW5jdGlvbjxPYnNlcnZhYmxlPFQ+LCBPYnNlcnZhYmxlPEk+PiB7XHJcbiAgICByZXR1cm4gcGlwZShcclxuICAgICAgICBwbHVjazxULCBJPihrZXkpLFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkPEk+KClcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnB1dFRvVmFsdWUoZGVmYXVsdFZhbHVlOiBudW1iZXIgPSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHBpcGUoXHJcbiAgICAgICAgICAgIG1hcCgoZXZlbnQ6IGFueSk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBldmVudCA/IHBhcnNlSW50KGV2ZW50LnZhbHVlLCAxMCkgOiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHBhcnNlZCA9PT0gMCB8fCBwYXJzZWQpID8gcGFyc2VkIDogZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4iLCIvLyBHRVQgaHR0cHM6Ly9hcGkudGhpbmdzcGVhay5jb20vdXBkYXRlP2FwaV9rZXk9R1UzVDJDVlZIWFJaVVdIUSZmaWVsZDE9MFxyXG5leHBvcnQgY2xhc3MgQ29uZmlnIHtcclxuICAgIC8vIHN0YXRpYyBhcGlVcmwgPSBcImh0dHBzOi8vYXBpLnRoaW5nc3BlYWsuY29tL1wiO1xyXG4gICAgLy8gc3RhdGljIGFwaUtleSA9IFwiR1UzVDJDVlZIWFJaVVdIUVwiO1xyXG5cclxuICAgIC8vIHN0YXRpYyBhcGlVcmwgPSAnaHR0cHM6Ly9jbG91ZC5hcmVzdC5pbyc7ICBcclxuICAgIHN0YXRpYyBhcGlVcmwgPSAnaHR0cDovL2Fqb2FuLmNvbSc7ICBcclxuICAgIHN0YXRpYyBkZXZpY2VJZCA9ICcxMDc5MjknOyAvLyB0aGUgY2FyJ3MgaWQgcmVnaXN0ZXJkIGluIGFyZXN0IHdlYnNpdGUgICBcclxuICB9XHJcblxyXG4gIC8vIHByaXZhdGUgYXBpS2V5ID0gJzFvYnF6Y2g4eDNlN2U2MjYnOyAgXHJcbiAgLy8gcHJpdmF0ZSB1cmwgPSAnaHR0cHM6Ly9jbG91ZC5hcmVzdC5pbzsnXHJcbiAgLy8gZS5nLiwgaHR0cHM6Ly9jbG91ZC5hcmVzdC5pby8ke2RldklkfS9mb3J3YXJkIiwiLyogVGhpcyBkZWNvcmF0b3IgZGVub3RlcyB0aGlzIGNsYXNzIGFzIGEgY2FuZGlkYXRlIGZvciBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBtZWNoYW5pc20uIEZvciBub3cganVzdCB0aGluayBvZiBhZGRpbmdcclxuKiogdGhlIEBJbmplY3RhYmxlIGFzIGEgcmVxdWlyZWQgY29udmVudGlvbiBmb3IgYWxsIHNlcnZpY2VzIHRoYXQgeW91IHdyaXRlXHJcbiovXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHRhcCwgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yLCBmcm9tLCBwaXBlIH0gZnJvbSAncnhqcyc7XHJcbi8vaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlLCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHsgSXJvYm90U3RhdGUgfSBmcm9tICd+L2hvbWUvbW9kZWxzL3JvYm90U3RhdGUnO1xyXG5pbXBvcnQgeyBnZXRGaWxlLCBnZXRJbWFnZSwgZ2V0SlNPTiwgZ2V0U3RyaW5nLCByZXF1ZXN0LCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNcXR0UHJvdmlkZXIge1xyXG5cclxuICAvLyBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XHJcblxyXG5cclxuICAvLyBVUkxzIGFyZSBzdHJpbmdzIGFuZCBhbGwgdmFsdWVzIGluIGEgVVJMIGFyZSBzdHJpbmdzLiBXaGVuIHlvdSBzZWUgaT0wIGluIGEgVVJMLCAwIGlzIGEgc3RyaW5nLlxyXG4gIC8vIFdoZW4geW91IHNlZSBiPXRydWUsIHRydWUgaXMgYSBzdHJpbmcuIFdoZW4geW91IHNlZSBzPSwgdGhlIHZhbHVlIGlzIGFuIGVtcHR5IHN0cmluZy5cclxuICAvLyBwdWJsaXNoKGZuTmFtZTogc3RyaW5nLCBzOiBJcm9ib3RTdGF0ZSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgcHVibGlzaCh0b3BpYzogc3RyaW5nLCBzOiBJcm9ib3RTdGF0ZSk6IGFueSB7XHJcbiAgICAvLyBjb25zdCB1cmwgPSBgJHtDb25maWcuYXBpVXJsfS8ke0NvbmZpZy5kZXZpY2VJZH0vJHtmbk5hbWV9P3BhcmFtcz0ke3Muc3BlZWQudG9TdHJpbmcoKX0sJHtzLmRpc1RvV2FsbC50b1N0cmluZygpfSwke3MuZGlyZWN0aW9uLnRvU3RyaW5nKCl9LCR7cy5hdXRvUGlsb3QudG9TdHJpbmcoKX1gO1xyXG4gICAgY29uc3QgdXJsID0gYCR7Q29uZmlnLmFwaVVybH0vJHt0b3BpY30/cGF5bG9hZD0ke3Muc3BlZWQudG9TdHJpbmcoKX0sJHtzLmRpc1RvV2FsbC50b1N0cmluZygpfSwke3MuZGlyZWN0aW9uLnRvU3RyaW5nKCl9LCR7cy5hdXRvUGlsb3QudG9TdHJpbmcoKX1gO1xyXG4gICAgY29uc29sZS5sb2codXJsKTtcclxuICAgIC8vIHRoaXMubXNnID0gZm5OYW1lOyAvLyBmb3IgY3NzXHJcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHtDb25maWcuYXBpVXJsfS8ke0NvbmZpZy5kZXZpY2VJZH0vJHtmbk5hbWV9P2tleT0ke0NvbmZpZy5hcGlLZXl9YClcclxuICAgIC8vIGNvbnZlcnQgcHJvbWlzZSB0byBvYnNlcmFibGUgdmlhIGZyb21cclxuICAgIHJldHVybiBmcm9tKHJlcXVlc3Qoe3VybDogdXJsLCBtZXRob2Q6IFwiR0VUXCJ9KSlcclxuICAgICAgLnBpcGUobWFwKChyZXM6IEh0dHBSZXNwb25zZSkgPT4gcmVzLnN0YXR1c0NvZGUpKTtcclxuXHJcbiAgICAvKlxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKS5waXBlKFxyXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICApO1xyXG4gICAgKi9cclxuXHJcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHtDb25maWcuYXBpVXJsfXVwZGF0ZT9hcGlfa2V5PSR7Q29uZmlnLmFwaUtleX0mZmllbGQxPSR7Zm5OYW1lfWApXHJcbiAgICAvLy5waXBlKFxyXG4gICAgLy8gdGFwKGNvbnNvbGUubG9nKSxcclxuICAgIC8vY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgLy8pXHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAgY2FsbEFyZXN0KGZuTmFtZTogc3RyaW5nLCBzcGVlZDogU3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgY29uc3QgdXJsID0gYCR7Q29uZmlnLmFwaVVybH0vJHtDb25maWcuZGV2aWNlSWR9LyR7Zm5OYW1lfT9wYXJhbXM9JHtzcGVlZH1gO1xyXG4gICAgICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gICAgICAvLyB0aGlzLm1zZyA9IGZuTmFtZTsgLy8gZm9yIGNzc1xyXG4gICAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHtDb25maWcuYXBpVXJsfS8ke0NvbmZpZy5kZXZpY2VJZH0vJHtmbk5hbWV9P2tleT0ke0NvbmZpZy5hcGlLZXl9YClcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKS5waXBlKFxyXG4gICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcclxuICAgICAgKTtcclxuICAgICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7Q29uZmlnLmFwaVVybH11cGRhdGU/YXBpX2tleT0ke0NvbmZpZy5hcGlLZXl9JmZpZWxkMT0ke2ZuTmFtZX1gKVxyXG4gICAgICAvLy5waXBlKFxyXG4gICAgICAvLyB0YXAoY29uc29sZS5sb2cpLFxyXG4gICAgICAvL2NhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcclxuICAgICAgLy8pXHJcbiAgICB9XHJcbiAgXHJcbiAgICBjYWxsQXJlc3RXaXRoUGFyYW0oZm5OYW1lOiBzdHJpbmcsIHNwZWVkOiBudW1iZXIsIGRpc3RUb1dhbGw6IG51bWJlciwgZGVsYXk6IHN0cmluZykge1xyXG4gICAgICBcclxuICAgICAgLy8gY29uc29sZS5sb2coJ3NwZWVkOiAnLCBzcGVlZCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJsfS8ke3RoaXMuZGV2aWNlX2lkfS8ke2ZuTmFtZX0/a2V5PSR7dGhpcy5hcGlLZXl9JnBhcmFtcz0ke3NwZWVkfSwke2Rpc3RUb1dhbGx9LCR7ZGVsYXl9YClcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHRhcChjb25zb2xlLmxvZyksXHJcbiAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpIHtcclxuICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICBlcnJvck1lc3NhZ2UgPSBgRXJyb3I6ICR7ZXJyb3IuZXJyb3IubWVzc2FnZX1gO1xyXG5cclxuICAgIC8vIHNlcnZlci1zaWRlIGVycm9yXHJcbiAgICBlcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2UgKyBgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9XFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWA7XHJcblxyXG4gICAgLy8gd2luZG93LmFsZXJ0KGVycm9yTWVzc2FnZSk7XHJcbiAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gIH1cclxuICAqL1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=