"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import Carousel from "./Carousel";
import { toast } from "react-toastify";
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
  email: string;
  productType: string;
  shoppingFrequency: string;
  shopFactor: string;
  interest: string;
  feature: string;
  //selectedFactors: string[];
}

const Survey: React.FC = () => {
  const [email, setEmail] = useState("");
  const [productType, setProductType] = useState<string>("");
  const [shoppingFrequency, setShoppingFrequency] = useState<string>("");
  const [shopFactor, setShopFactor] = useState<string>("");
  const [interest, setInterest] = useState<string>("");
  const [feature, setFeature] = useState<string>("");
  const [selectedFactors, setSelectedFactors] = useState<string[]>([]);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleProductTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setProductType(e.target.value);
  };

  const handleShoppingFrequency = (e: ChangeEvent<HTMLSelectElement>) => {
    setShoppingFrequency(e.target.value);
  };

  const handleShopFactor = (e: ChangeEvent<HTMLSelectElement>) => {
    setShopFactor(e.target.value);
  };

  const handleFeature = (e: ChangeEvent<HTMLInputElement>) => {
    setFeature(e.target.value);
  };

  const handleInterest = (e: ChangeEvent<HTMLSelectElement>) => {
    setInterest(e.target.value);
  };

  const handleFactorChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFactor = e.target.value;

    setSelectedFactors((prevFactors) => {
      if (prevFactors.includes(selectedFactor)) {
        return prevFactors.filter((factor) => factor !== selectedFactor);
      } else {
        return [...prevFactors, selectedFactor];
      }
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: FormData = {
      productType,
      shoppingFrequency,
      //selectedFactors,
      email,
      shopFactor,
      interest,
      feature,
    };
    toast.success("Green gratitude, thank you for your input.")
    // console.log("Form Data", formData);
    // alert(formData);

    const response = await fetch("api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const content = await response.json();

      // Assuming setName is a function to reset the state
    } else {
      // Handle error if the response status is not OK (e.g., response.status !== 200)
      // console.error("Error in form submission");
    }
  };

  return (
    <div id='survey' className="w-full py-6 bg-gray-200">
      <div className="w-full flex flex-col justify-evenly items-center space-y-12">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-8 rounded-lg shadow-md max-w-xl"
        >
          <h2 className="text-2xl font-bold mb-6">Survey Questions</h2>

          <div className="mb-6">
            <label
              htmlFor="product-interest"
              className="block text-gray-700 font-medium mb-2"
            >
              What types of sustainable products are you interested in?
            </label>
            <select
              id="product-interest"
              name="product-interest"
              className="w-full p-2 border border-gray-300 rounded"
              value={productType}
              onChange={handleProductTypeChange}
            >
              <option value="">Select</option>
              <option value="clothing">Clothing</option>
              <option value="home-goods">Home Goods</option>
              <option value="beauty-products">Beauty Products</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-6">
            <label
              htmlFor="shopping-frequency"
              className="block text-gray-700 font-medium mb-2"
            >
              How often do you shop for eco-friendly products?
            </label>
            <select
              id="shopping-frequency"
              name="shopping-frequency"
              className="w-full p-2 border border-gray-300 rounded"
              value={shoppingFrequency}
              onChange={handleShoppingFrequency}
            >
              <option value="">Select</option>
              <option value="rarely">Rarely</option>
              <option value="occasionally">Occasionally</option>
              <option value="regularly">Regularly</option>
            </select>
          </div>

          <div className="mb-6">
            <label
              htmlFor="shoppingFactor"
              className="block text-gray-700 font-medium mb-2"
            >
              What factors are most important to you when choosing sustainable
              products?
            </label>
            <select
              id="shopping-factors"
              name="shopping-factors"
              className="w-full p-2 border border-gray-300 rounded"
              value={shopFactor}
              onChange={handleShopFactor}
            >
              <option value="">Select</option>
              <option value="quality">Quality</option>
              <option value="home-goods">Home Goods</option>
              <option value="beauty-product">Beauty Products</option>
              <option value="gadget">Gadgets</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Would you be interested in receiving updates about our sustainable
              marketplace and its launch? If yes, please provide your email
              address.
            </label>
            <div className="flex items-center">
              <input
                type="email"
                name="email"
                value={email}
                id="email"
                onChange={handleEmailChange}
                className="w-[100%] p-3 border-green-500 rounded-md shadow-md focus:outline-none focus:border-green-700 "
                placeholder="Email"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="interest"
              className="block text-gray-700 font-medium mb-2"
            >
              How likely are you to explore and make a purchase on a marketplace
              dedicated to sustainable living?
            </label>
            <select
              id="interest"
              name="interest"
              className="w-full p-2 border border-gray-300 rounded"
              value={interest}
              onChange={handleInterest}
            >
              <option value="">Select</option>
              <option value="very-unlikely">Very Unlikely</option>
              <option value="unlikely">Unlikely</option>
              <option value="Neutral">Neutral</option>
              <option value="likely">Likely</option>
              <option value="very-likely">Very Likely</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              What specific features or products would make your sustainable
              shopping experience exceptional?
            </label>
            <div className="flex items-center">
              <input
                type="text"
                name="feature"
                value={feature}
                id="feature"
                onChange={handleFeature}
                className="w-[100%] p-3 border-green-500 rounded-md shadow-md focus:outline-none focus:border-green-700 "
                placeholder="Features you like"
              />
            </div>
          </div>

          {/* <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">
              What factors are most important to you when choosing sustainable
              products?
            </label>
            <div className="flex flex-wrap">
              <label className="mr-4">
                <input
                  type="checkbox"
                  name="factors"
                  value="quality"
                  className="mr-2"
                  checked={selectedFactors.includes('quality')}
                  onChange={handleFactorChange}
                />
                Quality
              </label>
              <label className="mr-4">
                <input
                  type="checkbox"
                  name="factors"
                  value="price"
                  className="mr-2"
                  checked={selectedFactors.includes('price')}
                  onChange={handleFactorChange}
                />
                Price
              </label>
              <label className="mr-4">
                <input
                  type="checkbox"
                  name="factors"
                  value="brand-reputation"
                  className="mr-2"
                  checked={selectedFactors.includes('brand-reputation')}
                  onChange={handleFactorChange}
                />
                Brand Reputation
              </label>
              <label>
                <input
                  type="checkbox"
                  name="factors"
                  value="environmental-impact"
                  className="mr-2"
                  checked={selectedFactors.includes('environmental-impact')}
                  onChange={handleFactorChange}
                />
                Environmental Impact
              </label>
            </div>
          </div> */}

          {/* <div>
            <label htmlFor="email"
              className="block text-gray-700 font-bold mb-2">Be the first to know when we launch
              <input type="email" name="email" value={email} id="email" onChange={handleEmailChange} className="font-normal text-black"/>
            </label>
          </div> */}

          <div className="flex items-center justify-center">
          <button className="bg-green-600 text-white py-2 px-4 rounded-md focus:outline-none hover:bg-green-600">
            Submit
          </button>
          </div>
        </form>

        <div className="flex items-center justify-center">
          {/* <Carousel /> */}
          {/* <Image
            src="/show1.webp"
            width={400}
            height={200}
            className="max-w-[700px] h-auto object-cover"
            alt="Ecofriends"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Survey;
