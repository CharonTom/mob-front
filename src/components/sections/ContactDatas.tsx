import lavande from "../../assets/images/lavande.jpg";
import Map from "../Map";

function Contact() {
  return (
    <section>
      {/* image pleine largeur */}
      <div className="relative w-screen h-[280px] sm:h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={lavande}
          alt="Bannière de contact"
          className="w-full h-full object-cover brightness-75"
        />
        <h1 className="absolute text-white bottom-[8%] left-[3%] text-4xl md:text-5xl lg:text-6xl [text-shadow:_3px_3px_3px_rgb(0_0_0_/_70%)]">
          Contactez-nous.
        </h1>
      </div>

      {/* texte */}
      <div className="p-4 py-6 md:py-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        <h2 className="text-center mb-6 md:mb-12">
          Besoin d’informations supplémentaires ?
        </h2>
        <p className="text-center md:w-[80%] mx-auto">
          N&apos;hésitez pas à nous contacter si vous avez la moindre question
          ou demande.
          <br /> Vous trouverez ci-dessous nos coordonnées :
        </p>
      </div>

      {/* liens */}
      <nav className="links-list w-full">
        <ul className="text-gray-500 text-xl w-fit text-center mx-auto sm:text-2xl md:text-3xl lg:text-4xl">
          <li>
            <a href="tel:+33610361338" className="p-1 block">
              <span>
                Mathias :{" "}
                <span className="text-orange-500">06.10.36.13.38</span>
              </span>
            </a>
          </li>
          <li>
            <a href="mailto:nathrobion@gmail.com" className="p-1 block">
              <span>mathias@gmail.com</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* carte */}
      <div className="p-2 w-full mx-auto h-[300px] md:h-[500px] mt-4 md:mt-10 mb-16 md:mb-20">
        <Map />
      </div>
    </section>
  );
}

export default Contact;
