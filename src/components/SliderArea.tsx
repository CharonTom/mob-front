import { areaSliderData } from "../lib/constants";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

function SliderArea() {
  return (
    <div className="slider-area w-full">
      <Swiper
        autoplay
        spaceBetween={10}
        loop
        slidesPerView={"auto"}
        modules={[Pagination, Navigation, Autoplay]}
        grabCursor={true}
        className="h-[35vh] md:h-[45vh] lg:h-[55vh] w-[80%]"
      >
        {areaSliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <img
                src={slide.image}
                alt="Différents endroits du parc Régional du Luberon"
                className="absolute inset-0 w-full h-[80%] object-cover brightness-90"
              />

              <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
                <h3 className="text-xl sm:text-2xl md:text-3xl drop-shadow-lg">
                  {slide.title}
                </h3>
                <p className="text-sm sm:text-base text-right drop-shadow-lg">
                  {slide.localisation}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderArea;
