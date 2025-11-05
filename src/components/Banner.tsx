import React from "react";
import banner from "../assets/banner.jpg";
import ReservationButton from "../components/ReservationButton";

const Banner = () => {
  return (
    <section className="relative h-[50vh]">
      <img src={banner} alt="Banner" className="w-full h-full object-cover" />
      <div className="mx-4 md:mx-8 lg:mx-14 absolute top-[16%] md:top-1/2 md:-translate-y-1/2 w-[75%] md:w-[65%]">
        <h1 className="text-white leading-tight tracking-tight [text-shadow:_3px_3px_3px_rgb(0_0_0_/_70%)] lg:text-[58px] md:text-[58px] sm:text-[38px] text-[30px]">
          Offrez vous une balade au coeur du pays des Sorgues
        </h1>
      </div>
      <div className="absolute bottom-10 right-0 mx-4 md:mx-8 lg:mx-14">
        <ReservationButton />
      </div>
    </section>
  );
};

export default Banner;
