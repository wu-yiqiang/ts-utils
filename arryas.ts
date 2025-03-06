// 两个数组是否存在交集
export const isExitIntersection = (
    array1: (string | number)[],
    array2: (string | number)[],
) => {
    return array1?.filter((item: any) => array2.includes(item))?.length;
};


// 数组对象去重
export const uniqueListObj = (arr: [], attr: any) => {
    const hash = {};
    return arr.reduce((accum, item) => {
        hash[item[attr]] ? '' : (hash[item[attr]] = true && accum.push(item));
        return accum;
    }, []);
};