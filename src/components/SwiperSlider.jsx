import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

import "swiper/css";

function SwiperSlider({ img1, img2, img3 }) {
  return (
    <div className="swiper-slider page-container">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={1}
      >
        {img1 && (
          <SwiperSlide>
            <div className="swiper-slider__image-container">
              <img
                src={img1}
                alt=""
              />
            </div>
          </SwiperSlide>
        )}
        {img2 && (
          <SwiperSlide>
            <div className="swiper-slider__image-container">
              <img
                src={img2}
                alt=""
              />
            </div>
          </SwiperSlide>
        )}
        {img3 && (
          <SwiperSlide>
            <div className="swiper-slider__image-container">
              <img
                src={img3}
                alt=""
              />
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}

export default SwiperSlider;
