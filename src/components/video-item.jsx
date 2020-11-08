import React from "react";
import "../assets/css/components/video-item.css"

function VideoItem(props) {
    
    
    const handleClick = (input) => {
        props.selectVideo(input);
    }

    const thumbnail = props.videoInfo.snippet.thumbnails.default.url;
    const title = props.videoInfo.snippet.title;
    return (
        <div onClick={() => {handleClick(props.videoInfo)}} className="item video-item-container">
            <div className="left-box">
                <img className="ui image video-item-image" src= {thumbnail} alt="" />
            </div>
            +
            <div className="video-item-container_text right-box">
                <span>
                    {title} 
                </span>
            </div>
            
        </div>
    )
}
export default VideoItem;