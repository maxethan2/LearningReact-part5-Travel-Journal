import React from "react";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img src={props.imageUrl} className="card-image"></img>
      <div className="card-info-container">
        {/* container with all info */}
        <div className="card-location-link">
          <img src="../Images/ping.png" className="ping-image"></img>
          <h2 className="location-title">{props.location}</h2>
          <a href={props.googleMapsUrl} rel="noreferrer">View on Google Maps</a>
        </div>
        {/* Location Title */}
        <h1>{props.title}</h1>
        {/* Start and end date */}
        <h3>{props.startDate} - {props.endDate}</h3>
        <h4>{props.description}</h4>

      </div>
    </div>
  )
}