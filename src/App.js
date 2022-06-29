import React, { useEffect, useState } from "react";
import "./App.css";
import SearchVideos from "./component/SearchVideos";
import VideoDetails from "./component/VideoDetails";
import VideoList from "./component/VideoList";
import useVideos from "./hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("motu patlu");
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container" style={{ marginTop: "1rem" }}>
      <SearchVideos onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetails video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
