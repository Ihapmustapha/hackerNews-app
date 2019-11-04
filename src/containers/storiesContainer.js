import React, { useState, useEffect } from "react";
import { getStoryIds } from "../services/hackerNewsApi";

const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds()
      .then(({ data }) => data && setStoryIds(data))
      .catch(error => console.error(error));
  }, []);

  return <p>{JSON.stringify(storyIds)}</p>;
};

export default StoriesContainer;
