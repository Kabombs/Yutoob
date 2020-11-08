import Axios from "axios";
//           AIzaSyCXW98Hsdky37LIGjcI3ki1_QIHjaCOMP0
//   GET https://www.googleapis.com/youtube/v3/search

export const youtube = Axios.create({
baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: "YOUR_KEY_HERE!!"
    }
})

