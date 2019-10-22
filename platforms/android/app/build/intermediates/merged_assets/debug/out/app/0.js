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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./home/operators/selectDistinctState.ts");
/* harmony import */ var _providers_mqtt_mqtt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./home/providers/mqtt/mqtt.ts");
// import { ItemEventData } from "tns-core-modules/ui/list-view"





// import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
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
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.robotState$, function (_, s) { return s; }), 
        /*
        tap((s: IrobotState) => {
            // console.log(s.direction)
            this.moveCar(s);
        })
        */
        // replace tap w/ exhaustMap so any coming direction event will be ignore if moveCar isn't completed. 
        // tap( console.log('s.direction') ),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(function (s) { return _this.moveCar(s); }));
        // this.robotState$.subscribe(console.log);
        // this.direction$.subscribe(console.log);       
        // ** this console.log shows everything!
        this.navigation$.subscribe(console.log);
    }
    // @ViewChild('btnF', { static: true }) btnF: ElementRef;
    // @ViewChild('btnL', { static: true }) btnL: ElementRef;
    HomeComponent.prototype.moveCar = function (s) {
        this.mqtt.callArest(s.autoPilot === true ? "autoPilot" /* AUTO */ : s.direction, s.speed.toString())
            .subscribe(function () { console.log('arest ok'); }, function (err) { alert(err); });
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
    MqttProvider.prototype.callArest = function (fnName, speed) {
        var url = _config__WEBPACK_IMPORTED_MODULE_4__["Config"].apiUrl + "/" + _config__WEBPACK_IMPORTED_MODULE_4__["Config"].deviceId + "/" + fnName + "?params=" + speed;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9ob21lL29wZXJhdG9ycy9zZWxlY3REaXN0aW5jdFN0YXRlLnRzIiwid2VicGFjazovLy8uL2hvbWUvcHJvdmlkZXJzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9ob21lL3Byb3ZpZGVycy9tcXR0L21xdHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBRThCO0FBRXRCO0FBRWpELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsNkRBQWEsRUFBRTtDQUN6QyxDQUFDO0FBTUY7SUFBQTtJQUFpQyxDQUFDO0lBQXJCLGlCQUFpQjtRQUo3Qiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7QUNkOUIsOEJBQThCLDZCQUE2QixxQkFBcUIsaUJBQWlCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLEM7Ozs7Ozs7QUNBdEosdUNBQXVDLGNBQWMsbXdDOzs7Ozs7OztBQ0FyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdFQUFnRTtBQUNTO0FBQ0Q7QUFDb0Y7QUFFeEU7QUFFL0I7QUFDckQsNkVBQTZFO0FB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QixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQ3BDLENBQUM7SUFFRCxnQ0FBUyxHQUFULFVBQVUsTUFBYyxFQUFFLEtBQWE7UUFDckMsSUFBTSxHQUFHLEdBQU0sOENBQU0sQ0FBQyxNQUFNLFNBQUksOENBQU0sQ0FBQyxRQUFRLFNBQUksTUFBTSxnQkFBVyxLQUFPLENBQUM7UUFDNUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixnQ0FBZ0M7UUFDaEMsNkZBQTZGO1FBQzdGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUM1QixpRUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDN0IsQ0FBQztRQUNGLDJGQUEyRjtRQUMzRixRQUFRO1FBQ1Isb0JBQW9CO1FBQ3BCLDhCQUE4QjtRQUM5QixHQUFHO0lBQ0wsQ0FBQztJQUVELHlDQUFrQixHQUFsQixVQUFtQixNQUFjLEVBQUUsS0FBYSxFQUFFLFVBQWtCLEVBQUUsS0FBYTtRQUNqRjs7Ozs7OztZQU9JO0lBQ04sQ0FBQztJQUVPLGtDQUFXLEdBQW5CLFVBQW9CLEtBQWU7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2Q0FBNkMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekYsaUNBQWlDO1FBQ2pDLE9BQU8sdURBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOztnQkFqQ3lCLCtEQUFVOztJQUZ6QixZQUFZO1FBRHhCLGdFQUFVLEVBQUU7eUNBR2UsK0RBQVU7T0FGekIsWUFBWSxDQXFDeEI7SUFBRCxtQkFBQztDQUFBO0FBckN3QiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5ob21lLXBhbmVse1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyBcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgbWFyZ2luOiAxNTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWxhYmVse1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwie3tlcnJvck1lc3NhZ2V9fVxcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPlxcbjwvQWN0aW9uQmFyPlxcblxcbjxTY3JvbGxWaWV3IGNsYXNzPSdwYWdlJz5cXG4gICAgPFN0YWNrTGF5b3V0IHZlcnRpY2FsQWxpZ25tZW50PSdjZW50ZXInIGhvcml6b250YWxBbGlnbm1lbnQ9J2NlbnRlcic+XFxuICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPSdhdXRvLCBhdXRvLCBhdXRvJyByb3dzPSdhdXRvLCBhdXRvLCBhdXRvJz5cXG4gICAgICAgICAgICA8QnV0dG9uICh0b3VjaCk9XFxcImJ0bkYkLm5leHQoJGV2ZW50KVxcXCIgdGV4dD0nRm9yd2FyZCcgcm93PScwJyBjb2w9JzEnPjwvQnV0dG9uPlxcbiAgICAgICAgICAgIDxCdXR0b24gKHRvdWNoKT1cXFwiYnRuTCQubmV4dCgkZXZlbnQpXFxcIiB0ZXh0PSdMZWZ0JyByb3c9JzEnIGNvbD0nMCc+PC9CdXR0b24+XFxuICAgICAgICAgICBcXG4gICAgICAgICAgICA8QnV0dG9uICh0b3VjaCk9XFxcImJ0blIkLm5leHQoJGV2ZW50KVxcXCIgdGV4dD0nUmlnaHQnIHJvdz0nMScgY29sPScyJz48L0J1dHRvbj5cXG4gICAgICAgICAgICA8QnV0dG9uICh0b3VjaCk9XFxcImJ0bkIkLm5leHQoJGV2ZW50KVxcXCIgdGV4dD0nQmFjaycgcm93PScyJyBjb2w9JzEnPjwvQnV0dG9uPlxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgXFxuICAgICAgICA8bGFiZWwgdGV4dFdyYXA9J3RydWUnIHRleHQ9J01heCBkaXN0YW5jZSB0byB3YWxsJyBjbGFzcz0naDMgZGVzY3JpcHRpb24tbGFiZWwnPjwvbGFiZWw+XFxuICAgICAgICA8U2xpZGVyICh2YWx1ZUNoYW5nZSk9XFxcImRpc1RvV2FsbCQubmV4dCgkZXZlbnQpXFxcIiB2YWx1ZT1cXFwiMTBcXFwiIG1pblZhbHVlPVxcXCIxMFxcXCJcXG4gICAgICAgICAgICBtYXhWYWx1ZT1cXFwiMjAwXFxcIj48L1NsaWRlcj5cXG4gICAgICAgIDxsYWJlbCB0ZXh0V3JhcD0ndHJ1ZScgdGV4dD0nU3BlZWQnIGNsYXNzPSdoMyBkZXNjcmlwdGlvbi1sYWJlbCc+PC9sYWJlbD5cXG4gICAgICAgIDxTbGlkZXIgKHZhbHVlQ2hhbmdlKT1cXFwiaW5wdXRTcGVlZCQubmV4dCgkZXZlbnQpXFxcIiB2YWx1ZT1cXFwiNTBcXFwiIG1pblZhbHVlPVxcXCIxMFxcXCJcXG4gICAgICAgICAgICBtYXhWYWx1ZT1cXFwiMjU1XFxcIj48L1NsaWRlcj5cXG4gICAgICAgIDxsYWJlbCB0ZXh0V3JhcD0ndHJ1ZScgdGV4dD0nQXV0b1BpbG90JyBjbGFzcz0naDMgZGVzY3JpcHRpb24tbGFiZWwnPjwvbGFiZWw+XFxuICAgICAgICA8U3dpdGNoIGNoZWNrZWQ9XFxcImZhbHNlXFxcIiAoY2hlY2tlZENoYW5nZSk9XFxcImF1dG9QaWxvdCQubmV4dCgkZXZlbnQudmFsdWUpXFxcIj48L1N3aXRjaD5cXG4gICAgPC9TdGFja0xheW91dD5cXG48L1Njcm9sbFZpZXc+XCIiLCIvLyBpbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCJcbmltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSwgbWVyZ2UsIGNvbWJpbmVMYXRlc3QsIE5FVkVSIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBleGhhdXN0TWFwLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc3RhcnRXaXRoLCBzY2FuLCBtYXAsIHNoYXJlUmVwbGF5LCB0YXAsIGZpbHRlciwgd2l0aExhdGVzdEZyb20sIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElyb2JvdFN0YXRlLCBjbWRFbnVtIH0gZnJvbSBcIi4vbW9kZWxzL3JvYm90U3RhdGVcIjtcbmltcG9ydCB7IHNlbGVjdERpc3RpbmN0U3RhdGUsIGlucHV0VG9WYWx1ZSB9IGZyb20gXCIuL29wZXJhdG9ycy9zZWxlY3REaXN0aW5jdFN0YXRlXCI7XG5pbXBvcnQgeyBUb3VjaEdlc3R1cmVFdmVudERhdGEgfSBmcm9tICd1aS9nZXN0dXJlcyc7XG5pbXBvcnQgeyBNcXR0UHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9tcXR0L21xdHQnO1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgcHJvdmlkZXJzOiBbTXF0dFByb3ZpZGVyXSxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9ob21lLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBlcnJvck1lc3NhZ2UgPSAnSW90IFNlbGYtRHJpdmluZyBDYXInO1xuICAgIGluaXRpYWxSb2JvdFN0YXRlOiBJcm9ib3RTdGF0ZSA9IHtcbiAgICAgICAgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AsXG4gICAgICAgIHNwZWVkOiA1MCxcbiAgICAgICAgZGlzVG9XYWxsOiAxMCxcbiAgICAgICAgYXV0b1BpbG90OiBmYWxzZVxuICAgIH1cbiAgICAvLyBsYXN0IGV2ZW50IGlzIGFsd2F5cyB1cCwgc28gdGhpcyBpcyBmaWx0ZXJlZCBieSBkaXN0aW5jdFVudGlsQ2hhbmdlIG9wZXJhdG9yLlxuICAgIC8vIGJ0blMkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xuICAgIGJ0bkYkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xuICAgIGJ0bkwkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xuICAgIGJ0blIkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xuICAgIGJ0bkIkID0gbmV3IFN1YmplY3Q8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xuICAgIGlucHV0U3BlZWQkID0gbmV3IFN1YmplY3Q8RXZlbnQ+KCk7XG4gICAgZGlzVG9XYWxsJCA9IG5ldyBTdWJqZWN0PEV2ZW50PigpO1xuICAgIGF1dG9QaWxvdCQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgLy8gQFZpZXdDaGlsZCgnYnRuRicsIHsgc3RhdGljOiB0cnVlIH0pIGJ0bkY6IEVsZW1lbnRSZWY7XG4gICAgLy8gQFZpZXdDaGlsZCgnYnRuTCcsIHsgc3RhdGljOiB0cnVlIH0pIGJ0bkw6IEVsZW1lbnRSZWY7XG5cbiAgICBtb3ZlQ2FyKHMpOiBhbnkge1xuICAgICAgICB0aGlzLm1xdHQuY2FsbEFyZXN0KHMuYXV0b1BpbG90ID09PSB0cnVlID8gY21kRW51bS5BVVRPIDogcy5kaXJlY3Rpb24sIHMuc3BlZWQudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKCkgPT4geyBjb25zb2xlLmxvZygnYXJlc3Qgb2snKSB9LFxuICAgICAgICAgICAgICAgIChlcnIpID0+IHsgYWxlcnQoZXJyKSB9XG4gICAgICAgICAgICApXG4gICAgfVxuICAgIC8vIHdoZW4gdGFwIG9uIGJ1dHRvbiwgdGhlcmUgYSBkb3duLCBtYW55IG1vdmUuLi4gYW4gdXAgZXZlbnRzLlxuICAgIHJvYm90Q29tbWFuZHMkID0gbWVyZ2UoXG4gICAgICAgIC8vIHRoaXMuYnRuUyQucGlwZSggbWFwKGUgPT4gKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AgfSkpKSxcbiAgICAgICAgdGhpcy5idG5GJC5waXBlKFxuICAgICAgICAgICAgLy8gdGFwKGUgPT4gY29uc29sZS5sb2coZS5hY3Rpb24pKSwgICAgICAgICAgIFxuICAgICAgICAgICAgbWFwKGUgPT5cbiAgICAgICAgICAgICAgICBlLmFjdGlvbiA9PT0gJ3VwJyA/ICh7IGRpcmVjdGlvbjogY21kRW51bS5TVE9QIH0pIDogKHsgZGlyZWN0aW9uOiBjbWRFbnVtLkZPUldBUkQgfSlcbiAgICAgICAgICAgICkpLFxuICAgICAgICB0aGlzLmJ0bkIkLnBpcGUobWFwKGUgPT5cbiAgICAgICAgICAgIGUuYWN0aW9uID09PSAndXAnID8gKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AgfSkgOiAoeyBkaXJlY3Rpb246IGNtZEVudW0uQkFDSyB9KVxuICAgICAgICApKSxcbiAgICAgICAgdGhpcy5idG5MJC5waXBlKG1hcChlID0+XG4gICAgICAgICAgICBlLmFjdGlvbiA9PT0gJ3VwJyA/ICh7IGRpcmVjdGlvbjogY21kRW51bS5TVE9QIH0pIDogKHsgZGlyZWN0aW9uOiBjbWRFbnVtLkxFRlQgfSlcbiAgICAgICAgKSksXG4gICAgICAgIHRoaXMuYnRuUiQucGlwZShtYXAoZSA9PlxuICAgICAgICAgICAgZS5hY3Rpb24gPT09ICd1cCcgPyAoeyBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCB9KSA6ICh7IGRpcmVjdGlvbjogY21kRW51bS5SSUdIVCB9KVxuICAgICAgICApKSxcbiAgICAgICAgLy8gY2FyIHNwZWVkICgwLTI1NSlcbiAgICAgICAgdGhpcy5pbnB1dFNwZWVkJC5waXBlKFxuICAgICAgICAgICAgLy90YXAoY29uc29sZS5sb2cpLFxuICAgICAgICAgICAgLy8gdGFwKG4gPT4gY29uc29sZS5sb2coJ3NwZWVkOiAnICsgbikpKSxcbiAgICAgICAgICAgIGZpbHRlcihuID0+IG4gIT09IHVuZGVmaW5lZCksXG4gICAgICAgICAgICBpbnB1dFRvVmFsdWUoKSxcbiAgICAgICAgICAgIG1hcChuID0+ICh7IHNwZWVkOiBuIH0pKVxuICAgICAgICApLFxuXG4gICAgICAgIHRoaXMuZGlzVG9XYWxsJC5waXBlKGlucHV0VG9WYWx1ZSgpLCBtYXAobiA9PiAoeyBkaXNUb1dhbGw6IG4gfSkpKSxcbiAgICAgICAgdGhpcy5hdXRvUGlsb3QkLnBpcGUoXG4gICAgICAgICAgICAvLyB0YXAobj0+Y29uc29sZS5sb2cobi5hY3Rpb24pKSxcbiAgICAgICAgICAgIG1hcChuID0+ICh7IGF1dG9QaWxvdDogbiB9KSkpXG4gICAgKVxuXG4gICAgcm9ib3RTdGF0ZSQ6IE9ic2VydmFibGU8SXJvYm90U3RhdGU+ID0gdGhpcy5yb2JvdENvbW1hbmRzJFxuICAgICAgICAucGlwZShcbiAgICAgICAgICAgIHN0YXJ0V2l0aCh0aGlzLmluaXRpYWxSb2JvdFN0YXRlKSxcbiAgICAgICAgICAgIC8vICoqIHRvdWNoIGV2ZW50ICdtb3ZlJyBrZWVwcyBiZWluZyBmaXJlZCBhcyBsb25nIGFzIG5vdCByZWxlYXNpbmcuXG4gICAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICAgICAgc2Nhbigoc3RhdGU6IElyb2JvdFN0YXRlLCBjb21tYW5kKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh7IC4uLnN0YXRlLCAuLi5jb21tYW5kIH0pO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAvLyBkaXN0aW5jdFVudGlsQ2hhbmdlZCgocHJldjogSXJvYm90U3RhdGUsIGN1cnI6IElyb2JvdFN0YXRlKSA9PiBwcmV2LmRpcmVjdGlvbiA9PT0gY3Vyci5kaXJlY3Rpb24pLFxuICAgICAgICAgICAgc2hhcmVSZXBsYXkoMSlcbiAgICAgICAgKTtcblxuICAgIGRpcmVjdGlvbiQgPSB0aGlzLnJvYm90U3RhdGUkLnBpcGUoc2VsZWN0RGlzdGluY3RTdGF0ZSgnZGlyZWN0aW9uJykpO1xuICAgIG5hdk1vZGUkID0gdGhpcy5yb2JvdFN0YXRlJC5waXBlKHNlbGVjdERpc3RpbmN0U3RhdGUoJ2F1dG9QaWxvdCcpKTtcblxuICAgIC8vICoqIGRpc2NhcmQgZW1pdHRlZCB2YWx1ZXMgdGhhdCB0YWtlIDwgMXMgY296IGlucHV0dmFsdWUga2VlcHMgZmlyaW5nIHdoZW4gc2xpZGluZyBvbiBzbGlkZXIuXG4gICAgc3BlZWQkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLnJvYm90U3RhdGUkLnBpcGUoc2VsZWN0RGlzdGluY3RTdGF0ZSgnc3BlZWQnKSkucGlwZShkZWJvdW5jZVRpbWUoMTAwMCkpO1xuXG4gICAgbmF2aWdhdGlvbiQgPSBjb21iaW5lTGF0ZXN0KHRoaXMuZGlyZWN0aW9uJCwgdGhpcy5uYXZNb2RlJCwgdGhpcy5zcGVlZCQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgICAgLy8gd2l0aExhdGVzdEZyb20gdGFrZXMgMiBvYnMkLCBpbiB0aGlzIGNhc2Ugd2UgaWdub3JlIDFzdCBvbmUoZGlyZWN0aW9uJCksIGFuZCB0YWtlIHN0YXRlJCBvbmx5XG4gICAgICAgICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLnJvYm90U3RhdGUkLCAoXywgcykgPT4gcyksXG4gICAgICAgICAgICAvKiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGFwKChzOiBJcm9ib3RTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHMuZGlyZWN0aW9uKVxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUNhcihzKTtcbiAgICAgICAgICAgIH0pICAgICAgICAgICAgXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgLy8gcmVwbGFjZSB0YXAgdy8gZXhoYXVzdE1hcCBzbyBhbnkgY29taW5nIGRpcmVjdGlvbiBldmVudCB3aWxsIGJlIGlnbm9yZSBpZiBtb3ZlQ2FyIGlzbid0IGNvbXBsZXRlZC4gXG4gICAgICAgICAgICAvLyB0YXAoIGNvbnNvbGUubG9nKCdzLmRpcmVjdGlvbicpICksXG4gICAgICAgICAgICBleGhhdXN0TWFwKChzOiBJcm9ib3RTdGF0ZSkgPT4gdGhpcy5tb3ZlQ2FyKHMpKVxuICAgICAgICApXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1xdHQ6IE1xdHRQcm92aWRlcikge1xuICAgICAgICAvLyB0aGlzLnJvYm90U3RhdGUkLnN1YnNjcmliZShjb25zb2xlLmxvZyk7XG4gICAgICAgIC8vIHRoaXMuZGlyZWN0aW9uJC5zdWJzY3JpYmUoY29uc29sZS5sb2cpOyAgICAgICBcbiAgICAgICAgLy8gKiogdGhpcyBjb25zb2xlLmxvZyBzaG93cyBldmVyeXRoaW5nIVxuICAgICAgICB0aGlzLm5hdmlnYXRpb24kLnN1YnNjcmliZShjb25zb2xlLmxvZylcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhpcy5yb2JvdENvbW1hbmRzJC5zdWJzY3JpYmUobiA9PiBjb25zb2xlLmxvZyhuKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ob21lLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudCc7XG5pbXBvcnQgeyBNcXR0UHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9tcXR0L21xdHQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFsgICAgICAgXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgSG9tZVJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEhvbWVDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBNcXR0UHJvdmlkZXJcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IFVuYXJ5RnVuY3Rpb24sIHBpcGUsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgcGx1Y2ssIG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdERpc3RpbmN0U3RhdGU8VCwgST4oa2V5OiBzdHJpbmcpOiBVbmFyeUZ1bmN0aW9uPE9ic2VydmFibGU8VD4sIE9ic2VydmFibGU8ST4+IHtcclxuICAgIHJldHVybiBwaXBlKFxyXG4gICAgICAgIHBsdWNrPFQsIEk+KGtleSksXHJcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQ8ST4oKVxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlucHV0VG9WYWx1ZShkZWZhdWx0VmFsdWU6IG51bWJlciA9IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gcGlwZShcclxuICAgICAgICAgICAgbWFwKChldmVudDogYW55KTogbnVtYmVyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IGV2ZW50ID8gcGFyc2VJbnQoZXZlbnQudmFsdWUsIDEwKSA6IGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAocGFyc2VkID09PSAwIHx8IHBhcnNlZCkgPyBwYXJzZWQgOiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiIsIi8vIEdFVCBodHRwczovL2FwaS50aGluZ3NwZWFrLmNvbS91cGRhdGU/YXBpX2tleT1HVTNUMkNWVkhYUlpVV0hRJmZpZWxkMT0wXHJcbmV4cG9ydCBjbGFzcyBDb25maWcge1xyXG4gICAgLy8gc3RhdGljIGFwaVVybCA9IFwiaHR0cHM6Ly9hcGkudGhpbmdzcGVhay5jb20vXCI7XHJcbiAgICAvLyBzdGF0aWMgYXBpS2V5ID0gXCJHVTNUMkNWVkhYUlpVV0hRXCI7XHJcblxyXG4gICAgc3RhdGljIGFwaVVybCA9ICdodHRwczovL2Nsb3VkLmFyZXN0LmlvJzsgICAgXHJcbiAgICBzdGF0aWMgZGV2aWNlSWQgPSAnMTA3OTI5JzsgLy8gdGhlIGNhcidzIGlkIHJlZ2lzdGVyZCBpbiBhcmVzdCB3ZWJzaXRlICAgXHJcbiAgfVxyXG5cclxuICAvLyBwcml2YXRlIGFwaUtleSA9ICcxb2JxemNoOHgzZTdlNjI2JzsgIFxyXG4gIC8vIHByaXZhdGUgdXJsID0gJ2h0dHBzOi8vY2xvdWQuYXJlc3QuaW87J1xyXG4gIC8vIGUuZy4sIGh0dHBzOi8vY2xvdWQuYXJlc3QuaW8vJHtkZXZJZH0vZm9yd2FyZCIsIi8qIFRoaXMgZGVjb3JhdG9yIGRlbm90ZXMgdGhpcyBjbGFzcyBhcyBhIGNhbmRpZGF0ZSBmb3IgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gbWVjaGFuaXNtLiBGb3Igbm93IGp1c3QgdGhpbmsgb2YgYWRkaW5nXHJcbioqIHRoZSBASW5qZWN0YWJsZSBhcyBhIHJlcXVpcmVkIGNvbnZlbnRpb24gZm9yIGFsbCBzZXJ2aWNlcyB0aGF0IHlvdSB3cml0ZVxyXG4qL1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyB0YXAsIG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTXF0dFByb3ZpZGVyIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgfVxyXG5cclxuICBjYWxsQXJlc3QoZm5OYW1lOiBzdHJpbmcsIHNwZWVkOiBTdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgdXJsID0gYCR7Q29uZmlnLmFwaVVybH0vJHtDb25maWcuZGV2aWNlSWR9LyR7Zm5OYW1lfT9wYXJhbXM9JHtzcGVlZH1gO1xyXG4gICAgY29uc29sZS5sb2codXJsKTtcclxuICAgIC8vIHRoaXMubXNnID0gZm5OYW1lOyAvLyBmb3IgY3NzXHJcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHtDb25maWcuYXBpVXJsfS8ke0NvbmZpZy5kZXZpY2VJZH0vJHtmbk5hbWV9P2tleT0ke0NvbmZpZy5hcGlLZXl9YClcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCkucGlwZShcclxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgKTtcclxuICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke0NvbmZpZy5hcGlVcmx9dXBkYXRlP2FwaV9rZXk9JHtDb25maWcuYXBpS2V5fSZmaWVsZDE9JHtmbk5hbWV9YClcclxuICAgIC8vLnBpcGUoXHJcbiAgICAvLyB0YXAoY29uc29sZS5sb2cpLFxyXG4gICAgLy9jYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICAvLylcclxuICB9XHJcblxyXG4gIGNhbGxBcmVzdFdpdGhQYXJhbShmbk5hbWU6IHN0cmluZywgc3BlZWQ6IG51bWJlciwgZGlzdFRvV2FsbDogbnVtYmVyLCBkZWxheTogc3RyaW5nKSB7XHJcbiAgICAvKlxyXG4gICAgLy8gY29uc29sZS5sb2coJ3NwZWVkOiAnLCBzcGVlZCk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVybH0vJHt0aGlzLmRldmljZV9pZH0vJHtmbk5hbWV9P2tleT0ke3RoaXMuYXBpS2V5fSZwYXJhbXM9JHtzcGVlZH0sJHtkaXN0VG9XYWxsfSwke2RlbGF5fWApXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRhcChjb25zb2xlLmxvZyksXHJcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgICApXHJcbiAgICAgICovXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBSZXNwb25zZSkge1xyXG4gICAgY29uc29sZS5sb2coJ0hhbmRsaW5nIGVycm9yIGxvY2FsbHkgYW5kIHJldGhyb3dpbmcgaXQuLi4nLCBKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuICAgIC8vcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xyXG4gIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==