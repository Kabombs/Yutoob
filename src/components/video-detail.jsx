import React from "react";
import "../assets/css/components/video-details.css"
// import "../assets/pictures"
import VideoTitle from "./video-title";
import VideoPlayer from "./video-player";

const VideoDetail = ({video}) => {
        
        return (
            <div className="left-side ui">
                <div className="video-container">
                {video ? <VideoPlayer video={video} /> : <div>loading</div> }
                    
                    
                </div>
                {video ? <VideoTitle video={video} /> : null}
            </div>
        )
    
}
export default VideoDetail;