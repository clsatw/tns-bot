export interface IrobotState {
    direction: string;
    autoPilot: boolean;
    speed: number;
    disToWall: number;
}

export const DirectionEnum = Object.freeze({ FORWARD: '0', LEFT: '1', RIGHT: '2', BACK: '3', STOP: '4',  AUTO: '5' })