import WhyChooseUs from "../components/WhyChooseUs";
import Hero from "../components/Hero";
import Discount from "../components/Discount";
import FavoriteLeagues from "../components/FavoriteLeagues";
import NewsLetter from "../components/NewsLetter";
import ImageCard from "../components/ImageCard";

const Home = () => {
  return (
    <div>
      <Hero />
      <Discount />
      <div className="space-y-8">
        {/* Image on the Left */}
        <ImageCard
          imageUrl="https://i.ibb.co.com/MBdn1qq/MULTI24-Fall-Winter24-Active-Home-Page-Full-Bleed-Desktop-1440x1270-7049777e-ab15-4dac-a48e-1f1d107d.webp"
          title="Fall winter 2024"
          description="New season, new styles. Give your fan gear a refresh with headwear and apparel from your favorite leagues, including our first NHL collection."
          imageRight={false}
        />

        {/* Image on the Right */}
        <ImageCard
          imageUrl="https://i.ibb.co.com/SdncsgR/NEC-NFL24-Sidelines-Home-Page-frames-Full-Bleed-Desktop-1440x1270-5f782c79-7b3c-4c1d-aff1-ceb54b4999.webp"
          title="NFL sideline"
          description="New season, new style. Freshen up your game day gear with NFL 3rd Down apparel and Official NFL Sideline headwear."
          imageRight={true}
        />
      </div>
      <FavoriteLeagues />
      <NewsLetter />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
