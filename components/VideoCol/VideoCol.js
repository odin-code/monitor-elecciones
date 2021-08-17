import React, { useState, useEffect } from "react";
import VideoButton from "./VideoButton";
import YouTubeEmbed from "./YouTubeEmbed";
import { channels } from "./../../constants/constants";

const VideoCol = () => {
  const arrayChannels = channels;
  const [activeChannel, setActiveChannel] = useState(channels[0]);

  const handleClick = (embedId) => {
    arrayChannels.forEach((element) => {
      if (element.embedId === embedId) {
        setActiveChannel(element);
      }
    });
  };

  useEffect(() => {
    let active = channels[Math.floor(Math.random() * channels.length)];
    setActiveChannel(active);
  }, []);

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
        {arrayChannels.map((channel) => (
          <div className="relative inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className={
                channel.name === activeChannel.name
                  ? "inline-flex items-center px-4 py-2 text-base leading-6 font-medium rounded transition-colors duration-200 bg-gradient-to-r from-blue-500 to-teal-400 text-indigo-50 ease-in-out"
                  : "inline-flex items-center px-4 py-2 text-base leading-6 font-medium rounded bg-blue-100 text-blue-400 transition-colors duration-200 bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 hover:text-indigo-50 ease-in-out"
              }
              key={channel.key}
              active={channel.name === activeChannel.name ? true : false}
              value={channel.embedId}
              onClick={(e) => handleClick(e.target.value)}>
              {channel.name}
            </button>
            {channel.name === activeChannel.name ? (
              <div className="flex absolute top-0 right-0 -mt-0.5 -mr-1">
                <span className="absolute inline-flex animate-ping">
                  <span className="inline-flex rounded-full h-3 w-3 bg-pink-300 opacity-75"></span>
                </span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-400"></span>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>

      <div className="w-full h-3/3 mb-4">
        <YouTubeEmbed embedId={activeChannel.embedId} height="480" />
      </div>

      <div className="grid grid-rows-1 grid-flow-col gap-4 mb-4">
        {arrayChannels.map((channel) =>
          channel === activeChannel ? (
            ""
          ) : (
            <YouTubeEmbed
              embedId={channel.embedId}
              height="200"
              key={channel.key}
            />
          )
        )}
      </div>
    </div>
  );
};

export default VideoCol;
