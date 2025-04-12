import { RangeNumber } from "./types/common";
// 超出字符个数显示省略号
export const omitCharacters = (strs: string, num = 16) => {
    if (!strs) return strs;
    if (strs.length <= num) return strs;
    const str = strs?.substr(0, num) + '...';
    return str;
};
export const toLocaleUpperCase = (str: String) => {
    return str?.toLocaleUpperCase() ?? '';
};
// 排列
const anagrams = (str: string): Array<string> => {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  return str.split('').reduce((acc: string[], letter, i) => {
    const newAnagrams = anagrams(str.slice(0, i) + str.slice(i + 1)).map((val: string) => letter + val);
    return acc.concat(newAnagrams);
  }, []);
};
// 大写每个单词首字母
export const capitalizeEveryWord = (str: string) => str.replace(/\b[a-z]/g, (char: string) => char.toUpperCase());
// 首字母大写
export const capitalize = (str: string, lowerRest = false) => str.slice(0, 1).toUpperCase() + (lowerRest ? str.slice(1).toLowerCase() : str.slice(1));
// 是否是回文字符串
export const palindrome = (str: string) => {
  if (Object.prototype.toString.call(str) !== '[object String]') return false;
  const s = str.toLowerCase().replace(/[\W_]/g,'');
  return s === s.split('').reverse().join('');
}
// 检查字符串是否是回文
export const  isPalina = (str: string) => {
  if (Object.prototype.toString.call(str) !== '[object String]') {
    return false;
  }
  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] != str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
// 转义特殊字符
export const escapeRegExp = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//从url获取参数并转为对象
export const getUrlParameters = (URL: string) => JSON.parse(`{"${decodeURI(URL.split('?')[1]).replace(/"/g, '"').replace(/&/g, '","').replace(/=/g, '":"')}"}`)
// 反转字符串
export const reverse = (str: string) => str.split('').reverse().join('')
//生成随机十六进制
export const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')}`
// 文字复制到剪贴板
export const copyText = async (text) => await navigator.clipboard.writeText(text)
// 获取选定的文本
export const getSelectedText = () => window?.getSelection()?.toString()
// 将 RGB 转换为十六进制
export const rgbToHex = (r: RangeNumber<0, 255>, g: RangeNumber<0, 255>, b: RangeNumber<0, 255>) => '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
// 复制内容到用户剪切板
export const copyToClipboard = (content: string) => {
  const textarea = document.createElement("textarea")
  textarea.value = content
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand("Copy")
  textarea.remove()
}

// 通过名字获取查询字符串参数
export const getQueryByName = (name: string) => {
  const query = new URLSearchParams(location.search)
  return decodeURIComponent(query.get(name) ?? '')
}

// 去掉字符串中的html元素标记
export const removeTag = (fragment) => {
  return new DOMParser().parseFromString(fragment, 'text/html').body.textContent || ''
}
// 随机IP V4地址
export const generateRandomIP = () => {
  return Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join('.');
}
// 检查字符串是否包含子字符串
export const containsSubstring = (string, substring) => string.includes(substring);
// 去除连续字符串
export const uniqStrings = (str: string) => {
  return str.replace(/(\w)\1+/g, '$1')
}
