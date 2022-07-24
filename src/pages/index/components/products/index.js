import './products.css'

import {URL,PRODUCT_LAYOUT_CLASS } from './config'

import {getData, getDelayedData}from 'api/getData'
import render from './items.art'

// 获取元素
const productLayout=document.querySelector(PRODUCT_LAYOUT_CLASS)

// 发送请求数据
getData(URL).then(data=>{
    // console.log(data);
    // 获取到的数据替换loading
    productLayout.innerHTML = render ({
        items:data
    })

})