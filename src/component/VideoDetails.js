import React, { Fragment } from "react";
const VideoDetails = ({video})=> {
    
    if(!video){
        return (
            <h4>Loading...</h4>
        )
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <Fragment>
            <div className="ui embed">
            <iframe width="560" height="315" src={videoSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </Fragment>
    )
}
export default VideoDetails;