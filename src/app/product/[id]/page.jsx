"use client"


import React from 'react'
import { useRouter } from 'next/router'
import data from '../../data'

import styles from './product.module.css'
import { useParams } from 'next/navigation'

const page = () => {
  const params=useParams();
  const {id}=params;

  const product = data.find((item) => item.id.toString() === id);

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product Not Found</h2>
  }

  return (
    <div className={styles.head}>
      <h1>Product Details</h1>
      <div className={styles.product}>
        <div className={styles.top}>
          <div className={styles.topleft}>
            <img src={product.image}  />
            
          </div>
          <div className={styles.topRight}>
            <h2>{product.name}</h2>
            <p className={styles.desc}>{product.description}</p>
          </div>
        </div>
       <div className={styles.content}>
        <div className={styles.right}>
           
            <div className={styles.cards}>
              <h4>Features</h4>
              <ul>
              {product.features.map((item, index)=>(
                <li key={index}>{item}</li>
              ))}
              </ul>
            </div>
            <div className={styles.cards}>
              <h4>Information</h4>
              <ul>
                {Object.entries(product.information).map((item,index)=>(
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              
            </div>
            
        </div>
        <div className={styles.down}>
          <div className={styles.cards}>
            <h2 style={{textAlign:"center", paddingTop: "20px"}}>Traceability</h2>
            <ul>
                {Object.entries(product.traceability).map((item, index)=>(
                  <li key={index}>{item}</li>
                ))}
            </ul>
          </div>
       
          <div className={styles.cards}> 
            
            {product.reviews.map((item, index)=>(
              <div key={index} className={styles.cardsInner}>

                <h2>{item.user}</h2>
                <h3>{item.rating}</h3>
                <p>{item.comment}</p>
              </div>
            ))}
            
          </div>
        
        </div>
        </div>
       
      </div>
    </div>
  )
}

export default page;

