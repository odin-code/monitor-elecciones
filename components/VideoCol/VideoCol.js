import React from "react";
import VideoButton from "./VideoButton";
import YouTubeEmbed from "./YouTubeEmbed";

const VideoCol = () => {
  return (
    <div className="w-7/12 bg-gray-100 flex flex-col overflow-auto min-h-full p-6 border-r border-gray-300">
      <div className="mb-4">
        <h3 className="text-2xl font-medium">
          Transmisiones en{" "}
          <strong className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Vivo
          </strong>
        </h3>
      </div>
      <div className="w-full pb-2 space-x-2 mb-2">
        <VideoButton text="TN" active/>
        <VideoButton text="C5N" />
        <VideoButton text="La Nación +" />
        <VideoButton text="Crónica TV" />
      </div>
      <div className="w-full h-3/3 mb-4">
        <YouTubeEmbed embedId="wHn1_QVoXGM" height="480" />
      </div>
      <div className="h-2 grid grid-rows-1 grid-flow-col gap-4 mb-4">
        <YouTubeEmbed embedId="ns8-5XKA0Ww" />
        <YouTubeEmbed embedId="h0t2XAwr0ks" />
        <YouTubeEmbed embedId="MMzAVO7WTcg" />
      </div>
    </div>
  );
};

export default VideoCol;
