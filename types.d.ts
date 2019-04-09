export declare type Collection = object | Array<any>;
export type Iteratee = (value: any, key?: string | number) => any;
export type ReduceIteratee = (total: any, value: any, key?: string | number, arr?: Array<any> | object) => any;
export type StateChange = object;
export type Updater = (state: object, props?: object) => StateChange;

export interface StyleObject {
    [index: string]: string;
}

export interface SetCookieSyntaxObject {
  value: string | number;
  path?: string;
  domain?: string;
  'max-age'?: string | number;
  expires?: string;
  secure?: boolean;
}
