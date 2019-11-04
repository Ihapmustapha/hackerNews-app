import Axios from "axios";

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async storyId =>
  await Axios.get(storyUrl + storyId + `.json`).then(({ data }) => data);

export const getStoryIds = async () =>
  await Axios.get(newStoriesUrl).then(({ data }) => data);
