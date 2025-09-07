"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import data from "./data";
import Link from "next/link";
import Nav from "./nav/Nav";


export default function Home() {
  const [query, setQuery] = useState("");

  // Filter products based on search
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase().trim())
  );

  return (
    <>
      <Nav query={query} setQuery={setQuery} />

      <div className={styles.page}>
        <div className={styles.cards}>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div key={item.id} className={styles.cardsInner}>
                <Image
                  src={item.image}
                  height={250}
                  width={297}
                  style={{ borderRadius: "5px 5px 0px 0px" }}
                  alt={item.name}
                />
                <h4>{item.name}</h4>
                <p className={styles.productText}>
                  {item.description.slice(0, 50)}...
                </p>
                <div className={styles.productDetails}>
                  <Link href={`/product/${item.id}`}>
                    <button className={styles.knowMore}>Know More</button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
    </>
  );
}
