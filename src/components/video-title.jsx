import React from "react";
import "../assets/css/components/video-title.css"

const VideoTitle = ({video}) => {
    // console.log(video.snippet.title);
    // console.log(video.snippet.description);
    const {title, description} = video.snippet;
    return (
        <div className="ui segment video-title-box">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )

    
}
export default VideoTitle;