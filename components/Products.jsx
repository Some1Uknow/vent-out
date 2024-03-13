import Image from "next/image";
import React from "react";
import { IoCart } from "react-icons/io5";

const Products = () => {
  return (
    <div className="flex flex-col shadow-md rounded-lg p-3 m-4 mb-8 justify-around gap-2 bg-white">
      <span className="text-5xl font-bold">Introducing VentOut Goodies!</span>
      <span className="text-xl">
        Discover a collection of VentOut-branded clothing and stress-relieving
        toys and gadgets, designed to help you unwind and elevate your mental
        well-being.
      </span>
      <div className="grid grid-cols-4 gap-4 h-max">
        <ProductCard
          name="VentOut t-Shirt (pink)"
          price="₹299"
          imgSrc="/tshirt1.png"
        />
        <ProductCard
          name="VentOut t-Shirt (blue)"
          price="₹299"
          imgSrc="/tshirt2.png"
        />
        <ProductCard name="You are Not alone (Limited Edition)" price="₹399" imgSrc="/tshirt3.png" />
        <ProductCard
          name="Be Kind to your Mind"
          price="₹399"
          imgSrc="/tshirt4.png"
        />
        <ProductCard name="HOPE T-shirt" price="₹399" imgSrc="/1.png" />
        <ProductCard name="Self Love club" price="₹399" imgSrc="/2.png" />
        <ProductCard name="Just keep moving forward" price="₹399" imgSrc="/3.png" />
        <ProductCard name="Believe in yourself" price="₹399" imgSrc="/4.png" />
      </div>
    </div>
  );
};

export default Products;

const ProductCard = ({ name, price, imgSrc }) => {
  return (
    <div className="flex flex-col shadow-md rounded-lg m-2 ml-0 bg-white w-9/10 p-4 border-t">
      <Image
        src={imgSrc}
        width={180}
        height={180}
        className="mb-2 rounded-md shadow-md h-40 object-contain w-38"
      />
      <p>{name} </p>
      <p className="flex flex-row">
        Size:
        <div className="flex text-xs">
          <div className="flex items-center">
            <input
              id="small"
              type="checkbox"
              name="size"
              value="small"
              className="form-checkbox h-4 w-4 text-gray-600 transition duration-150 ease-in-out ml-1"
            />
            <label htmlFor="small" className="ml-1 mr-1">
              SM
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="medium"
              type="checkbox"
              name="size"
              value="medium"
              className="form-checkbox h-4 w-4 text-gray-600 transition duration-150 ease-in-out"
            />
            <label htmlFor="medium" className="ml-1 mr-1">
              MD
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="large"
              type="checkbox"
              name="size"
              value="large"
              className="form-checkbox h-4 w-4 text-gray-600 transition duration-150 ease-in-out"
            />
            <label htmlFor="large" className="ml-1 mr-1">
              LG
            </label>
          </div>
        </div>
      </p>
      <div className="flex flex-row justify-between items-center mt-1 text-2xl">
        {price}{" "}
        <button className="flex flex-row items-center bg-green-400 shadow-md rounded-md p-1 text-sm">
          Buy Now <IoCart />
        </button>
      </div>
    </div>
  );
};
