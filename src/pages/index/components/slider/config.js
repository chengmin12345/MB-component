// swiper配置
export default {

    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    
    // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // }

}

const SWIPER_CONTAINER_CLASS='.swiper-container'

const URL='https://www.imooc.com/api/mall-wepApp/index/slider'

const SLIDER_LAYOUT_ID='index-slider'

export {SWIPER_CONTAINER_CLASS,URL,SLIDER_LAYOUT_ID}
