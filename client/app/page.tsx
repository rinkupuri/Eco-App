import Navbar from "@/Components/Header/Navbar";
import Hero from "@/Components/Hero/Hero";
import Categories from "@/Components/Categories/Categories";
import FeaturedProduct from "@/Components/FeaturedProduct/FeaturedProduct";
import Brands from "@/Components/Brands/Brands";
import Layouts from "@/Layout/Layouts";

export default function Home() {
  return (
    <Layouts>
      <Hero />
      <Categories />
      <FeaturedProduct />
      <Brands />
    </Layouts>
  );
}
