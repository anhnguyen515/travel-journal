import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={`../images/${props.data.imgURL}`} alt="" />
      <div className="card--info_section">
        <div className="card--location_section">
          <img
            className="card--location_logo"
            src="../images/location-icon.svg"
            alt=""
          />
          <span className="card--location">
            {props.data.location.toUpperCase()}
          </span>
          <span>
            <a href={props.data.mapLink}>View on Google Maps</a>
          </span>
        </div>
        <h2 className="card--title">{props.data.title}</h2>
        <h5 className="card--date">
          {props.data.startDate} - {props.data.endDate}
        </h5>
        <p className="card--description">{props.data.description}</p>
      </div>
    </div>
  );
}
