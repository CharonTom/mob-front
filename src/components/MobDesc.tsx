import React from "react";
import { BsLightningCharge, BsFuelPump } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import mobelec from "../assets/mob-elec.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// Importez votre image thermique si vous en avez une
// import mobtherm from "../assets/mob-therm.jpg";

const MobDesc = () => {
  const mobsData = [
    {
      id: 1,
      type: "Electrique Classique",
      price: "35€",
      duration: "2h",
      icon: <BsLightningCharge className="text-white text-3xl" />,
      image: mobelec,
      features: [
        "▸ Moteur électrique silencieux",
        "▸ Design rétro authentique",
        "▸ Autonomie 50 km",
      ],
      bgColor: "bg-amber-100",
      buttonColor: "bg-orange-500",
    },
    {
      id: 2,
      type: "Thermique",
      price: "65€",
      duration: "journée",
      icon: <BsFuelPump className="text-white text-3xl" />,
      image: mobelec, // Remplacez par votre image thermique
      features: [
        "▸ Expérience vintage authentique",
        "▸ Son caractéristique",
        "▸ Disponible toute la journée",
      ],
      bgColor: "bg-amber-100",
      buttonColor: "bg-orange-500",
    },
  ];

  return (
    <section className="h-auto py-8">
      <h2 className="text-xl p-6">Nos Mobs</h2>

      <div className="w-full max-w-4xl mx-auto px-4">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop
          spaceBetween={30}
          slidesPerView={1}
          className="relative"
        >
          {mobsData.map((mob) => (
            <SwiperSlide key={mob.id}>
              <div className="w-full h-[500px] flex justify-center items-center gap-6">
                {/* Image Container */}
                <div className="bg-amber-600 w-[400px] h-full rounded-xl flex items-center justify-center text-white text-2xl relative">
                  <img
                    src={mob.image}
                    alt={`Mobylette ${mob.type}`}
                    className="w-[350px] h-auto rounded-xl object-cover"
                  />
                </div>

                {/* Description Container */}
                <div
                  className={`${mob.bgColor} w-[300px] h-full rounded-xl p-6 flex flex-col items-center`}
                >
                  <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    {mob.icon}
                  </div>

                  <h3 className="text-center font-bold text-xl mb-3">
                    {mob.type}
                    <br />
                    {mob.price} /{" "}
                    <span className="text-sm font-medium">{mob.duration}</span>
                  </h3>

                  <div className="text-gray-800 space-y-2">
                    {mob.features.map((feature, index) => (
                      <p key={index}>{feature}</p>
                    ))}
                  </div>

                  <button
                    className={`${mob.buttonColor} text-white p-2 rounded-xl mt-8 hover:bg-orange-600 transition-colors`}
                  >
                    Réserver votre balade
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Buttons - Vrais chevrons */}
          <FaAngleLeft className="swiper-button-prev -translate-y-1/2 z-20 text-[40px] text-orange-500 absolute top-1/2 -left-5 cursor-pointer" />
          <FaAngleRight className="swiper-button-next -translate-y-1/2 z-20 text-[40px] text-orange-500 absolute top-[50%] -right-5 cursor-pointer" />
        </Swiper>
      </div>
    </section>
  );
};

export default MobDesc;
