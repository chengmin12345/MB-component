import 'swiper/swiper-bundle.min.css'

import './slider.css'

import Swiper from 'swiper/swiper-bundle.min'

import config ,{SWIPER_CONTAINER_CLASS,URL,SLIDER_LAYOUT_ID} from './config'




import render from './slider.art'
import {getData, getDelayedData}from 'api/getData'
//获取元素
const sliderLayout=document.getElementById(SLIDER_LAYOUT_ID)

// 发送数据请求
getData(URL).then(data=>{
    // console.log(data);
    // 将获取的数据替换loading部分
    sliderLayout.innerHTML=render({
        ...config,
        ... {imgs:data}
    })
    
    // 获取完数据有了幻灯片结构后    才能实例化，传参
    new Swiper(SWIPER_CONTAINER_CLASS,config)
})