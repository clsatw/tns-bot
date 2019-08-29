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

module.exports = ".home-panel{\n    vertical-align: center; \n    font-size: 20;\n    margin: 15;\n}\n\n.description-label{\n    margin-bottom: 15;\n}"

/***/ }),

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"{{errorMessage}}\" class=\"action-bar\">\n</ActionBar>\n\n<ScrollView class='page'>\n    <StackLayout verticalAlignment='center' horizontalAlignment='center'>\n        <GridLayout columns='auto, auto, auto' rows='auto, auto, auto'>\n            <Button (touch)=\"btnF$.next($event)\" text='Forward' row='0' col='1'></Button>\n            <Button (touch)=\"btnL$.next($event)\" text='Left' row='1' col='0'></Button>\n           \n            <Button (touch)=\"btnR$.next($event)\" text='Right' row='1' col='2'></Button>\n            <Button (touch)=\"btnB$.next($event)\" text='Back' row='2' col='1'></Button>\n        </GridLayout>\n\n        \n        <label textWrap='true' text='Max distance to wall' class='h3 description-label'></label>\n        <Slider (valueChange)=\"disToWall$.next($event)\" value=\"10\" minValue=\"10\"\n            maxValue=\"200\"></Slider>\n        <label textWrap='true' text='Speed' class='h3 description-label'></label>\n        <Slider (valueChange)=\"inputSpeed$.next($event)\" value=\"50\" minValue=\"10\"\n            maxValue=\"255\"></Slider>\n        <label textWrap='true' text='AutoPilot' class='h3 description-label'></label>\n        <Switch checked=\"false\" (checkedChange)=\"autoPilot$.next($event.value)\"></Switch>\n    </StackLayout>\n</ScrollView>"

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





var HomeComponent = /** @class */ (function () {
    function HomeComponent(mqtt) {
        var _this = this;
        this.mqtt = mqtt;
        this.errorMessage = 'Iot Self-Driving Car';
        this.initialRobotState = {
            direction: "stop" /* STOP */,
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
        // tap(e => console.log(e.action)),           
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) {
            return e.action === 'up' ? ({ direction: "stop" /* STOP */ }) : ({ direction: "forward" /* FORWARD */ });
        })), this.btnB$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) {
            return e.action === 'up' ? ({ direction: "stop" /* STOP */ }) : ({ direction: "back" /* BACK */ });
        })), this.btnL$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) {
            return e.action === 'up' ? ({ direction: "stop" /* STOP */ }) : ({ direction: "left" /* LEFT */ });
        })), this.btnR$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) {
            return e.action === 'up' ? ({ direction: "stop" /* STOP */ }) : ({ direction: "right" /* RIGHT */ });
        })), 
        // car speed (0-255)
        this.inputSpeed$.pipe(
        //tap(console.log),
        // tap(n => console.log('speed: ' + n))),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (n) { return n !== undefined; }), Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["inputToValue"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (n) { return ({ speed: n }); })), this.disToWall$.pipe(Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["inputToValue"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (n) { return ({ disToWall: n }); })), this.autoPilot$.pipe(
        // tap(n=>console.log(n.action)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (n) { return ({ autoPilot: n }); })));
        this.robotState$ = this.robotCommands$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(this.initialRobotState), 
        // ** touch event 'move' keeps being fired as long as not releasing.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(function (state, command) {
            return (__assign({}, state, command));
        }), 
        // distinctUntilChanged((prev: IrobotState, curr: IrobotState) => prev.direction === curr.direction),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
        this.direction$ = this.robotState$.pipe(Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["selectDistinctState"])('direction'));
        this.navMode$ = this.robotState$.pipe(Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["selectDistinctState"])('autoPilot'));
        // ** discard emitted values that take < 1s coz inputvalue keeps firing when sliding on slider.
        this.speed$ = this.robotState$.pipe(Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["selectDistinctState"])('speed')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000));
        this.navigation$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.direction$, this.navMode$, this.speed$)
            .pipe(
        // withLatestFrom takes 2 obs$, in this case we ignore 1st one(direction$), and take state$ only
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.robotState$, function (_, s) { return s; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (s) {
            // console.log(s.direction)
            _this.moveCar(s);
        })
        // replace tap w/ exhaustMap so any coming direction event will be ignore if moveCar isn't completed. 
        //tap( console.log('s.direction') ),
        //exhaustMap((s)=>this.moveCar(s))
        );
        // this.robotState$.subscribe(console.log);
        // this.direction$.subscribe(console.log);       
        // ** this console.log shows everything!
        this.navigation$.subscribe(console.log);
    }
    // @ViewChild('btnF', { static: true }) btnF: ElementRef;
    // @ViewChild('btnL', { static: true }) btnL: ElementRef;
    HomeComponent.prototype.moveCar = function (s) {
        return this.mqtt.callArest(s.autoPilot === true ? "autoPilot" /* AUTO */ : s.direction, s.speed.toString())
            .subscribe(function () { console.log('arest ok'); }, function (err) { return alert(err); });
    };
    HomeComponent.prototype.ngOnInit = function () {
        // this.robotCommands$.subscribe(n => console.log(n));
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _providers_mqtt_mqtt__WEBPACK_IMPORTED_MODULE_4__["MqttProvider"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
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
/* harmony import */ var nativescript_angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("nativescript-angular/http");
/* harmony import */ var nativescript_angular_http__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_http__WEBPACK_IMPORTED_MODULE_5__);
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
                nativescript_angular_http__WEBPACK_IMPORTED_MODULE_5__["NativeScriptHttpModule"],
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@angular/http");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./home/providers/config.ts");





