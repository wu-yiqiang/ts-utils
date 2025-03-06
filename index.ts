
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
    function traverse(node, id) {
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