// 随机整数
export const randomInt = (n = 99999999999) => {
    return Math.floor(Math.random() * n) + 1;
};
// 格式化数字
export const formatNumber = (number: Number) => {
    return number?.toLocaleString('en-US');
};
// 阶乘
const factorial = (n: number) => n <= 1 ? 1 : n * factorial(n - 1);
// 斐波那契数组生成器
export const fibonacci = (n: number) =>
    Array(n).fill(0).reduce((acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i), []);
// 将华氏温度转换为摄氏温度
export const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9
// 将摄氏温度转华氏温度
export const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32
// 文件大小转换
export const formatFileSize = (fileSize: number) => {
    let temp = '';
    if (fileSize < 1024) {
        return fileSize + 'B';
    } else if (fileSize < 1024 * 1024) {
        temp = (fileSize / 1024).toFixed(2);
        return temp + 'KB';
    } else if (fileSize < 1024 * 1024 * 1024) {
        temp = (fileSize / (1024 * 1024)).toFixed(2);
        return temp + 'MB';
    } else {
        temp = (fileSize / (1024 * 1024 * 1024)).toFixed(2);
        return temp + 'GB';
    }
};