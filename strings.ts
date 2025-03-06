// 超出字符个数显示省略号
export const omitCharacters = (strs: string, num = 16) => {
    if (!strs) return strs;
    if (strs.length <= num) return strs;
    const str = strs.substr(0, num) + '...';
    return str;
};

export const toLocaleUpperCase = (str: String) => {
    return str.toLocaleUpperCase();
};