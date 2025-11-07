import { areaSliderData } from "../lib/constants";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

function SliderArea() {
  return (
    <div className="slider-area w-full flex justify-center">
      <Swiper
        autoplay
        spaceBetween={10}
        loop
        slidesPerView={"auto"}
        modules={[Pagination, Navigation, Autoplay]}
        grabCursor={true}
        className="h-[35vh] md:h-[45vh] lg:h-[35vh] w-[80%]"
      >
        {areaSliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              {/* Image */}
              <img
                src={slide.image}
                alt="Différents endroits du parc Régional du Luberon"
                className="absolute inset-0 w-full h-full object-cover brightness-90"
              />

              {/* Dégradé sombre pour lisibilité */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Texte positionné */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold drop-shadow-lg">
                  {slide.title}
                </h3>
                <p className="text-sm sm:text-base text-right font-medium drop-shadow-lg">
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
