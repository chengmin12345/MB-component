import Backtop from 'components/backtop'

const backtopEl = document.querySelector('.backtop')

const scrollContainer = document.getElementById('destination-content')

// 实例化  传参
new Backtop(backtopEl, scrollContainer.offsetHeight, scrollContainer)
