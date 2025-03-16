export function isStrongPassword(password: string) {
    const reg =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~_@^!&#$%\*-\+=:,\\?\[\]\{}]).{8,16}$/;
    return reg.test(password);
}

export function isEmail(email: string) {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(email);
}

export function isUnInt(value: string) {
    const reg = /^\+?[1-9][0-9]*$/;
    return reg.test(value);
}

export function isArray(arg: []) {
    if (typeof Array.isArray === 'undefined') {
        return Object.prototype.toString.call(arg) === '[object Array]';
    }
    return Array.isArray(arg);
}
