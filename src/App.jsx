import React from "react"
import Navbar from "../components/Navbar"
import Card from "../components/Card"
import data from "./data"

import "./App.css"

export default function App(){
  const cards = data.map(card => {
    return (
      <Card key={card.id} {...card}/>
    )
  })
  return(
    <div className="container">
      <Navbar />

      <div className="cards">
        {cards}
      </div>
    </div>
  )
}