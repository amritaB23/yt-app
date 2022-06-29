import axios from "axios";
const KEY = 'AIzaSyCAKJNYos8mCxmLJH350I67rPvDULfyTW4';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})