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

module.exports = "\r\n  <ActionBar class='action-bar' title=\"小車識別碼: {{initialRobotState.devId}}\">\r\n    <ActionItem tap=\"getDevId\" text=\"與小車連綫\" ios.systemIcon=\"16\" ios.position=\"right\" android.position=\"popup\">\r\n    </ActionItem>\r\n  </ActionBar>\r\n\r\n<ScrollView>\r\n  <StackLayout verticalAlignment='center' horizontalAlignment='center'>\r\n    <GridLayout height=\"100%\" horizontalAlignment=\"center\" columns=\"auto auto auto\" rows=\"auto,*,auto\"\r\n      backgroundColor=\"khaki\">\r\n      <Button class='btn' (touch)=\"btnF$.next($event)\" text='前進' isEnabled=\"{{(this.navMode$|async)? 'false':'true'}}\"\r\n        row='0' col='1'></Button>\r\n      <Button class='btn' (touch)=\"btnL$.next($event)\" text='左轉' isEnabled=\"{{(this.navMode$|async)? 'false':'true'}}\"\r\n        row='1' col='0'></Button>\r\n      <ActivityIndicator row='1' col='1' [busy]='this.navMode$ | async' class=\"activity-indicator\">\r\n      </ActivityIndicator>\r\n      <Button visibility=\"{{(this.navMode$|async)? 'collapse':'visible'}}\" class='stopBtn' (touch)=\"btnS$.next($event)\"\r\n        text='' row='1' col='1'></Button>\r\n      <Button class='btn' (touch)=\"btnR$.next($event)\" text='右轉' isEnabled=\"{{(this.navMode$|async)? 'false':'true'}}\"\r\n        row='1' col='2'></Button>\r\n      <Button class='btn' (touch)=\"btnB$.next($event)\" text='後退' isEnabled=\"{{(this.navMode$|async)? 'false':'true'}}\"\r\n        row='2' col='1'></Button>\r\n    </GridLayout>\r\n    <label class=\"hr-dark m-10\"></label>\r\n\r\n\r\n    <label textAlignment=\"center\" textWrap=\"true\" text=\"離障礙物最短距離\" class=\"text-primary h3 description-label\"></label>\r\n    <Slider (valueChange)=\"disToWall$.next($event)\" value=\"10\" minValue=\"10\" maxValue=\"200\" class=\"slider\">\r\n    </Slider>\r\n    <label textAlignment=\"center\" textWrap=\"true\" text=\"速度\" class=\"h3 description-label\"></label>\r\n    <Slider (valueChange)=\"inputSpeed$.next($event)\" value=\"50\" minValue=\"10\" maxValue=\"255\"></Slider>\r\n    <label class=\"text-danger\" textAlignment=\"center\" text=\"自駕模式\" textWrap=\"true\"></label>\r\n    <Switch checked=\"false\" (checkedChange)=\"autoPilot$.next($event.value)\" class=\"switch\" horizontalAlignment=\"center\">\r\n    </Switch>\r\n  </StackLayout>\r\n</ScrollView>"

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
        // devId = '';
        this.initialRobotState = {
            direction: 0 /* STOP */,
            speed: 50,
            disToWall: 10,
            autoPilot: false,
            devId: ''
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
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (n) { return ({ autoPilot: n ? true : false }); })));
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
            // this.devId = data;
            _this.initialRobotState.devId = data;
            // console.log('devId: ', this.devId);
            // dialogs.alert(this.devId);
        });
    };
    HomeComponent.prototype.moveCar = function (s) {
        // if no return here, it will fire an error at runtime. don't know why?
        // return this.mqtt.callArest(s.autoPilot === true ? cmdEnum.AUTO : s.direction, s.speed.toString())
        return this.mqtt.publish('moveCar', s);
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
    Config.apiUrl = 'https://ajoan.com';
    Config.deviceId = '';
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
    MqttProvider.prototype.publish = function (topic, s) {
        // const url = `${Config.apiUrl}/${topic}?devId=${devId}&payload=${s.speed.toString()},${s.disToWall.toString()},${s.direction.toString()},${s.autoPilot.toString()}`;
        var url = _config__WEBPACK_IMPORTED_MODULE_3__["Config"].apiUrl + "/" + topic;
        console.log(url);
        // this.msg = fnName; // for css
        // return this.http.get(`${Config.apiUrl}/${Config.deviceId}/${fnName}?key=${Config.apiKey}`)
        // convert promise to obserable via from
        //return from(request({ url: url, method: "GET" }))
        //  .pipe(map((res: HttpResponse) => res.statusCode));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: url,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            // this is to convert obj to json doc
            content: JSON.stringify({
                speed: s.speed,
                dir: s.direction,
                devId: s.devId,
                dist2Wall: s.disToWall,
                autoPilot: s.autoPilot
            })
        }).then(function (response) {
            var result = response.content.toJSON();
        }, function (e) {
        }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9ob21lL29wZXJhdG9ycy9zZWxlY3REaXN0aW5jdFN0YXRlLnRzIiwid2VicGFjazovLy8uL2hvbWUvcHJvdmlkZXJzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9ob21lL3Byb3ZpZGVycy9tcXR0L21xdHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFdEI7QUFFakQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw2REFBYSxFQUFFO0NBQ3pDLENBQUM7QUFNRjtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBSjdCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGlCQUFpQixDQUFJO0lBQUQsd0JBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ2Q5Qiw4QkFBOEIsK0JBQStCLHVCQUF1QixtQkFBbUIsS0FBSywyQkFBMkIsMEJBQTBCLEtBQUssdUJBQXVCLG9CQUFvQiwwQkFBMEIscUNBQXFDLDZCQUE2QixLQUFLLGlCQUFpQixtQ0FBbUMsb0JBQW9CLEtBQUsscUJBQXFCLG1DQUFtQyxvQ0FBb0MsOEJBQThCLEtBQUssa0JBQWtCLG9DQUFvQyxZQUFZLDBCQUEw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QUFDLFNBQVM7YUFDdkIsQ0FBQztTQUNILENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFRO1lBQ2YsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMzQyxDQUFDLEVBQUUsVUFBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQ0g7UUFFRDs7OztVQUlFO1FBRUYsMkZBQTJGO1FBQzNGLFFBQVE7UUFDUixvQkFBb0I7UUFDcEIsOEJBQThCO1FBQzlCLEdBQUc7SUFDTCxDQUFDO0lBRUQsMEJBQUcsR0FBSCxVQUFJLEtBQWE7UUFDZixJQUFNLEdBQUcsR0FBTSw4Q0FBTSxDQUFDLE1BQU0sU0FBSSxLQUFPLENBQUM7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixPQUFPLGlEQUFJLENBQUMscUVBQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7YUFDOUMsSUFBSSxDQUFDLDBEQUFHLENBQUMsVUFBQyxHQUFpQixJQUFLLFVBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQXRCLENBQXNCLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBdERVLFlBQVk7UUFEeEIsZ0VBQVUsRUFBRTs7T0FDQSxZQUFZLENBcUV4QjtJQUFELG1CQUFDO0NBQUE7QUFyRXdCIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVSb3V0aW5nTW9kdWxlIHsgfVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmhvbWUtcGFuZWx7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IFxcclxcbiAgICBmb250LXNpemU6IDIwO1xcclxcbiAgICBtYXJnaW46IDE1O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24tbGFiZWx7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcclxcbn1cXHJcXG4uc3RvcEJ0bixcXHJcXG4uYnRuIHtcXHJcXG4gICAgbWFyZ2luOjE1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDgwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcclxcbiAgICBjb2xvcjogZGFya3NsYXRlZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0b3BCdG57XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcclxcbiAgICBjb2xvcjogc25vdztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpwcmVzc2Vke1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwgMS4yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xcclxcbiAgICBjb2xvcjogbGlnaHRzbGF0ZWdyYXk7XFxyXFxufVxcclxcbi5idG46ZGlzYWJsZWR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpbmVuXFxyXFxufVxcclxcbi5zd2l0Y2h7XFxyXFxuICAgIGNvbG9yOiBkYXJrb3JhbmdlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkOyAgICBcXHJcXG59XFxyXFxuXFxyXFxuQWN0aW9uQmFyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzNDNUFGRDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJcXHJcXG4gIDxBY3Rpb25CYXIgY2xhc3M9J2FjdGlvbi1iYXInIHRpdGxlPVxcXCLlsI/ou4rorZjliKXnorw6IHt7aW5pdGlhbFJvYm90U3RhdGUuZGV2SWR9fVxcXCI+XFxyXFxuICAgIDxBY3Rpb25JdGVtIHRhcD1cXFwiZ2V0RGV2SWRcXFwiIHRleHQ9XFxcIuiIh+Wwj+i7iumAo+e2q1xcXCIgaW9zLnN5c3RlbUljb249XFxcIjE2XFxcIiBpb3MucG9zaXRpb249XFxcInJpZ2h0XFxcIiBhbmRyb2lkLnBvc2l0aW9uPVxcXCJwb3B1cFxcXCI+XFxyXFxuICAgIDwvQWN0aW9uSXRlbT5cXHJcXG4gIDwvQWN0aW9uQmFyPlxcclxcblxcclxcbjxTY3JvbGxWaWV3PlxcclxcbiAgPFN0YWNrTGF5b3V0IHZlcnRpY2FsQWxpZ25tZW50PSdjZW50ZXInIGhvcml6b250YWxBbGlnbm1lbnQ9J2NlbnRlcic+XFxyXFxuICAgIDxHcmlkTGF5b3V0IGhlaWdodD1cXFwiMTAwJVxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBjb2x1bW5zPVxcXCJhdXRvIGF1dG8gYXV0b1xcXCIgcm93cz1cXFwiYXV0bywqLGF1dG9cXFwiXFxyXFxuICAgICAgYmFja2dyb3VuZENvbG9yPVxcXCJraGFraVxcXCI+XFxyXFxuICAgICAgPEJ1dHRvbiBjbGFzcz0nYnRuJyAodG91Y2gpPVxcXCJidG5GJC5uZXh0KCRldmVudClcXFwiIHRleHQ9J+WJjemAsicgaXNFbmFibGVkPVxcXCJ7eyh0aGlzLm5hdk1vZGUkfGFzeW5jKT8gJ2ZhbHNlJzondHJ1ZSd9fVxcXCJcXHJcXG4gICAgICAgIHJvdz0nMCcgY29sPScxJz48L0J1dHRvbj5cXHJcXG4gICAgICA8QnV0dG9uIGNsYXNzPSdidG4nICh0b3VjaCk9XFxcImJ0bkwkLm5leHQoJGV2ZW50KVxcXCIgdGV4dD0n5bem6L2JJyBpc0VuYWJsZWQ9XFxcInt7KHRoaXMubmF2TW9kZSR8YXN5bmMpPyAnZmFsc2UnOid0cnVlJ319XFxcIlxcclxcbiAgICAgICAgcm93PScxJyBjb2w9JzAnPjwvQnV0dG9uPlxcclxcbiAgICAgIDxBY3Rpdml0eUluZGljYXRvciByb3c9JzEnIGNvbD0nMScgW2J1c3ldPSd0aGlzLm5hdk1vZGUkIHwgYXN5bmMnIGNsYXNzPVxcXCJhY3Rpdml0eS1pbmRpY2F0b3JcXFwiPlxcclxcbiAgICAgIDwvQWN0aXZpdHlJbmRpY2F0b3I+XFxyXFxuICAgICAgPEJ1dHRvbiB2aXNpYmlsaXR5PVxcXCJ7eyh0aGlzLm5hdk1vZGUkfGFzeW5jKT8gJ2NvbGxhcHNlJzondmlzaWJsZSd9fVxcXCIgY2xhc3M9J3N0b3BCdG4nICh0b3VjaCk9XFxcImJ0blMkLm5leHQoJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgIHRleHQ9Jycgcm93PScxJyBjb2w9JzEnPjwvQnV0dG9uPlxcclxcbiAgICAgIDxCdXR0b24gY2xhc3M9J2J0bicgKHRvdWNoKT1cXFwiYnRuUiQubmV4dCgkZXZlbnQpXFxcIiB0ZXh0PSflj7PovYknIGlzRW5hYmxlZD1cXFwie3sodGhpcy5uYXZNb2RlJHxhc3luYyk/ICdmYWxzZSc6J3RydWUnfX1cXFwiXFxyXFxuICAgICAgICByb3c9JzEnIGNvbD0nMic+PC9CdXR0b24+XFxyXFxuICAgICAgPEJ1dHRvbiBjbGFzcz0nYnRuJyAodG91Y2gpPVxcXCJidG5CJC5uZXh0KCRldmVudClcXFwiIHRleHQ9J+W+jOmAgCcgaXNFbmFibGVkPVxcXCJ7eyh0aGlzLm5hdk1vZGUkfGFzeW5jKT8gJ2ZhbHNlJzondHJ1ZSd9fVxcXCJcXHJcXG4gICAgICAgIHJvdz0nMicgY29sPScxJz48L0J1dHRvbj5cXHJcXG4gICAgPC9HcmlkTGF5b3V0PlxcclxcbiAgICA8bGFiZWwgY2xhc3M9XFxcImhyLWRhcmsgbS0xMFxcXCI+PC9sYWJlbD5cXHJcXG5cXHJcXG5cXHJcXG4gICAgPGxhYmVsIHRleHRBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIHRleHQ9XFxcIumboumanOekmeeJqeacgOefrei3nembolxcXCIgY2xhc3M9XFxcInRleHQtcHJpbWFyeSBoMyBkZXNjcmlwdGlvbi1sYWJlbFxcXCI+PC9sYWJlbD5cXHJcXG4gICAgPFNsaWRlciAodmFsdWVDaGFuZ2UpPVxcXCJkaXNUb1dhbGwkLm5leHQoJGV2ZW50KVxcXCIgdmFsdWU9XFxcIjEwXFxcIiBtaW5WYWx1ZT1cXFwiMTBcXFwiIG1heFZhbHVlPVxcXCIyMDBcXFwiIGNsYXNzPVxcXCJzbGlkZXJcXFwiPlxcclxcbiAgICA8L1NsaWRlcj5cXHJcXG4gICAgPGxhYmVsIHRleHRBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIHRleHQ9XFxcIumAn+W6plxcXCIgY2xhc3M9XFxcImgzIGRlc2NyaXB0aW9uLWxhYmVsXFxcIj48L2xhYmVsPlxcclxcbiAgICA8U2xpZGVyICh2YWx1ZUNoYW5nZSk9XFxcImlucHV0U3BlZWQkLm5leHQoJGV2ZW50KVxcXCIgdmFsdWU9XFxcIjUwXFxcIiBtaW5WYWx1ZT1cXFwiMTBcXFwiIG1heFZhbHVlPVxcXCIyNTVcXFwiPjwvU2xpZGVyPlxcclxcbiAgICA8bGFiZWwgY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIiB0ZXh0QWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHRleHQ9XFxcIuiHqumnleaooeW8j1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvbGFiZWw+XFxyXFxuICAgIDxTd2l0Y2ggY2hlY2tlZD1cXFwiZmFsc2VcXFwiIChjaGVja2VkQ2hhbmdlKT1cXFwiYXV0b1BpbG90JC5uZXh0KCRldmVudC52YWx1ZSlcXFwiIGNsYXNzPVxcXCJzd2l0Y2hcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuICAgIDwvU3dpdGNoPlxcclxcbiAgPC9TdGFja0xheW91dD5cXHJcXG48L1Njcm9sbFZpZXc+XCIiLCIvLyBpbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCJcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSwgbWVyZ2UsIGNvbWJpbmVMYXRlc3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBleGhhdXN0TWFwLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc3RhcnRXaXRoLCBzY2FuLCBtYXAsIHNoYXJlUmVwbGF5LCB0YXAsIGZpbHRlciwgd2l0aExhdGVzdEZyb20sIGRlYm91bmNlVGltZSwgdGhyb3R0bGVUaW1lLCBza2lwV2hpbGUsIHRha2VXaGlsZSwgc3dpdGNoTWFwLCBsYXN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBJcm9ib3RTdGF0ZSwgY21kRW51bSB9IGZyb20gXCIuL21vZGVscy9yb2JvdFN0YXRlXCI7XHJcbmltcG9ydCB7IHNlbGVjdERpc3RpbmN0U3RhdGUsIGlucHV0VG9WYWx1ZSB9IGZyb20gXCIuL29wZXJhdG9ycy9zZWxlY3REaXN0aW5jdFN0YXRlXCI7XHJcbmltcG9ydCB7IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gJ3VpL2dlc3R1cmVzJztcclxuaW1wb3J0IHsgTXF0dFByb3ZpZGVyIH0gZnJvbSAnLi9wcm92aWRlcnMvbXF0dC9tcXR0JztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcblxyXG4vLyBpbXBvcnQgeyBnZXRFdmVudE9yR2VzdHVyZU5hbWUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICBwcm92aWRlcnM6IFtNcXR0UHJvdmlkZXJdLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIG5hdlN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gICAgZXJyb3JNZXNzYWdlID0gJ1dpZmkg6YGZ5o6n6LuKJztcclxuICAgIC8vIGRldklkID0gJyc7XHJcbiAgICBpbml0aWFsUm9ib3RTdGF0ZTogSXJvYm90U3RhdGUgPSB7XHJcbiAgICAgICAgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AsXHJcbiAgICAgICAgc3BlZWQ6IDUwLFxyXG4gICAgICAgIGRpc1RvV2FsbDogMTAsXHJcbiAgICAgICAgYXV0b1BpbG90OiBmYWxzZSxcclxuICAgICAgICBkZXZJZDonJ1xyXG4gICAgfVxyXG4gICAgLy8gbGFzdCBldmVudCBpcyBhbHdheXMgdXAsIHNvIHRoaXMgaXMgZmlsdGVyZWQgYnkgZGlzdGluY3RVbnRpbENoYW5nZSBvcGVyYXRvci5cclxuICAgIC8vIGJ0blMkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xyXG4gICAgYnRuRiQgPSBuZXcgU3ViamVjdDxUb3VjaEdlc3R1cmVFdmVudERhdGE+KCk7XHJcbiAgICBidG5MJCA9IG5ldyBTdWJqZWN0PFRvdWNoR2VzdHVyZUV2ZW50RGF0YT4oKTtcclxuICAgIGJ0blIkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xyXG4gICAgYnRuQiQgPSBuZXcgU3ViamVjdDxUb3VjaEdlc3R1cmVFdmVudERhdGE+KCk7XHJcbiAgICBidG5TJCA9IG5ldyBTdWJqZWN0PFRvdWNoR2VzdHVyZUV2ZW50RGF0YT4oKTtcclxuICAgIGlucHV0U3BlZWQkID0gbmV3IFN1YmplY3Q8RXZlbnQ+KCk7XHJcbiAgICBkaXNUb1dhbGwkID0gbmV3IFN1YmplY3Q8RXZlbnQ+KCk7XHJcbiAgICBhdXRvUGlsb3QkID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gICAgLy8gQFZpZXdDaGlsZCgnYnRuRicsIHsgc3RhdGljOiB0cnVlIH0pIGJ0bkY6IEVsZW1lbnRSZWY7XHJcbiAgICAvLyBAVmlld0NoaWxkKCdidG5MJywgeyBzdGF0aWM6IHRydWUgfSkgYnRuTDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBnZXREZXZJZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1xdHQuc3ViKCdkZXZJZCcpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgLy8gdGhpcy5kZXZJZCA9IGRhdGE7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFJvYm90U3RhdGUuZGV2SWQgPSBkYXRhO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZGV2SWQ6ICcsIHRoaXMuZGV2SWQpO1xyXG4gICAgICAgICAgICAvLyBkaWFsb2dzLmFsZXJ0KHRoaXMuZGV2SWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVDYXIoczogSXJvYm90U3RhdGUpOiBhbnkge1xyXG4gICAgICAgIC8vIGlmIG5vIHJldHVybiBoZXJlLCBpdCB3aWxsIGZpcmUgYW4gZXJyb3IgYXQgcnVudGltZS4gZG9uJ3Qga25vdyB3aHk/XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMubXF0dC5jYWxsQXJlc3Qocy5hdXRvUGlsb3QgPT09IHRydWUgPyBjbWRFbnVtLkFVVE8gOiBzLmRpcmVjdGlvbiwgcy5zcGVlZC50b1N0cmluZygpKVxyXG4gICAgICAgIHJldHVybiB0aGlzLm1xdHQucHVibGlzaCgnbW92ZUNhcicsIHMpO1xyXG4gICAgfVxyXG4gICAgLy8gd2hlbiB0YXAgb24gYnV0dG9uLCBhIGRvd24sIG1hbnkgbW92ZS4uLiBhbiB1cCBldmVudHMgdHJpZ2dlZC5cclxuICAgIHJvYm90Q29tbWFuZHMkID0gbWVyZ2UoXHJcbiAgICAgICAgdGhpcy5idG5GJC5waXBlKFxyXG4gICAgICAgICAgICAvLyBlLmFjdGlvbjogbW92ZSwgY2FuY2VsIGRvd24sIHVwLlxyXG4gICAgICAgICAgICBmaWx0ZXIoZSA9PiBlLmFjdGlvbiAhPT0gJ21vdmUnKSxcclxuICAgICAgICAgICAgbWFwKChlOiBUb3VjaEdlc3R1cmVFdmVudERhdGEpID0+IGUuYWN0aW9uID09PSAndXAnID8gKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AgfSkgOiAoeyBkaXJlY3Rpb246IGNtZEVudW0uRk9SV0FSRCB9KVxyXG4gICAgICAgICAgICApKSxcclxuICAgICAgICB0aGlzLmJ0bkIkLnBpcGUoXHJcbiAgICAgICAgICAgIGZpbHRlcihlID0+IGUuYWN0aW9uICE9PSAnbW92ZScpLFxyXG4gICAgICAgICAgICBtYXAoKGU6IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSkgPT4gZS5hY3Rpb24gPT09ICd1cCcgPyAoeyBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCB9KSA6ICh7IGRpcmVjdGlvbjogY21kRW51bS5CQUNLIH0pXHJcbiAgICAgICAgICAgICkpLFxyXG4gICAgICAgIHRoaXMuYnRuTCQucGlwZShcclxuICAgICAgICAgICAgZmlsdGVyKGUgPT4gZS5hY3Rpb24gIT09ICdtb3ZlJyksXHJcbiAgICAgICAgICAgIG1hcChlID0+IGUuYWN0aW9uID09PSAndXAnID8gKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AgfSkgOiAoeyBkaXJlY3Rpb246IGNtZEVudW0uTEVGVCB9KVxyXG4gICAgICAgICAgICApKSxcclxuICAgICAgICB0aGlzLmJ0blIkLnBpcGUoXHJcbiAgICAgICAgICAgIGZpbHRlcihlID0+IGUuYWN0aW9uICE9PSAnbW92ZScpLFxyXG4gICAgICAgICAgICBtYXAoZSA9PiBlLmFjdGlvbiA9PT0gJ3VwJyA/ICh7IGRpcmVjdGlvbjogY21kRW51bS5TVE9QIH0pIDogKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlJJR0hUIH0pXHJcbiAgICAgICAgICAgICkpLFxyXG4gICAgICAgIC8vIGNhciBzcGVlZCAoMC0yNTUpXHJcbiAgICAgICAgdGhpcy5pbnB1dFNwZWVkJC5waXBlKFxyXG4gICAgICAgICAgICAvL3RhcChjb25zb2xlLmxvZyksXHJcbiAgICAgICAgICAgIC8vIHRhcChuID0+IGNvbnNvbGUubG9nKCdzcGVlZDogJyArIG4pKSksXHJcbiAgICAgICAgICAgIGZpbHRlcihuID0+IG4gIT09IHVuZGVmaW5lZCksXHJcbiAgICAgICAgICAgIGlucHV0VG9WYWx1ZSgpLFxyXG4gICAgICAgICAgICBtYXAobiA9PiAoeyBzcGVlZDogbiB9KSlcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICB0aGlzLmRpc1RvV2FsbCQucGlwZShcclxuICAgICAgICAgICAgZmlsdGVyKG4gPT4gbiAhPT0gdW5kZWZpbmVkKSxcclxuICAgICAgICAgICAgaW5wdXRUb1ZhbHVlKCksXHJcbiAgICAgICAgICAgIG1hcChuID0+ICh7IGRpc1RvV2FsbDogbiB9KSlcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICB0aGlzLmF1dG9QaWxvdCQucGlwZShcclxuICAgICAgICAgICAgLy8gZG9uJ3Qga25vdyBob3cgdG8gc2VuZCB0cnVlIG9yIGZhbHNlIGluIGh0dHAgcmVxdWVzdCwgc28gaSB1c2UgMCBhbmQgMVxyXG4gICAgICAgICAgICBtYXAobiA9PiAoeyBhdXRvUGlsb3Q6IG4gPyB0cnVlIDogZmFsc2UgfSkpKVxyXG4gICAgKVxyXG5cclxuICAgIHJvYm90U3RhdGUkOiBPYnNlcnZhYmxlPElyb2JvdFN0YXRlPiA9IHRoaXMucm9ib3RDb21tYW5kcyRcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgc3RhcnRXaXRoKHRoaXMuaW5pdGlhbFJvYm90U3RhdGUpLFxyXG4gICAgICAgICAgICAvLyAqKiB0b3VjaCBldmVudCAnbW92ZScga2VlcHMgYmVpbmcgZmlyZWQgYXMgbG9uZyBhcyBub3QgcmVsZWFzaW5nLlxyXG4gICAgICAgICAgICBzY2FuKChzdGF0ZTogSXJvYm90U3RhdGUsIGNvbW1hbmQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoeyAuLi5zdGF0ZSwgLi4uY29tbWFuZCB9KTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIC8vIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgICAgICAgIC8vIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChwcmV2OiBJcm9ib3RTdGF0ZSwgY3VycjogSXJvYm90U3RhdGUpID0+IHByZXYuZGlyZWN0aW9uID09PSBjdXJyLmRpcmVjdGlvbiksXHJcbiAgICAgICAgICAgIHNoYXJlUmVwbGF5KDEpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICBuYXZNb2RlJCA9IHRoaXMucm9ib3RTdGF0ZSQucGlwZShzZWxlY3REaXN0aW5jdFN0YXRlKCdhdXRvUGlsb3QnKSk7XHJcbiAgICBkaXJlY3Rpb24kID0gdGhpcy5yb2JvdFN0YXRlJC5waXBlKFxyXG4gICAgICAgIHNlbGVjdERpc3RpbmN0U3RhdGUoJ2RpcmVjdGlvbicpLFxyXG4gICAgICAgIC8vIGZpbHRlciBvdXQgYW55IGRpcmVjdGlvbiBlbWlzc2lvbnMgaWYgYXV0b3BpbG90IGlzIHRydW5lZCBvblxyXG4gICAgICAgIC8qIGFjdHVhbGx5IGkgdXNlIGlzRW5hYmxlZCBpbiBodG1sIHRvIGRpc2FibGUgYnV0dG9ucywgc28gYmVsb3cgMiBsaW5lcyBhcmVuJ3QgbmVlZGVkXHJcbiAgICAgICAgKiogYnV0IGp1c3QgZm9yIHJlZmVyZW5jZVxyXG4gICAgICAgICovXHJcbiAgICAgICAgLy8gd2l0aExhdGVzdEZyb20odGhpcy5uYXZNb2RlJCksXHJcbiAgICAgICAgLy8gZmlsdGVyKChbZGlyLCBuYXZdKT0+bmF2PT09MClcclxuICAgIClcclxuICAgIC8vICoqIGRpc2NhcmQgZW1pdHRlZCB2YWx1ZXMgdGhhdCB0YWtlIDwgMXMgY296IGlucHV0dmFsdWUga2VlcHMgZmlyaW5nIHdoZW4gc2xpZGluZyBvbiBzbGlkZXIuXHJcbiAgICBzcGVlZCQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMucm9ib3RTdGF0ZSQucGlwZShzZWxlY3REaXN0aW5jdFN0YXRlKCdzcGVlZCcpKS5waXBlKGRlYm91bmNlVGltZSgxMDAwKSk7XHJcbiAgICBvYnN0YWNsZURpc3RhbmNlJDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5yb2JvdFN0YXRlJC5waXBlKHNlbGVjdERpc3RpbmN0U3RhdGUoJ2Rpc1RvV2FsbCcpKS5waXBlKGRlYm91bmNlVGltZSgxMDAwKSk7XHJcbiAgICAvLyBhbnkgb2YgdGhlIG9ic2VydmFibGVzIGVtaXRzIGEgdmF1bGUsIGdyb3VwIHRoZSBsYXRlc3QgY2hhbmdlIHRvZ2V0aGVyXHJcbiAgICBuYXZpZ2F0aW9uJCA9IGNvbWJpbmVMYXRlc3QodGhpcy5kaXJlY3Rpb24kLCB0aGlzLm5hdk1vZGUkLCB0aGlzLm9ic3RhY2xlRGlzdGFuY2UkLCB0aGlzLnNwZWVkJClcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgLy8gd2l0aExhdGVzdEZyb20gdGFrZXMgMiBvYnMkLCBpbiB0aGlzIGNhc2Ugd2UgaWdub3JlIDFzdCBvbmUoZGlyZWN0aW9uJCksIGFuZCB0YWtlIHN0YXRlJCBvbmx5XHJcbiAgICAgICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMucm9ib3RTdGF0ZSQsIChfLCBzKSA9PiBzKSxcclxuXHJcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgdGFwIHcvIGV4aGF1c3RNYXAgc28gYW55IGNvbWluZyBkaXJlY3Rpb24gZXZlbnQgd2lsbCBiZSBpZ25vcmUgaWYgbW92ZUNhciBpc24ndCBjb21wbGV0ZWQuXHJcbiAgICAgICAgICAgIC8vIHRhcCggY29uc29sZS5sb2coJ3MuZGlyZWN0aW9uJykgKSxcclxuICAgICAgICAgICAgLy8gZGVib3VuY2UgaXMgdG8gcHJldmVudCBzbmVkaW5nIHN0b3AgcmlnaHQgYWZ0ZXIgZGlyZWN0aW9uIGNtZCBpZiBzbGlnaHRseSB0b3VjaFxyXG4gICAgICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcclxuICAgICAgICAgICAgLy8gc3dpdGNobWFwIGlzIG9ubHkgZm9yIHN3aXRjaGluZyBvYnMkIHRvIGFub3RoZXIgb2JzJC4gd2hlcmVhcyBpbiBoZXJlIHMgaXNuJ3Qgb2JzJFxyXG4gICAgICAgICAgICBtYXAoKHM6IElyb2JvdFN0YXRlKSA9PiB0aGlzLm1vdmVDYXIocykpXHJcbiAgICAgICAgKVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbXF0dDogTXF0dFByb3ZpZGVyKSB7XHJcbiAgICAgICAgLy8gdGhpcy5yb2JvdFN0YXRlJC5zdWJzY3JpYmUoY29uc29sZS5sb2cpO1xyXG4gICAgICAgIC8vIHRoaXMuZGlyZWN0aW9uJC5zdWJzY3JpYmUoY29uc29sZS5sb2cpO1xyXG4gICAgICAgIC8vICoqIHRoaXMgY29uc29sZS5sb2cgc2hvd3MgZXZlcnl0aGluZyFcclxuICAgICAgICB0aGlzLm5hdlN1YnNjcmlwdGlvbiA9IHRoaXMubmF2aWdhdGlvbiQuc3Vic2NyaWJlKChyZXM6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAvLyBzZWUgaWYgaW5pdCBodHRwIHJlcXVlc3Qgc3VjY2Vzc2Z1bGx5LlxyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICBpZiAocmVzICE9IDIwMCApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KFwiQ2Fubm90IGNvbm5lY3QgdG8gdGhlIGNhciFcIikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gYWxlcnQocmVzLm1lc3NhZ2UrcmVzLmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhpcy5yb2JvdENvbW1hbmRzJC5zdWJzY3JpYmUoY29uc29sZS5sb2cpO1xyXG4gICAgICAgIC8vIHN0YXJ0IHRvIHJlY2VpdmUgY29tbWFuZHNcclxuICAgICAgICB0aGlzLmdldERldklkKCk7XHJcbiAgICAgICAgdGhpcy5yb2JvdFN0YXRlJC5zdWJzY3JpYmUoKTtcclxuICAgICAgICAvLyB0aGlzLm5hdk1vZGUkLnN1YnNjcmliZShjb25zb2xlLmxvZyk7XHJcbiAgICB9XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5hdlN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ob21lLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnQnO1xyXG5pbXBvcnQgeyBNcXR0UHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9tcXR0L21xdHQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFsgICAgICAgXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIEhvbWVSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgSG9tZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIE1xdHRQcm92aWRlclxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBVbmFyeUZ1bmN0aW9uLCBwaXBlLCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIHBsdWNrLCBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3REaXN0aW5jdFN0YXRlPFQsIEk+KGtleTogc3RyaW5nKTogVW5hcnlGdW5jdGlvbjxPYnNlcnZhYmxlPFQ+LCBPYnNlcnZhYmxlPEk+PiB7XHJcbiAgICByZXR1cm4gcGlwZShcclxuICAgICAgICBwbHVjazxULCBJPihrZXkpLFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkPEk+KClcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnB1dFRvVmFsdWUoZGVmYXVsdFZhbHVlOiBudW1iZXIgPSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHBpcGUoXHJcbiAgICAgICAgICAgIG1hcCgoZXZlbnQ6IGFueSk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBldmVudCA/IHBhcnNlSW50KGV2ZW50LnZhbHVlLCAxMCkgOiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHBhcnNlZCA9PT0gMCB8fCBwYXJzZWQpID8gcGFyc2VkIDogZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4vKiBjdXN0b20gb3BlcmF0b3IuIEhpbnQ6IHVzZSBPYnNlcnZhYmxlLmNyZWF0ZSBpbnNpZGUgdGhlIGN1c3RvbSBvcGVyYXRvclxyXG5jb25zdCBmaWx0ZXJPZGQgPSAoc3JjJDogT2JzZXJ2YWJsZTxhbnk+KT0+e1xyXG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyPT57XHJcbiAgICAgICAgcmV0dXJuIHNyYy5zdWJzY3JpYmUodmFsdWU9PntcclxuICAgICAgICAgICAgaWYgKHZhbHVlJTIgPT09MCl7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHZhbHVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyKT0+e1xyXG4gICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlcnIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCk9PntvYnNlcnZlci5jb21wbGV0ZSgpfSAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxufVxyXG4qLyIsIi8vIEdFVCBodHRwczovL2FwaS50aGluZ3NwZWFrLmNvbS91cGRhdGU/YXBpX2tleT1HVTNUMkNWVkhYUlpVV0hRJmZpZWxkMT0wXHJcbmV4cG9ydCBjbGFzcyBDb25maWcge1xyXG4gICAgLy8gc3RhdGljIGFwaVVybCA9IFwiaHR0cHM6Ly9hcGkudGhpbmdzcGVhay5jb20vXCI7XHJcbiAgICAvLyBzdGF0aWMgYXBpS2V5ID0gXCJHVTNUMkNWVkhYUlpVV0hRXCI7XHJcblxyXG4gICAgLy8gc3RhdGljIGFwaVVybCA9ICdodHRwczovL2Nsb3VkLmFyZXN0LmlvJzsgIFxyXG4gICAgc3RhdGljIGFwaVVybCA9ICdodHRwczovL2Fqb2FuLmNvbSc7ICBcclxuICAgIHN0YXRpYyBkZXZpY2VJZCA9ICcnOyBcclxuICB9XHJcblxyXG4gIC8vIHByaXZhdGUgYXBpS2V5ID0gJzFvYnF6Y2g4eDNlN2U2MjYnOyAgXHJcbiAgLy8gcHJpdmF0ZSB1cmwgPSAnaHR0cHM6Ly9jbG91ZC5hcmVzdC5pbzsnXHJcbiAgLy8gZS5nLiwgaHR0cHM6Ly9jbG91ZC5hcmVzdC5pby8ke2RldklkfS9mb3J3YXJkIiwiLyogVGhpcyBkZWNvcmF0b3IgZGVub3RlcyB0aGlzIGNsYXNzIGFzIGEgY2FuZGlkYXRlIGZvciBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBtZWNoYW5pc20uIEZvciBub3cganVzdCB0aGluayBvZiBhZGRpbmdcclxuKiogdGhlIEBJbmplY3RhYmxlIGFzIGEgcmVxdWlyZWQgY29udmVudGlvbiBmb3IgYWxsIHNlcnZpY2VzIHRoYXQgeW91IHdyaXRlXHJcbiovXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciwgZnJvbSB9IGZyb20gJ3J4anMnO1xyXG4vL2ltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXNwb25zZSwgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IElyb2JvdFN0YXRlIH0gZnJvbSAnfi9ob21lL21vZGVscy9yb2JvdFN0YXRlJztcclxuaW1wb3J0IHsgcmVxdWVzdCwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTXF0dFByb3ZpZGVyIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH07XHJcblxyXG4gIC8vIFVSTHMgYXJlIHN0cmluZ3MgYW5kIGFsbCB2YWx1ZXMgaW4gYSBVUkwgYXJlIHN0cmluZ3MuIFdoZW4geW91IHNlZSBpPTAgaW4gYSBVUkwsIDAgaXMgYSBzdHJpbmcuXHJcbiAgLy8gV2hlbiB5b3Ugc2VlIGI9dHJ1ZSwgdHJ1ZSBpcyBhIHN0cmluZy4gV2hlbiB5b3Ugc2VlIHM9LCB0aGUgdmFsdWUgaXMgYW4gZW1wdHkgc3RyaW5nLlxyXG4gIC8vIHB1Ymxpc2goZm5OYW1lOiBzdHJpbmcsIHM6IElyb2JvdFN0YXRlKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICBwdWJsaXNoKHRvcGljOiBzdHJpbmcsIHM6IElyb2JvdFN0YXRlKTogYW55IHtcclxuICAgIC8vIGNvbnN0IHVybCA9IGAke0NvbmZpZy5hcGlVcmx9LyR7dG9waWN9P2RldklkPSR7ZGV2SWR9JnBheWxvYWQ9JHtzLnNwZWVkLnRvU3RyaW5nKCl9LCR7cy5kaXNUb1dhbGwudG9TdHJpbmcoKX0sJHtzLmRpcmVjdGlvbi50b1N0cmluZygpfSwke3MuYXV0b1BpbG90LnRvU3RyaW5nKCl9YDtcclxuICAgIGNvbnN0IHVybCA9IGAke0NvbmZpZy5hcGlVcmx9LyR7dG9waWN9YDtcclxuICAgIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICAvLyB0aGlzLm1zZyA9IGZuTmFtZTsgLy8gZm9yIGNzc1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7Q29uZmlnLmFwaVVybH0vJHtDb25maWcuZGV2aWNlSWR9LyR7Zm5OYW1lfT9rZXk9JHtDb25maWcuYXBpS2V5fWApXHJcbiAgICAvLyBjb252ZXJ0IHByb21pc2UgdG8gb2JzZXJhYmxlIHZpYSBmcm9tXHJcbiAgICAvL3JldHVybiBmcm9tKHJlcXVlc3QoeyB1cmw6IHVybCwgbWV0aG9kOiBcIkdFVFwiIH0pKVxyXG4gICAgLy8gIC5waXBlKG1hcCgocmVzOiBIdHRwUmVzcG9uc2UpID0+IHJlcy5zdGF0dXNDb2RlKSk7XHJcblxyXG4gICAgcmV0dXJuIGZyb20oXHJcbiAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIC8vIHRoaXMgaXMgdG8gY29udmVydCBvYmogdG8ganNvbiBkb2NcclxuICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBzcGVlZDogcy5zcGVlZCxcclxuICAgICAgICAgIGRpcjogcy5kaXJlY3Rpb24sXHJcbiAgICAgICAgICBkZXZJZDogcy5kZXZJZCxcclxuICAgICAgICAgIGRpc3QyV2FsbDogcy5kaXNUb1dhbGwsXHJcbiAgICAgICAgICBhdXRvUGlsb3Q6IHMuYXV0b1BpbG90XHJcbiAgICAgICAgfSlcclxuICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xyXG4gICAgICB9LCAoZSkgPT4ge1xyXG4gICAgICB9KVxyXG4gICAgKVxyXG5cclxuICAgIC8qXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpLnBpcGUoXHJcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcclxuICAgICk7XHJcbiAgICAqL1xyXG5cclxuICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke0NvbmZpZy5hcGlVcmx9dXBkYXRlP2FwaV9rZXk9JHtDb25maWcuYXBpS2V5fSZmaWVsZDE9JHtmbk5hbWV9YClcclxuICAgIC8vLnBpcGUoXHJcbiAgICAvLyB0YXAoY29uc29sZS5sb2cpLFxyXG4gICAgLy9jYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICAvLylcclxuICB9XHJcblxyXG4gIHN1Yih0b3BpYzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IHVybCA9IGAke0NvbmZpZy5hcGlVcmx9LyR7dG9waWN9YDtcclxuICAgIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICByZXR1cm4gZnJvbShyZXF1ZXN0KHsgdXJsOiB1cmwsIG1ldGhvZDogXCJHRVRcIiB9KSlcclxuICAgICAgLnBpcGUobWFwKChyZXM6IEh0dHBSZXNwb25zZSkgPT4gcmVzLmNvbnRlbnQudG9TdHJpbmcoKSkpXHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpIHtcclxuICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICcnO1xyXG5cclxuICAgICAgZXJyb3JNZXNzYWdlID0gYEVycm9yOiAke2Vycm9yLmVycm9yLm1lc3NhZ2V9YDtcclxuXHJcbiAgICAgIC8vIHNlcnZlci1zaWRlIGVycm9yXHJcbiAgICAgIGVycm9yTWVzc2FnZSA9IGVycm9yTWVzc2FnZSArIGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c31cXG5NZXNzYWdlOiAke2Vycm9yLm1lc3NhZ2V9YDtcclxuXHJcbiAgICAgIC8vIHdpbmRvdy5hbGVydChlcnJvck1lc3NhZ2UpO1xyXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgKi9cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9