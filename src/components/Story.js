import React, { useEffect, useState } from 'react';
import { mapTime } from '../mappers/mapTime';
import { getStory } from '../services/hnApi';
import {
  StoryMeta,
  StoryMetaElement,
  StoryTitle,
  StoryWrapper,
} from '../styles/StoryStyles';

const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <StoryWrapper data-testid="story">
      <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>
      <StoryMeta>
        <span data-testid="story-by">
          <StoryMetaElement color="#000">By:</StoryMetaElement> {` `}
          {story.by}
        </span>
        <span data-testid="story-time">
          <StoryMetaElement color="#000">Posted:</StoryMetaElement> {` `}
          {mapTime(story.time)}
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
};

export default Story;
