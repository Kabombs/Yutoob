import React from "react";
import "../assets/css/components/video-player.css"
const VideoPlayer = (props) => {
    
    return (
        <div className="iframe-container" 
        onClick={() =>{
            console.log("iframe clicked");
            console.log(props.video.id.videoId);
        } }>
            {/* <iframe title="video" style={{width: "100%", height: "200px"}}></iframe> */}
            <iframe 
             title="video" width="560" height="315" src={"https://www.youtube.com/embed/" + props.video.id.videoId} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}
export default VideoPlayer;