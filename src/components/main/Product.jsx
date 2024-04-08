"use client";
import { Suspense, useEffect, useState } from "react";
import Arrow from "../../../public/icons/left-arrow-logo.svg";
import "../../styles/product.css";

import Image from "next/image";
import FilterDropdown from "./Filter";
import ProductContainer from "./ProductContainer";
import DropDownMenu from "./DropDownMenu";

const Product = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showFilter, setShowFilter] = useState(true);
  // function to fetch products and display
  const fetchProductsData = async () => {
      let url = 'https://fakestoreapi.com/products'
    try {
      setLoading(true)
      const res = await fetch(url);
      const data = await res.json();
      setProductsData(data);
      setLoading(false);
    }
    catch (error) {
      alert("Something went wrong", error)
    }
  }


  useEffect(() => {
    fetchProductsData();
  }, []);
  const sortingOptions = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE: HIGH TO LOW",
    "PRICE: LOW TO HIGH",
  ];

  const filterOptions = [
    "IDEAL FOR",
    "OCCASION",
    "WORK",
    "FABRIC",
    "SEGMENT",
    "SUITABLE FOR",
    "RAW MATERIALS",
    "PATTERN",
  ];
  

  return (
    <main id="product-main">
      <hr />
      <section className="product-top-section ">
        <div className="product-top-left-section ">
          <p className="total-items mobile-none">3425 ITEMS</p>
          <div
            onClick={() => setShowFilter(!showFilter)}
            role="button"
            className="show-hide-filter-btn"
          >
            <p className="filters-mobile">FILTERS</p>
            <Image
              style={{
                rotate: `${showFilter ? "90deg" : "270deg"}`,
                transition: "rotate 0.15s ease-in-out",
              }}
              src={Arrow}
              className="mobile-none"
              alt="arrow"
              height={16}
              width={16}
            />
            <p
              className="mobile-none"
              style={{ textDecoration: "underline", opacity: "30%" }}
            >
              {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
            </p>
          </div>
        </div>
        <div className="product-top-right-section">
          <DropDownMenu options={sortingOptions} defaultOption={sortingOptions[0]} />
        </div>
      </section>
      <hr />
      <section className="product-main-section">
        {showFilter && (
          <section className="product-filter">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <input
                id="customize"
                type="checkbox"
                className="custmoize-input"
              />
              <label
                htmlFor="customize"
                className="customize-label"
              >
                CUSTOMIZE
              </label>
            </div>
            <hr />
            {filterOptions.map((title, index) => {
              return <FilterDropdown key={index} FilterTitle={title} />;
            })}
          </section>
        )}
        <section className="products-list">
          {loading ? (<div className="loading">Loding...</div>) :
            productsData.map((product, index) => {
              const { title, price, image } = product;
              return (
                <ProductContainer
                  key={index}
                  title={title}
                  price={price}
                  image={image}
                />
              );
            })}
        </section>
      </section>
    </main>
  );
};




export default Product;
