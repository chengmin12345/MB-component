import './main.css'

import Tab from '../tab'
import Content from '../content'

import 'components/loading'

import { set, get } from 'utils/sessionStorage'



const tabEl = document.querySelector('.tab')

const contentEl = document.getElementById('destination-content')

const itemEls = tabEl.querySelectorAll('.tab-item')

// 实例化，传参
const tab = new Tab(tabEl)

const content = new Content(contentEl)


// // 方法一
// // 给每一个li绑定点击事件，循环
// for (const itemEl of itemEls){
//     itemEl.addEventListener('click',()=>{

//         // 获取索引
//         const index=itemEl.dataset.id-1
//         tab.to(index)

//     })
// }


// 方法二：事件委托（利用事件冒泡原理）
// 给父元素设置点击事件
tabEl.addEventListener('click', (ev) => {
    // ev.target  //点击的子元素
    const itemEl = ev.target

    // 判断点击的是否为tab-item
    if (itemEl.classList.contains('tab-item')) {

        const index = itemEl.dataset.id - 1


        // 存储的键名
        const storageName = `destination_content_${index}`
        // 存储的值
        const storageContent = get(storageName)
        // 判断是否有缓存
        if (storageContent) {
            //有缓存，不需要发送请求，只需把缓存的数据渲染到content中即可
            tab.setActiveItem(index)
            content.set(storageContent)
        }
        // 没缓存，需要发送请求
        else {
            // to()返回的是promise对象
            const tabPromise = tab.to(index)

            //加载下一张页面时，先把上一张页面内容清掉，换成loading组件 
            content.setLoading()

            tabPromise.then(data => {
                content.set(data)
                // 将得到的数据保存,键值对
                set(storageName, data)
            })

        }

    }


})


// 刷新页面，默认第一个高亮
itemEls[0].click()





// tab.to(1).then(data=>{
//     content.set(data)
// })

// tab.setActiveItem(5)
// tab.to(2)