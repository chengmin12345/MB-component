import './backtop.css'
import 'icons/iconfont.css'



import Scroll from 'utils/scroll'

// 常量存储变色样式
const CHANGE_CLASS_NAME='backtop-hidden'


// 用类  哪个页面使用，哪个实例化
class Backtop{
    constructor(el,critical_point,scrollContainer,eventEl=scrollContainer){

        // 将传入的元素放在this,为了之后的方法使用
        this.el=el
        this.critical_point=critical_point
        this.scrollContainer=scrollContainer  //滚动条所在的容器
        this.eventEl=eventEl    //监听滚动条的元素

        

        // 实例化Scroll
        new Scroll({
            critical_point,
            change:()=>{
                // 当滚动后，调用show方法，backtop显示
                this.show()
            },
            reset:()=>{
                this.hide()
            }
            },
            scrollContainer,
            eventEl)


        // 绑定事件
        this.bindEvent()
    }

    // //  设置状态
    // setState(state){
    //     this.state=state
    // }
    
    // 绑定事件
    bindEvent(){
        
        // 点击backtop返回顶部
        // 设置点击事件
        this.el.addEventListener('click',()=>{
            // 点击后调用方法
            this.scrollTo()
        })

    }
    //  返回顶部
    scrollTo(top=0,left=0){
        this.scrollContainer.scrollTo({
            left,  //x轴
            top,   //y轴
            behavior:'smooth'    //表示滚动行为，支持参数 smooth(平滑滚动),instant(瞬间滚动),默认值 auto
        })
    }  //这一步是啥？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？
    // 答：scrollTo()是window的方法可把内容滚动到指定的坐标,有上边三个参数


    // 显示
    show(){
        this.el.classList.remove(CHANGE_CLASS_NAME)
    }

    
    // 隐藏
    hide(){
        this.el.classList.add(CHANGE_CLASS_NAME)
    }



}


export default Backtop