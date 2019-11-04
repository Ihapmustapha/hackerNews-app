import React, { useState, useEffect } from "react";
import { getStory } from "../services/hackerNewsApi";

const Story = ({ id }) => {
  const [storyData, setStoryData] = useState({});

  useEffect(() => {
    getStory(id)
      .then(data => data && data.url && setStoryData(data))
      .catch(error => console.error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return storyData && storyData.url ? (
    <>
      <a href={storyData.url}>
        <p>{storyData.title}</p>
      </a>
      <p>By: {storyData.by}</p>
      <p>Posted: {storyData.time}</p>
    </>
  ) : null;
};

export default Story;
