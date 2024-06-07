import Tour from "./Tour";
import React from "react";

const Tours = ({ tours, removeFunction, getPost }) => {
  console.log("Tours", tours);
  if (!tours || !Array.isArray(tours) || tours.length === 0) {
    return (
      <div>
        {" "}
        <h1>No tours available</h1>
        <button className="btn" onClick={getPost}>
          Refresh
        </button>
      </div>
    );
  }
  return (
    <div>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeFunction={removeFunction} />;
      })}
    </div>
  );
};

export default Tours;
