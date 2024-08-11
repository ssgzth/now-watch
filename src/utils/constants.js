const API_KEY = "AIzaSyBSevgnh3IrIb4sPlU8Z70yYwfvJr-2oJs";

export const YT_URL =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=48&key=" +
  API_KEY;

export const SUGG_URL =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YT_SEARCH_URL =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&regionCode=IN&maxResults=30&key=" +
  API_KEY +
  "&q=";

export const LIVE_COMMENTS_COUNT = 25;

export const LIVE_CHAT_SPEED_FAST = 400;

export const LIVE_CHAT_SPEED_SLOW = 1500;
