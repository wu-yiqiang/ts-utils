// 两个数组是否存在交集
export function isExitIntersection(
    array1: (string | number)[],
    array2: (string | number)[],
): boolean {
    return array1?.filter((item: any) => array2.includes(item))?.length > 0;
};
// 数组对象去重
export function uniqueListObj<T extends never>(arr: T[], attr: any): T[] {
    const hash:any = {};
    return arr.reduce((accum, item) => {
        hash[item[attr]] ? '' : (hash[item[attr]] = true && accum.push(item));
        return accum;
    }, []);
};
// 取数组平均值
export function average<T extends number>(arr: T[]): T {
    return (arr.reduce((acc: number, val: number) => acc + val, 0) / arr.length) as T;
};
// 计数数组中值的出现次数
export function countOccurrences<T extends any>(arr: T[], value: any): number {
    return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
}
// 两点之间的距离
export function distance<T extends number>(x0: T, y0: T, x1: T, y1: T) {
    return Math.hypot(x1 - x0, y1 - y0);
}
// 数组降维
export const deepFlatten = (arr: any) => arr.reduce((a:[], v: never) => a.concat(Array.isArray(v) ? deepFlatten(v) : v), []);
// 数组之间的区别
export const difference = (a:[], b: []) => { const s = new Set(b); return a.filter(x => !s.has(x)); };
// 数组差集
export const diff = (arr1, arr2) => Array.from(new Set(union(arr1, arr2).filter((item) => !cross(arr1, arr2).includes(item))));
// 数组去重
export const uniqueArray = (array: Array<string| number>) => [...new Set(array)]
export const listToTree = (list: any[], key = 'parentId', cd?: Function) => {
    const recursion = (list: any[], parentId: any) => {
        if (!parentId) return [];
        const arr = list
            .filter((item) => item[key] === parentId)
            .map((item) => ({
                ...item,
                ...(cd?.(item) || {}),
                children: recursion(list, item.id),
            }));
        return arr.length ? arr : null;
    };
    return list
        .filter((a) => !a[key])
        .map((_) => {
            return {
                ..._,
                ...(cd?.(_) || {}),
                children: recursion(list, _.id),
            };
        });
};
// 数组并集
export const union = (arr1: Array<string | number>, arr2:Array<string | number>): Array<string | number> => Array.from(new Set([...arr1, ...arr2]));
// 数组交集
export const cross = (arr1, arr2) => Array.from(new Set(arr1.filter((item) =>
    arr2.includes(item))));