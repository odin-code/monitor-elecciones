import React from "react";
import YouTube from "react-youtube";

const YouTubeEmbedWithAPI = ({ height, width, embedId }) => {
  const opts = {
    height: height,
    width: width,
    playerVars: {
      autoplay: 1
    },
  };

  return <YouTube className="rounded" videoId={embedId} opts={opts} />;
};

export default YouTubeEmbedWithAPI;
