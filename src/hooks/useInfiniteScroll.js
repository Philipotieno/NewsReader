import React, { useEffect, useState } from 'react';
import { MAX_STORIES, STORY_INCREMENT } from '../constants';
import { debounce } from '../utils/debounce';

export const useInfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(STORY_INCREMENT);

  const handscroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return false;
    }
    setLoading(true);
  }, 500);

  useEffect(() => {
    if (!loading) return;
    if (count + STORY_INCREMENT >= MAX_STORIES) {
      setCount(MAX_STORIES);
    } else {
      setCount(count + STORY_INCREMENT);
    }
    setLoading(false);
  }, [loading]);

  useEffect(() => {
    window.addEventListener('scroll', handscroll);
    return () => window.removeEventListener('scroll', handscroll);
  }, []);

  return { count };
};
