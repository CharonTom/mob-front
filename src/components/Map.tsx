import { FaLocationDot } from "react-icons/fa6";

function Map() {
  return (
    <div className="w-full h-full">
      <iframe
        title="Localisation de notre agence"
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.347238128372!2d5.049851276698482!3d43.91907137101682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ca5d89c6c2c6b1%3A0x5f5e8b3b9e9e9e9e!2s12%20Rue%20de%20la%20R%C3%A9publique%2C%2084800%20L'Isle-sur-la-Sorgue!5e0!3m2!1sfr!2sfr!4v1704899372899!5m2!1sfr!2sfr`}
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-xl border-0"
        allowFullScreen
      ></iframe>
      <div className="text-center text-base mt-4 text-gray-800 flex items-center justify-center gap-2">
        <FaLocationDot className="text-red-500" />
        <div>12 Rue de la République, 84800 L'Isle-sur-la-Sorgue</div>
      </div>
    </div>
  );
}

export default Map;
