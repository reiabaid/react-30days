import React from "react";
import ProductCard from "./Components/ProductCard";
import "./App.css";
import polaroidImg from './img/polaroid.jpg';
import instaxImg from './img/fuji.jpg';
import gameboyImg from './img/color_boy.jpg';


function App() {
  const products = [
    {
      name: "Polaroid Now+",
      price: 12499,
      image: polaroidImg,
      description: "Instant Camera with Bluetooth and creative filters"
    },
    {
      name: "Fujifilm Instax Mini 12",
      price: 7999,
      image: instaxImg,
      description: "Iconic instant photos, pastel design, selfie mode"
    },
    {
      name: "Game Boy Color",
      price: 9999,
      image: gameboyImg,
      description: "Retro handheld console — nostalgia in a box"
    }
  ];

  return (
    <div className="site-background">
      <h1 className="main-heading"> Pixel Shop </h1>
      <div className="product-list">
        {products.map((product, i) => (
          <ProductCard
            key={i}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
