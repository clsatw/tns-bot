// import { ItemEventData } from "tns-core-modules/ui/list-view"
import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { Subject, Observable, merge, combineLatest } from 'rxjs';
import { catchError, exhaustMap, distinctUntilChanged, startWith, scan, map, shareReplay, tap, filter, withLatestFrom, debounceTime, throttleTime, skipWhile, takeWhile, switchMap } from 'rxjs/operators';
import { IrobotState, cmdEnum } from "./models/robotState";
import { selectDistinctState, inputToValue } from "./operators/selectDistinctState";
import { TouchGestureEventData } from 'ui/gestures';
import { MqttProvider } from './providers/mqtt/mqtt';
// import { getEventOrGestureName } from "tns-core-modules/ui/page/page";
// import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";

@Component({
    selector: "Home",
    providers: [MqttProvider],
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    errorMessage = 'Iot Self-Driving Car';
    initialRobotState: IrobotState = {
        direction: cmdEnum.STOP,
        speed: 50,
        disToWall: 10,
        autoPilot: false
    }
    // last event is always up, so this is filtered by distinctUntilChange operator.
    // btnS$ = new Subject<TouchGestureEventData>();
    btnF$ = new Subject<TouchGestureEventData>();
    btnL$ = new Subject<TouchGestureEventData>();
    btnR$ = new Subject<TouchGestureEventData>();
    btnB$ = new Subject<TouchGestureEventData>();
    inputSpeed$ = new Subject<Event>();
    disToWall$ = new Subject<Event>();
    autoPilot$ = new Subject<any>();
    // @ViewChild('btnF', { static: true }) btnF: ElementRef;
    // @ViewChild('btnL', { static: true }) btnL: ElementRef;

    moveCar(s):any {
        // if no return here, it will fire an error at runtime. don't know why?
        return this.mqtt.callArest(s.autoPilot === true ? cmdEnum.AUTO : s.direction, s.speed.toString())
           
    }
    // when tap on button, there a down, many move... an up events.
    robotCommands$ = merge(
        // this.btnS$.pipe( map(e => ({ direction: cmdEnum.STOP }))),
        this.btnF$.pipe(
            // action: move, cancel down, up.
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
            // tap(n=>console.log(n.action)),
            map(n => ({ autoPilot: n })))
    ).pipe(
        // debounceTime(500)
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

    direction$ = this.robotState$.pipe(selectDistinctState('direction'));
    navMode$ = this.robotState$.pipe(selectDistinctState('autoPilot'));

    // ** discard emitted values that take < 1s coz inputvalue keeps firing when sliding on slider.
    speed$: Observable<any> = this.robotState$.pipe(selectDistinctState('speed')).pipe(debounceTime(1000));

    navigation$ = combineLatest(this.direction$, this.navMode$, this.speed$)
        .pipe(
            // withLatestFrom takes 2 obs$, in this case we ignore 1st one(direction$), and take state$ only
            withLatestFrom(this.robotState$, (_, s) => s),
            /*            
            tap((s: IrobotState) => {
                // console.log(s.direction)
                this.moveCar(s);
            })            
            */
            // replace tap w/ exhaustMap so any coming direction event will be ignore if moveCar isn't completed. 
            // tap( console.log('s.direction') ),
            switchMap((s: IrobotState) => this.moveCar(s))
        )

    constructor(private mqtt: MqttProvider) {
        // this.robotState$.subscribe(console.log);
        // this.direction$.subscribe(console.log);       
        // ** this console.log shows everything!
        this.navigation$.subscribe(console.log)
    }

    ngOnInit(): void {
        // this.robotCommands$.subscribe(console.log);        
        // this.robotState$.subscribe(console.log)
    }
}
