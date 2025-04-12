// 取消元素冒泡的兼容代码
export const stopBubble = (e: Event) => {
    if (!e) return
    if (e && e.stopPropagation) {
        e.stopPropagation();
    } else {
        const event = window.event;
        if (event) {
            event.cancelBubble = true;
        }
    }
}