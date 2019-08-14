import { NgModuleRef, Type, ViewContainerRef } from "@angular/core";
import { NSLocationStrategy } from "../router/ns-location-strategy";
import { View } from "tns-core-modules/ui/core/view";
import { ShowModalOptions } from "tns-core-modules/ui/core/view";
export declare type BaseShowModalOptions = Pick<ShowModalOptions, Exclude<keyof ShowModalOptions, "closeCallback" | "context">>;
export interface ModalDialogOptions extends BaseShowModalOptions {
    context?: any;
    viewContainerRef?: ViewContainerRef;
    moduleRef?: NgModuleRef<any>;
    target?: View;
}
export declare class ModalDialogParams {
    context: any;
    closeCallback: (...args: any[]) => any;
    constructor(context: any, closeCallback: (...args: any[]) => any);
}
export declare class ModalDialogService {
    private location;
    constructor(location: NSLocationStrategy);
    showModal(type: Type<any>, options: ModalDialogOptions): Promise<any>;
    private _showDialog;
}
export declare class ModalDialogHost {
    constructor();
}
