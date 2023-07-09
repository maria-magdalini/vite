
import React from 'react'
// core version + navigation, pagination modules:
import {Swiper,SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



function Carousel() {
   
   
    
  return (
    
   
      <Swiper
      className='bg-white h-[50vh]'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className=' '><img className='object-center h-full w-full sm:object-scale-down  object-cover ' src='src\assets\images\1.jpg'/></SwiperSlide>
      <SwiperSlide className=' '><img className='object-center h-full w-full sm:object-scale-down object-cover' src='src\assets\images\2.jpg'/></SwiperSlide>
      <SwiperSlide className=' '><img className='object-center h-full w-full sm:object-scale-down object-cover' src='src\assets\images\3.jpg'/></SwiperSlide>
      <SwiperSlide className=' '><img className='object-center h-full w-full sm:object-scale-down object-cover' src='src\assets\images\4.jpg'/></SwiperSlide>
      ...
    </Swiper>
    
    
    
    

  )
}

export default Carousel