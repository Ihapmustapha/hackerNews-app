import React, { useState, useEffect } from "react";
import { getStory, storyUrl } from "../services/hackerNewsApi";
import {
  StoryWrapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement,
  StoryAnchor
} from "../styles/StoryStyle";

const Story = ({ id }) => {
  const [storyData, setStoryData] = useState({});

  useEffect(() => {
    getStory(id)
      .then(data => data && data.url && setStoryData(data))
      .catch(error => console.error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return storyData && storyData.url ? (
    <StoryWrapper data-testid="story">
      <StoryTitle>
        <StoryAnchor href={storyData.url}>{storyData.title}</StoryAnchor>
      </StoryTitle>

      <StoryMeta>
        <span className="story___by" data-testid="story-by">
          <StoryMetaElement color="#000">By: </StoryMetaElement> {storyData.by}
        </span>
        <span className="story___time" data-testid="story-time">
          <StoryMetaElement color="#000"> Posted: </StoryMetaElement>{" "}
          {storyData.time}
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
};

export default Story;
