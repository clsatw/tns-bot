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

module.exports = "<Page class='page'>\n    <Page.actionBar>\n        <ActionBar class='action-bar' title=\"Device ID: {{devId}}\"></ActionBar>\n    </Page.actionBar>\n    <ScrollView>\n        <StackLayout verticalAlignment='center' horizontalAlignment='center'>\n            <GridLayout height=\"100%\"  horizontalAlignment=\"center\" columns=\"auto auto auto\" rows=\"auto,*,auto\"  backgroundColor=\"khaki\">\n                <Button class='btn' (touch)=\"btnF$.next($event)\" text='前進' isEnabled=\"{{(this.navMode$|async)? 'false':'true'}}\" row='0' col='1'></Button>\n                <Button class='btn' (touch)=\"btnL$.next($event)\" text='左轉' isEnabled=\"{{(this.navMode$|async)? 'false':'true'}}\" row='1' col='0'></Button>\n                <ActivityIndicator row='1' col='1' [busy]='this.navMode$ | async' class=\"activity-indicator\">\n                </ActivityIndicator>\n                <Button visibility=\"{{(this.navMode$|async)? 'collapse':'visible'}}\" class='stopBtn'\n                    (touch)=\"btnS$.next($event)\" text='' row='1' col='1'></Button>\n                <Button class='btn' (touch)=\"btnR$.next($event)\" text='右轉' isEnabled=\"{{(this.navMode$|async)? 'false':'true'}}\" row='1' col='2'></Button>\n                <Button class='btn' (touch)=\"btnB$.next($event)\" text='後退' isEnabled=\"{{(this.navMode$|async)? 'false':'true'}}\" row='2' col='1'></Button>\n            </GridLayout>\n            <label class=\"hr-dark m-10\"></label>\n\n            <label textAlignment='center' textWrap='true' text='離障礙物最短距離'\n                class='text-primary h3 description-label'></label>\n            <Slider (valueChange)=\"disToWall$.next($event)\" value=\"10\" minValue=\"10\" maxValue=\"200\" class='slider'>\n            </Slider>\n            <label textAlignment='center' textWrap='true' text='速度' class='h3 description-label'></label>\n            <Slider (valueChange)=\"inputSpeed$.next($event)\" value=\"50\" minValue=\"10\" maxValue=\"255\"></Slider>\n            <label class='text-danger' textAlignment='center' text='自駕模式' textWrap='true'></label>\n            <Switch checked=\"false\" (checkedChange)=\"autoPilot$.next($event.value)\" class=\"switch\" horizontalAlignment=\"center\"></Switch>\n        </StackLayout>\n    </ScrollView>\n</Page>"

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
        this.direction$ = this.robotState$.pipe(Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["selectDistinctState"])('direction'));
        // ** discard emitted values that take < 1s coz inputvalue keeps firing when sliding on slider.
        this.speed$ = this.robotState$.pipe(Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["selectDistinctState"])('speed')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000));
        // any of the observables emits a vaule, group the latest change together
        this.navigation$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.direction$, this.navMode$, this.speed$)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9ob21lL29wZXJhdG9ycy9zZWxlY3REaXN0aW5jdFN0YXRlLnRzIiwid2VicGFjazovLy8uL2hvbWUvcHJvdmlkZXJzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9ob21lL3Byb3ZpZGVycy9tcXR0L21xdHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBRThCO0FBRXRCO0FBRWpELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsNkRBQWEsRUFBRTtDQUN6QyxDQUFDO0FBTUY7SUFBQTtJQUFpQyxDQUFDO0lBQXJCLGlCQUFpQjtRQUo3Qiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7QUNkOUIsOEJBQThCLCtCQUErQix1QkFBdUIsbUJBQW1CLEtBQUssMkJBQTJCLDBCQUEwQixLQUFLLHVCQUF1QixvQkFBb0IsMEJBQTBCLHFDQUFxQyw2QkFBNkIsS0FBSyxpQkFBaUIsbUNBQW1DLG9CQUFvQixLQUFLLHFCQUFxQixtQ0FBbUMsb0NBQW9DLDhCQUE4QixLQUFLLGtCQUFrQixvQ0FBb0MsWUFBWSwwQkFBMEIsa0NB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LElBQUssVUFBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFuQ1UsWUFBWTtRQUR4QixnRUFBVSxFQUFFOztPQUNBLFlBQVksQ0FrRHhCO0lBQUQsbUJBQUM7Q0FBQTtBQWxEd0IiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuaG9tZS1wYW5lbHtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgXFxyXFxuICAgIGZvbnQtc2l6ZTogMjA7XFxyXFxuICAgIG1hcmdpbjogMTU7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbi1sYWJlbHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxyXFxufVxcclxcbi5zdG9wQnRuLFxcclxcbi5idG4ge1xcclxcbiAgICBtYXJnaW46MTVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogODA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxuICAgIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RvcEJ0bntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxyXFxuICAgIGNvbG9yOiBzbm93O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOnByZXNzZWR7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XFxyXFxuICAgIGNvbG9yOiBsaWdodHNsYXRlZ3JheTtcXHJcXG59XFxyXFxuLmJ0bjpkaXNhYmxlZHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGluZW5cXHJcXG59XFxyXFxuLnN3aXRjaHtcXHJcXG4gICAgY29sb3I6IGRhcmtvcmFuZ2U7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7ICAgIFxcclxcbn1cXHJcXG5cXHJcXG5BY3Rpb25CYXIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjM0M1QUZEO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIGNsYXNzPSdwYWdlJz5cXG4gICAgPFBhZ2UuYWN0aW9uQmFyPlxcbiAgICAgICAgPEFjdGlvbkJhciBjbGFzcz0nYWN0aW9uLWJhcicgdGl0bGU9XFxcIkRldmljZSBJRDoge3tkZXZJZH19XFxcIj48L0FjdGlvbkJhcj5cXG4gICAgPC9QYWdlLmFjdGlvbkJhcj5cXG4gICAgPFNjcm9sbFZpZXc+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgdmVydGljYWxBbGlnbm1lbnQ9J2NlbnRlcicgaG9yaXpvbnRhbEFsaWdubWVudD0nY2VudGVyJz5cXG4gICAgICAgICAgICA8R3JpZExheW91dCBoZWlnaHQ9XFxcIjEwMCVcXFwiICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGNvbHVtbnM9XFxcImF1dG8gYXV0byBhdXRvXFxcIiByb3dzPVxcXCJhdXRvLCosYXV0b1xcXCIgIGJhY2tncm91bmRDb2xvcj1cXFwia2hha2lcXFwiPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPSdidG4nICh0b3VjaCk9XFxcImJ0bkYkLm5leHQoJGV2ZW50KVxcXCIgdGV4dD0n5YmN6YCyJyBpc0VuYWJsZWQ9XFxcInt7KHRoaXMubmF2TW9kZSR8YXN5bmMpPyAnZmFsc2UnOid0cnVlJ319XFxcIiByb3c9JzAnIGNvbD0nMSc+PC9CdXR0b24+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9J2J0bicgKHRvdWNoKT1cXFwiYnRuTCQubmV4dCgkZXZlbnQpXFxcIiB0ZXh0PSflt6bovYknIGlzRW5hYmxlZD1cXFwie3sodGhpcy5uYXZNb2RlJHxhc3luYyk/ICdmYWxzZSc6J3RydWUnfX1cXFwiIHJvdz0nMScgY29sPScwJz48L0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIHJvdz0nMScgY29sPScxJyBbYnVzeV09J3RoaXMubmF2TW9kZSQgfCBhc3luYycgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+XFxuICAgICAgICAgICAgICAgIDwvQWN0aXZpdHlJbmRpY2F0b3I+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmlzaWJpbGl0eT1cXFwie3sodGhpcy5uYXZNb2RlJHxhc3luYyk/ICdjb2xsYXBzZSc6J3Zpc2libGUnfX1cXFwiIGNsYXNzPSdzdG9wQnRuJ1xcbiAgICAgICAgICAgICAgICAgICAgKHRvdWNoKT1cXFwiYnRuUyQubmV4dCgkZXZlbnQpXFxcIiB0ZXh0PScnIHJvdz0nMScgY29sPScxJz48L0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz0nYnRuJyAodG91Y2gpPVxcXCJidG5SJC5uZXh0KCRldmVudClcXFwiIHRleHQ9J+WPs+i9iScgaXNFbmFibGVkPVxcXCJ7eyh0aGlzLm5hdk1vZGUkfGFzeW5jKT8gJ2ZhbHNlJzondHJ1ZSd9fVxcXCIgcm93PScxJyBjb2w9JzInPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPSdidG4nICh0b3VjaCk9XFxcImJ0bkIkLm5leHQoJGV2ZW50KVxcXCIgdGV4dD0n5b6M6YCAJyBpc0VuYWJsZWQ9XFxcInt7KHRoaXMubmF2TW9kZSR8YXN5bmMpPyAnZmFsc2UnOid0cnVlJ319XFxcIiByb3c9JzInIGNvbD0nMSc+PC9CdXR0b24+XFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiaHItZGFyayBtLTEwXFxcIj48L2xhYmVsPlxcblxcbiAgICAgICAgICAgIDxsYWJlbCB0ZXh0QWxpZ25tZW50PSdjZW50ZXInIHRleHRXcmFwPSd0cnVlJyB0ZXh0PSfpm6LpmpznpJnnianmnIDnn63ot53pm6InXFxuICAgICAgICAgICAgICAgIGNsYXNzPSd0ZXh0LXByaW1hcnkgaDMgZGVzY3JpcHRpb24tbGFiZWwnPjwvbGFiZWw+XFxuICAgICAgICAgICAgPFNsaWRlciAodmFsdWVDaGFuZ2UpPVxcXCJkaXNUb1dhbGwkLm5leHQoJGV2ZW50KVxcXCIgdmFsdWU9XFxcIjEwXFxcIiBtaW5WYWx1ZT1cXFwiMTBcXFwiIG1heFZhbHVlPVxcXCIyMDBcXFwiIGNsYXNzPSdzbGlkZXInPlxcbiAgICAgICAgICAgIDwvU2xpZGVyPlxcbiAgICAgICAgICAgIDxsYWJlbCB0ZXh0QWxpZ25tZW50PSdjZW50ZXInIHRleHRXcmFwPSd0cnVlJyB0ZXh0PSfpgJ/luqYnIGNsYXNzPSdoMyBkZXNjcmlwdGlvbi1sYWJlbCc+PC9sYWJlbD5cXG4gICAgICAgICAgICA8U2xpZGVyICh2YWx1ZUNoYW5nZSk9XFxcImlucHV0U3BlZWQkLm5leHQoJGV2ZW50KVxcXCIgdmFsdWU9XFxcIjUwXFxcIiBtaW5WYWx1ZT1cXFwiMTBcXFwiIG1heFZhbHVlPVxcXCIyNTVcXFwiPjwvU2xpZGVyPlxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0ndGV4dC1kYW5nZXInIHRleHRBbGlnbm1lbnQ9J2NlbnRlcicgdGV4dD0n6Ieq6aeV5qih5byPJyB0ZXh0V3JhcD0ndHJ1ZSc+PC9sYWJlbD5cXG4gICAgICAgICAgICA8U3dpdGNoIGNoZWNrZWQ9XFxcImZhbHNlXFxcIiAoY2hlY2tlZENoYW5nZSk9XFxcImF1dG9QaWxvdCQubmV4dCgkZXZlbnQudmFsdWUpXFxcIiBjbGFzcz1cXFwic3dpdGNoXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPjwvU3dpdGNoPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cIiIsIi8vIGltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIlxyXG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlLCBtZXJnZSwgY29tYmluZUxhdGVzdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGV4aGF1c3RNYXAsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBzdGFydFdpdGgsIHNjYW4sIG1hcCwgc2hhcmVSZXBsYXksIHRhcCwgZmlsdGVyLCB3aXRoTGF0ZXN0RnJvbSwgZGVib3VuY2VUaW1lLCB0aHJvdHRsZVRpbWUsIHNraXBXaGlsZSwgdGFrZVdoaWxlLCBzd2l0Y2hNYXAsIGxhc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IElyb2JvdFN0YXRlLCBjbWRFbnVtIH0gZnJvbSBcIi4vbW9kZWxzL3JvYm90U3RhdGVcIjtcclxuaW1wb3J0IHsgc2VsZWN0RGlzdGluY3RTdGF0ZSwgaW5wdXRUb1ZhbHVlIH0gZnJvbSBcIi4vb3BlcmF0b3JzL3NlbGVjdERpc3RpbmN0U3RhdGVcIjtcclxuaW1wb3J0IHsgVG91Y2hHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSAndWkvZ2VzdHVyZXMnO1xyXG5pbXBvcnQgeyBNcXR0UHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9tcXR0L21xdHQnO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuXHJcbi8vIGltcG9ydCB7IGdldEV2ZW50T3JHZXN0dXJlTmFtZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC9hbmd1bGFyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIHByb3ZpZGVyczogW01xdHRQcm92aWRlcl0sXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgbmF2U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgICBlcnJvck1lc3NhZ2UgPSAnV2lmaSDpgZnmjqfou4onO1xyXG4gICAgZGV2SWQgPSAnJztcclxuICAgIGluaXRpYWxSb2JvdFN0YXRlOiBJcm9ib3RTdGF0ZSA9IHtcclxuICAgICAgICBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCxcclxuICAgICAgICBzcGVlZDogNTAsXHJcbiAgICAgICAgZGlzVG9XYWxsOiAxMCxcclxuICAgICAgICBhdXRvUGlsb3Q6IDBcclxuICAgIH1cclxuICAgIC8vIGxhc3QgZXZlbnQgaXMgYWx3YXlzIHVwLCBzbyB0aGlzIGlzIGZpbHRlcmVkIGJ5IGRpc3RpbmN0VW50aWxDaGFuZ2Ugb3BlcmF0b3IuXHJcbiAgICAvLyBidG5TJCA9IG5ldyBTdWJqZWN0PFRvdWNoR2VzdHVyZUV2ZW50RGF0YT4oKTtcclxuICAgIGJ0bkYkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xyXG4gICAgYnRuTCQgPSBuZXcgU3ViamVjdDxUb3VjaEdlc3R1cmVFdmVudERhdGE+KCk7XHJcbiAgICBidG5SJCA9IG5ldyBTdWJqZWN0PFRvdWNoR2VzdHVyZUV2ZW50RGF0YT4oKTtcclxuICAgIGJ0bkIkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xyXG4gICAgYnRuUyQgPSBuZXcgU3ViamVjdDxUb3VjaEdlc3R1cmVFdmVudERhdGE+KCk7XHJcbiAgICBpbnB1dFNwZWVkJCA9IG5ldyBTdWJqZWN0PEV2ZW50PigpO1xyXG4gICAgZGlzVG9XYWxsJCA9IG5ldyBTdWJqZWN0PEV2ZW50PigpO1xyXG4gICAgYXV0b1BpbG90JCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICAgIC8vIEBWaWV3Q2hpbGQoJ2J0bkYnLCB7IHN0YXRpYzogdHJ1ZSB9KSBidG5GOiBFbGVtZW50UmVmO1xyXG4gICAgLy8gQFZpZXdDaGlsZCgnYnRuTCcsIHsgc3RhdGljOiB0cnVlIH0pIGJ0bkw6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgbW92ZUNhcihzOiBJcm9ib3RTdGF0ZSk6IGFueSB7XHJcbiAgICAgICAgLy8gaWYgbm8gcmV0dXJuIGhlcmUsIGl0IHdpbGwgZmlyZSBhbiBlcnJvciBhdCBydW50aW1lLiBkb24ndCBrbm93IHdoeT9cclxuICAgICAgICAvLyByZXR1cm4gdGhpcy5tcXR0LmNhbGxBcmVzdChzLmF1dG9QaWxvdCA9PT0gdHJ1ZSA/IGNtZEVudW0uQVVUTyA6IHMuZGlyZWN0aW9uLCBzLnNwZWVkLnRvU3RyaW5nKCkpIFxyXG4gICAgICAgIHJldHVybiB0aGlzLm1xdHQucHVibGlzaCgnbW92ZUNhcicsIHRoaXMuZGV2SWQsIHMpO1xyXG4gICAgfVxyXG4gICAgLy8gd2hlbiB0YXAgb24gYnV0dG9uLCBhIGRvd24sIG1hbnkgbW92ZS4uLiBhbiB1cCBldmVudHMgdHJpZ2dlZC5cclxuICAgIHJvYm90Q29tbWFuZHMkID0gbWVyZ2UoXHJcbiAgICAgICAgdGhpcy5idG5GJC5waXBlKFxyXG4gICAgICAgICAgICAvLyBlLmFjdGlvbjogbW92ZSwgY2FuY2VsIGRvd24sIHVwLlxyXG4gICAgICAgICAgICBmaWx0ZXIoZSA9PiBlLmFjdGlvbiAhPT0gJ21vdmUnKSxcclxuICAgICAgICAgICAgbWFwKChlOiBUb3VjaEdlc3R1cmVFdmVudERhdGEpID0+IGUuYWN0aW9uID09PSAndXAnID8gKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AgfSkgOiAoeyBkaXJlY3Rpb246IGNtZEVudW0uRk9SV0FSRCB9KVxyXG4gICAgICAgICAgICApKSxcclxuXHJcbiAgICAgICAgdGhpcy5idG5CJC5waXBlKFxyXG4gICAgICAgICAgICBmaWx0ZXIoZSA9PiBlLmFjdGlvbiAhPT0gJ21vdmUnKSxcclxuICAgICAgICAgICAgbWFwKChlOiBUb3VjaEdlc3R1cmVFdmVudERhdGEpID0+IGUuYWN0aW9uID09PSAndXAnID8gKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AgfSkgOiAoeyBkaXJlY3Rpb246IGNtZEVudW0uQkFDSyB9KVxyXG4gICAgICAgICAgICApKSxcclxuICAgICAgICB0aGlzLmJ0bkwkLnBpcGUoXHJcbiAgICAgICAgICAgIGZpbHRlcihlID0+IGUuYWN0aW9uICE9PSAnbW92ZScpLFxyXG4gICAgICAgICAgICBtYXAoZSA9PiBlLmFjdGlvbiA9PT0gJ3VwJyA/ICh7IGRpcmVjdGlvbjogY21kRW51bS5TVE9QIH0pIDogKHsgZGlyZWN0aW9uOiBjbWRFbnVtLkxFRlQgfSlcclxuICAgICAgICAgICAgKSksXHJcbiAgICAgICAgdGhpcy5idG5SJC5waXBlKFxyXG4gICAgICAgICAgICBmaWx0ZXIoZSA9PiBlLmFjdGlvbiAhPT0gJ21vdmUnKSxcclxuICAgICAgICAgICAgbWFwKGUgPT4gZS5hY3Rpb24gPT09ICd1cCcgPyAoeyBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCB9KSA6ICh7IGRpcmVjdGlvbjogY21kRW51bS5SSUdIVCB9KVxyXG4gICAgICAgICAgICApKSxcclxuICAgICAgICAvLyBjYXIgc3BlZWQgKDAtMjU1KVxyXG4gICAgICAgIHRoaXMuaW5wdXRTcGVlZCQucGlwZShcclxuICAgICAgICAgICAgLy90YXAoY29uc29sZS5sb2cpLFxyXG4gICAgICAgICAgICAvLyB0YXAobiA9PiBjb25zb2xlLmxvZygnc3BlZWQ6ICcgKyBuKSkpLFxyXG4gICAgICAgICAgICBmaWx0ZXIobiA9PiBuICE9PSB1bmRlZmluZWQpLFxyXG4gICAgICAgICAgICBpbnB1dFRvVmFsdWUoKSxcclxuICAgICAgICAgICAgbWFwKG4gPT4gKHsgc3BlZWQ6IG4gfSkpXHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgdGhpcy5kaXNUb1dhbGwkLnBpcGUoaW5wdXRUb1ZhbHVlKCksIG1hcChuID0+ICh7IGRpc1RvV2FsbDogbiB9KSkpLFxyXG4gICAgICAgIHRoaXMuYXV0b1BpbG90JC5waXBlKFxyXG4gICAgICAgICAgICAvLyBkb24ndCBrbm93IGhvdyB0byBzZW5kIHRydWUgb3IgZmFsc2UgaW4gaHR0cCByZXF1ZXN0LCBzbyBpIHVzZSAwIGFuZCAxXHJcbiAgICAgICAgICAgIG1hcChuID0+ICh7IGF1dG9QaWxvdDogbiA/IDEgOiAwIH0pKSlcclxuICAgIClcclxuXHJcbiAgICByb2JvdFN0YXRlJDogT2JzZXJ2YWJsZTxJcm9ib3RTdGF0ZT4gPSB0aGlzLnJvYm90Q29tbWFuZHMkXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgIHN0YXJ0V2l0aCh0aGlzLmluaXRpYWxSb2JvdFN0YXRlKSxcclxuICAgICAgICAgICAgLy8gKiogdG91Y2ggZXZlbnQgJ21vdmUnIGtlZXBzIGJlaW5nIGZpcmVkIGFzIGxvbmcgYXMgbm90IHJlbGVhc2luZy4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBzY2FuKChzdGF0ZTogSXJvYm90U3RhdGUsIGNvbW1hbmQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoeyAuLi5zdGF0ZSwgLi4uY29tbWFuZCB9KTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIC8vIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgICAgICAgIC8vIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChwcmV2OiBJcm9ib3RTdGF0ZSwgY3VycjogSXJvYm90U3RhdGUpID0+IHByZXYuZGlyZWN0aW9uID09PSBjdXJyLmRpcmVjdGlvbiksXHJcbiAgICAgICAgICAgIHNoYXJlUmVwbGF5KDEpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICBuYXZNb2RlJCA9IHRoaXMucm9ib3RTdGF0ZSQucGlwZShzZWxlY3REaXN0aW5jdFN0YXRlKCdhdXRvUGlsb3QnKSk7XHJcbiAgICBkaXJlY3Rpb24kID0gdGhpcy5yb2JvdFN0YXRlJC5waXBlKFxyXG4gICAgICAgIHNlbGVjdERpc3RpbmN0U3RhdGUoJ2RpcmVjdGlvbicpLFxyXG4gICAgICAgIC8vIGZpbHRlciBvdXQgYW55IGRpcmVjdGlvbiBlbWlzc2lvbnMgaWYgYXV0b3BpbG90IGlzIHRydW5lZCBvblxyXG4gICAgICAgIC8qIGFjdHVhbGx5IGkgdXNlIGlzRW5hYmxlZCBpbiBodG1sIHRvIGRpc2FibGUgYnV0dG9ucywgc28gYmVsb3cgMiBsaW5lcyBhcmVuJ3QgbmVlZGVkXHJcbiAgICAgICAgKiogYnV0IGp1c3QgZm9yIHJlZmVyZW5jZSBcclxuICAgICAgICAqL1xyXG4gICAgICAgIC8vIHdpdGhMYXRlc3RGcm9tKHRoaXMubmF2TW9kZSQpLCBcclxuICAgICAgICAvLyBmaWx0ZXIoKFtkaXIsIG5hdl0pPT5uYXY9PT0wKSAgICAgIFxyXG4gICAgKVxyXG4gICAgLy8gKiogZGlzY2FyZCBlbWl0dGVkIHZhbHVlcyB0aGF0IHRha2UgPCAxcyBjb3ogaW5wdXR2YWx1ZSBrZWVwcyBmaXJpbmcgd2hlbiBzbGlkaW5nIG9uIHNsaWRlci5cclxuICAgIHNwZWVkJDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5yb2JvdFN0YXRlJC5waXBlKHNlbGVjdERpc3RpbmN0U3RhdGUoJ3NwZWVkJykpLnBpcGUoZGVib3VuY2VUaW1lKDEwMDApKTtcclxuXHJcbiAgICAvLyBhbnkgb2YgdGhlIG9ic2VydmFibGVzIGVtaXRzIGEgdmF1bGUsIGdyb3VwIHRoZSBsYXRlc3QgY2hhbmdlIHRvZ2V0aGVyXHJcbiAgICBuYXZpZ2F0aW9uJCA9IGNvbWJpbmVMYXRlc3QodGhpcy5kaXJlY3Rpb24kLCB0aGlzLm5hdk1vZGUkLCB0aGlzLnNwZWVkJClcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgLy8gd2l0aExhdGVzdEZyb20gdGFrZXMgMiBvYnMkLCBpbiB0aGlzIGNhc2Ugd2UgaWdub3JlIDFzdCBvbmUoZGlyZWN0aW9uJCksIGFuZCB0YWtlIHN0YXRlJCBvbmx5XHJcbiAgICAgICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMucm9ib3RTdGF0ZSQsIChfLCBzKSA9PiBzKSxcclxuXHJcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgdGFwIHcvIGV4aGF1c3RNYXAgc28gYW55IGNvbWluZyBkaXJlY3Rpb24gZXZlbnQgd2lsbCBiZSBpZ25vcmUgaWYgbW92ZUNhciBpc24ndCBjb21wbGV0ZWQuIFxyXG4gICAgICAgICAgICAvLyB0YXAoIGNvbnNvbGUubG9nKCdzLmRpcmVjdGlvbicpICksXHJcbiAgICAgICAgICAgIC8vIGRlYm91bmNlIGlzIHRvIHByZXZlbnQgc25lZGluZyBzdG9wIHJpZ2h0IGFmdGVyIGRpcmVjdGlvbiBjbWQgaWYgc2xpZ2h0bHkgdG91Y2hcclxuICAgICAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXHJcbiAgICAgICAgICAgIC8vIHN3aXRjaG1hcCBpcyBvbmx5IGZvciBzd2l0Y2hpbmcgb2JzJCB0byBhbm90aGVyIG9icyQuIHdoZXJlYXMgaW4gaGVyZSBzIGlzbid0IG9icyRcclxuICAgICAgICAgICAgbWFwKChzOiBJcm9ib3RTdGF0ZSkgPT4gdGhpcy5tb3ZlQ2FyKHMpKVxyXG4gICAgICAgIClcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1xdHQ6IE1xdHRQcm92aWRlcikge1xyXG4gICAgICAgIC8vIHRoaXMucm9ib3RTdGF0ZSQuc3Vic2NyaWJlKGNvbnNvbGUubG9nKTtcclxuICAgICAgICAvLyB0aGlzLmRpcmVjdGlvbiQuc3Vic2NyaWJlKGNvbnNvbGUubG9nKTsgICAgICAgXHJcbiAgICAgICAgLy8gKiogdGhpcyBjb25zb2xlLmxvZyBzaG93cyBldmVyeXRoaW5nIVxyXG4gICAgICAgIHRoaXMubmF2U3Vic2NyaXB0aW9uID0gdGhpcy5uYXZpZ2F0aW9uJC5zdWJzY3JpYmUoKHJlczogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHNlZSBpZiBpbml0IGh0dHAgcmVxdWVzdCBzdWNjZXNzZnVsbHkuXHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgIGlmIChyZXMgIT0gMjAwICkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoXCJDYW5ub3QgY29ubmVjdCB0byB0aGUgY2FyIVwiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBhbGVydChyZXMubWVzc2FnZStyZXMuaWQpO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhpcy5yb2JvdENvbW1hbmRzJC5zdWJzY3JpYmUoY29uc29sZS5sb2cpOyAgXHJcbiAgICAgICAgLy8gc3RhcnQgdG8gcmVjZWl2ZSBjb21tYW5kcyAgXHJcbiAgICAgICAgdGhpcy5tcXR0LnN1YignZGV2SWQnKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2SWQgPSBkYXRhO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZGV2SWQ6ICcsIHRoaXMuZGV2SWQpO1xyXG4gICAgICAgICAgICAvLyBkaWFsb2dzLmFsZXJ0KHRoaXMuZGV2SWQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnJvYm90U3RhdGUkLnN1YnNjcmliZSgpO1xyXG4gICAgICAgIC8vIHRoaXMubmF2TW9kZSQuc3Vic2NyaWJlKGNvbnNvbGUubG9nKTtcclxuICAgIH1cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubmF2U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBIb21lUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2hvbWUtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudCc7XHJcbmltcG9ydCB7IE1xdHRQcm92aWRlciB9IGZyb20gJy4vcHJvdmlkZXJzL21xdHQvbXF0dCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogWyAgICAgICBcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgSG9tZVJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBIb21lQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgTXF0dFByb3ZpZGVyXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IFVuYXJ5RnVuY3Rpb24sIHBpcGUsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgcGx1Y2ssIG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdERpc3RpbmN0U3RhdGU8VCwgST4oa2V5OiBzdHJpbmcpOiBVbmFyeUZ1bmN0aW9uPE9ic2VydmFibGU8VD4sIE9ic2VydmFibGU8ST4+IHtcclxuICAgIHJldHVybiBwaXBlKFxyXG4gICAgICAgIHBsdWNrPFQsIEk+KGtleSksXHJcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQ8ST4oKVxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlucHV0VG9WYWx1ZShkZWZhdWx0VmFsdWU6IG51bWJlciA9IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gcGlwZShcclxuICAgICAgICAgICAgbWFwKChldmVudDogYW55KTogbnVtYmVyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IGV2ZW50ID8gcGFyc2VJbnQoZXZlbnQudmFsdWUsIDEwKSA6IGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAocGFyc2VkID09PSAwIHx8IHBhcnNlZCkgPyBwYXJzZWQgOiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbi8qIGN1c3RvbSBvcGVyYXRvci4gSGludDogdXNlIE9ic2VydmFibGUuY3JlYXRlIGluc2lkZSB0aGUgY3VzdG9tIG9wZXJhdG9yXHJcbmNvbnN0IGZpbHRlck9kZCA9IChzcmMkOiBPYnNlcnZhYmxlPGFueT4pPT57XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXI9PntcclxuICAgICAgICByZXR1cm4gc3JjLnN1YnNjcmliZSh2YWx1ZT0+e1xyXG4gICAgICAgICAgICBpZiAodmFsdWUlMiA9PT0wKXtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQodmFsdWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnIpPT57XHJcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKT0+e29ic2VydmVyLmNvbXBsZXRlKCl9ICAgICAgICBcclxuICAgICAgICApXHJcbiAgICB9KVxyXG59XHJcbiovIiwiLy8gR0VUIGh0dHBzOi8vYXBpLnRoaW5nc3BlYWsuY29tL3VwZGF0ZT9hcGlfa2V5PUdVM1QyQ1ZWSFhSWlVXSFEmZmllbGQxPTBcclxuZXhwb3J0IGNsYXNzIENvbmZpZyB7XHJcbiAgICAvLyBzdGF0aWMgYXBpVXJsID0gXCJodHRwczovL2FwaS50aGluZ3NwZWFrLmNvbS9cIjtcclxuICAgIC8vIHN0YXRpYyBhcGlLZXkgPSBcIkdVM1QyQ1ZWSFhSWlVXSFFcIjtcclxuXHJcbiAgICAvLyBzdGF0aWMgYXBpVXJsID0gJ2h0dHBzOi8vY2xvdWQuYXJlc3QuaW8nOyAgXHJcbiAgICBzdGF0aWMgYXBpVXJsID0gJ2h0dHA6Ly9ham9hbi5jb20nOyAgXHJcbiAgICBzdGF0aWMgZGV2aWNlSWQgPSAnMTA3OTI5JzsgLy8gdGhlIGNhcidzIGlkIHJlZ2lzdGVyZCBpbiBhcmVzdCB3ZWJzaXRlICAgXHJcbiAgfVxyXG5cclxuICAvLyBwcml2YXRlIGFwaUtleSA9ICcxb2JxemNoOHgzZTdlNjI2JzsgIFxyXG4gIC8vIHByaXZhdGUgdXJsID0gJ2h0dHBzOi8vY2xvdWQuYXJlc3QuaW87J1xyXG4gIC8vIGUuZy4sIGh0dHBzOi8vY2xvdWQuYXJlc3QuaW8vJHtkZXZJZH0vZm9yd2FyZCIsIi8qIFRoaXMgZGVjb3JhdG9yIGRlbm90ZXMgdGhpcyBjbGFzcyBhcyBhIGNhbmRpZGF0ZSBmb3IgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gbWVjaGFuaXNtLiBGb3Igbm93IGp1c3QgdGhpbmsgb2YgYWRkaW5nXHJcbioqIHRoZSBASW5qZWN0YWJsZSBhcyBhIHJlcXVpcmVkIGNvbnZlbnRpb24gZm9yIGFsbCBzZXJ2aWNlcyB0aGF0IHlvdSB3cml0ZVxyXG4qL1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IsIGZyb20gfSBmcm9tICdyeGpzJztcclxuLy9pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVzcG9uc2UsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgeyBJcm9ib3RTdGF0ZSB9IGZyb20gJ34vaG9tZS9tb2RlbHMvcm9ib3RTdGF0ZSc7XHJcbmltcG9ydCB7IHJlcXVlc3QsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1xdHRQcm92aWRlciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9O1xyXG5cclxuICAvLyBVUkxzIGFyZSBzdHJpbmdzIGFuZCBhbGwgdmFsdWVzIGluIGEgVVJMIGFyZSBzdHJpbmdzLiBXaGVuIHlvdSBzZWUgaT0wIGluIGEgVVJMLCAwIGlzIGEgc3RyaW5nLlxyXG4gIC8vIFdoZW4geW91IHNlZSBiPXRydWUsIHRydWUgaXMgYSBzdHJpbmcuIFdoZW4geW91IHNlZSBzPSwgdGhlIHZhbHVlIGlzIGFuIGVtcHR5IHN0cmluZy5cclxuICAvLyBwdWJsaXNoKGZuTmFtZTogc3RyaW5nLCBzOiBJcm9ib3RTdGF0ZSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgcHVibGlzaCh0b3BpYzogc3RyaW5nLCBkZXZJZDogc3RyaW5nLCBzOiBJcm9ib3RTdGF0ZSk6IGFueSB7XHJcbiAgICAvLyBjb25zdCB1cmwgPSBgJHtDb25maWcuYXBpVXJsfS8ke0NvbmZpZy5kZXZpY2VJZH0vJHtmbk5hbWV9P3BhcmFtcz0ke3Muc3BlZWQudG9TdHJpbmcoKX0sJHtzLmRpc1RvV2FsbC50b1N0cmluZygpfSwke3MuZGlyZWN0aW9uLnRvU3RyaW5nKCl9LCR7cy5hdXRvUGlsb3QudG9TdHJpbmcoKX1gO1xyXG4gICAgY29uc3QgdXJsID0gYCR7Q29uZmlnLmFwaVVybH0vJHt0b3BpY30/ZGV2SWQ9JHtkZXZJZH0mcGF5bG9hZD0ke3Muc3BlZWQudG9TdHJpbmcoKX0sJHtzLmRpc1RvV2FsbC50b1N0cmluZygpfSwke3MuZGlyZWN0aW9uLnRvU3RyaW5nKCl9LCR7cy5hdXRvUGlsb3QudG9TdHJpbmcoKX1gO1xyXG4gICAgY29uc29sZS5sb2codXJsKTtcclxuICAgIC8vIHRoaXMubXNnID0gZm5OYW1lOyAvLyBmb3IgY3NzXHJcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHtDb25maWcuYXBpVXJsfS8ke0NvbmZpZy5kZXZpY2VJZH0vJHtmbk5hbWV9P2tleT0ke0NvbmZpZy5hcGlLZXl9YClcclxuICAgIC8vIGNvbnZlcnQgcHJvbWlzZSB0byBvYnNlcmFibGUgdmlhIGZyb21cclxuICAgIHJldHVybiBmcm9tKHJlcXVlc3QoeyB1cmw6IHVybCwgbWV0aG9kOiBcIkdFVFwiIH0pKVxyXG4gICAgICAucGlwZShtYXAoKHJlczogSHR0cFJlc3BvbnNlKSA9PiByZXMuc3RhdHVzQ29kZSkpO1xyXG5cclxuICAgIC8qXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpLnBpcGUoXHJcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcclxuICAgICk7XHJcbiAgICAqL1xyXG5cclxuICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke0NvbmZpZy5hcGlVcmx9dXBkYXRlP2FwaV9rZXk9JHtDb25maWcuYXBpS2V5fSZmaWVsZDE9JHtmbk5hbWV9YClcclxuICAgIC8vLnBpcGUoXHJcbiAgICAvLyB0YXAoY29uc29sZS5sb2cpLFxyXG4gICAgLy9jYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICAvLylcclxuICB9XHJcblxyXG4gIHN1Yih0b3BpYzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IHVybCA9IGAke0NvbmZpZy5hcGlVcmx9LyR7dG9waWN9YDtcclxuICAgIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICByZXR1cm4gZnJvbShyZXF1ZXN0KHsgdXJsOiB1cmwsIG1ldGhvZDogXCJHRVRcIiB9KSlcclxuICAgICAgLnBpcGUobWFwKChyZXM6IEh0dHBSZXNwb25zZSkgPT4gcmVzLmNvbnRlbnQudG9TdHJpbmcoKSkpXHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpIHtcclxuICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICcnO1xyXG4gIFxyXG4gICAgICBlcnJvck1lc3NhZ2UgPSBgRXJyb3I6ICR7ZXJyb3IuZXJyb3IubWVzc2FnZX1gO1xyXG4gIFxyXG4gICAgICAvLyBzZXJ2ZXItc2lkZSBlcnJvclxyXG4gICAgICBlcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2UgKyBgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9XFxuTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWA7XHJcbiAgXHJcbiAgICAgIC8vIHdpbmRvdy5hbGVydChlcnJvck1lc3NhZ2UpO1xyXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgKi9cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9