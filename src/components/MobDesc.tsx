import { BsLightningCharge } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { mobsData } from "../lib/constants";

import "swiper/css";
import "swiper/css/navigation";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const MobDesc = () => {
  return (
    <section className="h-auto py-8">
      <div className="text-4xl p-6">
        <h2 className="">Nos Mobs</h2>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-mob",
            prevEl: ".swiper-button-prev-mob",
          }}
          loop
          spaceBetween={30}
          slidesPerView={1}
          className="relative"
        >
          {mobsData.map((mob) => (
            <SwiperSlide key={mob.id}>
              <div className="w-full h-[500px] flex justify-center items-center gap-1">
                {/* Image Container */}
                <div className=" w-[400px] h-full rounded-xl flex items-center justify-center text-white text-2xl relative">
                  <img
                    src={mob.image}
                    alt={`Mobylette ${mob.type}`}
                    className="w-[350px] h-auto rounded-xl object-cover"
                  />
                </div>

                {/* Description Container */}
                <div className=" w-[300px] h-full rounded-xl p-6 flex flex-col items-center bg-orange-50 border border-orange-800">
                  <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    {mob.iconType === "electric" && (
                      <BsLightningCharge className="text-white text-3xl" />
                    )}
                    {mob.iconType === "fire" && (
                      <AiOutlineFire className="text-white text-3xl" />
                    )}
                  </div>

                  <h3 className="text-center font-bold text-xl mb-12">
                    {mob.type}
                    <br />
                    {mob.price} /{" "}
                    <span className="text-sm font-medium">{mob.duration}</span>
                  </h3>

                  <div className="text-gray-800 space-y-2">
                    {mob.features.map((feature, index) => (
                      <p key={index}>
                        <span className="text-orange-500">▸</span>
                        {feature}
                      </p>
                    ))}
                  </div>

                  <button
                    className={`${mob.buttonColor} text-white py-2 px-3 rounded-xl mt-8 hover:bg-orange-600 transition-colors`}
                  >
                    Réserver votre balade
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Buttons*/}
          <FaAngleLeft className="swiper-button-prev-mob -translate-y-1/2 z-20 text-[40px] text-orange-500 absolute top-1/2 left-5 cursor-pointer hover:text-orange-600 transition-colors" />
          <FaAngleRight className="swiper-button-next-mob -translate-y-1/2 z-20 text-[40px] text-orange-500 absolute top-[50%] right-5 cursor-pointer hover:text-orange-600 transition-colors" />
        </Swiper>
      </div>
    </section>
  );
};

export default MobDesc;
