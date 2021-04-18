// @flow
export default class Util {
    static isUndefined(obj) {
        return obj === undefined;
    }

    static isNull(obj) {
        return obj === null;
    }

    static isString(obj) {
        return typeof obj === 'string';
    }

    static isFunction(obj) {
        return obj && {}.toString.call(obj) === '[object Function]';
    }

    static isObject(obj) {
        return typeof obj === 'object';
    }

    static objectMerge(target, source) {
        for (var key in source) {
            if (
                target.hasOwnProperty(key) &&
                this.isObject(target[key]) &&
                this.isObject(source[key])
            ) {
                this.objectMerge(target[key], source[key]);
            } else {
                target[key] = source[key];
            }
        }
    }
}
