import HeroHome from "@/components/HomePage/HeroHome";
import ProductsOnZet from "@/components/HomePage/ProductsOnZet";
import TopBrands from "@/components/HomePage/TopBrands";

const HomePage = () => {
  return (
    <main>
      {/* Hero section */}
      <HeroHome></HeroHome>
      <TopBrands></TopBrands>
      <ProductsOnZet></ProductsOnZet>
    </main>
  );
};
export default HomePage;
