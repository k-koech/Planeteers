import React, { useState } from "react";

function Planeteer({ name, born, fromUSA, twitter, picture, quote, bio, id }) {

  const [isBio, setIsBio] = useState(true)
  const date = new Date()
  const year = date.getFullYear()

  const age = year - born

  function handleSwitchBio(){
    setIsBio(isBio => !isBio)
  }

  return (
    <li className="cards__item">
      <div onClick={handleSwitchBio} className="card">
        <img
          src={picture}
          alt={name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text">
          {isBio ? bio : quote}
          </p>
          <div className="card__detail">
            <p>{twitter}</p>

            <p>Age: {age}</p>
            <p>
              {
                fromUSA ? "USA-BASED" : "WORKING OVERSEAS"
              }
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
