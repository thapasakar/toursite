import React, { useCallback, useEffect, useState } from "react";
import "./App.css";

import Loading from "./Loading";

import Tours from "./Tours";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeFunction = (id) => {
    const updateTours = tours.filter((tour) => tour.id != id);
    setTours(updateTours);
  };

  async function getPost() {
    setLoading(true);
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments?postId=1"
    );
    const tours = await response.json();
    setTours(tours);
    setLoading(false);
  }
  console.log("app.js", tours);
  useEffect(() => {
    getPost();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeFunction={removeFunction} getPost={getPost} />
    </main>
  );
}

export default App;
