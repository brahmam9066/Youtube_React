import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/VideoList'
import Video from './components/Video';
import VideoInclude from './components/VideoInclude'

const API_KEY = 'AIzaSyDdajLslHsEMksOwfN-o2gjfXX6IZ7zMz8';
class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
        videos: [],
        selectedVideo: null
    };
    this.videoSearch('React And Redux');
}
videoSearch(searchTerm) {
  YTSearch({key: API_KEY, term: searchTerm}, (data) => {
      this.setState({ 
          selectedVideo: data[0]
      });
  });
}
AddVideoinQueue(searchTerm) {
  YTSearch({key: API_KEY, term: searchTerm}, (data) => {
    var videos = [...this.state.videos]
    videos.push(data[0])
    this.setState({ 
        videos
    });
});
}
  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
        <Video video={this.state.selectedVideo}/>
        <div className="col-md-4">
         <VideoInclude onSearchTermChange={searchTerm => this.AddVideoinQueue(searchTerm)} />
          <VideoList 
            onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
            videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;

