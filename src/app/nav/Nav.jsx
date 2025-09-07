"use client"

import React, { useState } from 'react'
import styles from './nav.module.css'


const Nav = ({query, setQuery}) => {
 
  return (
    <>
    <div className={styles.nav}>
      <h1>SHOP</h1>
      <input type='text' placeholder='search here...' value={query} onChange={(e)=>setQuery(e.target.value)}/>
      <img src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-0.png" alt="search"/>
    </div>
  

    </>
  )
}

export default Nav
