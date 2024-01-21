import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./slider.scss"

function Sldier() {
    return (
        <div>
            <div id="slider">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    className='swiper'
                >
                    <div className="container">
                        <SwiperSlide className='card'>
                            <img src="https://preview.colorlib.com/theme/wines/images/person_1.jpg.webp" alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, vitae esse, quia ipsa dicta illo dolorum autem in aliquid adipisci deserunt, expedita placeat dolor dolores! Veniam alias repellendus illum sequi itaque odit repudiandae totam blanditiis?</p>
                            <h4>-Abbasov Malik</h4>
                        </SwiperSlide>
                        <SwiperSlide className='card'>
                            <img src="https://preview.colorlib.com/theme/wines/images/person_1.jpg.webp" alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, vitae esse, quia ipsa dicta illo dolorum autem in aliquid adipisci deserunt, expedita placeat dolor dolores! Veniam alias repellendus illum sequi itaque odit repudiandae totam blanditiis?</p>
                            <h4>-Aliyev Iman</h4>
                        </SwiperSlide>
                        <SwiperSlide className='card'>
                            <img src="https://preview.colorlib.com/theme/wines/images/person_1.jpg.webp" alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, vitae esse, quia ipsa dicta illo dolorum autem in aliquid adipisci deserunt, expedita placeat dolor dolores! Veniam alias repellendus illum sequi itaque odit repudiandae totam blanditiis?</p>
                            <h4>-Seyfullayev Elcan</h4>
                        </SwiperSlide>
                        <SwiperSlide className='card'>
                            <img src="https://preview.colorlib.com/theme/wines/images/person_1.jpg.webp" alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, vitae esse, quia ipsa dicta illo dolorum autem in aliquid adipisci deserunt, expedita placeat dolor dolores! Veniam alias repellendus illum sequi itaque odit repudiandae totam blanditiis?</p>
                            <h4>-Collin Miller</h4>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </div>
    )
}

export default Sldier