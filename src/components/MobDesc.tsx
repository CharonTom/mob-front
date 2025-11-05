import React from "react";
import { BsLightningCharge } from "react-icons/bs";
import mobelec from "../assets/mob-elec.jpg";

const MobDesc = () => {
  return (
    <section className="h-[5000px]">
      <h2 className="text-xl p-6">Nos Mobs</h2>
      <div className="w-full h-[500px] flex justify-center items-center gap-6">
        <div className="bg-amber-600 w-[400px] h-full rounded-xl flex items-center justify-center text-white text-2xl">
          <img
            src={mobelec}
            alt="Mobylette Electrique"
            className="w-[350px] h-auto rounded-xl"
          />
        </div>

        <div className="bg-amber-100 w-[300px] h-full rounded-xl p-6 flex flex-col items-center">
          <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <BsLightningCharge className="text-white text-3xl" />
          </div>

          <h3 className="text-center font-bold text-xl mb-3">
            Electrique Classique <br />
            35€ / <span className="text-sm font-medium">2h</span>
          </h3>

          <div className="text-gray-800">
            <p>▸ Moteur électrique silencieux</p>
            <p>▸ Design rétro authentique</p>
            <p>▸ Autonomie 50 km</p>
          </div>
          <button className="bg-orange-500 text-white p-2 rounded-xl mt-8">
            Réserver votre balade
          </button>
        </div>
      </div>
    </section>
  );
};

export default MobDesc;
