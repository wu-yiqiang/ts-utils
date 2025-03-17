
// 获取列表数据
export const getLists = async (
    getList: Function,
    params: any | null = null,
    callback: Function | null = null,
) => {
    const data = await getList(params);
    const values = Array.isArray(data)
        ? data
        : data?.content
        ? data?.content
        : [];
    if (callback) {
        for (const key in values) {
            if (Object.prototype.hasOwnProperty.call(values, key)) {
                const item = values[key];
                callback(item);
            }
        }
    }
    return values;
};

export const flatten = (arr) => {
    return arr.reduce((result, item) => {
        return result.concat(
            item,
            Array.isArray(item.children) ? flatten(item.children) : [],
        );
    }, []);
};

// 寻找节点下的子目录
export function getTreeItem(tree: any[], nameId: string): any {
    for (const node of tree) {
        if (node.meta.nameId === nameId) {
            return node;
        }
        if (node.children && node.children.length > 0) {
            const foundNode = getTreeItem(node.children, nameId);
            if (foundNode) {
                return foundNode;
            }
        }
    }
    return null;
}


export const getNodePath = (tree, targetId) => {
    const path = [];
    function traverse(node: any, id: any) {
        if (node && Array.isArray(node)) {
            for (let i = 0; i < node.length; i++) {
                const currentId = node[i].title;
                if (currentId === id) {
                    path.unshift(node[i]?.title);
                    return true;
                }
                if (
                    node[i]?.children?.length &&
                    traverse(node[i].children, id)
                ) {
                    path.unshift(node[i]?.title);
                    return true;
                }
            }
        } else if (node && node.title === id) {
            path.unshift(node.title);
            return path;
        }
        return false;
    }
    traverse(tree, targetId);
    return path;
};

export const getNode = (tree, targetId) => {
    for (let i = 0; i < tree.length; i++) {
        const node = tree[i];
        if (node && node.title == targetId) return node;
        if (node?.children && node?.children?.length) {
            const data = getNode(node?.children, targetId);
            if (data) return data;
        }
    }
};


// 滚动到顶部
export const scrollToTop = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        element.scrollTo(0, 0);
    }
};


export const deounce = (func, delay: number = 1000) => {
  let timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}


export const throttle = (func, interval: number = 1000) => {
    let lastTime = 0
    return function(...args) {
        let now = Date.now()
        if (now - lastTime >= interval) {
          lastTime = now
          func.apply(this, args)
        }
    }
}

export const memorize = (fn) => {
    let cache = {}
    return (...args) => {
        const key = JSON.stringify(args);
        if (!cache[key]) {
          cache[key] = fn(...args)
        } else {
          return cache[key]
        }
    }
    
}

// 检查当前选项卡是否在后台
export const isTabActive = () => !document.hidden 

// 检测元素是否处于焦点
export const elementIsInFocus = (el) => el === document.activeElement
// 检查设备类型
export const judgeDeviceType = () => (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent) ? 'Mobile' : 'PC')

// 获取当前页面滚动距离
export const getScrollPosition = (el = window) => ({
    x: el.pageXOffset !== undefined ? el.pageXOffset : el?.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el?.scrollTop,
})


// 进入全屏
export const fullScreen = () => {
    let el = document.documentElement
    let rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen
    //typeof rfs != "undefined" && rfs
    if (rfs) {
        rfs.call(el)
    } else if (typeof window.ActiveXObject !== "undefined") {
        let wscript = new ActiveXObject("WScript.Shell")
        if (wscript != null) {
            wscript.SendKeys("{F11}")
        }
    }
}

// 退出全屏
export const exitScreen = () => {
    let el = document
    let cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen
    //typeof cfs != "undefined" && cfs
    if (cfs) {
        cfs.call(el)
    } else if (typeof window.ActiveXObject !== "undefined") {
        let wscript = new ActiveXObject("WScript.Shell")
        if (wscript != null) {
            wscript.SendKeys("{F11}")
        }
    }
}