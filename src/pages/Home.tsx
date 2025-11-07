import Around from "../components/sections/Around";
import Banner from "../components/sections/Banner";
import Localisation from "../components/Localisation";
import MobDesc from "../components/sections/MobDesc";

const Home = () => {
  return (
    <main>
      <Banner />
      <MobDesc />
      <Around />
      <Localisation />
    </main>
  );
};

export default Home;
