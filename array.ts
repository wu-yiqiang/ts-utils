// 两个数组是否存在交集
export const isExitIntersection = (
    array1: (string | number)[],
    array2: (string | number)[],
) => {
    return array1?.filter((item: any) => array2.includes(item))?.length;
};


// 数组对象去重
export const uniqueListObj = (arr: [], attr: any) => {
    const hash:any = {};
    return arr.reduce((accum, item) => {
        hash[item[attr]] ? '' : (hash[item[attr]] = true && accum.push(item));
        return accum;
    }, []);
};


// 取数组平均值
const average = (arr: []) => arr.reduce((acc: number, val: number) => acc + val, 0) / arr.length;

// 计数数组中值的出现次数
const countOccurrences = (arr: [], value: never) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);

// 数组降维
const deepFlatten = (arr: any) => arr.reduce((a:[], v: never) => a.concat(Array.isArray(v) ? deepFlatten(v) : v), []);

// 数组之间的区别
const difference = (a:[], b: []) => { const s = new Set(b); return a.filter(x => !s.has(x)); };
// 两点之间的距离
const distance = (x0: number, y0: number, x1: number, y1: number) => Math.hypot(x1 - x0, y1 - y0);


// 数组去重
export const uniqueArray = (array: []) => [...new Set(array)]
