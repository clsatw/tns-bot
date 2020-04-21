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

module.exports = ".home-panel{\r\n    vertical-align: center; \r\n    font-size: 20;\r\n    margin: 15;\r\n}\r\n\r\n.description-label{\r\n    margin-bottom: 15;\r\n}\r\n.stopBtn,\r\n.btn {\r\n    margin:15px;\r\n    border-radius: 80;\r\n    background-color: lightgreen;\r\n    color: darkslategray;\r\n}\r\n\r\n.stopBtn{\r\n    background-color: darkgray;\r\n    color: snow;\r\n}\r\n\r\n.btn:pressed{\r\n    transform: scale(1.2, 1.2);\r\n    background-color: darkgreen;\r\n    color: lightslategray;\r\n}\r\n.btn:disabled{\r\n    background-color: linen\r\n}\r\n.switch{\r\n    color: darkorange;\r\n    background-color: darkred;    \r\n}\r\n\r\nActionBar {\r\n    text-align: center;\r\n    background-color:  #3C5AFD;\r\n    color: white;\r\n}\r\n"

/***/ }),

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<Page class='page'>\n    <Page.actionBar>\n        <ActionBar class='action-bar' title=\"小車識別碼: {{devId}}\">            \n            <ActionItem tap=\"getDevId\" text=\"與小車連綫\" \n            ios.systemIcon=\"16\" ios.position=\"right\"\n            android.position=\"popup\"></ActionItem>\n        </ActionBar>\n    </Page.actionBar>\n    <ScrollView>\n        <StackLayout verticalAlignment='center' horizontalAlignment='center'>\n            <GridLayout height=\"100%\"  horizontalAlignment=\"center\" columns=\"auto auto auto\" rows=\"auto,*,auto\"  backgroundColor=\"khaki\">\n                <Button class='btn' (touch)=\"btnF$.next($event)\" text='前進' isEnabled=\"{{(this.navMode$|async)? 'false':'true'}}\" row='0' col='1'></Button>\n                <Button class='btn' (touch)=\"btnL$.next($event)\" text='左轉' isEnabled=\"{{(this.navMode$|async)? 'false':'true'}}\" row='1' col='0'></Button>\n                <ActivityIndicator row='1' col='1' [busy]='this.navMode$ | async' class=\"activity-indicator\">\n                </ActivityIndicator>\n                <Button visibility=\"{{(this.navMode$|async)? 'collapse':'visible'}}\" class='stopBtn'\n                    (touch)=\"btnS$.next($event)\" text='' row='1' col='1'></Button>\n                <Button class='btn' (touch)=\"btnR$.next($event)\" text='右轉' isEnabled=\"{{(this.navMode$|async)? 'false':'true'}}\" row='1' col='2'></Button>\n                <Button class='btn' (touch)=\"btnB$.next($event)\" text='後退' isEnabled=\"{{(this.navMode$|async)? 'false':'true'}}\" row='2' col='1'></Button>\n            </GridLayout>\n            <label class=\"hr-dark m-10\"></label>\n\n            <label textAlignment='center' textWrap='true' text='離障礙物最短距離'\n                class='text-primary h3 description-label'></label>\n            <Slider (valueChange)=\"disToWall$.next($event)\" value=\"10\" minValue=\"10\" maxValue=\"100\" class='slider'>\n            </Slider>\n            <label textAlignment='center' textWrap='true' text='速度' class='h3 description-label'></label>\n            <Slider (valueChange)=\"inputSpeed$.next($event)\" value=\"50\" minValue=\"10\" maxValue=\"255\"></Slider>\n            <label class='text-danger' textAlignment='center' text='自駕模式' textWrap='true'></label>\n            <Switch checked=\"false\" (checkedChange)=\"autoPilot$.next($event.value)\" class=\"switch\" horizontalAlignment=\"center\"></Switch>\n        </StackLayout>\n    </ScrollView>\n</Page>"

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
        // when tap on button, a down, many move... an up events trigged.
        this.robotCommands$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.btnF$.pipe(
        // e.action: move, cancel down, up.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (e) { return e.action !== 'move'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) { return e.action === 'up' ? ({ direction: 0 /* STOP */ }) : ({ direction: 1 /* FORWARD */ }); })), this.btnB$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (e) { return e.action !== 'move'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) { return e.action === 'up' ? ({ direction: 0 /* STOP */ }) : ({ direction: 2 /* BACK */ }); })), this.btnL$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (e) { return e.action !== 'move'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) { return e.action === 'up' ? ({ direction: 0 /* STOP */ }) : ({ direction: 4 /* LEFT */ }); })), this.btnR$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (e) { return e.action !== 'move'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) { return e.action === 'up' ? ({ direction: 0 /* STOP */ }) : ({ direction: 3 /* RIGHT */ }); })), 
        // car speed (0-255)
        this.inputSpeed$.pipe(
        //tap(console.log),
        // tap(n => console.log('speed: ' + n))),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (n) { return n !== undefined; }), Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["inputToValue"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (n) { return ({ speed: n }); })), this.disToWall$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (n) { return n !== undefined; }), Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["inputToValue"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (n) { return ({ disToWall: n }); })), this.autoPilot$.pipe(
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
        this.direction$ = this.robotState$.pipe(Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["selectDistinctState"])('direction'));
        // ** discard emitted values that take < 1s coz inputvalue keeps firing when sliding on slider.
        this.speed$ = this.robotState$.pipe(Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["selectDistinctState"])('speed')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000));
        this.obstacleDistance$ = this.robotState$.pipe(Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["selectDistinctState"])('disToWall')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000));
        // any of the observables emits a vaule, group the latest change together
        this.navigation$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.direction$, this.navMode$, this.obstacleDistance$, this.speed$)
            .pipe(
        // withLatestFrom takes 2 obs$, in this case we ignore 1st one(direction$), and take state$ only
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.robotState$, function (_, s) { return s; }), 
        // replace tap w/ exhaustMap so any coming direction event will be ignore if moveCar isn't completed. 
        // tap( console.log('s.direction') ),
        // debounce is to prevent sneding stop right after direction cmd if slightly touch
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(100), 
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
    HomeComponent.prototype.getDevId = function () {
        var _this = this;
        this.mqtt.sub('devId').subscribe(function (data) {
            _this.devId = data;
            // console.log('devId: ', this.devId);
            // dialogs.alert(this.devId);
        });
    };
    HomeComponent.prototype.moveCar = function (s) {
        // if no return here, it will fire an error at runtime. don't know why?
        // return this.mqtt.callArest(s.autoPilot === true ? cmdEnum.AUTO : s.direction, s.speed.toString()) 
        return this.mqtt.publish('moveCar', this.devId, s);
    };
    HomeComponent.prototype.ngOnInit = function () {
        // this.robotCommands$.subscribe(console.log);  
        // start to receive commands  
        this.getDevId();
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
/* custom operator. Hint: use Observable.create inside the custom operator
const filterOdd = (src$: Observable<any>)=>{
    return new Observable(observer=>{
        return src.subscribe(value=>{
            if (value%2 ===0){
                observer.next(value)
            }
        },
        (err)=>{
            observer.error(err);
        },
        ()=>{observer.complete()}
        )
    })
}
*/ 


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
    ;
    // URLs are strings and all values in a URL are strings. When you see i=0 in a URL, 0 is a string.
    // When you see b=true, true is a string. When you see s=, the value is an empty string.
    // publish(fnName: string, s: IrobotState): Observable<any> {
    MqttProvider.prototype.publish = function (topic, devId, s) {
        // const url = `${Config.apiUrl}/${Config.deviceId}/${fnName}?params=${s.speed.toString()},${s.disToWall.toString()},${s.direction.toString()},${s.autoPilot.toString()}`;
        var url = _config__WEBPACK_IMPORTED_MODULE_3__["Config"].apiUrl + "/" + topic + "?devId=" + devId + "&payload=" + s.speed.toString() + "," + s.disToWall.toString() + "," + s.direction.toString() + "," + s.autoPilot.toString();
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
    MqttProvider.prototype.sub = function (topic) {
        var url = _config__WEBPACK_IMPORTED_MODULE_3__["Config"].apiUrl + "/" + topic;
        console.log(url);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({ url: url, method: "GET" }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.content.toString(); }));
    };
    MqttProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MqttProvider);
    return MqttProvider;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9ob21lL29wZXJhdG9ycy9zZWxlY3REaXN0aW5jdFN0YXRlLnRzIiwid2VicGFjazovLy8uL2hvbWUvcHJvdmlkZXJzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9ob21lL3Byb3ZpZGVycy9tcXR0L21xdHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFdEI7QUFFakQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw2REFBYSxFQUFFO0NBQ3pDLENBQUM7QUFNRjtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBSjdCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGlCQUFpQixDQUFJO0lBQUQsd0JBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ2Q5Qiw4QkFBOEIsK0JBQStCLHVCQUF1QixtQkFBbUIsS0FBSywyQkFBMkIsMEJBQTBCLEtBQUssdUJBQXVCLG9CQUFvQiwwQkFBMEIscUNBQXFDLDZCQUE2QixLQUFLLGlCQUFpQixtQ0FBbUMsb0JBQW9CLEtBQUsscUJBQXFCLG1DQUFtQyxvQ0FBb0MsOEJBQThCLEtBQUssa0JBQWtCLG9DQUFvQyxZQUFZLDBCQUEw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Ozs7VUFJRTtRQUVGLDJGQUEyRjtRQUMzRixRQUFRO1FBQ1Isb0JBQW9CO1FBQ3BCLDhCQUE4QjtRQUM5QixHQUFHO0lBQ0wsQ0FBQztJQUVELDBCQUFHLEdBQUgsVUFBSSxLQUFhO1FBQ2YsSUFBTSxHQUFHLEdBQU0sOENBQU0sQ0FBQyxNQUFNLFNBQUksS0FBTyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsT0FBTyxpREFBSSxDQUFDLHFFQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQzlDLElBQUksQ0FBQywwREFBRyxDQUFDLFVBQUMsR0FBaUIsSUFBSyxVQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUF0QixDQUFzQixDQUFDLENBQUM7SUFDN0QsQ0FBQztJQW5DVSxZQUFZO1FBRHhCLGdFQUFVLEVBQUU7O09BQ0EsWUFBWSxDQWtEeEI7SUFBRCxtQkFBQztDQUFBO0FBbER3QiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5ob21lLXBhbmVse1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyBcXHJcXG4gICAgZm9udC1zaXplOiAyMDtcXHJcXG4gICAgbWFyZ2luOiAxNTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uLWxhYmVse1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXHJcXG59XFxyXFxuLnN0b3BCdG4sXFxyXFxuLmJ0biB7XFxyXFxuICAgIG1hcmdpbjoxNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4MDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXHJcXG4gICAgY29sb3I6IGRhcmtzbGF0ZWdyYXk7XFxyXFxufVxcclxcblxcclxcbi5zdG9wQnRue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXHJcXG4gICAgY29sb3I6IHNub3c7XFxyXFxufVxcclxcblxcclxcbi5idG46cHJlc3NlZHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcXHJcXG4gICAgY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xcclxcbn1cXHJcXG4uYnRuOmRpc2FibGVke1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW5lblxcclxcbn1cXHJcXG4uc3dpdGNoe1xcclxcbiAgICBjb2xvcjogZGFya29yYW5nZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDsgICAgXFxyXFxufVxcclxcblxcclxcbkFjdGlvbkJhciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICMzQzVBRkQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgY2xhc3M9J3BhZ2UnPlxcbiAgICA8UGFnZS5hY3Rpb25CYXI+XFxuICAgICAgICA8QWN0aW9uQmFyIGNsYXNzPSdhY3Rpb24tYmFyJyB0aXRsZT1cXFwi5bCP6LuK6K2Y5Yil56K8OiB7e2RldklkfX1cXFwiPiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxBY3Rpb25JdGVtIHRhcD1cXFwiZ2V0RGV2SWRcXFwiIHRleHQ9XFxcIuiIh+Wwj+i7iumAo+e2q1xcXCIgXFxuICAgICAgICAgICAgaW9zLnN5c3RlbUljb249XFxcIjE2XFxcIiBpb3MucG9zaXRpb249XFxcInJpZ2h0XFxcIlxcbiAgICAgICAgICAgIGFuZHJvaWQucG9zaXRpb249XFxcInBvcHVwXFxcIj48L0FjdGlvbkl0ZW0+XFxuICAgICAgICA8L0FjdGlvbkJhcj5cXG4gICAgPC9QYWdlLmFjdGlvbkJhcj5cXG4gICAgPFNjcm9sbFZpZXc+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgdmVydGljYWxBbGlnbm1lbnQ9J2NlbnRlcicgaG9yaXpvbnRhbEFsaWdubWVudD0nY2VudGVyJz5cXG4gICAgICAgICAgICA8R3JpZExheW91dCBoZWlnaHQ9XFxcIjEwMCVcXFwiICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGNvbHVtbnM9XFxcImF1dG8gYXV0byBhdXRvXFxcIiByb3dzPVxcXCJhdXRvLCosYXV0b1xcXCIgIGJhY2tncm91bmRDb2xvcj1cXFwia2hha2lcXFwiPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPSdidG4nICh0b3VjaCk9XFxcImJ0bkYkLm5leHQoJGV2ZW50KVxcXCIgdGV4dD0n5YmN6YCyJyBpc0VuYWJsZWQ9XFxcInt7KHRoaXMubmF2TW9kZSR8YXN5bmMpPyAnZmFsc2UnOid0cnVlJ319XFxcIiByb3c9JzAnIGNvbD0nMSc+PC9CdXR0b24+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9J2J0bicgKHRvdWNoKT1cXFwiYnRuTCQubmV4dCgkZXZlbnQpXFxcIiB0ZXh0PSflt6bovYknIGlzRW5hYmxlZD1cXFwie3sodGhpcy5uYXZNb2RlJHxhc3luYyk/ICdmYWxzZSc6J3RydWUnfX1cXFwiIHJvdz0nMScgY29sPScwJz48L0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIHJvdz0nMScgY29sPScxJyBbYnVzeV09J3RoaXMubmF2TW9kZSQgfCBhc3luYycgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+XFxuICAgICAgICAgICAgICAgIDwvQWN0aXZpdHlJbmRpY2F0b3I+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmlzaWJpbGl0eT1cXFwie3sodGhpcy5uYXZNb2RlJHxhc3luYyk/ICdjb2xsYXBzZSc6J3Zpc2libGUnfX1cXFwiIGNsYXNzPSdzdG9wQnRuJ1xcbiAgICAgICAgICAgICAgICAgICAgKHRvdWNoKT1cXFwiYnRuUyQubmV4dCgkZXZlbnQpXFxcIiB0ZXh0PScnIHJvdz0nMScgY29sPScxJz48L0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz0nYnRuJyAodG91Y2gpPVxcXCJidG5SJC5uZXh0KCRldmVudClcXFwiIHRleHQ9J+WPs+i9iScgaXNFbmFibGVkPVxcXCJ7eyh0aGlzLm5hdk1vZGUkfGFzeW5jKT8gJ2ZhbHNlJzondHJ1ZSd9fVxcXCIgcm93PScxJyBjb2w9JzInPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPSdidG4nICh0b3VjaCk9XFxcImJ0bkIkLm5leHQoJGV2ZW50KVxcXCIgdGV4dD0n5b6M6YCAJyBpc0VuYWJsZWQ9XFxcInt7KHRoaXMubmF2TW9kZSR8YXN5bmMpPyAnZmFsc2UnOid0cnVlJ319XFxcIiByb3c9JzInIGNvbD0nMSc+PC9CdXR0b24+XFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiaHItZGFyayBtLTEwXFxcIj48L2xhYmVsPlxcblxcbiAgICAgICAgICAgIDxsYWJlbCB0ZXh0QWxpZ25tZW50PSdjZW50ZXInIHRleHRXcmFwPSd0cnVlJyB0ZXh0PSfpm6LpmpznpJnnianmnIDnn63ot53pm6InXFxuICAgICAgICAgICAgICAgIGNsYXNzPSd0ZXh0LXByaW1hcnkgaDMgZGVzY3JpcHRpb24tbGFiZWwnPjwvbGFiZWw+XFxuICAgICAgICAgICAgPFNsaWRlciAodmFsdWVDaGFuZ2UpPVxcXCJkaXNUb1dhbGwkLm5leHQoJGV2ZW50KVxcXCIgdmFsdWU9XFxcIjEwXFxcIiBtaW5WYWx1ZT1cXFwiMTBcXFwiIG1heFZhbHVlPVxcXCIxMDBcXFwiIGNsYXNzPSdzbGlkZXInPlxcbiAgICAgICAgICAgIDwvU2xpZGVyPlxcbiAgICAgICAgICAgIDxsYWJlbCB0ZXh0QWxpZ25tZW50PSdjZW50ZXInIHRleHRXcmFwPSd0cnVlJyB0ZXh0PSfpgJ/luqYnIGNsYXNzPSdoMyBkZXNjcmlwdGlvbi1sYWJlbCc+PC9sYWJlbD5cXG4gICAgICAgICAgICA8U2xpZGVyICh2YWx1ZUNoYW5nZSk9XFxcImlucHV0U3BlZWQkLm5leHQoJGV2ZW50KVxcXCIgdmFsdWU9XFxcIjUwXFxcIiBtaW5WYWx1ZT1cXFwiMTBcXFwiIG1heFZhbHVlPVxcXCIyNTVcXFwiPjwvU2xpZGVyPlxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0ndGV4dC1kYW5nZXInIHRleHRBbGlnbm1lbnQ9J2NlbnRlcicgdGV4dD0n6Ieq6aeV5qih5byPJyB0ZXh0V3JhcD0ndHJ1ZSc+PC9sYWJlbD5cXG4gICAgICAgICAgICA8U3dpdGNoIGNoZWNrZWQ9XFxcImZhbHNlXFxcIiAoY2hlY2tlZENoYW5nZSk9XFxcImF1dG9QaWxvdCQubmV4dCgkZXZlbnQudmFsdWUpXFxcIiBjbGFzcz1cXFwic3dpdGNoXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPjwvU3dpdGNoPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cIiIsIi8vIGltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIlxyXG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlLCBtZXJnZSwgY29tYmluZUxhdGVzdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGV4aGF1c3RNYXAsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBzdGFydFdpdGgsIHNjYW4sIG1hcCwgc2hhcmVSZXBsYXksIHRhcCwgZmlsdGVyLCB3aXRoTGF0ZXN0RnJvbSwgZGVib3VuY2VUaW1lLCB0aHJvdHRsZVRpbWUsIHNraXBXaGlsZSwgdGFrZVdoaWxlLCBzd2l0Y2hNYXAsIGxhc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IElyb2JvdFN0YXRlLCBjbWRFbnVtIH0gZnJvbSBcIi4vbW9kZWxzL3JvYm90U3RhdGVcIjtcclxuaW1wb3J0IHsgc2VsZWN0RGlzdGluY3RTdGF0ZSwgaW5wdXRUb1ZhbHVlIH0gZnJvbSBcIi4vb3BlcmF0b3JzL3NlbGVjdERpc3RpbmN0U3RhdGVcIjtcclxuaW1wb3J0IHsgVG91Y2hHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSAndWkvZ2VzdHVyZXMnO1xyXG5pbXBvcnQgeyBNcXR0UHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9tcXR0L21xdHQnO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuXHJcbi8vIGltcG9ydCB7IGdldEV2ZW50T3JHZXN0dXJlTmFtZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC9hbmd1bGFyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIHByb3ZpZGVyczogW01xdHRQcm92aWRlcl0sXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgbmF2U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgICBlcnJvck1lc3NhZ2UgPSAnV2lmaSDpgZnmjqfou4onO1xyXG4gICAgZGV2SWQgPSAnJztcclxuICAgIGluaXRpYWxSb2JvdFN0YXRlOiBJcm9ib3RTdGF0ZSA9IHtcclxuICAgICAgICBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCxcclxuICAgICAgICBzcGVlZDogNTAsXHJcbiAgICAgICAgZGlzVG9XYWxsOiAxMCxcclxuICAgICAgICBhdXRvUGlsb3Q6IDBcclxuICAgIH1cclxuICAgIC8vIGxhc3QgZXZlbnQgaXMgYWx3YXlzIHVwLCBzbyB0aGlzIGlzIGZpbHRlcmVkIGJ5IGRpc3RpbmN0VW50aWxDaGFuZ2Ugb3BlcmF0b3IuXHJcbiAgICAvLyBidG5TJCA9IG5ldyBTdWJqZWN0PFRvdWNoR2VzdHVyZUV2ZW50RGF0YT4oKTtcclxuICAgIGJ0bkYkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xyXG4gICAgYnRuTCQgPSBuZXcgU3ViamVjdDxUb3VjaEdlc3R1cmVFdmVudERhdGE+KCk7XHJcbiAgICBidG5SJCA9IG5ldyBTdWJqZWN0PFRvdWNoR2VzdHVyZUV2ZW50RGF0YT4oKTtcclxuICAgIGJ0bkIkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xyXG4gICAgYnRuUyQgPSBuZXcgU3ViamVjdDxUb3VjaEdlc3R1cmVFdmVudERhdGE+KCk7XHJcbiAgICBpbnB1dFNwZWVkJCA9IG5ldyBTdWJqZWN0PEV2ZW50PigpO1xyXG4gICAgZGlzVG9XYWxsJCA9IG5ldyBTdWJqZWN0PEV2ZW50PigpO1xyXG4gICAgYXV0b1BpbG90JCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICAgIC8vIEBWaWV3Q2hpbGQoJ2J0bkYnLCB7IHN0YXRpYzogdHJ1ZSB9KSBidG5GOiBFbGVtZW50UmVmO1xyXG4gICAgLy8gQFZpZXdDaGlsZCgnYnRuTCcsIHsgc3RhdGljOiB0cnVlIH0pIGJ0bkw6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgZ2V0RGV2SWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tcXR0LnN1YignZGV2SWQnKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2SWQgPSBkYXRhO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZGV2SWQ6ICcsIHRoaXMuZGV2SWQpO1xyXG4gICAgICAgICAgICAvLyBkaWFsb2dzLmFsZXJ0KHRoaXMuZGV2SWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVDYXIoczogSXJvYm90U3RhdGUpOiBhbnkge1xyXG4gICAgICAgIC8vIGlmIG5vIHJldHVybiBoZXJlLCBpdCB3aWxsIGZpcmUgYW4gZXJyb3IgYXQgcnVudGltZS4gZG9uJ3Qga25vdyB3aHk/XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMubXF0dC5jYWxsQXJlc3Qocy5hdXRvUGlsb3QgPT09IHRydWUgPyBjbWRFbnVtLkFVVE8gOiBzLmRpcmVjdGlvbiwgcy5zcGVlZC50b1N0cmluZygpKSBcclxuICAgICAgICByZXR1cm4gdGhpcy5tcXR0LnB1Ymxpc2goJ21vdmVDYXInLCB0aGlzLmRldklkLCBzKTtcclxuICAgIH1cclxuICAgIC8vIHdoZW4gdGFwIG9uIGJ1dHRvbiwgYSBkb3duLCBtYW55IG1vdmUuLi4gYW4gdXAgZXZlbnRzIHRyaWdnZWQuXHJcbiAgICByb2JvdENvbW1hbmRzJCA9IG1lcmdlKFxyXG4gICAgICAgIHRoaXMuYnRuRiQucGlwZShcclxuICAgICAgICAgICAgLy8gZS5hY3Rpb246IG1vdmUsIGNhbmNlbCBkb3duLCB1cC5cclxuICAgICAgICAgICAgZmlsdGVyKGUgPT4gZS5hY3Rpb24gIT09ICdtb3ZlJyksXHJcbiAgICAgICAgICAgIG1hcCgoZTogVG91Y2hHZXN0dXJlRXZlbnREYXRhKSA9PiBlLmFjdGlvbiA9PT0gJ3VwJyA/ICh7IGRpcmVjdGlvbjogY21kRW51bS5TVE9QIH0pIDogKHsgZGlyZWN0aW9uOiBjbWRFbnVtLkZPUldBUkQgfSlcclxuICAgICAgICAgICAgKSksXHJcbiAgICAgICAgdGhpcy5idG5CJC5waXBlKFxyXG4gICAgICAgICAgICBmaWx0ZXIoZSA9PiBlLmFjdGlvbiAhPT0gJ21vdmUnKSxcclxuICAgICAgICAgICAgbWFwKChlOiBUb3VjaEdlc3R1cmVFdmVudERhdGEpID0+IGUuYWN0aW9uID09PSAndXAnID8gKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AgfSkgOiAoeyBkaXJlY3Rpb246IGNtZEVudW0uQkFDSyB9KVxyXG4gICAgICAgICAgICApKSxcclxuICAgICAgICB0aGlzLmJ0bkwkLnBpcGUoXHJcbiAgICAgICAgICAgIGZpbHRlcihlID0+IGUuYWN0aW9uICE9PSAnbW92ZScpLFxyXG4gICAgICAgICAgICBtYXAoZSA9PiBlLmFjdGlvbiA9PT0gJ3VwJyA/ICh7IGRpcmVjdGlvbjogY21kRW51bS5TVE9QIH0pIDogKHsgZGlyZWN0aW9uOiBjbWRFbnVtLkxFRlQgfSlcclxuICAgICAgICAgICAgKSksXHJcbiAgICAgICAgdGhpcy5idG5SJC5waXBlKFxyXG4gICAgICAgICAgICBmaWx0ZXIoZSA9PiBlLmFjdGlvbiAhPT0gJ21vdmUnKSxcclxuICAgICAgICAgICAgbWFwKGUgPT4gZS5hY3Rpb24gPT09ICd1cCcgPyAoeyBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCB9KSA6ICh7IGRpcmVjdGlvbjogY21kRW51bS5SSUdIVCB9KVxyXG4gICAgICAgICAgICApKSxcclxuICAgICAgICAvLyBjYXIgc3BlZWQgKDAtMjU1KVxyXG4gICAgICAgIHRoaXMuaW5wdXRTcGVlZCQucGlwZShcclxuICAgICAgICAgICAgLy90YXAoY29uc29sZS5sb2cpLFxyXG4gICAgICAgICAgICAvLyB0YXAobiA9PiBjb25zb2xlLmxvZygnc3BlZWQ6ICcgKyBuKSkpLFxyXG4gICAgICAgICAgICBmaWx0ZXIobiA9PiBuICE9PSB1bmRlZmluZWQpLFxyXG4gICAgICAgICAgICBpbnB1dFRvVmFsdWUoKSxcclxuICAgICAgICAgICAgbWFwKG4gPT4gKHsgc3BlZWQ6IG4gfSkpXHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgdGhpcy5kaXNUb1dhbGwkLnBpcGUoXHJcbiAgICAgICAgICAgIGZpbHRlcihuID0+IG4gIT09IHVuZGVmaW5lZCksXHJcbiAgICAgICAgICAgIGlucHV0VG9WYWx1ZSgpLFxyXG4gICAgICAgICAgICBtYXAobiA9PiAoeyBkaXNUb1dhbGw6IG4gfSkpXHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgdGhpcy5hdXRvUGlsb3QkLnBpcGUoXHJcbiAgICAgICAgICAgIC8vIGRvbid0IGtub3cgaG93IHRvIHNlbmQgdHJ1ZSBvciBmYWxzZSBpbiBodHRwIHJlcXVlc3QsIHNvIGkgdXNlIDAgYW5kIDFcclxuICAgICAgICAgICAgbWFwKG4gPT4gKHsgYXV0b1BpbG90OiBuID8gMSA6IDAgfSkpKVxyXG4gICAgKVxyXG5cclxuICAgIHJvYm90U3RhdGUkOiBPYnNlcnZhYmxlPElyb2JvdFN0YXRlPiA9IHRoaXMucm9ib3RDb21tYW5kcyRcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgc3RhcnRXaXRoKHRoaXMuaW5pdGlhbFJvYm90U3RhdGUpLFxyXG4gICAgICAgICAgICAvLyAqKiB0b3VjaCBldmVudCAnbW92ZScga2VlcHMgYmVpbmcgZmlyZWQgYXMgbG9uZyBhcyBub3QgcmVsZWFzaW5nLiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNjYW4oKHN0YXRlOiBJcm9ib3RTdGF0ZSwgY29tbWFuZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh7IC4uLnN0YXRlLCAuLi5jb21tYW5kIH0pO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgLy8gZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgICAgICAgICAgLy8gZGlzdGluY3RVbnRpbENoYW5nZWQoKHByZXY6IElyb2JvdFN0YXRlLCBjdXJyOiBJcm9ib3RTdGF0ZSkgPT4gcHJldi5kaXJlY3Rpb24gPT09IGN1cnIuZGlyZWN0aW9uKSxcclxuICAgICAgICAgICAgc2hhcmVSZXBsYXkoMSlcclxuICAgICAgICApO1xyXG5cclxuICAgIG5hdk1vZGUkID0gdGhpcy5yb2JvdFN0YXRlJC5waXBlKHNlbGVjdERpc3RpbmN0U3RhdGUoJ2F1dG9QaWxvdCcpKTtcclxuICAgIGRpcmVjdGlvbiQgPSB0aGlzLnJvYm90U3RhdGUkLnBpcGUoXHJcbiAgICAgICAgc2VsZWN0RGlzdGluY3RTdGF0ZSgnZGlyZWN0aW9uJyksXHJcbiAgICAgICAgLy8gZmlsdGVyIG91dCBhbnkgZGlyZWN0aW9uIGVtaXNzaW9ucyBpZiBhdXRvcGlsb3QgaXMgdHJ1bmVkIG9uXHJcbiAgICAgICAgLyogYWN0dWFsbHkgaSB1c2UgaXNFbmFibGVkIGluIGh0bWwgdG8gZGlzYWJsZSBidXR0b25zLCBzbyBiZWxvdyAyIGxpbmVzIGFyZW4ndCBuZWVkZWRcclxuICAgICAgICAqKiBidXQganVzdCBmb3IgcmVmZXJlbmNlIFxyXG4gICAgICAgICovXHJcbiAgICAgICAgLy8gd2l0aExhdGVzdEZyb20odGhpcy5uYXZNb2RlJCksIFxyXG4gICAgICAgIC8vIGZpbHRlcigoW2RpciwgbmF2XSk9Pm5hdj09PTApICAgICAgXHJcbiAgICApXHJcbiAgICAvLyAqKiBkaXNjYXJkIGVtaXR0ZWQgdmFsdWVzIHRoYXQgdGFrZSA8IDFzIGNveiBpbnB1dHZhbHVlIGtlZXBzIGZpcmluZyB3aGVuIHNsaWRpbmcgb24gc2xpZGVyLlxyXG4gICAgc3BlZWQkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLnJvYm90U3RhdGUkLnBpcGUoc2VsZWN0RGlzdGluY3RTdGF0ZSgnc3BlZWQnKSkucGlwZShkZWJvdW5jZVRpbWUoMTAwMCkpO1xyXG4gICAgb2JzdGFjbGVEaXN0YW5jZSQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMucm9ib3RTdGF0ZSQucGlwZShzZWxlY3REaXN0aW5jdFN0YXRlKCdkaXNUb1dhbGwnKSkucGlwZShkZWJvdW5jZVRpbWUoMTAwMCkpOyAgICBcclxuICAgIC8vIGFueSBvZiB0aGUgb2JzZXJ2YWJsZXMgZW1pdHMgYSB2YXVsZSwgZ3JvdXAgdGhlIGxhdGVzdCBjaGFuZ2UgdG9nZXRoZXJcclxuICAgIG5hdmlnYXRpb24kID0gY29tYmluZUxhdGVzdCh0aGlzLmRpcmVjdGlvbiQsIHRoaXMubmF2TW9kZSQsIHRoaXMub2JzdGFjbGVEaXN0YW5jZSQsIHRoaXMuc3BlZWQkKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAvLyB3aXRoTGF0ZXN0RnJvbSB0YWtlcyAyIG9icyQsIGluIHRoaXMgY2FzZSB3ZSBpZ25vcmUgMXN0IG9uZShkaXJlY3Rpb24kKSwgYW5kIHRha2Ugc3RhdGUkIG9ubHlcclxuICAgICAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5yb2JvdFN0YXRlJCwgKF8sIHMpID0+IHMpLFxyXG5cclxuICAgICAgICAgICAgLy8gcmVwbGFjZSB0YXAgdy8gZXhoYXVzdE1hcCBzbyBhbnkgY29taW5nIGRpcmVjdGlvbiBldmVudCB3aWxsIGJlIGlnbm9yZSBpZiBtb3ZlQ2FyIGlzbid0IGNvbXBsZXRlZC4gXHJcbiAgICAgICAgICAgIC8vIHRhcCggY29uc29sZS5sb2coJ3MuZGlyZWN0aW9uJykgKSxcclxuICAgICAgICAgICAgLy8gZGVib3VuY2UgaXMgdG8gcHJldmVudCBzbmVkaW5nIHN0b3AgcmlnaHQgYWZ0ZXIgZGlyZWN0aW9uIGNtZCBpZiBzbGlnaHRseSB0b3VjaFxyXG4gICAgICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcclxuICAgICAgICAgICAgLy8gc3dpdGNobWFwIGlzIG9ubHkgZm9yIHN3aXRjaGluZyBvYnMkIHRvIGFub3RoZXIgb2JzJC4gd2hlcmVhcyBpbiBoZXJlIHMgaXNuJ3Qgb2JzJFxyXG4gICAgICAgICAgICBtYXAoKHM6IElyb2JvdFN0YXRlKSA9PiB0aGlzLm1vdmVDYXIocykpXHJcbiAgICAgICAgKVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbXF0dDogTXF0dFByb3ZpZGVyKSB7XHJcbiAgICAgICAgLy8gdGhpcy5yb2JvdFN0YXRlJC5zdWJzY3JpYmUoY29uc29sZS5sb2cpO1xyXG4gICAgICAgIC8vIHRoaXMuZGlyZWN0aW9uJC5zdWJzY3JpYmUoY29uc29sZS5sb2cpOyAgICAgICBcclxuICAgICAgICAvLyAqKiB0aGlzIGNvbnNvbGUubG9nIHNob3dzIGV2ZXJ5dGhpbmchXHJcbiAgICAgICAgdGhpcy5uYXZTdWJzY3JpcHRpb24gPSB0aGlzLm5hdmlnYXRpb24kLnN1YnNjcmliZSgocmVzOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgLy8gc2VlIGlmIGluaXQgaHR0cCByZXF1ZXN0IHN1Y2Nlc3NmdWxseS5cclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgaWYgKHJlcyAhPSAyMDAgKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydChcIkNhbm5vdCBjb25uZWN0IHRvIHRoZSBjYXIhXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KHJlcy5tZXNzYWdlK3Jlcy5pZCk7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLnJvYm90Q29tbWFuZHMkLnN1YnNjcmliZShjb25zb2xlLmxvZyk7ICBcclxuICAgICAgICAvLyBzdGFydCB0byByZWNlaXZlIGNvbW1hbmRzICBcclxuICAgICAgICB0aGlzLmdldERldklkKCk7XHJcbiAgICAgICAgdGhpcy5yb2JvdFN0YXRlJC5zdWJzY3JpYmUoKTtcclxuICAgICAgICAvLyB0aGlzLm5hdk1vZGUkLnN1YnNjcmliZShjb25zb2xlLmxvZyk7XHJcbiAgICB9XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5hdlN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ob21lLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnQnO1xyXG5pbXBvcnQgeyBNcXR0UHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9tcXR0L21xdHQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFsgICAgICAgXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIEhvbWVSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgSG9tZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIE1xdHRQcm92aWRlclxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBVbmFyeUZ1bmN0aW9uLCBwaXBlLCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIHBsdWNrLCBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3REaXN0aW5jdFN0YXRlPFQsIEk+KGtleTogc3RyaW5nKTogVW5hcnlGdW5jdGlvbjxPYnNlcnZhYmxlPFQ+LCBPYnNlcnZhYmxlPEk+PiB7XHJcbiAgICByZXR1cm4gcGlwZShcclxuICAgICAgICBwbHVjazxULCBJPihrZXkpLFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkPEk+KClcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnB1dFRvVmFsdWUoZGVmYXVsdFZhbHVlOiBudW1iZXIgPSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHBpcGUoXHJcbiAgICAgICAgICAgIG1hcCgoZXZlbnQ6IGFueSk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBldmVudCA/IHBhcnNlSW50KGV2ZW50LnZhbHVlLCAxMCkgOiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHBhcnNlZCA9PT0gMCB8fCBwYXJzZWQpID8gcGFyc2VkIDogZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4vKiBjdXN0b20gb3BlcmF0b3IuIEhpbnQ6IHVzZSBPYnNlcnZhYmxlLmNyZWF0ZSBpbnNpZGUgdGhlIGN1c3RvbSBvcGVyYXRvclxyXG5jb25zdCBmaWx0ZXJPZGQgPSAoc3JjJDogT2JzZXJ2YWJsZTxhbnk+KT0+e1xyXG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyPT57XHJcbiAgICAgICAgcmV0dXJuIHNyYy5zdWJzY3JpYmUodmFsdWU9PntcclxuICAgICAgICAgICAgaWYgKHZhbHVlJTIgPT09MCl7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHZhbHVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyKT0+e1xyXG4gICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlcnIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCk9PntvYnNlcnZlci5jb21wbGV0ZSgpfSAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxufVxyXG4qLyIsIi8vIEdFVCBodHRwczovL2FwaS50aGluZ3NwZWFrLmNvbS91cGRhdGU/YXBpX2tleT1HVTNUMkNWVkhYUlpVV0hRJmZpZWxkMT0wXHJcbmV4cG9ydCBjbGFzcyBDb25maWcge1xyXG4gICAgLy8gc3RhdGljIGFwaVVybCA9IFwiaHR0cHM6Ly9hcGkudGhpbmdzcGVhay5jb20vXCI7XHJcbiAgICAvLyBzdGF0aWMgYXBpS2V5ID0gXCJHVTNUMkNWVkhYUlpVV0hRXCI7XHJcblxyXG4gICAgLy8gc3RhdGljIGFwaVVybCA9ICdodHRwczovL2Nsb3VkLmFyZXN0LmlvJzsgIFxyXG4gICAgc3RhdGljIGFwaVVybCA9ICdodHRwOi8vYWpvYW4uY29tJzsgIFxyXG4gICAgc3RhdGljIGRldmljZUlkID0gJzEwNzkyOSc7IC8vIHRoZSBjYXIncyBpZCByZWdpc3RlcmQgaW4gYXJlc3Qgd2Vic2l0ZSAgIFxyXG4gIH1cclxuXHJcbiAgLy8gcHJpdmF0ZSBhcGlLZXkgPSAnMW9icXpjaDh4M2U3ZTYyNic7ICBcclxuICAvLyBwcml2YXRlIHVybCA9ICdodHRwczovL2Nsb3VkLmFyZXN0LmlvOydcclxuICAvLyBlLmcuLCBodHRwczovL2Nsb3VkLmFyZXN0LmlvLyR7ZGV2SWR9L2ZvcndhcmQiLCIvKiBUaGlzIGRlY29yYXRvciBkZW5vdGVzIHRoaXMgY2xhc3MgYXMgYSBjYW5kaWRhdGUgZm9yIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIG1lY2hhbmlzbS4gRm9yIG5vdyBqdXN0IHRoaW5rIG9mIGFkZGluZ1xyXG4qKiB0aGUgQEluamVjdGFibGUgYXMgYSByZXF1aXJlZCBjb252ZW50aW9uIGZvciBhbGwgc2VydmljZXMgdGhhdCB5b3Ugd3JpdGVcclxuKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yLCBmcm9tIH0gZnJvbSAncnhqcyc7XHJcbi8vaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlLCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHsgSXJvYm90U3RhdGUgfSBmcm9tICd+L2hvbWUvbW9kZWxzL3JvYm90U3RhdGUnO1xyXG5pbXBvcnQgeyByZXF1ZXN0LCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNcXR0UHJvdmlkZXIge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfTtcclxuXHJcbiAgLy8gVVJMcyBhcmUgc3RyaW5ncyBhbmQgYWxsIHZhbHVlcyBpbiBhIFVSTCBhcmUgc3RyaW5ncy4gV2hlbiB5b3Ugc2VlIGk9MCBpbiBhIFVSTCwgMCBpcyBhIHN0cmluZy5cclxuICAvLyBXaGVuIHlvdSBzZWUgYj10cnVlLCB0cnVlIGlzIGEgc3RyaW5nLiBXaGVuIHlvdSBzZWUgcz0sIHRoZSB2YWx1ZSBpcyBhbiBlbXB0eSBzdHJpbmcuXHJcbiAgLy8gcHVibGlzaChmbk5hbWU6IHN0cmluZywgczogSXJvYm90U3RhdGUpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gIHB1Ymxpc2godG9waWM6IHN0cmluZywgZGV2SWQ6IHN0cmluZywgczogSXJvYm90U3RhdGUpOiBhbnkge1xyXG4gICAgLy8gY29uc3QgdXJsID0gYCR7Q29uZmlnLmFwaVVybH0vJHtDb25maWcuZGV2aWNlSWR9LyR7Zm5OYW1lfT9wYXJhbXM9JHtzLnNwZWVkLnRvU3RyaW5nKCl9LCR7cy5kaXNUb1dhbGwudG9TdHJpbmcoKX0sJHtzLmRpcmVjdGlvbi50b1N0cmluZygpfSwke3MuYXV0b1BpbG90LnRvU3RyaW5nKCl9YDtcclxuICAgIGNvbnN0IHVybCA9IGAke0NvbmZpZy5hcGlVcmx9LyR7dG9waWN9P2RldklkPSR7ZGV2SWR9JnBheWxvYWQ9JHtzLnNwZWVkLnRvU3RyaW5nKCl9LCR7cy5kaXNUb1dhbGwudG9TdHJpbmcoKX0sJHtzLmRpcmVjdGlvbi50b1N0cmluZygpfSwke3MuYXV0b1BpbG90LnRvU3RyaW5nKCl9YDtcclxuICAgIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICAvLyB0aGlzLm1zZyA9IGZuTmFtZTsgLy8gZm9yIGNzc1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7Q29uZmlnLmFwaVVybH0vJHtDb25maWcuZGV2aWNlSWR9LyR7Zm5OYW1lfT9rZXk9JHtDb25maWcuYXBpS2V5fWApXHJcbiAgICAvLyBjb252ZXJ0IHByb21pc2UgdG8gb2JzZXJhYmxlIHZpYSBmcm9tXHJcbiAgICByZXR1cm4gZnJvbShyZXF1ZXN0KHsgdXJsOiB1cmwsIG1ldGhvZDogXCJHRVRcIiB9KSlcclxuICAgICAgLnBpcGUobWFwKChyZXM6IEh0dHBSZXNwb25zZSkgPT4gcmVzLnN0YXR1c0NvZGUpKTtcclxuXHJcbiAgICAvKlxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKS5waXBlKFxyXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICApO1xyXG4gICAgKi9cclxuXHJcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHtDb25maWcuYXBpVXJsfXVwZGF0ZT9hcGlfa2V5PSR7Q29uZmlnLmFwaUtleX0mZmllbGQxPSR7Zm5OYW1lfWApXHJcbiAgICAvLy5waXBlKFxyXG4gICAgLy8gdGFwKGNvbnNvbGUubG9nKSxcclxuICAgIC8vY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgLy8pXHJcbiAgfVxyXG5cclxuICBzdWIodG9waWM6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHtDb25maWcuYXBpVXJsfS8ke3RvcGljfWA7XHJcbiAgICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gICAgcmV0dXJuIGZyb20ocmVxdWVzdCh7IHVybDogdXJsLCBtZXRob2Q6IFwiR0VUXCIgfSkpXHJcbiAgICAgIC5waXBlKG1hcCgocmVzOiBIdHRwUmVzcG9uc2UpID0+IHJlcy5jb250ZW50LnRvU3RyaW5nKCkpKVxyXG4gIH1cclxuXHJcbiAgLypcclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSB7XHJcbiAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnJztcclxuICBcclxuICAgICAgZXJyb3JNZXNzYWdlID0gYEVycm9yOiAke2Vycm9yLmVycm9yLm1lc3NhZ2V9YDtcclxuICBcclxuICAgICAgLy8gc2VydmVyLXNpZGUgZXJyb3JcclxuICAgICAgZXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlICsgYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfVxcbk1lc3NhZ2U6ICR7ZXJyb3IubWVzc2FnZX1gO1xyXG4gIFxyXG4gICAgICAvLyB3aW5kb3cuYWxlcnQoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgIH1cclxuICAgICovXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==