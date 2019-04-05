import { Collection, Iteratee, StyleObject, Updater } from './types';

declare module 'aliba' {
  function forEach(collection: Collection, iteratee: Iteratee): void;
  function map(collection: Collection, iteratee: Iteratee): Array<any>;
  function isNotArrayObject(object: object): boolean;
  function isEmptyObject(object: object | Array<any>): boolean;
  function hyphenateStyleName(name: string): string;
  function hyphenateCss(style: StyleObject): string;
  function pair(pairObject: object, separator?: string | void): string;
  function unpair(pair: string, separator?: string | void): object;
  function setCookie(updater: Updater, callback?: Function | void): void;
  function shallowEqual(objA: object, objB: object): boolean;
}
