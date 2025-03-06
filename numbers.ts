// 随机整数
export const randomInt = (n = 99999999999) => {
    return Math.floor(Math.random() * n) + 1;
};


export const formatNumber = (number: Number) => {
    return number.toLocaleString('en-US');
};