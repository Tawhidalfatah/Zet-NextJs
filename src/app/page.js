import ChooseUs from "@/components/HomePage/ChooseUs";
import HeroHome from "@/components/HomePage/HeroHome";
import ProductsOnZet from "@/components/HomePage/ProductsOnZet";
import TheZetEffect from "@/components/HomePage/TheZetEffect";
import TopBrands from "@/components/HomePage/TopBrands";

const HomePage = () => {
  return (
    <main>
      {/* Hero section */}
      <HeroHome></HeroHome>
      <TopBrands></TopBrands>
      <ProductsOnZet></ProductsOnZet>
      <TheZetEffect></TheZetEffect>
      <ChooseUs></ChooseUs>
    </main>
  );
};
export default HomePage;
