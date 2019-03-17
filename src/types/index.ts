export type Collection = object | Array<any>;
export type Iteratee = (value: any, key: string | number) => any;
export type StateChange = object;
export type Updater = (state: object, props?: object) => StateChange;

export interface StyleObject {
    [index: string]: string;
}