var MqttProvider = /** @class */ (function () {
    function MqttProvider(http) {
        this.http = http;
    }
    MqttProvider.prototype.callArest = function (fnName, speed) {
        var url = _config__WEBPACK_IMPORTED_MODULE_4__["Config"].apiUrl + "/" + _config__WEBPACK_IMPORTED_MODULE_4__["Config"].deviceId + "/" + fnName + "?params=" + speed;
        console.log(url);
        // this.msg = fnName; // for css
        // return this.http.get(`${Config.apiUrl}/${Config.deviceId}/${fnName}?key=${Config.apiKey}`)
        return this.http.get(url)
            // return this.http.get(`${Config.apiUrl}update?api_key=${Config.apiKey}&field1=${fnName}`)
            .pipe(
        // tap(console.log),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    MqttProvider.prototype.callArestWithParam = function (fnName, speed, distToWall, delay) {
        /*
        // console.log('speed: ', speed);
        return this.http.get(`${this.url}/${this.device_id}/${fnName}?key=${this.apiKey}&params=${speed},${distToWall},${delay}`)
          .pipe(
            tap(console.log),
            catchError(this.handleError)
          )
          */
    };
    MqttProvider.prototype.handleError = function (error) {
        console.log('Handling error locally and rethrowing it...', JSON.stringify(error.json()));
        //return Observable.throw(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    };
    MqttProvider.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }
    ]; };
    MqttProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], MqttProvider);
    return MqttProvider;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9ob21lL29wZXJhdG9ycy9zZWxlY3REaXN0aW5jdFN0YXRlLnRzIiwid2VicGFjazovLy8uL2hvbWUvcHJvdmlkZXJzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9ob21lL3Byb3ZpZGVycy9tcXR0L21xdHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFdEI7QUFFakQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw2REFBYSxFQUFFO0NBQ3pDLENBQUM7QUFNRjtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBSjdCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGlCQUFpQixDQUFJO0lBQUQsd0JBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ2Q5Qiw4QkFBOEIsNkJBQTZCLHFCQUFxQixpQkFBaUIsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsQzs7Ozs7OztBQ0F0Six1Q0FBdUMsY0FBYyxtd0M7Ozs7Ozs7O0FDQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0VBQWdFO0FBQ1M7QUFDRztBQUN5STtBQUVqSTtB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R25DO0lBRUUsc0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQzlCLENBQUM7SUFFRCxnQ0FBUyxHQUFULFVBQVUsTUFBYyxFQUFFLEtBQWE7UUFDckMsSUFBTSxHQUFHLEdBQU0sOENBQU0sQ0FBQyxNQUFNLFNBQUksOENBQU0sQ0FBQyxRQUFRLFNBQUksTUFBTSxnQkFBVyxLQUFPLENBQUM7UUFDNUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixnQ0FBZ0M7UUFDaEMsNkZBQTZGO1FBQzdGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQ3pCLDJGQUEyRjthQUN4RixJQUFJO1FBQ0gsb0JBQW9CO1FBQ3BCLGlFQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUM3QjtJQUNMLENBQUM7SUFFRCx5Q0FBa0IsR0FBbEIsVUFBbUIsTUFBYyxFQUFFLEtBQWEsRUFBRSxVQUFrQixFQUFFLEtBQWE7UUFDakY7Ozs7Ozs7WUFPSTtJQUNOLENBQUM7SUFFTyxrQ0FBVyxHQUFuQixVQUFvQixLQUFlO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkNBQTZDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLGlDQUFpQztRQUNqQyxPQUFPLHVEQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Z0JBL0J5QixrREFBSTs7SUFGbkIsWUFBWTtRQUR4QixnRUFBVSxFQUFFO3lDQUdlLGtEQUFJO09BRm5CLFlBQVksQ0FtQ3hCO0lBQUQsbUJBQUM7Q0FBQTtBQW5Dd0IiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuaG9tZS1wYW5lbHtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgXFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbjogMTU7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1sYWJlbHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcInt7ZXJyb3JNZXNzYWdlfX1cXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj5cXG48L0FjdGlvbkJhcj5cXG5cXG48U2Nyb2xsVmlldyBjbGFzcz0ncGFnZSc+XFxuICAgIDxTdGFja0xheW91dCB2ZXJ0aWNhbEFsaWdubWVudD0nY2VudGVyJyBob3Jpem9udGFsQWxpZ25tZW50PSdjZW50ZXInPlxcbiAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz0nYXV0bywgYXV0bywgYXV0bycgcm93cz0nYXV0bywgYXV0bywgYXV0byc+XFxuICAgICAgICAgICAgPEJ1dHRvbiAodG91Y2gpPVxcXCJidG5GJC5uZXh0KCRldmVudClcXFwiIHRleHQ9J0ZvcndhcmQnIHJvdz0nMCcgY29sPScxJz48L0J1dHRvbj5cXG4gICAgICAgICAgICA8QnV0dG9uICh0b3VjaCk9XFxcImJ0bkwkLm5leHQoJGV2ZW50KVxcXCIgdGV4dD0nTGVmdCcgcm93PScxJyBjb2w9JzAnPjwvQnV0dG9uPlxcbiAgICAgICAgICAgXFxuICAgICAgICAgICAgPEJ1dHRvbiAodG91Y2gpPVxcXCJidG5SJC5uZXh0KCRldmVudClcXFwiIHRleHQ9J1JpZ2h0JyByb3c9JzEnIGNvbD0nMic+PC9CdXR0b24+XFxuICAgICAgICAgICAgPEJ1dHRvbiAodG91Y2gpPVxcXCJidG5CJC5uZXh0KCRldmVudClcXFwiIHRleHQ9J0JhY2snIHJvdz0nMicgY29sPScxJz48L0J1dHRvbj5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgIFxcbiAgICAgICAgPGxhYmVsIHRleHRXcmFwPSd0cnVlJyB0ZXh0PSdNYXggZGlzdGFuY2UgdG8gd2FsbCcgY2xhc3M9J2gzIGRlc2NyaXB0aW9uLWxhYmVsJz48L2xhYmVsPlxcbiAgICAgICAgPFNsaWRlciAodmFsdWVDaGFuZ2UpPVxcXCJkaXNUb1dhbGwkLm5leHQoJGV2ZW50KVxcXCIgdmFsdWU9XFxcIjEwXFxcIiBtaW5WYWx1ZT1cXFwiMTBcXFwiXFxuICAgICAgICAgICAgbWF4VmFsdWU9XFxcIjIwMFxcXCI+PC9TbGlkZXI+XFxuICAgICAgICA8bGFiZWwgdGV4dFdyYXA9J3RydWUnIHRleHQ9J1NwZWVkJyBjbGFzcz0naDMgZGVzY3JpcHRpb24tbGFiZWwnPjwvbGFiZWw+XFxuICAgICAgICA8U2xpZGVyICh2YWx1ZUNoYW5nZSk9XFxcImlucHV0U3BlZWQkLm5leHQoJGV2ZW50KVxcXCIgdmFsdWU9XFxcIjUwXFxcIiBtaW5WYWx1ZT1cXFwiMTBcXFwiXFxuICAgICAgICAgICAgbWF4VmFsdWU9XFxcIjI1NVxcXCI+PC9TbGlkZXI+XFxuICAgICAgICA8bGFiZWwgdGV4dFdyYXA9J3RydWUnIHRleHQ9J0F1dG9QaWxvdCcgY2xhc3M9J2gzIGRlc2NyaXB0aW9uLWxhYmVsJz48L2xhYmVsPlxcbiAgICAgICAgPFN3aXRjaCBjaGVja2VkPVxcXCJmYWxzZVxcXCIgKGNoZWNrZWRDaGFuZ2UpPVxcXCJhdXRvUGlsb3QkLm5leHQoJGV2ZW50LnZhbHVlKVxcXCI+PC9Td2l0Y2g+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuPC9TY3JvbGxWaWV3PlwiIiwiLy8gaW1wb3J0IHsgSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiXG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IG9mLCBTdWJqZWN0LCBPYnNlcnZhYmxlLCBtZXJnZSwgY29tYmluZUxhdGVzdCwgTkVWRVIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGV4aGF1c3RNYXAsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBzdGFydFdpdGgsIHNjYW4sIG1hcCwgc2hhcmVSZXBsYXksIHN3aXRjaE1hcCwgdGFwLCBmaWx0ZXIsIHdpdGhMYXRlc3RGcm9tLCBsYXN0LCB0YWtlTGFzdCwgZGVib3VuY2UsIHRocm90dGxlVGltZSwgdGFrZSwgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSXJvYm90U3RhdGUsIGNtZEVudW0gfSBmcm9tIFwiLi9tb2RlbHMvcm9ib3RTdGF0ZVwiO1xuaW1wb3J0IHsgc2VsZWN0RGlzdGluY3RTdGF0ZSwgaW5wdXRUb1ZhbHVlIH0gZnJvbSBcIi4vb3BlcmF0b3JzL3NlbGVjdERpc3RpbmN0U3RhdGVcIjtcbmltcG9ydCB7IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gJ3VpL2dlc3R1cmVzJztcbmltcG9ydCB7IE1xdHRQcm92aWRlciB9IGZyb20gJy4vcHJvdmlkZXJzL21xdHQvbXF0dCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGVycm9yTWVzc2FnZSA9ICdJb3QgU2VsZi1Ecml2aW5nIENhcic7XG4gICAgaW5pdGlhbFJvYm90U3RhdGU6IElyb2JvdFN0YXRlID0ge1xuICAgICAgICBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCxcbiAgICAgICAgc3BlZWQ6IDUwLFxuICAgICAgICBkaXNUb1dhbGw6IDEwLFxuICAgICAgICBhdXRvUGlsb3Q6IGZhbHNlXG4gICAgfVxuICAgIC8vIGxhc3QgZXZlbnQgaXMgYWx3YXlzIHVwLCBzbyB0aGlzIGlzIGZpbHRlcmVkIGJ5IGRpc3RpbmN0VW50aWxDaGFuZ2Ugb3BlcmF0b3IuXG4gICAgLy8gYnRuUyQgPSBuZXcgU3ViamVjdDxUb3VjaEdlc3R1cmVFdmVudERhdGE+KCk7XG4gICAgYnRuRiQgPSBuZXcgU3ViamVjdDxUb3VjaEdlc3R1cmVFdmVudERhdGE+KCk7XG4gICAgYnRuTCQgPSBuZXcgU3ViamVjdDxUb3VjaEdlc3R1cmVFdmVudERhdGE+KCk7XG4gICAgYnRuUiQgPSBuZXcgU3ViamVjdDxUb3VjaEdlc3R1cmVFdmVudERhdGE+KCk7XG4gICAgYnRuQiQgPSBuZXcgU3ViamVjdDxUb3VjaEdlc3R1cmVFdmVudERhdGE+KCk7XG4gICAgaW5wdXRTcGVlZCQgPSBuZXcgU3ViamVjdDxFdmVudD4oKTtcbiAgICBkaXNUb1dhbGwkID0gbmV3IFN1YmplY3Q8RXZlbnQ+KCk7XG4gICAgYXV0b1BpbG90JCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICAvLyBAVmlld0NoaWxkKCdidG5GJywgeyBzdGF0aWM6IHRydWUgfSkgYnRuRjogRWxlbWVudFJlZjtcbiAgICAvLyBAVmlld0NoaWxkKCdidG5MJywgeyBzdGF0aWM6IHRydWUgfSkgYnRuTDogRWxlbWVudFJlZjtcblxuICAgIG1vdmVDYXIoczogSXJvYm90U3RhdGUpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5tcXR0LmNhbGxBcmVzdChzLmF1dG9QaWxvdCA9PT0gdHJ1ZSA/IGNtZEVudW0uQVVUTyA6IHMuZGlyZWN0aW9uLCBzLnNwZWVkLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICgpID0+IHsgY29uc29sZS5sb2coJ2FyZXN0IG9rJykgfSxcbiAgICAgICAgICAgICAgICAoZXJyKSA9PiBhbGVydChlcnIpXG4gICAgICAgICAgICApXG4gICAgfVxuICAgIC8vIHdoZW4gdGFwIG9uIGJ1dHRvbiwgdGhlcmUgYSBkb3duLCBtYW55IG1vdmUuLi4gYW4gdXAgZXZlbnRzLlxuICAgIHJvYm90Q29tbWFuZHMkID0gbWVyZ2UoXG4gICAgICAgIC8vIHRoaXMuYnRuUyQucGlwZSggbWFwKGUgPT4gKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AgfSkpKSxcbiAgICAgICAgdGhpcy5idG5GJC5waXBlKFxuICAgICAgICAgICAgLy8gdGFwKGUgPT4gY29uc29sZS5sb2coZS5hY3Rpb24pKSwgICAgICAgICAgIFxuICAgICAgICAgICAgbWFwKGUgPT5cbiAgICAgICAgICAgICAgICBlLmFjdGlvbiA9PT0gJ3VwJyA/ICh7IGRpcmVjdGlvbjogY21kRW51bS5TVE9QIH0pIDogKHsgZGlyZWN0aW9uOiBjbWRFbnVtLkZPUldBUkQgfSlcbiAgICAgICAgICAgICkpLFxuICAgICAgICB0aGlzLmJ0bkIkLnBpcGUobWFwKGUgPT5cbiAgICAgICAgICAgIGUuYWN0aW9uID09PSAndXAnID8gKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AgfSkgOiAoeyBkaXJlY3Rpb246IGNtZEVudW0uQkFDSyB9KVxuICAgICAgICApKSxcbiAgICAgICAgdGhpcy5idG5MJC5waXBlKG1hcChlID0+XG4gICAgICAgICAgICBlLmFjdGlvbiA9PT0gJ3VwJyA/ICh7IGRpcmVjdGlvbjogY21kRW51bS5TVE9QIH0pIDogKHsgZGlyZWN0aW9uOiBjbWRFbnVtLkxFRlQgfSlcbiAgICAgICAgKSksXG4gICAgICAgIHRoaXMuYnRuUiQucGlwZShtYXAoZSA9PlxuICAgICAgICAgICAgZS5hY3Rpb24gPT09ICd1cCcgPyAoeyBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCB9KSA6ICh7IGRpcmVjdGlvbjogY21kRW51bS5SSUdIVCB9KVxuICAgICAgICApKSxcbiAgICAgICAgLy8gY2FyIHNwZWVkICgwLTI1NSlcbiAgICAgICAgdGhpcy5pbnB1dFNwZWVkJC5waXBlKFxuICAgICAgICAgICAgLy90YXAoY29uc29sZS5sb2cpLFxuICAgICAgICAgICAgLy8gdGFwKG4gPT4gY29uc29sZS5sb2coJ3NwZWVkOiAnICsgbikpKSxcbiAgICAgICAgICAgIGZpbHRlcihuID0+IG4gIT09IHVuZGVmaW5lZCksXG4gICAgICAgICAgICBpbnB1dFRvVmFsdWUoKSxcbiAgICAgICAgICAgIG1hcChuID0+ICh7IHNwZWVkOiBuIH0pKVxuICAgICAgICApLFxuXG4gICAgICAgIHRoaXMuZGlzVG9XYWxsJC5waXBlKGlucHV0VG9WYWx1ZSgpLCBtYXAobiA9PiAoeyBkaXNUb1dhbGw6IG4gfSkpKSxcbiAgICAgICAgdGhpcy5hdXRvUGlsb3QkLnBpcGUoXG4gICAgICAgICAgICAvLyB0YXAobj0+Y29uc29sZS5sb2cobi5hY3Rpb24pKSxcbiAgICAgICAgICAgIG1hcChuID0+ICh7IGF1dG9QaWxvdDogbiB9KSkpXG4gICAgKVxuXG4gICAgcm9ib3RTdGF0ZSQ6IE9ic2VydmFibGU8SXJvYm90U3RhdGU+ID0gdGhpcy5yb2JvdENvbW1hbmRzJFxuICAgICAgICAucGlwZShcbiAgICAgICAgICAgIHN0YXJ0V2l0aCh0aGlzLmluaXRpYWxSb2JvdFN0YXRlKSxcbiAgICAgICAgICAgIC8vICoqIHRvdWNoIGV2ZW50ICdtb3ZlJyBrZWVwcyBiZWluZyBmaXJlZCBhcyBsb25nIGFzIG5vdCByZWxlYXNpbmcuXG4gICAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICAgICAgc2Nhbigoc3RhdGU6IElyb2JvdFN0YXRlLCBjb21tYW5kKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh7IC4uLnN0YXRlLCAuLi5jb21tYW5kIH0pO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAvLyBkaXN0aW5jdFVudGlsQ2hhbmdlZCgocHJldjogSXJvYm90U3RhdGUsIGN1cnI6IElyb2JvdFN0YXRlKSA9PiBwcmV2LmRpcmVjdGlvbiA9PT0gY3Vyci5kaXJlY3Rpb24pLFxuICAgICAgICAgICAgc2hhcmVSZXBsYXkoMSlcbiAgICAgICAgKTtcblxuICAgIGRpcmVjdGlvbiQgPSB0aGlzLnJvYm90U3RhdGUkLnBpcGUoc2VsZWN0RGlzdGluY3RTdGF0ZSgnZGlyZWN0aW9uJykpO1xuICAgIG5hdk1vZGUkID0gdGhpcy5yb2JvdFN0YXRlJC5waXBlKHNlbGVjdERpc3RpbmN0U3RhdGUoJ2F1dG9QaWxvdCcpKTtcblxuICAgIC8vICoqIGRpc2NhcmQgZW1pdHRlZCB2YWx1ZXMgdGhhdCB0YWtlIDwgMXMgY296IGlucHV0dmFsdWUga2VlcHMgZmlyaW5nIHdoZW4gc2xpZGluZyBvbiBzbGlkZXIuXG4gICAgc3BlZWQkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLnJvYm90U3RhdGUkLnBpcGUoc2VsZWN0RGlzdGluY3RTdGF0ZSgnc3BlZWQnKSkucGlwZShkZWJvdW5jZVRpbWUoMTAwMCkpO1xuXG4gICAgbmF2aWdhdGlvbiQgPSBjb21iaW5lTGF0ZXN0KHRoaXMuZGlyZWN0aW9uJCwgdGhpcy5uYXZNb2RlJCwgdGhpcy5zcGVlZCQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgICAgLy8gd2l0aExhdGVzdEZyb20gdGFrZXMgMiBvYnMkLCBpbiB0aGlzIGNhc2Ugd2UgaWdub3JlIDFzdCBvbmUoZGlyZWN0aW9uJCksIGFuZCB0YWtlIHN0YXRlJCBvbmx5XG4gICAgICAgICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLnJvYm90U3RhdGUkLCAoXywgcykgPT4gcyksXG5cbiAgICAgICAgICAgIHRhcCgoczogSXJvYm90U3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzLmRpcmVjdGlvbilcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVDYXIocyk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyByZXBsYWNlIHRhcCB3LyBleGhhdXN0TWFwIHNvIGFueSBjb21pbmcgZGlyZWN0aW9uIGV2ZW50IHdpbGwgYmUgaWdub3JlIGlmIG1vdmVDYXIgaXNuJ3QgY29tcGxldGVkLiBcbiAgICAgICAgICAgIC8vdGFwKCBjb25zb2xlLmxvZygncy5kaXJlY3Rpb24nKSApLFxuICAgICAgICAgICAgLy9leGhhdXN0TWFwKChzKT0+dGhpcy5tb3ZlQ2FyKHMpKVxuICAgICAgICApXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1xdHQ6IE1xdHRQcm92aWRlcikge1xuICAgICAgICAvLyB0aGlzLnJvYm90U3RhdGUkLnN1YnNjcmliZShjb25zb2xlLmxvZyk7XG4gICAgICAgIC8vIHRoaXMuZGlyZWN0aW9uJC5zdWJzY3JpYmUoY29uc29sZS5sb2cpOyAgICAgICBcbiAgICAgICAgLy8gKiogdGhpcyBjb25zb2xlLmxvZyBzaG93cyBldmVyeXRoaW5nIVxuICAgICAgICB0aGlzLm5hdmlnYXRpb24kLnN1YnNjcmliZShjb25zb2xlLmxvZyk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIHRoaXMucm9ib3RDb21tYW5kcyQuc3Vic2NyaWJlKG4gPT4gY29uc29sZS5sb2cobikpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IEhvbWVSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vaG9tZS1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBNcXR0UHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9tcXR0L21xdHQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFsgICAgICAgXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgSG9tZVJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEhvbWVDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBNcXR0UHJvdmlkZXJcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IFVuYXJ5RnVuY3Rpb24sIHBpcGUsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgcGx1Y2ssIG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdERpc3RpbmN0U3RhdGU8VCwgST4oa2V5OiBzdHJpbmcpOiBVbmFyeUZ1bmN0aW9uPE9ic2VydmFibGU8VD4sIE9ic2VydmFibGU8ST4+IHtcclxuICAgIHJldHVybiBwaXBlKFxyXG4gICAgICAgIHBsdWNrPFQsIEk+KGtleSksXHJcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQ8ST4oKVxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlucHV0VG9WYWx1ZShkZWZhdWx0VmFsdWU6IG51bWJlciA9IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gcGlwZShcclxuICAgICAgICAgICAgbWFwKChldmVudDogYW55KTogbnVtYmVyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IGV2ZW50ID8gcGFyc2VJbnQoZXZlbnQudmFsdWUsIDEwKSA6IGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAocGFyc2VkID09PSAwIHx8IHBhcnNlZCkgPyBwYXJzZWQgOiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiIsIi8vIEdFVCBodHRwczovL2FwaS50aGluZ3NwZWFrLmNvbS91cGRhdGU/YXBpX2tleT1HVTNUMkNWVkhYUlpVV0hRJmZpZWxkMT0wXHJcbmV4cG9ydCBjbGFzcyBDb25maWcge1xyXG4gICAgLy8gc3RhdGljIGFwaVVybCA9IFwiaHR0cHM6Ly9hcGkudGhpbmdzcGVhay5jb20vXCI7XHJcbiAgICAvLyBzdGF0aWMgYXBpS2V5ID0gXCJHVTNUMkNWVkhYUlpVV0hRXCI7XHJcblxyXG4gICAgc3RhdGljIGFwaVVybCA9ICdodHRwczovL2Nsb3VkLmFyZXN0LmlvJzsgICAgXHJcbiAgICBzdGF0aWMgZGV2aWNlSWQgPSAnMTA3OTI5JzsgLy8gdGhlIGNhcidzIGlkIHJlZ2lzdGVyZCBpbiBhcmVzdCB3ZWJzaXRlICAgXHJcbiAgfVxyXG5cclxuICAvLyBwcml2YXRlIGFwaUtleSA9ICcxb2JxemNoOHgzZTdlNjI2JzsgIFxyXG4gIC8vIHByaXZhdGUgdXJsID0gJ2h0dHBzOi8vY2xvdWQuYXJlc3QuaW87J1xyXG4gIC8vIGUuZy4sIGh0dHBzOi8vY2xvdWQuYXJlc3QuaW8vJHtkZXZJZH0vZm9yd2FyZCIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHRhcCwgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1xdHRQcm92aWRlciB7XHJcbiBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcclxuICB9XHJcblxyXG4gIGNhbGxBcmVzdChmbk5hbWU6IHN0cmluZywgc3BlZWQ6IFN0cmluZykgOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgdXJsID0gYCR7Q29uZmlnLmFwaVVybH0vJHtDb25maWcuZGV2aWNlSWR9LyR7Zm5OYW1lfT9wYXJhbXM9JHtzcGVlZH1gO1xyXG4gICAgY29uc29sZS5sb2codXJsKTtcclxuICAgIC8vIHRoaXMubXNnID0gZm5OYW1lOyAvLyBmb3IgY3NzXHJcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHtDb25maWcuYXBpVXJsfS8ke0NvbmZpZy5kZXZpY2VJZH0vJHtmbk5hbWV9P2tleT0ke0NvbmZpZy5hcGlLZXl9YClcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybClcclxuICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke0NvbmZpZy5hcGlVcmx9dXBkYXRlP2FwaV9rZXk9JHtDb25maWcuYXBpS2V5fSZmaWVsZDE9JHtmbk5hbWV9YClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgLy8gdGFwKGNvbnNvbGUubG9nKSxcclxuICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICAgIClcclxuICB9XHJcblxyXG4gIGNhbGxBcmVzdFdpdGhQYXJhbShmbk5hbWU6IHN0cmluZywgc3BlZWQ6IG51bWJlciwgZGlzdFRvV2FsbDogbnVtYmVyLCBkZWxheTogc3RyaW5nKSB7XHJcbiAgICAvKlxyXG4gICAgLy8gY29uc29sZS5sb2coJ3NwZWVkOiAnLCBzcGVlZCk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVybH0vJHt0aGlzLmRldmljZV9pZH0vJHtmbk5hbWV9P2tleT0ke3RoaXMuYXBpS2V5fSZwYXJhbXM9JHtzcGVlZH0sJHtkaXN0VG9XYWxsfSwke2RlbGF5fWApXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRhcChjb25zb2xlLmxvZyksXHJcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgICApXHJcbiAgICAgICovXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBSZXNwb25zZSkge1xyXG4gICAgY29uc29sZS5sb2coJ0hhbmRsaW5nIGVycm9yIGxvY2FsbHkgYW5kIHJldGhyb3dpbmcgaXQuLi4nLCBKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuICAgIC8vcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xyXG4gIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==