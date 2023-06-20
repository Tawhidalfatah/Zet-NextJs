import ChooseUs from "@/components/HomePage/ChooseUs";
import DownloadApp from "@/components/HomePage/DownloadApp";

import HeroHome from "@/components/HomePage/HeroHome";
import ProductsOnZet from "@/components/HomePage/ProductsOnZet";
import TheZetEffect from "@/components/HomePage/TheZetEffect";
import TopBrands from "@/components/HomePage/TopBrands";

const HomePage = () => {
  return (
    <main>
      <HeroHome></HeroHome>
      <TopBrands></TopBrands>
      <ProductsOnZet></ProductsOnZet>
      <TheZetEffect></TheZetEffect>
      <ChooseUs></ChooseUs>
      <DownloadApp></DownloadApp>
    </main>
  );
};
export default HomePage;
