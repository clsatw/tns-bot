import { ModuleWithProviders } from "@angular/core";
import { Routes, ExtraOptions } from "@angular/router";
import { NSLocationStrategy, LocationState } from "./ns-location-strategy";
import { FrameService } from "../platform-providers";
export { PageRoute } from "./page-router-outlet";
export { RouterExtensions } from "./router-extensions";
export { NSModuleFactoryLoader } from "./ns-module-factory-loader";
export { NSEmptyOutletComponent } from "./ns-empty-outlet.component";
export declare type LocationState = LocationState;
export declare class NativeScriptRouterModule {
    static forRoot(routes: Routes, config?: ExtraOptions): ModuleWithProviders<NativeScriptRouterModule>;
    static forChild(routes: Routes): ModuleWithProviders<NativeScriptRouterModule>;
}
export declare function provideLocationStrategy(locationStrategy: NSLocationStrategy, frameService: FrameService): NSLocationStrategy;
