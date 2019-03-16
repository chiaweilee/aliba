export type Collection = object | Array<any>;
export type Iteratee = (value: any, key: string | number) => any;

export interface StyleObject {
    [index: string]: string;
}
