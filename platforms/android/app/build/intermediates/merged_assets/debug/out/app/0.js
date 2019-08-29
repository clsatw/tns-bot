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

module.exports = "<ActionBar title=\"{{errorMessage}}\" class=\"action-bar\">\n</ActionBar>\n\n<ScrollView class='page'>\n    <StackLayout verticalAlignment='center' horizontalAlignment='center'>\n        <GridLayout columns='auto, auto, auto' rows='auto, auto, auto'>\n            <Button (touch)=\"btnF$.next($event)\" text='Forward' row='0' col='1'></Button>\n            <Button (touch)=\"btnL$.next($event)\" text='Left' row='1' col='0'></Button>\n            <Button (touch)=\"btnS$.next($event)\" text='Stop' row='1' col='1'></Button>\n            <Button (touch)=\"btnR$.next($event)\" text='Right' row='1' col='2'></Button>\n            <Button (touch)=\"btnB$.next($event)\" text='Back' row='2' col='1'></Button>\n        </GridLayout>\n\n        \n        <label textWrap='true' text='Max distance to wall' class='h3 description-label'></label>\n        <Slider (valueChange)=\"disToWall$.next($event)\" value=\"10\" minValue=\"10\"\n            maxValue=\"200\"></Slider>\n        <label textWrap='true' text='Speed' class='h3 description-label'></label>\n        <Slider (valueChange)=\"inputSpeed$.next($event)\" value=\"50\" minValue=\"10\"\n            maxValue=\"255\"></Slider>\n        <label textWrap='true' text='AutoPilot' class='h3 description-label'></label>\n        <Switch checked=\"false\" (checkedChange)=\"autoPilot$.next($event.value)\"></Switch>\n    </StackLayout>\n</ScrollView>"

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
        this.btnS$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.btnF$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.btnL$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.btnR$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.btnB$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.inputSpeed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.disToWall$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.autoPilot$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.robotCommands$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.btnS$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) {
            return ({ direction: "stop" /* STOP */ });
        })), this.btnF$.pipe(
        // tap(e => console.log(e.action)),           
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) {
            return e.action === 'up' ? ({ direction: "stop" /* STOP */ }) : ({ direction: "forward" /* FORWARD */ });
        })), this.btnB$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) {
            return e.action === 'up' ? ({ direction: "stop" /* STOP */ }) : ({ direction: "back" /* BACK */ });
        })), this.btnL$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) {
            return e.action === 'up' ? ({ direction: "stop" /* STOP */ }) : ({ direction: "left" /* LEFT */ });
        })), this.btnR$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) {
            return e.action === 'up' ? ({ direction: "stop" /* STOP */ }) : ({ direction: "right" /* RIGHT */ });
        })), this.inputSpeed$.pipe(
        // tap(n => console.log('speed: ' + n))),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (n) { return n !== undefined; }), Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["inputToValue"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (n) { return ({ speed: n }); })), this.disToWall$.pipe(Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["inputToValue"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (n) { return ({ disToWall: n }); })), this.autoPilot$.pipe(
        // tap(n=>console.log(n.action)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (n) { return ({ autoPilot: n }); })));
        this.robotState$ = this.robotCommands$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(this.initialRobotState), 
        // touch event keeps fired as long as not releasing.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(function (state, command) {
            return (__assign({}, state, command));
        }), 
        // distinctUntilChanged((prev: IrobotState, curr: IrobotState) => prev.direction === curr.direction),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
        this.direction$ = this.robotState$.pipe(Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["selectDistinctState"])('direction'));
        this.navMode$ = this.robotState$.pipe(Object(_operators_selectDistinctState__WEBPACK_IMPORTED_MODULE_3__["selectDistinctState"])('autoPilot'));
        this.navigation$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.direction$, this.navMode$)
            .pipe(
        // withLatestFrom takes 2 obs$, in this case we ignore 1st one(direction$), and take state$ only
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.robotState$, function (_, s) { return s; }), 
        /*
        tap((s: IrobotState) => {
            this.moveCar(s);
        })
        */
        // replace tap w/ exhaustMap so any coming direction event will be ignore if moveCar isn't completed. 
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(function (s) { return _this.moveCar(s); }));
        //this.robotState$.subscribe(console.log);
        this.navigation$.subscribe(console.log);
    }
    // @ViewChild('btnF', { static: true }) btnF: ElementRef;
    // @ViewChild('btnL', { static: true }) btnL: ElementRef;
    HomeComponent.prototype.moveCar = function (s) {
        return this.mqtt.callArest(s.autoPilot === true ? "5" /* AUTO */ : s.direction, s.speed.toString())
            .subscribe(function () { console.log(s.direction); }, function () { return alert(s.direction); });
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./home/home.component.ts");
/* harmony import */ var nativescript_angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-angular/http/index.js");
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
    Config.apiUrl = 'https://cloud.arest.io;';
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./home/providers/config.ts");





var MqttProvider = /** @class */ (function () {
    function MqttProvider(http) {
        this.http = http;
    }
    MqttProvider.prototype.callArest = function (fnName, speed) {
        console.log('fnName: ', fnName);
        // this.msg = fnName; // for css
        // return this.http.get(`${Config.apiUrl}/${Config.deviceId}/${fnName}?key=${Config.apiKey}`)
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].apiUrl + "/" + _config__WEBPACK_IMPORTED_MODULE_4__["Config"].deviceId + "/" + fnName + "?params=" + speed)
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
        console.log(JSON.stringify(error.json()));
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9ob21lL29wZXJhdG9ycy9zZWxlY3REaXN0aW5jdFN0YXRlLnRzIiwid2VicGFjazovLy8uL2hvbWUvcHJvdmlkZXJzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9ob21lL3Byb3ZpZGVycy9tcXR0L21xdHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBRThCO0FBRXRCO0FBRWpELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsNkRBQWEsRUFBRTtDQUN6QyxDQUFDO0FBTUY7SUFBQTtJQUFpQyxDQUFDO0lBQXJCLGlCQUFpQjtRQUo3Qiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7QUNkOUIsOEJBQThCLDZCQUE2QixxQkFBcUIsaUJBQWlCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLEM7Ozs7Ozs7QUNBdEosdUNBQXVDLGNBQWMsZzFDOzs7Ozs7OztBQ0FyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdFQUFnRTtBQUNTO0FBQ0c7QUFDNkU7QUFFckU7QUFFL0I7QUFTckQ7SUF3RkksdUJB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QUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLDhDQUFNLENBQUMsTUFBTSxTQUFJLDhDQUFNLENBQUMsUUFBUSxTQUFJLE1BQU0sZ0JBQVcsS0FBTyxDQUFDO1lBQ3JGLDJGQUEyRjthQUN4RixJQUFJO1FBQ0gsb0JBQW9CO1FBQ3BCLGlFQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUM3QjtJQUNMLENBQUM7SUFFRCx5Q0FBa0IsR0FBbEIsVUFBbUIsTUFBYyxFQUFFLEtBQWEsRUFBRSxVQUFrQixFQUFFLEtBQWE7UUFDakY7Ozs7Ozs7WUFPSTtJQUNOLENBQUM7SUFFTyxrQ0FBVyxHQUFuQixVQUFvQixLQUFlO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sK0NBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Z0JBN0J5QixrREFBSTs7SUFGbkIsWUFBWTtRQUR4QixnRUFBVSxFQUFFO3lDQUdlLGtEQUFJO09BRm5CLFlBQVksQ0FpQ3hCO0lBQUQsbUJBQUM7Q0FBQTtBQWpDd0IiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuaG9tZS1wYW5lbHtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgXFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbjogMTU7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1sYWJlbHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcInt7ZXJyb3JNZXNzYWdlfX1cXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj5cXG48L0FjdGlvbkJhcj5cXG5cXG48U2Nyb2xsVmlldyBjbGFzcz0ncGFnZSc+XFxuICAgIDxTdGFja0xheW91dCB2ZXJ0aWNhbEFsaWdubWVudD0nY2VudGVyJyBob3Jpem9udGFsQWxpZ25tZW50PSdjZW50ZXInPlxcbiAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz0nYXV0bywgYXV0bywgYXV0bycgcm93cz0nYXV0bywgYXV0bywgYXV0byc+XFxuICAgICAgICAgICAgPEJ1dHRvbiAodG91Y2gpPVxcXCJidG5GJC5uZXh0KCRldmVudClcXFwiIHRleHQ9J0ZvcndhcmQnIHJvdz0nMCcgY29sPScxJz48L0J1dHRvbj5cXG4gICAgICAgICAgICA8QnV0dG9uICh0b3VjaCk9XFxcImJ0bkwkLm5leHQoJGV2ZW50KVxcXCIgdGV4dD0nTGVmdCcgcm93PScxJyBjb2w9JzAnPjwvQnV0dG9uPlxcbiAgICAgICAgICAgIDxCdXR0b24gKHRvdWNoKT1cXFwiYnRuUyQubmV4dCgkZXZlbnQpXFxcIiB0ZXh0PSdTdG9wJyByb3c9JzEnIGNvbD0nMSc+PC9CdXR0b24+XFxuICAgICAgICAgICAgPEJ1dHRvbiAodG91Y2gpPVxcXCJidG5SJC5uZXh0KCRldmVudClcXFwiIHRleHQ9J1JpZ2h0JyByb3c9JzEnIGNvbD0nMic+PC9CdXR0b24+XFxuICAgICAgICAgICAgPEJ1dHRvbiAodG91Y2gpPVxcXCJidG5CJC5uZXh0KCRldmVudClcXFwiIHRleHQ9J0JhY2snIHJvdz0nMicgY29sPScxJz48L0J1dHRvbj5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgIFxcbiAgICAgICAgPGxhYmVsIHRleHRXcmFwPSd0cnVlJyB0ZXh0PSdNYXggZGlzdGFuY2UgdG8gd2FsbCcgY2xhc3M9J2gzIGRlc2NyaXB0aW9uLWxhYmVsJz48L2xhYmVsPlxcbiAgICAgICAgPFNsaWRlciAodmFsdWVDaGFuZ2UpPVxcXCJkaXNUb1dhbGwkLm5leHQoJGV2ZW50KVxcXCIgdmFsdWU9XFxcIjEwXFxcIiBtaW5WYWx1ZT1cXFwiMTBcXFwiXFxuICAgICAgICAgICAgbWF4VmFsdWU9XFxcIjIwMFxcXCI+PC9TbGlkZXI+XFxuICAgICAgICA8bGFiZWwgdGV4dFdyYXA9J3RydWUnIHRleHQ9J1NwZWVkJyBjbGFzcz0naDMgZGVzY3JpcHRpb24tbGFiZWwnPjwvbGFiZWw+XFxuICAgICAgICA8U2xpZGVyICh2YWx1ZUNoYW5nZSk9XFxcImlucHV0U3BlZWQkLm5leHQoJGV2ZW50KVxcXCIgdmFsdWU9XFxcIjUwXFxcIiBtaW5WYWx1ZT1cXFwiMTBcXFwiXFxuICAgICAgICAgICAgbWF4VmFsdWU9XFxcIjI1NVxcXCI+PC9TbGlkZXI+XFxuICAgICAgICA8bGFiZWwgdGV4dFdyYXA9J3RydWUnIHRleHQ9J0F1dG9QaWxvdCcgY2xhc3M9J2gzIGRlc2NyaXB0aW9uLWxhYmVsJz48L2xhYmVsPlxcbiAgICAgICAgPFN3aXRjaCBjaGVja2VkPVxcXCJmYWxzZVxcXCIgKGNoZWNrZWRDaGFuZ2UpPVxcXCJhdXRvUGlsb3QkLm5leHQoJGV2ZW50LnZhbHVlKVxcXCI+PC9Td2l0Y2g+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuPC9TY3JvbGxWaWV3PlwiIiwiLy8gaW1wb3J0IHsgSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiXG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IG9mLCBTdWJqZWN0LCBPYnNlcnZhYmxlLCBtZXJnZSwgY29tYmluZUxhdGVzdCwgTkVWRVIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGV4aGF1c3RNYXAsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBzdGFydFdpdGgsIHNjYW4sIG1hcCwgc2hhcmVSZXBsYXksIHN3aXRjaE1hcCwgdGFwLCBmaWx0ZXIsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSXJvYm90U3RhdGUsIGNtZEVudW0gfSBmcm9tIFwiLi9tb2RlbHMvcm9ib3RTdGF0ZVwiO1xuaW1wb3J0IHsgc2VsZWN0RGlzdGluY3RTdGF0ZSwgaW5wdXRUb1ZhbHVlIH0gZnJvbSBcIi4vb3BlcmF0b3JzL3NlbGVjdERpc3RpbmN0U3RhdGVcIjtcbmltcG9ydCB7IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gJ3VpL2dlc3R1cmVzJztcbmltcG9ydCB7IE1xdHRQcm92aWRlciB9IGZyb20gJy4vcHJvdmlkZXJzL21xdHQvbXF0dCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGVycm9yTWVzc2FnZSA9ICdJb3QgU2VsZi1Ecml2aW5nIENhcic7XG4gICAgaW5pdGlhbFJvYm90U3RhdGU6IElyb2JvdFN0YXRlID0ge1xuICAgICAgICBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCxcbiAgICAgICAgc3BlZWQ6IDUwLFxuICAgICAgICBkaXNUb1dhbGw6IDEwLFxuICAgICAgICBhdXRvUGlsb3Q6IGZhbHNlXG4gICAgfVxuXG4gICAgYnRuUyQgPSBuZXcgU3ViamVjdDxUb3VjaEdlc3R1cmVFdmVudERhdGE+KCk7XG4gICAgYnRuRiQgPSBuZXcgU3ViamVjdDxUb3VjaEdlc3R1cmVFdmVudERhdGE+KCk7XG4gICAgYnRuTCQgPSBuZXcgU3ViamVjdDxUb3VjaEdlc3R1cmVFdmVudERhdGE+KCk7XG4gICAgYnRuUiQgPSBuZXcgU3ViamVjdDxUb3VjaEdlc3R1cmVFdmVudERhdGE+KCk7XG4gICAgYnRuQiQgPSBuZXcgU3ViamVjdDxUb3VjaEdlc3R1cmVFdmVudERhdGE+KCk7XG4gICAgaW5wdXRTcGVlZCQgPSBuZXcgU3ViamVjdDxFdmVudD4oKTtcbiAgICBkaXNUb1dhbGwkID0gbmV3IFN1YmplY3Q8RXZlbnQ+KCk7XG4gICAgYXV0b1BpbG90JCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICAvLyBAVmlld0NoaWxkKCdidG5GJywgeyBzdGF0aWM6IHRydWUgfSkgYnRuRjogRWxlbWVudFJlZjtcbiAgICAvLyBAVmlld0NoaWxkKCdidG5MJywgeyBzdGF0aWM6IHRydWUgfSkgYnRuTDogRWxlbWVudFJlZjtcblxuICAgIG1vdmVDYXIoczogSXJvYm90U3RhdGUpOmFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1xdHQuY2FsbEFyZXN0KHMuYXV0b1BpbG90ID09PSB0cnVlID8gY21kRW51bS5BVVRPIDogcy5kaXJlY3Rpb24sIHMuc3BlZWQudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKCkgPT4geyBjb25zb2xlLmxvZyhzLmRpcmVjdGlvbik7IH1cbiAgICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgICAgKCkgPT4gYWxlcnQocy5kaXJlY3Rpb24pXG4gICAgICAgICAgICApXG4gICAgfVxuXG4gICAgcm9ib3RDb21tYW5kcyQgPSBtZXJnZShcbiAgICAgICAgdGhpcy5idG5TJC5waXBlKCAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIG1hcChlID0+XG4gICAgICAgICAgICAgICAgKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AgfSlcbiAgICAgICAgICAgICkpLFxuICAgICAgICB0aGlzLmJ0bkYkLnBpcGUoXG4gICAgICAgICAgICAvLyB0YXAoZSA9PiBjb25zb2xlLmxvZyhlLmFjdGlvbikpLCAgICAgICAgICAgXG4gICAgICAgICAgICBtYXAoZSA9PlxuICAgICAgICAgICAgICAgIGUuYWN0aW9uID09PSAndXAnID8gKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AgfSkgOiAoeyBkaXJlY3Rpb246IGNtZEVudW0uRk9SV0FSRCB9KVxuICAgICAgICAgICAgKSksXG4gICAgICAgIHRoaXMuYnRuQiQucGlwZShtYXAoZSA9PlxuICAgICAgICAgICAgZS5hY3Rpb24gPT09ICd1cCcgPyAoeyBkaXJlY3Rpb246IGNtZEVudW0uU1RPUCB9KSA6ICh7IGRpcmVjdGlvbjogY21kRW51bS5CQUNLIH0pXG4gICAgICAgICkpLFxuICAgICAgICB0aGlzLmJ0bkwkLnBpcGUobWFwKGUgPT5cbiAgICAgICAgICAgIGUuYWN0aW9uID09PSAndXAnID8gKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlNUT1AgfSkgOiAoeyBkaXJlY3Rpb246IGNtZEVudW0uTEVGVCB9KVxuICAgICAgICApKSxcbiAgICAgICAgdGhpcy5idG5SJC5waXBlKG1hcChlID0+XG4gICAgICAgICAgICBlLmFjdGlvbiA9PT0gJ3VwJyA/ICh7IGRpcmVjdGlvbjogY21kRW51bS5TVE9QIH0pIDogKHsgZGlyZWN0aW9uOiBjbWRFbnVtLlJJR0hUIH0pXG4gICAgICAgICkpLFxuICAgICAgICB0aGlzLmlucHV0U3BlZWQkLnBpcGUoXG4gICAgICAgICAgICAvLyB0YXAobiA9PiBjb25zb2xlLmxvZygnc3BlZWQ6ICcgKyBuKSkpLFxuICAgICAgICAgICAgZmlsdGVyKG4gPT4gbiAhPT0gdW5kZWZpbmVkKSxcbiAgICAgICAgICAgIGlucHV0VG9WYWx1ZSgpLFxuICAgICAgICAgICAgbWFwKG4gPT4gKHsgc3BlZWQ6IG4gfSkpKSxcbiAgICAgICAgdGhpcy5kaXNUb1dhbGwkLnBpcGUoaW5wdXRUb1ZhbHVlKCksIG1hcChuID0+ICh7IGRpc1RvV2FsbDogbiB9KSkpLFxuICAgICAgICB0aGlzLmF1dG9QaWxvdCQucGlwZShcbiAgICAgICAgICAgIC8vIHRhcChuPT5jb25zb2xlLmxvZyhuLmFjdGlvbikpLFxuICAgICAgICAgICAgbWFwKG4gPT4gKHsgYXV0b1BpbG90OiBuIH0pKSlcblxuICAgIClcbiAgICByb2JvdFN0YXRlJDogT2JzZXJ2YWJsZTxJcm9ib3RTdGF0ZT4gPSB0aGlzLnJvYm90Q29tbWFuZHMkXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgICAgc3RhcnRXaXRoKHRoaXMuaW5pdGlhbFJvYm90U3RhdGUpLFxuICAgICAgICAgICAgLy8gdG91Y2ggZXZlbnQga2VlcHMgZmlyZWQgYXMgbG9uZyBhcyBub3QgcmVsZWFzaW5nLlxuICAgICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgICAgIHNjYW4oKHN0YXRlOiBJcm9ib3RTdGF0ZSwgY29tbWFuZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoeyAuLi5zdGF0ZSwgLi4uY29tbWFuZCB9KTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgLy8gZGlzdGluY3RVbnRpbENoYW5nZWQoKHByZXY6IElyb2JvdFN0YXRlLCBjdXJyOiBJcm9ib3RTdGF0ZSkgPT4gcHJldi5kaXJlY3Rpb24gPT09IGN1cnIuZGlyZWN0aW9uKSxcbiAgICAgICAgICAgIHNoYXJlUmVwbGF5KDEpXG4gICAgICAgICk7XG5cbiAgICBkaXJlY3Rpb24kID0gdGhpcy5yb2JvdFN0YXRlJC5waXBlKHNlbGVjdERpc3RpbmN0U3RhdGUoJ2RpcmVjdGlvbicpKTtcbiAgICBuYXZNb2RlJCA9IHRoaXMucm9ib3RTdGF0ZSQucGlwZShzZWxlY3REaXN0aW5jdFN0YXRlKCdhdXRvUGlsb3QnKSk7XG5cbiAgICBuYXZpZ2F0aW9uJCA9IGNvbWJpbmVMYXRlc3QodGhpcy5kaXJlY3Rpb24kLCB0aGlzLm5hdk1vZGUkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICAgIC8vIHdpdGhMYXRlc3RGcm9tIHRha2VzIDIgb2JzJCwgaW4gdGhpcyBjYXNlIHdlIGlnbm9yZSAxc3Qgb25lKGRpcmVjdGlvbiQpLCBhbmQgdGFrZSBzdGF0ZSQgb25seVxuICAgICAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5yb2JvdFN0YXRlJCwgKF8sIHMpID0+IHMpLFxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIHRhcCgoczogSXJvYm90U3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVDYXIocyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgLy8gcmVwbGFjZSB0YXAgdy8gZXhoYXVzdE1hcCBzbyBhbnkgY29taW5nIGRpcmVjdGlvbiBldmVudCB3aWxsIGJlIGlnbm9yZSBpZiBtb3ZlQ2FyIGlzbid0IGNvbXBsZXRlZC4gXG4gICAgICAgICAgIGV4aGF1c3RNYXAoKHMpPT50aGlzLm1vdmVDYXIocykpXG4gICAgICAgIClcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbXF0dDogTXF0dFByb3ZpZGVyKSB7XG4gICAgICAgIC8vdGhpcy5yb2JvdFN0YXRlJC5zdWJzY3JpYmUoY29uc29sZS5sb2cpO1xuICAgICAgICB0aGlzLm5hdmlnYXRpb24kLnN1YnNjcmliZShjb25zb2xlLmxvZyk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIHRoaXMucm9ib3RDb21tYW5kcyQuc3Vic2NyaWJlKG4gPT4gY29uc29sZS5sb2cobikpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IEhvbWVSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vaG9tZS1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBNcXR0UHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9tcXR0L21xdHQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFsgICAgICAgXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgSG9tZVJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEhvbWVDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBNcXR0UHJvdmlkZXJcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IFVuYXJ5RnVuY3Rpb24sIHBpcGUsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgcGx1Y2ssIG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdERpc3RpbmN0U3RhdGU8VCwgST4oa2V5OiBzdHJpbmcpOiBVbmFyeUZ1bmN0aW9uPE9ic2VydmFibGU8VD4sIE9ic2VydmFibGU8ST4+IHtcclxuICAgIHJldHVybiBwaXBlKFxyXG4gICAgICAgIHBsdWNrPFQsIEk+KGtleSksXHJcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQ8ST4oKVxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlucHV0VG9WYWx1ZShkZWZhdWx0VmFsdWU6IG51bWJlciA9IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gcGlwZShcclxuICAgICAgICAgICAgbWFwKChldmVudDogYW55KTogbnVtYmVyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IGV2ZW50ID8gcGFyc2VJbnQoZXZlbnQudmFsdWUsIDEwKSA6IGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAocGFyc2VkID09PSAwIHx8IHBhcnNlZCkgPyBwYXJzZWQgOiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiIsIi8vIEdFVCBodHRwczovL2FwaS50aGluZ3NwZWFrLmNvbS91cGRhdGU/YXBpX2tleT1HVTNUMkNWVkhYUlpVV0hRJmZpZWxkMT0wXHJcbmV4cG9ydCBjbGFzcyBDb25maWcge1xyXG4gICAgLy8gc3RhdGljIGFwaVVybCA9IFwiaHR0cHM6Ly9hcGkudGhpbmdzcGVhay5jb20vXCI7XHJcbiAgICAvLyBzdGF0aWMgYXBpS2V5ID0gXCJHVTNUMkNWVkhYUlpVV0hRXCI7XHJcbiAgICBcclxuICAgIHN0YXRpYyBhcGlVcmwgPSAnaHR0cHM6Ly9jbG91ZC5hcmVzdC5pbzsnICAgIFxyXG4gICAgc3RhdGljIGRldmljZUlkID0gJzEwNzkyOSc7IC8vIHRoZSBjYXIncyBpZCByZWdpc3RlcmQgaW4gYXJlc3Qgd2Vic2l0ZSAgIFxyXG4gIH1cclxuXHJcbiAgLy8gcHJpdmF0ZSBhcGlLZXkgPSAnMW9icXpjaDh4M2U3ZTYyNic7ICBcclxuICAvLyBwcml2YXRlIHVybCA9ICdodHRwczovL2Nsb3VkLmFyZXN0LmlvOydcclxuICAvLyBlLmcuLCBodHRwczovL2Nsb3VkLmFyZXN0LmlvLyR7ZGV2SWR9L2ZvcndhcmQiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyB0YXAsIG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNcXR0UHJvdmlkZXIge1xyXG4gXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XHJcbiAgfVxyXG5cclxuICBjYWxsQXJlc3QoZm5OYW1lOiBzdHJpbmcsIHNwZWVkOiBTdHJpbmcpIDogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnNvbGUubG9nKCdmbk5hbWU6ICcsIGZuTmFtZSk7XHJcbiAgICAvLyB0aGlzLm1zZyA9IGZuTmFtZTsgLy8gZm9yIGNzc1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7Q29uZmlnLmFwaVVybH0vJHtDb25maWcuZGV2aWNlSWR9LyR7Zm5OYW1lfT9rZXk9JHtDb25maWcuYXBpS2V5fWApXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHtDb25maWcuYXBpVXJsfS8ke0NvbmZpZy5kZXZpY2VJZH0vJHtmbk5hbWV9P3BhcmFtcz0ke3NwZWVkfWApXHJcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHtDb25maWcuYXBpVXJsfXVwZGF0ZT9hcGlfa2V5PSR7Q29uZmlnLmFwaUtleX0mZmllbGQxPSR7Zm5OYW1lfWApXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIC8vIHRhcChjb25zb2xlLmxvZyksXHJcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgICApXHJcbiAgfVxyXG5cclxuICBjYWxsQXJlc3RXaXRoUGFyYW0oZm5OYW1lOiBzdHJpbmcsIHNwZWVkOiBudW1iZXIsIGRpc3RUb1dhbGw6IG51bWJlciwgZGVsYXk6IHN0cmluZykge1xyXG4gICAgLypcclxuICAgIC8vIGNvbnNvbGUubG9nKCdzcGVlZDogJywgc3BlZWQpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cmx9LyR7dGhpcy5kZXZpY2VfaWR9LyR7Zm5OYW1lfT9rZXk9JHt0aGlzLmFwaUtleX0mcGFyYW1zPSR7c3BlZWR9LCR7ZGlzdFRvV2FsbH0sJHtkZWxheX1gKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YXAoY29uc29sZS5sb2cpLFxyXG4gICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcclxuICAgICAgKVxyXG4gICAgICAqL1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==