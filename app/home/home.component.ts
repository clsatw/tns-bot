import { ItemEventData } from "tns-core-modules/ui/list-view"
import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { of, Subject, Observable, merge, combineLatest, NEVER } from 'rxjs';
import { catchError, exhaustMap, distinctUntilChanged, startWith, scan, map, shareReplay, switchMap, tap, filter, withLatestFrom } from 'rxjs/operators';
import { IrobotState, DirectionEnum } from "./models/robotState";
import { selectDistinctState, inputToValue } from "./operators/selectDistinctState";
import { TouchGestureEventData } from 'ui/gestures';
import { MqttProvider } from './providers/mqtt/mqtt';
// import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

    errorMessage = 'Iot Self-Driving Car';
    initialRobotState: IrobotState = {
        direction: DirectionEnum.STOP,
        speed: 50,
        disToWall: 10,
        autoPilot: false
    }

    btnF$ = new Subject<TouchGestureEventData>();
    btnL$ = new Subject<TouchGestureEventData>();
    btnR$ = new Subject<TouchGestureEventData>();
    btnB$ = new Subject<TouchGestureEventData>();
    inputSpeed$ = new Subject<Event>();
    disToWall$ = new Subject<Event>();
    autoPilot$ = new Subject<any>();
    // @ViewChild('btnF', { static: true }) btnF: ElementRef;
    // @ViewChild('btnL', { static: true }) btnL: ElementRef;

    moveCar(direction: string) {
        this.mqtt.callArest(direction)
            .subscribe(
                () => { console.log(direction); }
                ,
                () => alert('cmd failed')
            )
    }
    robotCommands$ = merge(
        this.btnF$.pipe(
            // tap(e => console.log(e.action)),           
            map(e =>
                e.action === 'up' ? ({ direction: DirectionEnum.STOP }) : ({ direction: DirectionEnum.FORWARD })
            )),
        this.btnB$.pipe(map(e =>
            e.action === 'up' ? ({ direction: DirectionEnum.STOP }) : ({ direction: DirectionEnum.BACK })
        )),
        this.btnL$.pipe(map(e =>
            e.action === 'up' ? ({ direction: DirectionEnum.STOP }) : ({ direction: DirectionEnum.LEFT })
        )),
        this.btnR$.pipe(map(e =>
            e.action === 'up' ? ({ direction: DirectionEnum.STOP }) : ({ direction: DirectionEnum.RIGHT })
        )),
        this.inputSpeed$.pipe(
            // tap(n => console.log('speed: ' + n))),
            filter(n => n !== undefined),
            inputToValue(),
            map(n => ({ speed: n }))),
        this.disToWall$.pipe(inputToValue(), map(n => ({ disToWall: n }))),
        this.autoPilot$.pipe(
            // tap(n=>console.log(n.action)),
            map(n => ({ autoPilot: n })))

    )
    robotState$: Observable<IrobotState> = this.robotCommands$
        .pipe(
            startWith(this.initialRobotState),
            // touch event keeps fired as long as not releasing.
            distinctUntilChanged(),
            scan((state: IrobotState, command) => {
                return ({ ...state, ...command });
            }),
            // distinctUntilChanged((prev: IrobotState, curr: IrobotState) => prev.direction === curr.direction),
            shareReplay(1)
        );

    direction$ = this.robotState$.pipe(selectDistinctState('direction'));
    navMode$ = this.robotState$.pipe(selectDistinctState('autoPilot'));

    navigation$ = combineLatest(this.direction$, this.navMode$)
        .pipe(
            // withLatestFrom takes 2 obs$, in this case we ignore 1st one(direction$), and take state$ only
            withLatestFrom(this.robotState$, (_, s) => s),
            tap((s: IrobotState) => {
                if (s.autoPilot === true) {
                    this.moveCar('5');
                }
                else {
                    //this.mqtt.callArestWithParam('setSpeed', s.speed, s.disToWall, '30');
                    this.moveCar(s.direction);
                }
            })
        )

    constructor(private mqtt: MqttProvider) {
        //this.robotState$.subscribe(console.log);
        this.navigation$.subscribe(console.log);
    }

    ngOnInit(): void {
        // this.robotCommands$.subscribe(n => console.log(n));
    }
}
