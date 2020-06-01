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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./home/providers/config.ts");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9ob21lL29wZXJhdG9ycy9zZWxlY3REaXN0aW5jdFN0YXRlLnRzIiwid2VicGFjazovLy8uL2hvbWUvcHJvdmlkZXJzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9ob21lL3Byb3ZpZGVycy9tcXR0L21xdHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBRThCO0FBRXRCO0FBRWpELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsNkRBQWEsRUFBRTtDQUN6QyxDQUFDO0FBTUY7SUFBQTtJQUFpQyxDQUFDO0lBQXJCLGlCQUFpQjtRQUo3Qiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7QUNkOUIsOEJBQThCLCtCQUErQix1QkFBdUIsbUJBQW1CLEtBQUssMkJBQTJCLDBCQUEwQixLQUFLLHVCQUF1QixvQkFBb0IsMEJBQTBCLHFDQUFxQyw2QkFBNkIsS0FBSyxpQkFBaUIsbUNBQW1DLG9CQUFvQixLQUFLLHFCQUFxQixtQ0FBbUMsb0NBQW9DLDhCQUE4QixLQUFLLGtCQUFrQixvQ0FBb0MsWUFBWSwwQkFBMEIsa0NB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ZixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNDLENBQUMsRUFBRSxVQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FDSDtRQUVEOzs7O1VBSUU7UUFFRiwyRkFBMkY7UUFDM0YsUUFBUTtRQUNSLG9CQUFvQjtRQUNwQiw4QkFBOEI7UUFDOUIsR0FBRztJQUNMLENBQUM7SUFFRCwwQkFBRyxHQUFILFVBQUksS0FBYTtRQUNmLElBQU0sR0FBRyxHQUFNLDhDQUFNLENBQUMsTUFBTSxTQUFJLEtBQU8sQ0FBQztRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLE9BQU8saURBQUksQ0FBQyxxRUFBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQzthQUM5QyxJQUFJLENBQUMsMERBQUcsQ0FBQyxVQUFDLEdBQWlCLElBQUssVUFBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUF0RFUsWUFBWTtRQUR4QixnRUFBVSxFQUFFOztPQUNBLFlBQVksQ0FxRXhCO0lBQUQsbUJBQUM7Q0FBQTtBQXJFd0IiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuaG9tZS1wYW5lbHtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgXFxyXFxuICAgIGZvbnQtc2l6ZTogMjA7XFxyXFxuICAgIG1hcmdpbjogMTU7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbi1sYWJlbHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxyXFxufVxcclxcbi5zdG9wQnRuLFxcclxcbi5idG4ge1xcclxcbiAgICBtYXJnaW46MTVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogODA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxuICAgIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RvcEJ0bntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxyXFxuICAgIGNvbG9yOiBzbm93O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOnByZXNzZWR7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XFxyXFxuICAgIGNvbG9yOiBsaWdodHNsYXRlZ3JheTtcXHJcXG59XFxyXFxuLmJ0bjpkaXNhYmxlZHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGluZW5cXHJcXG59XFxyXFxuLnN3aXRjaHtcXHJcXG4gICAgY29sb3I6IGRhcmtvcmFuZ2U7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7ICAgIFxcclxcbn1cXHJcXG5cXHJcXG5BY3Rpb25CYXIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjM0M1QUZEO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcbiAgPEFjdGlvbkJhciBjbGFzcz0nYWN0aW9uLWJhcicgdGl0bGU9XFxcIuWwj+i7iuitmOWIpeeivDoge3tpbml0aWFsUm9ib3RTdGF0ZS5kZXZJZH19XFxcIj5cXHJcXG4gICAgPEFjdGlvbkl0ZW0gdGFwPVxcXCJnZXREZXZJZFxcXCIgdGV4dD1cXFwi6IiH5bCP6LuK6YCj57arXFxcIiBpb3Muc3lzdGVtSWNvbj1cXFwiMTZcXFwiIGlvcy5wb3NpdGlvbj1cXFwicmlnaHRcXFwiIGFuZHJvaWQucG9zaXRpb249XFxcInBvcHVwXFxcIj5cXHJcXG4gICAgPC9BY3Rpb25JdGVtPlxcclxcbiAgPC9BY3Rpb25CYXI+XFxyXFxuXFxyXFxuPFNjcm9sbFZpZXc+XFxyXFxuICA8U3RhY2tMYXlvdXQgdmVydGljYWxBbGlnbm1lbnQ9J2NlbnRlcicgaG9yaXpvbnRhbEFsaWdubWVudD0nY2VudGVyJz5cXHJcXG4gICAgPEdyaWRMYXlvdXQgaGVpZ2h0PVxcXCIxMDAlXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGNvbHVtbnM9XFxcImF1dG8gYXV0byBhdXRvXFxcIiByb3dzPVxcXCJhdXRvLCosYXV0b1xcXCJcXHJcXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I9XFxcImtoYWtpXFxcIj5cXHJcXG4gICAgICA8QnV0dG9uIGNsYXNzPSdidG4nICh0b3VjaCk9XFxcImJ0bkYkLm5leHQoJGV2ZW50KVxcXCIgdGV4dD0n5YmN6YCyJyBpc0VuYWJsZWQ9XFxcInt7KHRoaXMubmF2TW9kZSR8YXN5bmMpPyAnZmFsc2UnOid0cnVlJ319XFxcIlxcclxcbiAgICAgICAgcm93PScwJyBjb2w9JzEnPjwvQnV0dG9uPlxcclxcbiAgICAgIDxCdXR0b24gY2xhc3M9J2J0bicgKHRvdWNoKT1cXFwiYnRuTCQubmV4dCgkZXZlbnQpXFxcIiB0ZXh0PSflt6bovYknIGlzRW5hYmxlZD1cXFwie3sodGhpcy5uYXZNb2RlJHxhc3luYyk/ICdmYWxzZSc6J3RydWUnfX1cXFwiXFxyXFxuICAgICAgICByb3c9JzEnIGNvbD0nMCc+PC9CdXR0b24+XFxyXFxuICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIHJvdz0nMScgY29sPScxJyBbYnVzeV09J3RoaXMubmF2TW9kZSQgfCBhc3luYycgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+XFxyXFxuICAgICAgPC9BY3Rpdml0eUluZGljYXRvcj5cXHJcXG4gICAgICA8QnV0dG9uIHZpc2liaWxpdHk9XFxcInt7KHRoaXMubmF2TW9kZSR8YXN5bmMpPyAnY29sbGFwc2UnOid2aXNpYmxlJ319XFxcIiBjbGFzcz0nc3RvcEJ0bicgKHRvdWNoKT1cXFwiYnRuUyQubmV4dCgkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgdGV4dD0nJyByb3c9JzEnIGNvbD0nMSc+PC9CdXR0b24+XFxyXFxuICAgICAgPEJ1dHRvbiBjbGFzcz0nYnRuJyAodG91Y2gpPVxcXCJidG5SJC5uZXh0KCRldmVudClcXFwiIHRleHQ9J+WPs+i9iScgaXNFbmFibGVkPVxcXCJ7eyh0aGlzLm5hdk1vZGUkfGFzeW5jKT8gJ2ZhbHNlJzondHJ1ZSd9fVxcXCJcXHJcXG4gICAgICAgIHJvdz0nMScgY29sPScyJz48L0J1dHRvbj5cXHJcXG4gICAgICA8QnV0dG9uIGNsYXNzPSdidG4nICh0b3VjaCk9XFxcImJ0bkIkLm5leHQoJGV2ZW50KVxcXCIgdGV4dD0n5b6M6YCAJyBpc0VuYWJsZWQ9XFxcInt7KHRoaXMubmF2TW9kZSR8YXN5bmMpPyAnZmFsc2UnOid0cnVlJ319XFxcIlxcclxcbiAgICAgICAgcm93PScyJyBjb2w9JzEnPjwvQnV0dG9uPlxcclxcbiAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuICAgIDxsYWJlbCBjbGFzcz1cXFwiaHItZGFyayBtLTEwXFxcIj48L2xhYmVsPlxcclxcblxcclxcblxcclxcbiAgICA8bGFiZWwgdGV4dEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgdGV4dD1cXFwi6Zui6Zqc56SZ54mp5pyA55+t6Led6ZuiXFxcIiBjbGFzcz1cXFwidGV4dC1wcmltYXJ5IGgzIGRlc2NyaXB0aW9uLWxhYmVsXFxcIj48L2xhYmVsPlxcclxcbiAgICA8U2xpZGVyICh2YWx1ZUNoYW5nZSk9XFxcImRpc1RvV2FsbCQubmV4dCgkZXZlbnQpXFxcIiB2YWx1ZT1cXFwiMTBcXFwiIG1pblZhbHVlPVxcXCIxMFxcXCIgbWF4VmFsdWU9XFxcIjIwMFxcXCIgY2xhc3M9XFxcInNsaWRlclxcXCI+XFxyXFxuICAgIDwvU2xpZGVyPlxcclxcbiAgICA8bGFiZWwgdGV4dEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgdGV4dD1cXFwi6YCf5bqmXFxcIiBjbGFzcz1cXFwiaDMgZGVzY3JpcHRpb24tbGFiZWxcXFwiPjwvbGFiZWw+XFxyXFxuICAgIDxTbGlkZXIgKHZhbHVlQ2hhbmdlKT1cXFwiaW5wdXRTcGVlZCQubmV4dCgkZXZlbnQpXFxcIiB2YWx1ZT1cXFwiNTBcXFwiIG1pblZhbHVlPVxcXCIxMFxcXCIgbWF4VmFsdWU9XFxcIjI1NVxcXCI+PC9TbGlkZXI+XFxyXFxuICAgIDxsYWJlbCBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiIHRleHRBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdGV4dD1cXFwi6Ieq6aeV5qih5byPXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9sYWJlbD5cXHJcXG4gICAgPFN3aXRjaCBjaGVja2VkPVxcXCJmYWxzZVxcXCIgKGNoZWNrZWRDaGFuZ2UpPVxcXCJhdXRvUGlsb3QkLm5leHQoJGV2ZW50LnZhbHVlKVxcXCIgY2xhc3M9XFxcInN3aXRjaFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG4gICAgPC9Td2l0Y2g+XFxyXFxuICA8L1N0YWNrTGF5b3V0PlxcclxcbjwvU2Nyb2xsVmlldz5cIiIsIi8vIGltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIlxyXG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlLCBtZXJnZSwgY29tYmluZUxhdGVzdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGV4aGF1c3RNYXAsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBzdGFydFdpdGgsIHNjYW4sIG1hcCwgc2hhcmVSZXBsYXksIHRhcCwgZmlsdGVyLCB3aXRoTGF0ZXN0RnJvbSwgZGVib3VuY2VUaW1lLCB0aHJvdHRsZVRpbWUsIHNraXBXaGlsZSwgdGFrZVdoaWxlLCBzd2l0Y2hNYXAsIGxhc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IElyb2JvdFN0YXRlLCBjbWRFbnVtIH0gZnJvbSBcIi4vbW9kZWxzL3JvYm90U3RhdGVcIjtcclxuaW1wb3J0IHsgc2VsZWN0RGlzdGluY3RTdGF0ZSwgaW5wdXRUb1ZhbHVlIH0gZnJvbSBcIi4vb3BlcmF0b3JzL3NlbGVjdERpc3RpbmN0U3RhdGVcIjtcclxuaW1wb3J0IHsgVG91Y2hHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSAndWkvZ2VzdHVyZXMnO1xyXG5pbXBvcnQgeyBNcXR0UHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9tcXR0L21xdHQnO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuXHJcbi8vIGltcG9ydCB7IGdldEV2ZW50T3JHZXN0dXJlTmFtZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC9hbmd1bGFyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIHByb3ZpZGVyczogW01xdHRQcm92aWRlcl0sXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgbmF2U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgICBlcnJvck1lc3NhZ2UgPSAnV2lmaSDpgZnmjqfou4onO1xyXG4gICAgLy8gZGV2SWQgPSAnJztcclxuICAgIGluaXRpYWxSb2JvdFN0YXRlOiBJcm9ib3RTdGF0ZSA9IHtcclxuICAgICAgICBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCxcclxuICAgICAgICBzcGVlZDogNTAsXHJcbiAgICAgICAgZGlzVG9XYWxsOiAxMCxcclxuICAgICAgICBhdXRvUGlsb3Q6IGZhbHNlLFxyXG4gICAgICAgIGRldklkOicnXHJcbiAgICB9XHJcbiAgICAvLyBsYXN0IGV2ZW50IGlzIGFsd2F5cyB1cCwgc28gdGhpcyBpcyBmaWx0ZXJlZCBieSBkaXN0aW5jdFVudGlsQ2hhbmdlIG9wZXJhdG9yLlxyXG4gICAgLy8gYnRuUyQgPSBuZXcgU3ViamVjdDxUb3VjaEdlc3R1cmVFdmVudERhdGE+KCk7XHJcbiAgICBidG5GJCA9IG5ldyBTdWJqZWN0PFRvdWNoR2VzdHVyZUV2ZW50RGF0YT4oKTtcclxuICAgIGJ0bkwkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xyXG4gICAgYnRuUiQgPSBuZXcgU3ViamVjdDxUb3VjaEdlc3R1cmVFdmVudERhdGE+KCk7XHJcbiAgICBidG5CJCA9IG5ldyBTdWJqZWN0PFRvdWNoR2VzdHVyZUV2ZW50RGF0YT4oKTtcclxuICAgIGJ0blMkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xyXG4gICAgaW5wdXRTcGVlZCQgPSBuZXcgU3ViamVjdDxFdmVudD4oKTtcclxuICAgIGRpc1RvV2FsbCQgPSBuZXcgU3ViamVjdDxFdmVudD4oKTtcclxuICAgIGF1dG9QaWxvdCQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgICAvLyBAVmlld0NoaWxkKCdidG5GJywgeyBzdGF0aWM6IHRydWUgfSkgYnRuRjogRWxlbWVudFJlZjtcclxuICAgIC8vIEBWaWV3Q2hpbGQoJ2J0bkwnLCB7IHN0YXRpYzogdHJ1ZSB9KSBidG5MOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGdldERldklkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubXF0dC5zdWIoJ2RldklkJykuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmRldklkID0gZGF0YTtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsUm9ib3RTdGF0ZS5kZXZJZCA9IGRhdGE7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdkZXZJZDogJywgdGhpcy5kZXZJZCk7XHJcbiAgICAgICAgICAgIC8vIGRpYWxvZ3MuYWxlcnQodGhpcy5kZXZJZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUNhcihzOiBJcm9ib3RTdGF0ZSk6IGFueSB7XHJcbiAgICAgICAgLy8gaWYgbm8gcmV0dXJuIGhlcmUsIGl0IHdpbGwgZmlyZSBhbiBlcnJvciBhdCBydW50aW1lLiBkb24ndCBrbm93IHdoeT9cclxuICAgICAgICAvLyByZXR1cm4gdGhpcy5tcXR0LmNhbGxBcmVzdChzLmF1dG9QaWxvdCA9PT0gdHJ1ZSA/IGNtZEVudW0uQVVUTyA6IHMuZGlyZWN0aW9uLCBzLnNwZWVkLnRvU3RyaW5nKCkpIFxyXG4gICAgICAgIHJldHVybiB0aGlzLm1xdHQucHVibGlzaCgnbW92ZUNhcicsIHMpO1xyXG4gICAgfVxyXG4gICAgLy8gd2hlbiB0YXAgb24gYnV0dG9uLCBhIGRvd24sIG1hbnkgbW92ZS4uLiBhbiB1cCBldmVudHMgdHJpZ2dlZC5cclxuICAgIHJvYm90Q29tbWFuZHMkID0gbWVyZ2UoXHJcbiAgICAgICAgdGhpcy5idG5GJC5waXBlKFxyXG4gICAgICAgICAgICAvLyBlLmFjdGlvbjogbW92ZSwgY2FuY2VsIGRvd24sIHVwLlxyXG4gICAgICAgICAgICBmaWx0ZXIoZSA9PiBlLmFjdGlvbiAhPT0gJ21vdmUnKSxcclxuICAgICAgICAgICAgbWFwKChlOiBUb3VjaEdlc3R1cmVFdmVudERhdGEpID0+IGUuYWN0aW9uID09PSAndXAnID8gKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AgfSkgOiAoeyBkaXJlY3Rpb246IGNtZEVudW0uRk9SV0FSRCB9KVxyXG4gICAgICAgICAgICApKSxcclxuICAgICAgICB0aGlzLmJ0bkIkLnBpcGUoXHJcbiAgICAgICAgICAgIGZpbHRlcihlID0+IGUuYWN0aW9uICE9PSAnbW92ZScpLFxyXG4gICAgICAgICAgICBtYXAoKGU6IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSkgPT4gZS5hY3Rpb24gPT09ICd1cCcgPyAoeyBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCB9KSA6ICh7IGRpcmVjdGlvbjogY21kRW51bS5CQUNLIH0pXHJcbiAgICAgICAgICAgICkpLFxyXG4gICAgICAgIHRoaXMuYnRuTCQucGlwZShcclxuICAgICAgICAgICAgZmlsdGVyKGUgPT4gZS5hY3Rpb24gIT09ICdtb3ZlJyksXHJcbiAgICAgICAgICAgIG1hcChlID0+IGUuYWN0aW9uID09PSAndXAnID8gKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AgfSkgOiAoeyBkaXJlY3Rpb246IGNtZEVudW0uTEVGVCB9KVxyXG4gICAgICAgICAgICApKSxcclxuICAgICAgICB0aGlzLmJ0blIkLnBpcGUoXHJcbiAgICAgICAgICAgIGZpbHRlcihlID0+IGUuYWN0aW9uICE9PSAnbW92ZScpLFxyXG4gICAgICAgICAgICBtYXAoZSA9PiBlLmFjdGlvbiA9PT0gJ3VwJyA/ICh7IGRpcmVjdGlvbjogY21kRW51bS5TVE9QIH0pIDogKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlJJR0hUIH0pXHJcbiAgICAgICAgICAgICkpLFxyXG4gICAgICAgIC8vIGNhciBzcGVlZCAoMC0yNTUpXHJcbiAgICAgICAgdGhpcy5pbnB1dFNwZWVkJC5waXBlKFxyXG4gICAgICAgICAgICAvL3RhcChjb25zb2xlLmxvZyksXHJcbiAgICAgICAgICAgIC8vIHRhcChuID0+IGNvbnNvbGUubG9nKCdzcGVlZDogJyArIG4pKSksXHJcbiAgICAgICAgICAgIGZpbHRlcihuID0+IG4gIT09IHVuZGVmaW5lZCksXHJcbiAgICAgICAgICAgIGlucHV0VG9WYWx1ZSgpLFxyXG4gICAgICAgICAgICBtYXAobiA9PiAoeyBzcGVlZDogbiB9KSlcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICB0aGlzLmRpc1RvV2FsbCQucGlwZShcclxuICAgICAgICAgICAgZmlsdGVyKG4gPT4gbiAhPT0gdW5kZWZpbmVkKSxcclxuICAgICAgICAgICAgaW5wdXRUb1ZhbHVlKCksXHJcbiAgICAgICAgICAgIG1hcChuID0+ICh7IGRpc1RvV2FsbDogbiB9KSlcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICB0aGlzLmF1dG9QaWxvdCQucGlwZShcclxuICAgICAgICAgICAgLy8gZG9uJ3Qga25vdyBob3cgdG8gc2VuZCB0cnVlIG9yIGZhbHNlIGluIGh0dHAgcmVxdWVzdCwgc28gaSB1c2UgMCBhbmQgMVxyXG4gICAgICAgICAgICBtYXAobiA9PiAoeyBhdXRvUGlsb3Q6IG4gPyAxIDogMCB9KSkpXHJcbiAgICApXHJcblxyXG4gICAgcm9ib3RTdGF0ZSQ6IE9ic2VydmFibGU8SXJvYm90U3RhdGU+ID0gdGhpcy5yb2JvdENvbW1hbmRzJFxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICBzdGFydFdpdGgodGhpcy5pbml0aWFsUm9ib3RTdGF0ZSksXHJcbiAgICAgICAgICAgIC8vICoqIHRvdWNoIGV2ZW50ICdtb3ZlJyBrZWVwcyBiZWluZyBmaXJlZCBhcyBsb25nIGFzIG5vdCByZWxlYXNpbmcuXHJcbiAgICAgICAgICAgIHNjYW4oKHN0YXRlOiBJcm9ib3RTdGF0ZSwgY29tbWFuZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh7IC4uLnN0YXRlLCAuLi5jb21tYW5kIH0pO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgLy8gZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgICAgICAgICAgLy8gZGlzdGluY3RVbnRpbENoYW5nZWQoKHByZXY6IElyb2JvdFN0YXRlLCBjdXJyOiBJcm9ib3RTdGF0ZSkgPT4gcHJldi5kaXJlY3Rpb24gPT09IGN1cnIuZGlyZWN0aW9uKSxcclxuICAgICAgICAgICAgc2hhcmVSZXBsYXkoMSlcclxuICAgICAgICApO1xyXG5cclxuICAgIG5hdk1vZGUkID0gdGhpcy5yb2JvdFN0YXRlJC5waXBlKHNlbGVjdERpc3RpbmN0U3RhdGUoJ2F1dG9QaWxvdCcpKTtcclxuICAgIGRpcmVjdGlvbiQgPSB0aGlzLnJvYm90U3RhdGUkLnBpcGUoXHJcbiAgICAgICAgc2VsZWN0RGlzdGluY3RTdGF0ZSgnZGlyZWN0aW9uJyksXHJcbiAgICAgICAgLy8gZmlsdGVyIG91dCBhbnkgZGlyZWN0aW9uIGVtaXNzaW9ucyBpZiBhdXRvcGlsb3QgaXMgdHJ1bmVkIG9uXHJcbiAgICAgICAgLyogYWN0dWFsbHkgaSB1c2UgaXNFbmFibGVkIGluIGh0bWwgdG8gZGlzYWJsZSBidXR0b25zLCBzbyBiZWxvdyAyIGxpbmVzIGFyZW4ndCBuZWVkZWRcclxuICAgICAgICAqKiBidXQganVzdCBmb3IgcmVmZXJlbmNlXHJcbiAgICAgICAgKi9cclxuICAgICAgICAvLyB3aXRoTGF0ZXN0RnJvbSh0aGlzLm5hdk1vZGUkKSxcclxuICAgICAgICAvLyBmaWx0ZXIoKFtkaXIsIG5hdl0pPT5uYXY9PT0wKVxyXG4gICAgKVxyXG4gICAgLy8gKiogZGlzY2FyZCBlbWl0dGVkIHZhbHVlcyB0aGF0IHRha2UgPCAxcyBjb3ogaW5wdXR2YWx1ZSBrZWVwcyBmaXJpbmcgd2hlbiBzbGlkaW5nIG9uIHNsaWRlci5cclxuICAgIHNwZWVkJDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5yb2JvdFN0YXRlJC5waXBlKHNlbGVjdERpc3RpbmN0U3RhdGUoJ3NwZWVkJykpLnBpcGUoZGVib3VuY2VUaW1lKDEwMDApKTtcclxuICAgIG9ic3RhY2xlRGlzdGFuY2UkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLnJvYm90U3RhdGUkLnBpcGUoc2VsZWN0RGlzdGluY3RTdGF0ZSgnZGlzVG9XYWxsJykpLnBpcGUoZGVib3VuY2VUaW1lKDEwMDApKTtcclxuICAgIC8vIGFueSBvZiB0aGUgb2JzZXJ2YWJsZXMgZW1pdHMgYSB2YXVsZSwgZ3JvdXAgdGhlIGxhdGVzdCBjaGFuZ2UgdG9nZXRoZXJcclxuICAgIG5hdmlnYXRpb24kID0gY29tYmluZUxhdGVzdCh0aGlzLmRpcmVjdGlvbiQsIHRoaXMubmF2TW9kZSQsIHRoaXMub2JzdGFjbGVEaXN0YW5jZSQsIHRoaXMuc3BlZWQkKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAvLyB3aXRoTGF0ZXN0RnJvbSB0YWtlcyAyIG9icyQsIGluIHRoaXMgY2FzZSB3ZSBpZ25vcmUgMXN0IG9uZShkaXJlY3Rpb24kKSwgYW5kIHRha2Ugc3RhdGUkIG9ubHlcclxuICAgICAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5yb2JvdFN0YXRlJCwgKF8sIHMpID0+IHMpLFxyXG5cclxuICAgICAgICAgICAgLy8gcmVwbGFjZSB0YXAgdy8gZXhoYXVzdE1hcCBzbyBhbnkgY29taW5nIGRpcmVjdGlvbiBldmVudCB3aWxsIGJlIGlnbm9yZSBpZiBtb3ZlQ2FyIGlzbid0IGNvbXBsZXRlZC5cclxuICAgICAgICAgICAgLy8gdGFwKCBjb25zb2xlLmxvZygncy5kaXJlY3Rpb24nKSApLFxyXG4gICAgICAgICAgICAvLyBkZWJvdW5jZSBpcyB0byBwcmV2ZW50IHNuZWRpbmcgc3RvcCByaWdodCBhZnRlciBkaXJlY3Rpb24gY21kIGlmIHNsaWdodGx5IHRvdWNoXHJcbiAgICAgICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxyXG4gICAgICAgICAgICAvLyBzd2l0Y2htYXAgaXMgb25seSBmb3Igc3dpdGNoaW5nIG9icyQgdG8gYW5vdGhlciBvYnMkLiB3aGVyZWFzIGluIGhlcmUgcyBpc24ndCBvYnMkXHJcbiAgICAgICAgICAgIG1hcCgoczogSXJvYm90U3RhdGUpID0+IHRoaXMubW92ZUNhcihzKSlcclxuICAgICAgICApXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtcXR0OiBNcXR0UHJvdmlkZXIpIHtcclxuICAgICAgICAvLyB0aGlzLnJvYm90U3RhdGUkLnN1YnNjcmliZShjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgLy8gdGhpcy5kaXJlY3Rpb24kLnN1YnNjcmliZShjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgLy8gKiogdGhpcyBjb25zb2xlLmxvZyBzaG93cyBldmVyeXRoaW5nIVxyXG4gICAgICAgIHRoaXMubmF2U3Vic2NyaXB0aW9uID0gdGhpcy5uYXZpZ2F0aW9uJC5zdWJzY3JpYmUoKHJlczogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHNlZSBpZiBpbml0IGh0dHAgcmVxdWVzdCBzdWNjZXNzZnVsbHkuXHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgIGlmIChyZXMgIT0gMjAwICkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoXCJDYW5ub3QgY29ubmVjdCB0byB0aGUgY2FyIVwiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBhbGVydChyZXMubWVzc2FnZStyZXMuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLnJvYm90Q29tbWFuZHMkLnN1YnNjcmliZShjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgLy8gc3RhcnQgdG8gcmVjZWl2ZSBjb21tYW5kc1xyXG4gICAgICAgIHRoaXMuZ2V0RGV2SWQoKTtcclxuICAgICAgICB0aGlzLnJvYm90U3RhdGUkLnN1YnNjcmliZSgpO1xyXG4gICAgICAgIC8vIHRoaXMubmF2TW9kZSQuc3Vic2NyaWJlKGNvbnNvbGUubG9nKTtcclxuICAgIH1cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubmF2U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBIb21lUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2hvbWUtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudCc7XHJcbmltcG9ydCB7IE1xdHRQcm92aWRlciB9IGZyb20gJy4vcHJvdmlkZXJzL21xdHQvbXF0dCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogWyAgICAgICBcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgSG9tZVJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBIb21lQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgTXF0dFByb3ZpZGVyXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IFVuYXJ5RnVuY3Rpb24sIHBpcGUsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgcGx1Y2ssIG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdERpc3RpbmN0U3RhdGU8VCwgST4oa2V5OiBzdHJpbmcpOiBVbmFyeUZ1bmN0aW9uPE9ic2VydmFibGU8VD4sIE9ic2VydmFibGU8ST4+IHtcclxuICAgIHJldHVybiBwaXBlKFxyXG4gICAgICAgIHBsdWNrPFQsIEk+KGtleSksXHJcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQ8ST4oKVxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlucHV0VG9WYWx1ZShkZWZhdWx0VmFsdWU6IG51bWJlciA9IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gcGlwZShcclxuICAgICAgICAgICAgbWFwKChldmVudDogYW55KTogbnVtYmVyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IGV2ZW50ID8gcGFyc2VJbnQoZXZlbnQudmFsdWUsIDEwKSA6IGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAocGFyc2VkID09PSAwIHx8IHBhcnNlZCkgPyBwYXJzZWQgOiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbi8qIGN1c3RvbSBvcGVyYXRvci4gSGludDogdXNlIE9ic2VydmFibGUuY3JlYXRlIGluc2lkZSB0aGUgY3VzdG9tIG9wZXJhdG9yXHJcbmNvbnN0IGZpbHRlck9kZCA9IChzcmMkOiBPYnNlcnZhYmxlPGFueT4pPT57XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXI9PntcclxuICAgICAgICByZXR1cm4gc3JjLnN1YnNjcmliZSh2YWx1ZT0+e1xyXG4gICAgICAgICAgICBpZiAodmFsdWUlMiA9PT0wKXtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQodmFsdWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnIpPT57XHJcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKT0+e29ic2VydmVyLmNvbXBsZXRlKCl9ICAgICAgICBcclxuICAgICAgICApXHJcbiAgICB9KVxyXG59XHJcbiovIiwiLy8gR0VUIGh0dHBzOi8vYXBpLnRoaW5nc3BlYWsuY29tL3VwZGF0ZT9hcGlfa2V5PUdVM1QyQ1ZWSFhSWlVXSFEmZmllbGQxPTBcclxuZXhwb3J0IGNsYXNzIENvbmZpZyB7XHJcbiAgICAvLyBzdGF0aWMgYXBpVXJsID0gXCJodHRwczovL2FwaS50aGluZ3NwZWFrLmNvbS9cIjtcclxuICAgIC8vIHN0YXRpYyBhcGlLZXkgPSBcIkdVM1QyQ1ZWSFhSWlVXSFFcIjtcclxuXHJcbiAgICAvLyBzdGF0aWMgYXBpVXJsID0gJ2h0dHBzOi8vY2xvdWQuYXJlc3QuaW8nOyAgXHJcbiAgICBzdGF0aWMgYXBpVXJsID0gJ2h0dHBzOi8vYWpvYW4uY29tJzsgIFxyXG4gICAgc3RhdGljIGRldmljZUlkID0gJyc7IFxyXG4gIH1cclxuXHJcbiAgLy8gcHJpdmF0ZSBhcGlLZXkgPSAnMW9icXpjaDh4M2U3ZTYyNic7ICBcclxuICAvLyBwcml2YXRlIHVybCA9ICdodHRwczovL2Nsb3VkLmFyZXN0LmlvOydcclxuICAvLyBlLmcuLCBodHRwczovL2Nsb3VkLmFyZXN0LmlvLyR7ZGV2SWR9L2ZvcndhcmQiLCIvKiBUaGlzIGRlY29yYXRvciBkZW5vdGVzIHRoaXMgY2xhc3MgYXMgYSBjYW5kaWRhdGUgZm9yIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIG1lY2hhbmlzbS4gRm9yIG5vdyBqdXN0IHRoaW5rIG9mIGFkZGluZ1xyXG4qKiB0aGUgQEluamVjdGFibGUgYXMgYSByZXF1aXJlZCBjb252ZW50aW9uIGZvciBhbGwgc2VydmljZXMgdGhhdCB5b3Ugd3JpdGVcclxuKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yLCBmcm9tIH0gZnJvbSAncnhqcyc7XHJcbi8vaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlLCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHsgSXJvYm90U3RhdGUgfSBmcm9tICd+L2hvbWUvbW9kZWxzL3JvYm90U3RhdGUnO1xyXG5pbXBvcnQgeyByZXF1ZXN0LCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNcXR0UHJvdmlkZXIge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfTtcclxuXHJcbiAgLy8gVVJMcyBhcmUgc3RyaW5ncyBhbmQgYWxsIHZhbHVlcyBpbiBhIFVSTCBhcmUgc3RyaW5ncy4gV2hlbiB5b3Ugc2VlIGk9MCBpbiBhIFVSTCwgMCBpcyBhIHN0cmluZy5cclxuICAvLyBXaGVuIHlvdSBzZWUgYj10cnVlLCB0cnVlIGlzIGEgc3RyaW5nLiBXaGVuIHlvdSBzZWUgcz0sIHRoZSB2YWx1ZSBpcyBhbiBlbXB0eSBzdHJpbmcuXHJcbiAgLy8gcHVibGlzaChmbk5hbWU6IHN0cmluZywgczogSXJvYm90U3RhdGUpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gIHB1Ymxpc2godG9waWM6IHN0cmluZywgczogSXJvYm90U3RhdGUpOiBhbnkgeyAgICBcclxuICAgIC8vIGNvbnN0IHVybCA9IGAke0NvbmZpZy5hcGlVcmx9LyR7dG9waWN9P2RldklkPSR7ZGV2SWR9JnBheWxvYWQ9JHtzLnNwZWVkLnRvU3RyaW5nKCl9LCR7cy5kaXNUb1dhbGwudG9TdHJpbmcoKX0sJHtzLmRpcmVjdGlvbi50b1N0cmluZygpfSwke3MuYXV0b1BpbG90LnRvU3RyaW5nKCl9YDtcclxuICAgIGNvbnN0IHVybCA9IGAke0NvbmZpZy5hcGlVcmx9LyR7dG9waWN9YDtcclxuICAgIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICAvLyB0aGlzLm1zZyA9IGZuTmFtZTsgLy8gZm9yIGNzc1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7Q29uZmlnLmFwaVVybH0vJHtDb25maWcuZGV2aWNlSWR9LyR7Zm5OYW1lfT9rZXk9JHtDb25maWcuYXBpS2V5fWApXHJcbiAgICAvLyBjb252ZXJ0IHByb21pc2UgdG8gb2JzZXJhYmxlIHZpYSBmcm9tXHJcbiAgICAvL3JldHVybiBmcm9tKHJlcXVlc3QoeyB1cmw6IHVybCwgbWV0aG9kOiBcIkdFVFwiIH0pKVxyXG4gICAgLy8gIC5waXBlKG1hcCgocmVzOiBIdHRwUmVzcG9uc2UpID0+IHJlcy5zdGF0dXNDb2RlKSk7XHJcblxyXG4gICAgcmV0dXJuIGZyb20oXHJcbiAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIC8vIHRoaXMgaXMgdG8gY29udmVydCBvYmogdG8ganNvbiBkb2NcclxuICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBzcGVlZDogcy5zcGVlZCxcclxuICAgICAgICAgIGRpcjogcy5kaXJlY3Rpb24sXHJcbiAgICAgICAgICBkZXZJZDogcy5kZXZJZCxcclxuICAgICAgICAgIGRpc3QyV2FsbDogcy5kaXNUb1dhbGwsXHJcbiAgICAgICAgICBhdXRvUGlsb3Q6IHMuYXV0b1BpbG90XHJcbiAgICAgICAgfSlcclxuICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xyXG4gICAgICB9LCAoZSkgPT4ge1xyXG4gICAgICB9KVxyXG4gICAgKVxyXG5cclxuICAgIC8qXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpLnBpcGUoXHJcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcclxuICAgICk7XHJcbiAgICAqL1xyXG5cclxuICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke0NvbmZpZy5hcGlVcmx9dXBkYXRlP2FwaV9rZXk9JHtDb25maWcuYXBpS2V5fSZmaWVsZDE9JHtmbk5hbWV9YClcclxuICAgIC8vLnBpcGUoXHJcbiAgICAvLyB0YXAoY29uc29sZS5sb2cpLFxyXG4gICAgLy9jYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICAvLylcclxuICB9XHJcblxyXG4gIHN1Yih0b3BpYzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IHVybCA9IGAke0NvbmZpZy5hcGlVcmx9LyR7dG9waWN9YDtcclxuICAgIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICByZXR1cm4gZnJvbShyZXF1ZXN0KHsgdXJsOiB1cmwsIG1ldGhvZDogXCJHRVRcIiB9KSlcclxuICAgICAgLnBpcGUobWFwKChyZXM6IEh0dHBSZXNwb25zZSkgPT4gcmVzLmNvbnRlbnQudG9TdHJpbmcoKSkpXHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpIHtcclxuICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICcnO1xyXG4gIFxyXG4gICAgICBlcnJvck1lc3NhZ2UgPSBgRXJyb3I6ICR7ZXJyb3IuZXJyb3IubWVzc2FnZX1gO1xyXG4gIFxyXG4gICAgICAvLyBzZXJ2ZXItc2lkZSBlcnJvclxyXG4gICAgICBlcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2UgKyBgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9XFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWA7XHJcbiAgXHJcbiAgICAgIC8vIHdpbmRvdy5hbGVydChlcnJvck1lc3NhZ2UpO1xyXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgKi9cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9