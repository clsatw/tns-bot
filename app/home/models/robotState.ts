export interface IrobotState {
    direction: number;
    autoPilot: boolean;
    speed: number;
    disToWall: number;
}

// export const DirectionEnum = Object.freeze({ STOP: 'stop', FORWARD: 'forward', LEFT: 'left', RIGHT: 'right', BACK: 'back', AUTO: '5' })
/*
export const enum cmdEnum {
    STOP ='stop',
    FORWARD ='forward',
    LEFT= 'left',
    RIGHT= 'right',
    BACK= 'back',
    AUTO= 'autoPilot' 
}
*/
export const enum cmdEnum {
    STOP = 0,
    FORWARD,
    LEFT,
    RIGHT,
    BACK,
    AUTO
}
