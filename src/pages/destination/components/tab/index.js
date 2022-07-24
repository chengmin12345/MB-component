import './tab.css'

import { getData, getDelayedData } from 'api/getData'


import { URL, ITEMELS_CLASS, ITEM_ACTIVE_CLASS } from './config'

// 只提供方法，在父组件main中调用，用类
class Tab {
    // el是ul,为了获取li
    constructor(el) {

        this.itemEls = el.querySelectorAll(ITEMELS_CLASS)

    }

    // 设置选中状态
    setActiveItem(index) {
        // 伪数组，遍历
        // 排他思想，干掉所有
        for (const itemEl of this.itemEls) {

            itemEl.classList.remove(ITEM_ACTIVE_CLASS)
        }
        // 点击哪个哪个高亮
        this.itemEls[index].classList.add(ITEM_ACTIVE_CLASS)
    }


    // 点击哪个li，哪个发送请求
    to(index) {
        // 取消上一次请求
        if (this.dataPromise && this.dataPromise.xhr) {
            this.dataPromise.xhr.abort()
        }

        this.setActiveItem(index)

        // 只获取数据，不处理数据，在content中处理数据
        this.dataPromise = getData(`${URL}/${this.itemEls[index].dataset.id}`)
        return this.dataPromise
    }
}


export default Tab