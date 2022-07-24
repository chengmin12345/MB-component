
import { INIT_STATE, CHANGED_STATE } from './config.js'
import DEFAULTS from './defaults'


// scroll为了之后复用，创建一个class，哪里需要哪里引入后再实例化
class Scroll {
    constructor(options, scrollContainer, eventEl = scrollContainer) {

        this.options = Object.assign({}, DEFAULTS, options)

        // 将传入的元素放在this,为了之后的方法使用
        this.scrollContainer = scrollContainer  //滚动条所在的容器
        this.eventEl = eventEl    //监听滚动条的元素


        // 设置初始状态
        this.setState(INIT_STATE)

        // 绑定事件
        this.bindEvent()
    }

    //  设置状态
    setState(state) {
        this.state = state
    }

    // 绑定事件
    bindEvent() {
        //  从options中解构获取change\reset方法
        const { change, reset } = this.options

        this.eventEl.addEventListener('scroll', () => {


            if (this.needChange()) {
                this.setState(CHANGED_STATE)
                if (typeof change === 'function') {
                    // 滚动了，调用改变方法
                    change()
                }

            }

            else if (this.needReset()) {
                // 状态变为默认值
                this.setState(INIT_STATE)

                if (typeof reset === 'function') {
                    reset()
                }

            }
        })
    }


    // 需要变化
    needChange() {
        return this.state !== CHANGED_STATE && this.scrollContainer.scrollTop > this.options.critical_point
    }



    // 需要还原
    needReset() {
        return this.state !== INIT_STATE && this.scrollContainer.scrollTop <= this.options.critical_point
    }

}

export default Scroll