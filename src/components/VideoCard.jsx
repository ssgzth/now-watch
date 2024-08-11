import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);

  const { thumbnails, title, channelTitle } = info.snippet;
  // const { viewCount } = info.statistics;

  return (
    <div className="p-2 w-56 shadow-lg mx-2 mt-2 border border-spacing-1 rounded-sm">
      <img src={thumbnails.medium.url} alt="" />
      <ul className="mt-4">
        <li className="text-xs">{title}</li>
        <li className="text-xs font-bold">{channelTitle}</li>
        {/* <li className="text-sm">{viewCount} views</li> */}
      </ul>
    </div>
  );
};

export default VideoCard;
