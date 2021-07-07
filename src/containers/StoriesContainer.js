import React, { useEffect, useState } from 'react';
import Story from '../components/Story';
import { getStoryIds, getStory } from '../services/hnApi';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
    getStory(20970623).then((data) => console.log(data));
  }, []);
  return storyIds.map((storyId) => <Story storyId={storyId} />);
};
