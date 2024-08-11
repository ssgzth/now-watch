import React, { useEffect, useState } from "react";
import { YT_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const filterVideos = useSelector((store) => store.videos.searchVideos);

  const getVideos = async () => {
    const data = await fetch(YT_URL);
    const json = await data.json();
    setVideos(json.items);
  };

  useEffect(() => {
    if (filterVideos?.length !== 0) {
      setVideos(filterVideos);
    } else {
      getVideos();
    }
  }, [filterVideos]);

  // console.log(videos[0]?.id?.videoId);

  return (
    <div className="flex flex-wrap justify-evenly">
      {videos.map((video, index) => {
        const videoId = video?.id?.videoId || video?.id;
        return (
          <Link key={index} to={`/watch?v=${videoId}`}>
            <VideoCard key={videoId} info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
