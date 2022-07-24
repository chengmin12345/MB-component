// import 'components/header'

// 将searchbox引入
import 'components/searchbox'


// 首页需要header,先引入再实例化
import Header from 'components/header'

// 获取滚动条(在页面上）和header元素
const scrollContainer=document.getElementById('index-page')
const headerEl=scrollContainer.querySelector('.header')

// 实例化、传参
new Header(headerEl,0,scrollContainer)