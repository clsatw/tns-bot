Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ns_location_strategy_1 = require("../router/ns-location-strategy");
var app_host_view_1 = require("../app-host-view");
var detached_loader_1 = require("../common/detached-loader");
var platform_providers_1 = require("../platform-providers");
var utils_1 = require("../common/utils");
var frame_1 = require("tns-core-modules/ui/frame");
var ModalDialogParams = /** @class */ (function () {
    function ModalDialogParams(context, closeCallback) {
        if (context === void 0) { context = {}; }
        this.context = context;
        this.closeCallback = closeCallback;
    }
    return ModalDialogParams;
}());
exports.ModalDialogParams = ModalDialogParams;
var ModalDialogService = /** @class */ (function () {
    function ModalDialogService(location) {
        this.location = location;
    }
    ModalDialogService.prototype.showModal = function (type, options) {
        var _this = this;
        if (!options.viewContainerRef) {
            throw new Error("No viewContainerRef: " +
                "Make sure you pass viewContainerRef in ModalDialogOptions.");
        }
        var parentView = options.viewContainerRef.element.nativeElement;
        if (options.target) {
            parentView = options.target;
        }
        if (parentView instanceof app_host_view_1.AppHostView && parentView.ngAppRoot) {
            parentView = parentView.ngAppRoot;
        }
        // _ngDialogRoot is the first child of the previously detached proxy.
        // It should have 'viewController' (iOS) or '_dialogFragment' (Android) available for
        // presenting future modal views.
        if (parentView._ngDialogRoot) {
            parentView = parentView._ngDialogRoot;
        }
        var pageFactory = options.viewContainerRef.injector.get(platform_providers_1.PAGE_FACTORY);
        // resolve from particular module (moduleRef)
        // or from same module as parentView (viewContainerRef)
        var componentContainer = options.moduleRef || options.viewContainerRef;
        var resolver = componentContainer.injector.get(core_1.ComponentFactoryResolver);
        var frame = parentView;
        if (!(parentView instanceof frame_1.Frame)) {
            frame = (parentView.page && parentView.page.frame) || frame_1.topmost();
        }
        this.location._beginModalNavigation(frame);
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                try {
                    _this._showDialog(__assign({}, options, { containerRef: options.viewContainerRef, context: options.context, doneCallback: resolve, pageFactory: pageFactory,
                        parentView: parentView,
                        resolver: resolver,
                        type: type }));
                }
                catch (err) {
                    reject(err);
                }
            }, 10);
        });
    };
    ModalDialogService.prototype._showDialog = function (options) {
        var _this = this;
        var componentView;
        var detachedLoaderRef;
        var closeCallback = utils_1.once(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            options.doneCallback.apply(undefined, args);
            if (componentView) {
                componentView.closeModal();
                _this.location._closeModalNavigation();
                detachedLoaderRef.instance.detectChanges();
                detachedLoaderRef.destroy();
            }
        });
        var modalParams = new ModalDialogParams(options.context, closeCallback);
        var childInjector = core_1.Injector.create({
            providers: [{ provide: ModalDialogParams, useValue: modalParams }],
            parent: options.containerRef.injector
        });
        var detachedFactory = options.resolver.resolveComponentFactory(detached_loader_1.DetachedLoader);
        detachedLoaderRef = options.containerRef.createComponent(detachedFactory, -1, childInjector, null);
        detachedLoaderRef.instance.loadComponent(options.type).then(function (compRef) {
            var detachedProxy = compRef.location.nativeElement;
            if (detachedProxy.getChildrenCount() > 1) {
                throw new Error("Modal content has more than one root view.");
            }
            componentView = detachedProxy.getChildAt(0);
            if (componentView.parent) {
                componentView.parent._ngDialogRoot = componentView;
                componentView.parent.removeChild(componentView);
            }
            options.parentView.showModal(componentView, __assign({}, options, { closeCallback: closeCallback }));
        });
    };
    ModalDialogService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [ns_location_strategy_1.NSLocationStrategy])
    ], ModalDialogService);
    return ModalDialogService;
}());
exports.ModalDialogService = ModalDialogService;
var ModalDialogHost = /** @class */ (function () {
    function ModalDialogHost() {
        throw new Error("ModalDialogHost is deprecated. " +
            "Call ModalDialogService.showModal() " +
            "by passing ViewContainerRef in the options instead.");
    }
    ModalDialogHost = __decorate([
        core_1.Directive({
            selector: "[modal-dialog-host]" // tslint:disable-line:directive-selector
        }),
        __metadata("design:paramtypes", [])
    ], ModalDialogHost);
    return ModalDialogHost;
}());
exports.ModalDialogHost = ModalDialogHost;
//# sourceMappingURL=dialogs.js.map