import { Updater, SetCookieSyntaxObject } from '../types';
import forEach from '../_/forEach';
import isNotArrayObject from '../_/isNotArrayObject';
import call from '../shared/call';
import pair from '../key-value/pair';
import unpair from '../key-value/unpair';

const setCookie = (updater: Updater, callback?: Function | void): void => {
  const cookie: object = unpair(document.cookie);

  const newCookie = (() => {
    if (typeof updater === 'function') {
      const _newCookie = updater(cookie);
      return isNotArrayObject(_newCookie) ? _newCookie : {};
    } else if (isNotArrayObject(updater)) {
      return updater;
    }

    return {};
  })();

  forEach(newCookie, (value: string | number | SetCookieSyntaxObject, name) => {
    if (typeof value === 'string' || typeof value === 'number') {
      document.cookie = `${name}=${value}`;
    } else if (isNotArrayObject(value)) {
      const { value: _value } = value;
      const t = {
        [name]: _value,
      };

      const insert = (key: string | number) => {
        if (value[key]) t[key] = value[key];
      };

      insert('path');
      insert('domain');
      insert('max-age');
      insert('expires');

      document.cookie = pair(t).concat(value.secure ? ';secure' : '');
    }
  });

  call(callback);
};

export default setCookie;
