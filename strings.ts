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


// 排列
const anagrams = (str: string): object => {

  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];

  return str.split('').reduce((acc, letter, i) =>

    acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map((val: string) => letter + val)), []);

};

// 大写每个单词首字母
const capitalizeEveryWord = (str: string) => str.replace(/\b[a-z]/g, (char: string) => char.toUpperCase());

// 首字母大写
const capitalize = (str: string, lowerRest = false) => str.slice(0, 1).toUpperCase() + (lowerRest ? str.slice(1).toLowerCase() : str.slice(1));

// 是否是回文字符串
const palindrome = (str: string) => {

  const s = str.toLowerCase().replace(/[\W_]/g,'');

  return s === s.split('').reverse().join('');

}

// 转义特殊字符
const escapeRegExp = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
