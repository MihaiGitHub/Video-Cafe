import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

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

    }

    render(){

        return ( 
            <div>
                <SearchBar />
            </div>
        ); 
    }
    
}

ReactDOM.render(<App />, document.querySelector('.container'));