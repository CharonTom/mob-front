import SliderArea from "../components/SliderArea";

function Around() {
  return (
    <section className="p-1 md:p-2 mx-auto md:py-8">
      <h2 className="text-center my-6 sm:p-6 text-3xl md:text-4xl lg:text-5xl mx-auto md:w-[80%]">
        Ce que vous allez adorer dans la région
      </h2>
      <SliderArea />
    </section>
  );
}

export default Around;
