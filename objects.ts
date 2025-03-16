// 清空对象空值的属性
export const clearNull = (obj) => {
    const newObj = Object.keys(obj)
        .filter((k) => ![null, '', undefined].includes(obj[k]))
        .reduce((a, k) => ({ ...a, [k]: obj[k] }), {});
    return newObj;
};

// 检查对象是否为空
export const objectIsEmpty = (obj: object) => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object
