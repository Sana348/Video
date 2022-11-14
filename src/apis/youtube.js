import axios from "axios";

const KEY = "AIzaSyDYjgun8KGNTgiYXGZsLPo7Qmg2X3uzCjg";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    maxResults: 5,
    key: KEY,
  },
});
