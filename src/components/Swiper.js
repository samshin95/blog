import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination, Autoplay } from "swiper";
import Lottie from "lottie-react";
import websitemarketing from "./Hero/20578-isometric-website-marketing-design.json";
import designanimation from "./Hero/28857-web-design-animation.json";
import webdesign from "./Hero/84294-web-design-blue.json";
import webdevelopment from "./Hero/127543-web-development.json";

export default function Swiper1() {
  return (
    <Swiper
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: false,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      autoplay={{
        delay: 13000,
        disableOnInteraction: false,
      }}
      pagination={true}
      modules={[EffectCube, Pagination, Autoplay]}
      // loop={true}
      // loopFillGroupWithBlank={true}
      className="mySwiper"
    >
      <SwiperSlide>
        <Lottie animationData={websitemarketing} loop={true} autoPlay={true} />
      </SwiperSlide>
      <SwiperSlide>
        <Lottie animationData={designanimation} loop={true} autoPlay={true} />
      </SwiperSlide>
      <SwiperSlide>
        <Lottie animationData={webdesign} loop={true} autoPlay={true} />
      </SwiperSlide>
      <SwiperSlide>
        <Lottie animationData={webdevelopment} loop={true} autoPlay={true} />
      </SwiperSlide>
    </Swiper>
  );
}
