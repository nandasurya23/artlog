import Best_Seller from "./product/Best_Seller";
import Hero_Section_Shop from "./shop/Hero_Section_Shop";
import More_Product from "./shop/More_Product";
import Product_Suggestion from "./shop/Product_Suggestion";

export default function Shop() {
  return (
    <>
      <Hero_Section_Shop />
      <Best_Seller />
      <More_Product />
      <Product_Suggestion />
    </>
  );
}
