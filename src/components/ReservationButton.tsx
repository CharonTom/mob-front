function ReservationButton() {
  return (
    <button className="md:block w-[230px] lg:w-[350px] bg-white rounded-full p-2 book-button learn-more ">
      <span className="circle bg-orange-500 rounded-full" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <p className="book-button-text absolute top-0 bottom-0 right-0 left-0 flex-center ml-8 text-black  text-base lg:text-xl">
        Réservez une Mobylette
      </p>
    </button>
  );
}

export default ReservationButton;
