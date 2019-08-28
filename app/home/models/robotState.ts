export interface IrobotState {
    direction: string;
    autoPilot: boolean;
    speed: number;
    disToWall: number;
}

// export const DirectionEnum = Object.freeze({ STOP: 'stop', FORWARD: 'forward', LEFT: 'left', RIGHT: 'right', BACK: 'back', AUTO: '5' })

export const enum cmdEnum {
    STOP ='stop',
    FORWARD ='forward',
    LEFT= 'left',
    RIGHT= 'right',
    BACK= 'back',
    AUTO= '5' 
}
