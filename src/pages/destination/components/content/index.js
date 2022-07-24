import './content.css'


import render from './content.art'
import renderLoading from 'components/loading/loading.art'

// 同样只提供方法，在父组件main中调用   用class
class Content {
    // el是destination-content，是为了后边获取到得数据将loading替换掉
    constructor(el) {
        this.el = el

    }

    // 处理tab获取到得数据
    set(data) {
        this.el.innerHTML = render({
            contents: data
        })
    }

    // 当没有获取数据时，显示loading组件
    setLoading() {
        this.el.innerHTML = renderLoading()

    }
}

export default Content