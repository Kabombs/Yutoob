import React from "react";
import VideoItem from "./video-item";
import "../assets/css/components/video-list.css"

class VideoList extends React.Component {
    render() {
        
        return (
            <div className="ui relaxed divided list right-side">
               
                
                    {this.props.videos.map((vid, i) => {
                        
                        return (
                            <VideoItem selectVideo={this.props.selectVideo} videoInfo={vid} />
                        )
                    })}
                
            </div>
        )
    }
}
export default VideoList;