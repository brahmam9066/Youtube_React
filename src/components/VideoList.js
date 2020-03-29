import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoItem 
            onUserSelected={props.onVideoSelect}           
            key={video.etag} 
            video={video} />
        );
    });

    return (
        <ul className="list-group">{videoItems}</ul>
    );
};

export default VideoList;