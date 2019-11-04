import React, { useEffect, useState } from "react";
import { getStoryIds } from "./services/hackerNewsApi";

export const App = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds()
      .then(result => setStoryIds(result && result["data"]))
      .catch(error => console.error(error));
  }, []);

  return <p>{JSON.stringify(storyIds)}</p>;
};
