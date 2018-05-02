import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';

class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: [], 
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term){
        YTSearch({key:API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render(){

        return ( 
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        ); 
    }
    
}

ReactDOM.render(<App />, document.querySelector('.container'));