import React from "react"

export default function Card(props) {
  return (
    <div className="card">
      <div className="image">
        <img src={props.imageUrl} alt="" />
      </div>

      <div className="content">
        <a href="#" className="text"><i className="icon-location"></i>{props.location} </a>
        <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8" className="text map">View on Google Maps</a>
        <h1 className="title">{props.title}</h1>

        <strong className="text bold">{props.startDate} - {props.endDate}</strong>
        <p className="text">
          {props.description}
        </p>
      </div>
    </div>
  )
}
/*
title: "Mount Fuji",
      location: "Japan",
      googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
      startDate: "12 Jan, 2021",
      endDate: "24 Jan, 2021",
      description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
      imageUrl: "https://source.unsplash.com/WLxQvbMyfas"

      */