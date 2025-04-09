// 判断是否包含至少1个小写字母、1个大写字母、1个数字、1个特殊字符，至少8个字符长
export function isContainerAtLeast8CharLowerCaseUpCaseNumberSpecialChar(password: string, max: number = 16) {
    const reg = new RegExp(`^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~_@^!&#$%\*-\+=:,\\?\[\]\{}]).{8,${max}}$`)
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
// 判断是否只包含英文数字及下划线
export function isContainerLetterNumberUnderline(value: string) {
    const reg = /^[A-Za-z0-9_]+$/;
    return reg.test(value);
}

// 判断是否只包含中英文数字及键盘上的特殊字符
export function isContainerEnZHNumberSpecialCharacters(value: string) {
    const reg = /^[\u4E00-\u9FA5A-Za-z0-9`~!@#$%^&*()_\-+=\[\]{}|\\:;"'<>,.?/]+$/;
    return reg.test(value);
}

// 判断是否强制密码必须包含至少一个字母、一个数字和一个特殊字符，并且密码长度至少为 8 个字符。
export function isContainerAtLeast8CharLetterNumberSpecialChar(value: string,max: number = 16) {
    const reg = new RegExp(`^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,${max}}$`)
    return reg.test(value);
}

// 判断是否为ip v4地址
export function isIpv4(value: string) {
    const reg = /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})(\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})){3}$/;
    return reg.test(value);
}
// 判断是否为ip v6地址
export function isIpv6(value: string) {
    const reg = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    return reg.test(value);
}
// 判断是否只包含英文数字及下划线
export function isQQ(value: string) {
    const reg = /[1-9][0-9]{4,}/;
    return reg.test(value);
}
// 判断是否只包含英文数字及下划线
// export function isIE(value: string) {
//     const reg = /^.*MSIE [5-8](?:\\.[0-9]+)?(?!.*Trident\\/[5-9]\\.0).*$/;
//     return reg.test(value);
// }

// 判断是否是XML文件
export function isXML(value: string) {
    const reg = /^([a-zA-Z]+-?)+[a-zA-Z0-9]+\\.[x|X][m|M][l|L]$/;
    return reg.test(value);
}

// 判断是否是图片文件
export function isPicture(value: string) {
    const reg = /(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga|JPG|BMP|GIF|ICO|PCX|JPEG|TIF|PNG|RAW|TGA)$/;
    return reg.test(value);
}
