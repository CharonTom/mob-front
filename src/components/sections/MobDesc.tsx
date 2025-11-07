import { BsLightningCharge } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { mobsData } from "../../lib/constants";
import "swiper/css";
import "swiper/css/navigation";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const MobDesc = () => {
  return (
    <section className="h-auto py-4 md:py-8">
      <h2 className="text-center my-4 md:my-6 text-2xl md:text-3xl lg:text-4xl p-4 font-bold">
        Nos différentes Mobs
      </h2>

      <div className="w-full max-w-4xl mx-auto px-4">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-mob",
            prevEl: ".swiper-button-prev-mob",
          }}
          loop
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              spaceBetween: 20,
            },
            768: {
              spaceBetween: 25,
            },
            1024: {
              spaceBetween: 30,
            },
          }}
          className="relative"
        >
          {mobsData.map((mob) => (
            <SwiperSlide key={mob.id}>
              <div className="w-full h-auto min-h-[400px] md:h-[500px] flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-1">
                {/* Image Container - Taille originale préservée */}
                <div className="w-full lg:w-[400px] h-[300px] md:h-full rounded-xl flex items-center justify-center text-white text-2xl relative">
                  <img
                    src={mob.image}
                    alt={`Mobylette ${mob.type}`}
                    className="w-[350px] h-auto rounded-xl object-cover"
                  />
                </div>

                {/* Description Container */}
                <div className="lg:w-[300px] h-auto min-h-[400px] md:h-full rounded-xl p-4 md:p-6 flex flex-col items-center bg-orange-50 border border-orange-800">
                  <div className="bg-orange-500 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-3 md:mb-4">
                    {mob.iconType === "electric" && (
                      <BsLightningCharge className="text-white text-xl md:text-2xl lg:text-3xl" />
                    )}
                    {mob.iconType === "fire" && (
                      <AiOutlineFire className="text-white text-xl md:text-2xl lg:text-3xl" />
                    )}
                  </div>

                  <h3 className="text-center font-bold text-lg md:text-xl mb-6 md:mb-12">
                    {mob.type}
                    <br />
                    {mob.price} /{" "}
                    <span className="text-xs md:text-sm font-medium">
                      {mob.duration}
                    </span>
                  </h3>

                  <div className="text-gray-800 space-y-1 md:space-y-2 text-sm md:text-base w-full flex-grow">
                    {mob.features.map((feature, index) => (
                      <p key={index} className="flex items-start">
                        <span className="text-orange-500 mr-2 mt-1">▸</span>
                        <span className="flex-1">{feature}</span>
                      </p>
                    ))}
                  </div>

                  <button
                    className={`${mob.buttonColor} text-white py-2 px-4 rounded-xl mt-6 md:mt-8 w-full max-w-[200px] text-sm md:text-base hover:bg-orange-600 transition-colors`}
                  >
                    Réserver votre balade
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Buttons - Toujours visibles */}
          <FaAngleLeft className="swiper-button-prev-mob -translate-y-1/2 z-20 text-3xl md:text-[40px] text-orange-500 absolute top-1/2 left-2 md:left-5 cursor-pointer hover:text-orange-600 transition-colors" />
          <FaAngleRight className="swiper-button-next-mob -translate-y-1/2 z-20 text-3xl md:text-[40px] text-orange-500 absolute top-1/2 right-2 md:right-5 cursor-pointer hover:text-orange-600 transition-colors" />
        </Swiper>
      </div>
    </section>
  );
};

export default MobDesc;
