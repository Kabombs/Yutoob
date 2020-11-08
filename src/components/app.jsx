import React from "react";
import Search from "./search-bar";
import VideoDetail from "./video-detail";
import VideoList from "./video-list";
import {youtube} from "../api/youtube";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            videos : [],
            selectedVideo: null
        }
    }
   
    onSearchForVideo =  async (term) => {
        const responseFromApi = await youtube.get("/search", {
            params: {
                q: term
            }
        })
        
        this.setState({videos: responseFromApi.data.items});
    }
    selectVideo = videoId => {
         this.setState({selectedVideo: videoId});
    }

    render(){
        
        return(
            <div className="ui container">
                <Search onSubmit={this.onSearchForVideo}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList selectVideo={this.selectVideo} videos={this.state.videos}/>
            </div>
        )
    }
}
export default App;