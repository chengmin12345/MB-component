import './nav.css'

import {URL,NAV_LAYOUT_ID} from './config'


import {getData, getDelayedData}from 'api/getData'
import render from './nav.art'

// 获取元素
const navLayout=document.getElementById(NAV_LAYOUT_ID)

// 发送数据请求
getData(URL).then(data=>{
    // console.log(data);

    // 获取到的数据替换loading
    navLayout.innerHTML=render({
        items:data
    })
})