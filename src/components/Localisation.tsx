import Map from "./Map";

function Localisation() {
  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 bg-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Partie carte */}
          <div className="w-full lg:w-2/5">
            <div className="h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
              <Map />
            </div>
          </div>
          {/* Partie texte */}
          <div className="w-full lg:w-2/5 space-y-6 border-l-3 border-orange-500 pl-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Où nous trouver
            </h2>

            <div className="space-y-4 text-gray-700">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  Notre agence
                </h3>
                <p className="text-base leading-relaxed">
                  12 Rue de la République
                  <br />
                  84800 L'Isle-sur-la-Sorgue
                  <br />
                  Vaucluse, Provence-Alpes-Côte d'Azur
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  Horaires
                </h3>
                <div className="text-base space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Lundi - Vendredi :</span>
                    <span>9h - 19h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Samedi - Dimanche :</span>
                    <span>9h - 20h</span>
                  </div>
                  <div className="text-sm text-orange-600 font-medium mt-3">
                    * Ouvert tous les jours en haute saison (avril à octobre)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Localisation;
