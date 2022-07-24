import Backtop from 'components/backtop'


const scrollContainer=document.getElementById('index-page')
const headerEl=scrollContainer.querySelector('.backtop')

// 实例化、传参
new Backtop(headerEl,window.innerHeight,scrollContainer)