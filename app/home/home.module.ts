import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { MqttProvider } from './providers/mqtt/mqtt';

@NgModule({
    imports: [       
        NativeScriptCommonModule,
        HomeRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
    ],
    declarations: [
        HomeComponent
    ],
    providers: [
        MqttProvider
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
