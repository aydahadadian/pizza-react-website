import { useState } from "react";
import Feature from "../Components/Feature/Feature";
import Hero from "../Components/Hero/Hero";
import Products from "../Components/Products/Products";
import { productData, productDataTwo } from "../data";
import FeaturePicTwo from '../images/featured2.jpg';
import FeaturePic from '../images/featured3.jpg';

const Home = () => {
  const [cart, setCart] = useState(false)

  return (
    <>
        <Hero cart={cart} setCart={setCart} />
          <Products data={productData} title="Papular items" setCart={setCart} />
          <Feature pic={FeaturePic}/>
          <Products data={productDataTwo} title="New on Menu" setCart={setCart} />
          <Feature pic={FeaturePicTwo} />
    </>
  )
}

export default Home