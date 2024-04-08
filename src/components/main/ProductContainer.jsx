"use client";
import { useState } from "react";
import "../../styles/product.css";

import Image from "next/image";
import Link from "next/link";
const ProductContainer = ({ title, price, image }) => {
    const [like, setLike] = useState(false);
    return (
      <section className="product-container">
        <section className="product-image-container">
          <Image src={image} alt={title} height={399} width={300} />
        </section>
        <section className="product-details-container">
          <div className="product-details">
            <p className="product-title">{title}</p>
            <p>Price : ${price}</p>
            <div className="create-account">
              <Link style={{ textDecoration: "underline" }} href="#">
                Sign up
              </Link>
              {" or "}
              <Link href="#">Create an account to see pricing</Link>
            </div>
          </div>
          <div onClick={() => setLike(!like)} className="heart-logo">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={like ? "#EB4C6B" : "none"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.62 20.8116C12.28 20.9316 11.72 20.9316 11.38 20.8116C8.48 19.8216 2 15.6916 2 8.69156C2 5.60156 4.49 3.10156 7.56 3.10156C9.38 3.10156 10.99 3.98156 12 5.34156C13.01 3.98156 14.63 3.10156 16.44 3.10156C19.51 3.10156 22 5.60156 22 8.69156C22 15.6916 15.52 19.8216 12.62 20.8116Z"
                stroke={like ? "#EB4C6B" : "#292D32"}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </section>
      </section>
    );
  };

  export default ProductContainer