import { Collection, Iteratee, StyleObject, Updater } from './types';

export = Aliba;
export as namespace Aliba;

declare namespace Aliba {
  function forEach(collection: Collection, iteratee: Iteratee): void;
  function map(collection: Collection, iteratee: Iteratee): Array<any>;
  function hyphenateStyleName(name: string): string;
  function hyphenateCss(style: StyleObject): string;
  function pair(pairObject: object, separator?: string | void): string;
  function unpair(pair: string, separator?: string | void): object;
  function setCookie(updater: Updater, callback?: Function | void): void;
  function shallowEqual(objA: object, objB: object): boolean;
}
