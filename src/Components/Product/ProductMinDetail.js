"use client";
import React, { useRef, useState } from "react";
import DetailTabs from "@/Components/Product/DetailTabs";
import { Rating, ToggleButton } from "@mui/material";
import PaymentInititate from "../Payment/PaymentInititate";

import SavedButton from "./SavedButton";
const ProductMinDetail = ({
  thumbnail,
  title,
  description,
  comAtPrice,
  price,
  productID,
  artical,
  id,
  images,
}) => {
  return (
    <section className="  grid grid-cols-1  ">
      {/* short description  */}
      <div className="bg-white ">
        <div className="w-full mx-auto flex md:flex-row flex-col gap-5 ">
          <div className="lg:w-1/2 m-5 grid place-items-center border p-5  lg:h-auto ">
            <img
              alt="ecommerce"
              className="object-cover object-center  rounded"
              src={thumbnail}
            />
            {/* <ImagesSlideShow slideImages={images} /> */}
          </div>
          <div className="lg:w-1/2 p-5 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {title}
            </h1>
            <div className="flex mb-4 border-b-2 pb-2 border-gray-100">
              <span className="flex items-center">
                <Rating name="read-only" value={3} readOnly />
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <div className="leading-relaxed text-justify">{description}</div>
            <div className="flex mt-6 items-center pb-5 md:border-b-2 border-gray-100 mb-5" />

            <div className=" md:relative md:z-auto   z-40 md:border-none rounded-t-3xl border fixed w-full md:bottom-auto md:left-auto md:right-auto md:p-0 bottom-0 left-0 right-0   bg-white p-5">
              <div className="flex container m-auto">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ₹{price}{" "}
                  <strike className="text-xs ml-2 text-gray-500 ">
                    ₹{comAtPrice}
                  </strike>
                </span>

                <PaymentInititate
                  title={title}
                  amount={price}
                  produDID={productID}
                  productDetailID={id}
                />
                <SavedButton
                  styleicon="text-lg"
                  style="p-1 rounded-sm w-10 h-10 grid place-items-center  border"
                  productID={id}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* All Detail Section  */}
      <div className="p-5 bg-white mt-5 ">
        <DetailTabs
          artical={artical}
          title={title}
          images={images}
          productID={id}
        />
      </div>{" "}
      {/* Reccomended Products  */}
      <div className="p-5 bg-white mt-5">
        <div className=" flex justify-between  font-bold text-gray-900 ">
          <span>Recommended Products</span>
          <button className="pColor" >See All </button>
        </div>
      </div>
    </section>
  );
};

export default ProductMinDetail;
