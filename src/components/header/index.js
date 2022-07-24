import './header.css'

import Scroll from '../../utils/scroll'


// ！！！！！！！！！！！思路！！！！！！！！！！！！

// // 常量存储变色样式
// const CHANGE_CLASS_NAME='header-transition'

// // 设置状态来控制代码多次被执行
// const INIT_STATE='init'
// const CHANGED_STATE='changed'
// let state= INIT_STATE  //默认状态是不变的

// // 实现头部变色功能思路：当滚动条滚动时，头部变色
// // 1、要监听滚动条

// // 获取滚动条(在页面上）和header元素
// const scrollContainer=document.getElementById('index-page')
// const headerEl=scrollContainer.querySelector('.header')

// // 设置滚动监听
// scrollContainer.addEventListener('scroll',()=>{

//     // 2、判断是否滚动了（状态没变的情况下）
//     if(state!==CHANGED_STATE && scrollContainer.scrollTop>0){
//         // 状态改变
//         state=CHANGED_STATE
//         // 滚动了，header变色(设置了变色样式)
//         console.log('change');
//         headerEl.classList.add(CHANGE_CLASS_NAME)
//     }
//     // 判断状态是否是初始，不是且滚动到页面顶部，还原
//     else if(state!==INIT_STATE && scrollContainer.scrollTop<=0){
//         // 状态变为默认值
//         state=INIT_STATE
//         // 变色还原
//         console.log('reset');
//         headerEl.classList.remove(CHANGE_CLASS_NAME)

//     }
// })



// 常量存储变色样式
const CHANGE_CLASS_NAME='header-transition'


// header为了之后复用，创建一个class，哪里需要哪里引入后再实例化
class Header{
    constructor(el,critical_point,scrollContainer,eventEl=scrollContainer){
        // 将传入的元素放在this,为了之后的方法使用
        this.el=el


        new Scroll({
            critical_point,
            change:()=>{
                this.change()
            },
            reset:()=>{
                this.reset()
            }
            },
            scrollContainer,
            eventEl)

    }

    // 改变
    change(){
        this.el.classList.add(CHANGE_CLASS_NAME)
    }


    // 还原
    reset(){
        this.el.classList.remove(CHANGE_CLASS_NAME)
    }
}

export default Header