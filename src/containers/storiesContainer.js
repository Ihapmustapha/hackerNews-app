import React, { useState, useEffect } from "react";
import { getStoryIds } from "../services/hackerNewsApi";
import Story from "../components/Story";

const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds()
      .then(data => data && setStoryIds(data))
      .catch(error => console.error(error));
  });

  return (
    <>
      <h1>Hacker News Stories</h1>
      {storyIds.map(storyId => (
        <Story id={storyId} key={`key-` + storyId} />
      ))}
    </>
  );
};

export default StoriesContainer;
