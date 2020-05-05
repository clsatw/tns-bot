// import { ItemEventData } from "tns-core-modules/ui/list-view"
import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from "@angular/core";
import { Subject, Observable, merge, combineLatest, Subscription } from 'rxjs';
import { catchError, exhaustMap, distinctUntilChanged, startWith, scan, map, shareReplay, tap, filter, withLatestFrom, debounceTime, throttleTime, skipWhile, takeWhile, switchMap, last } from 'rxjs/operators';
import { IrobotState, cmdEnum } from "./models/robotState";
import { selectDistinctState, inputToValue } from "./operators/selectDistinctState";
import { TouchGestureEventData } from 'ui/gestures';
import { MqttProvider } from './providers/mqtt/mqtt';
import * as dialogs from "tns-core-modules/ui/dialogs";

// import { getEventOrGestureName } from "tns-core-modules/ui/page/page";
// import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";

@Component({
    selector: "Home",
    providers: [MqttProvider],
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
    navSubscription: Subscription;
    errorMessage = 'Wifi 遙控車';
    devId = '';
    initialRobotState: IrobotState = {
        direction: cmdEnum.STOP,
        speed: 50,
        disToWall: 10,
        autoPilot: 0
    }
    // last event is always up, so this is filtered by distinctUntilChange operator.
    // btnS$ = new Subject<TouchGestureEventData>();
    btnF$ = new Subject<TouchGestureEventData>();
    btnL$ = new Subject<TouchGestureEventData>();
    btnR$ = new Subject<TouchGestureEventData>();
    btnB$ = new Subject<TouchGestureEventData>();
    btnS$ = new Subject<TouchGestureEventData>();
    inputSpeed$ = new Subject<Event>();
    disToWall$ = new Subject<Event>();
    autoPilot$ = new Subject<any>();
    // @ViewChild('btnF', { static: true }) btnF: ElementRef;
    // @ViewChild('btnL', { static: true }) btnL: ElementRef;

    moveCar(s: IrobotState): any {
        // if no return here, it will fire an error at runtime. don't know why?
        // return this.mqtt.callArest(s.autoPilot === true ? cmdEnum.AUTO : s.direction, s.speed.toString())
        return this.mqtt.publish('moveCar', this.devId, s);
    }
    // when tap on button, there a down, many move... an up events.
    robotCommands$ = merge(
        // this.btnS$.pipe( map(e => ({ direction: cmdEnum.STOP }))),
        this.btnF$.pipe(
            // e.action: move, cancel down, up.
            filter(e => e.action !== 'move'),
            map((e: TouchGestureEventData) => e.action === 'up' ? ({ direction: cmdEnum.STOP }) : ({ direction: cmdEnum.FORWARD })
            )),

        this.btnB$.pipe(
            filter(e => e.action !== 'move'),
            map((e: TouchGestureEventData) => e.action === 'up' ? ({ direction: cmdEnum.STOP }) : ({ direction: cmdEnum.BACK })
            )),
        this.btnL$.pipe(
            filter(e => e.action !== 'move'),
            map(e => e.action === 'up' ? ({ direction: cmdEnum.STOP }) : ({ direction: cmdEnum.LEFT })
            )),
        this.btnR$.pipe(
            filter(e => e.action !== 'move'),
            map(e => e.action === 'up' ? ({ direction: cmdEnum.STOP }) : ({ direction: cmdEnum.RIGHT })
            )),
        // car speed (0-255)
        this.inputSpeed$.pipe(
            //tap(console.log),
            // tap(n => console.log('speed: ' + n))),
            filter(n => n !== undefined),
            inputToValue(),
            map(n => ({ speed: n }))
        ),

        this.disToWall$.pipe(inputToValue(), map(n => ({ disToWall: n }))),
        this.autoPilot$.pipe(
            // don't know how to send true or false in http request, so i use 0 and 1
            map(n => ({ autoPilot: n ? 1 : 0 })))
    )

    robotState$: Observable<IrobotState> = this.robotCommands$
        .pipe(
            startWith(this.initialRobotState),
            // ** touch event 'move' keeps being fired as long as not releasing.
            scan((state: IrobotState, command) => {
                return ({ ...state, ...command });
            }),
            // distinctUntilChanged(),
            // distinctUntilChanged((prev: IrobotState, curr: IrobotState) => prev.direction === curr.direction),
            shareReplay(1)
        );

    navMode$ = this.robotState$.pipe(selectDistinctState('autoPilot'));
    direction$ = this.robotState$.pipe(
        selectDistinctState('direction'),
        // filter out any direction emissions if autopilot is on
        withLatestFrom(this.navMode$),
        filter(([dir, nav])=>nav===0))

    // ** discard emitted values that take < 1s coz inputvalue keeps firing when sliding on slider.
    speed$: Observable<any> = this.robotState$.pipe(selectDistinctState('speed')).pipe(debounceTime(1000));

    // any of the observables emits a vaule, group the latest change together
    navigation$ = combineLatest(this.direction$, this.navMode$, this.speed$)
        .pipe(
            // withLatestFrom takes 2 obs$, in this case we ignore 1st one(direction$), and take state$ only
            withLatestFrom(this.robotState$, (_, s) => s),

            // replace tap w/ exhaustMap so any coming direction event will be ignore if moveCar isn't completed.
            // tap( console.log('s.direction') ),
            // debounce is to prevent sneding stop right after direction cmd if slightly touch
            debounceTime(100),
            // switchmap is only for switching obs$ to another obs$. whereas in here s isn't obs$
            map((s: IrobotState) => this.moveCar(s))
        )

    constructor(private mqtt: MqttProvider) {
        // this.robotState$.subscribe(console.log);
        // this.direction$.subscribe(console.log);
        // ** this console.log shows everything!
        this.navSubscription = this.navigation$.subscribe((res: number) => {
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
        })
    }

    ngOnInit(): void {
        // this.robotCommands$.subscribe(console.log);
        // start to receive commands
        this.mqtt.sub('devId').subscribe(data => {
            this.devId = data;
            // console.log('devId: ', this.devId);
            // dialogs.alert(this.devId);
        });

        this.robotState$.subscribe();
        // this.navMode$.subscribe(console.log);
    }
    ngOnDestroy(): void {
        this.navSubscription.unsubscribe();
    }
}
