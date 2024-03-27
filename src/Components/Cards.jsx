import React from "react";
import "./Card.css";
function Cards({ memes }) {
  return (
    <div className="memecards">
      {memes.map((val) => {
        return (
          <div key={val.id} className="card ">
            <div className="card_image">
              <img src={val.url} alt={val.name} />
            </div>
            <h3>{val.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
