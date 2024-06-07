import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import data from "./data";

import Loading from "./Loading";
import Tour from "./tour";

function App() {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState(data);

  async function getPost() {
    setLoading(true);
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments?postId=1"
    );
    const posts = await response.json();
    setList(posts);
    setLoading(false);
  }

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
      <Tour List={list} />
    </main>
  );
}

export default App;
