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

  console.log(storyData);
  return (
    <>
      <a href={storyData.url}>
        <p>{storyData.title}</p>
      </a>
      <span>by: {storyData.by}</span>
    </>
  );
};

export default Story;
