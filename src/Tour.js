import React, { useState } from "react";

const Tour = ({ List }) => {
  const [read, showread] = useState(false);
  return (
    <>
      {List.map((tourlist) => {
        const { id, name, body } = tourlist;
        return (
          <article key={id} className="single-tour">
            <img
              src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
              alt={name}
            />
            <footer>
              <div className="tour-info">
                <h4>{name}</h4>
                <h4 className="tour-price">30</h4>
              </div>
              <p>
                {read ? body : `${body.substring(0, 50)}...`}
                <button onClick={() => showread(!read)}>
                  {read ? "show less" : "read more"}
                </button>
              </p>
              <button className="delete-btn">Not intrested</button>
            </footer>
          </article>
        );
      })}
    </>
  );
};

export default Tour;
