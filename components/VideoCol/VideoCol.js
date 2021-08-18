import React, { useState, useEffect } from "react";
import YouTubeEmbed from "./YouTubeEmbed";
import { channels } from "./../../constants/constants";

const VideoCol = () => {
  const arrayChannels = channels;
  const [activeChannel, setActiveChannel] = useState(channels[0]);
  const [autoplaySecondary, setAutoplaySecondary] = useState("0");

  const handleClick = (embedId) => {
    arrayChannels.forEach((element) => {
      if (element.embedId === embedId) {
        setActiveChannel(element);
        //setAutoplaySecondary("0");
      }
    });
  };

  const handleSecondaryClick = () => {
    autoplaySecondary === "0"
      ? setAutoplaySecondary("1")
      : setAutoplaySecondary("0");
  };

  useEffect(() => {
    let active = channels[Math.floor(Math.random() * channels.length)];
    setActiveChannel(active);
  }, []);

  return (
    <div className="w-7/12 bg-gray-50 dark:bg-gray-900 flex flex-col overflow-auto min-h-full p-6 border-r border-r-gray-300 dark:border-none">
      <div className="mt-3 mb-6">
        <h3 className="text-3xl font-medium text-gray-800 dark:text-white">
          Transmisiones en{" "}
          <strong className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Vivo
          </strong>
        </h3>
      </div>

      <div className="w-full pb-2 mb-2 flex justify-between">
        <div className="w-full space-x-2">
          {arrayChannels.map((channel) => (
            <div className="relative inline-flex rounded-md shadow-sm">
              <button
                type="button"
                className={
                  channel.name === activeChannel.name
                    ? "inline-flex items-center px-4 py-2 text-base leading-6 font-medium rounded transition-colors duration-200 bg-gradient-to-r from-blue-500 to-teal-400 text-white ease-in-out"
                    : "inline-flex items-center px-4 py-2 text-base leading-6 font-medium rounded bg-blue-100 dark:bg-gray-800 text-blue-400 transition-colors duration-200 bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 hover:text-white ease-in-out"
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
        <div className="w-full space-x-2 flex justify-end">
          <button
            onClick={handleSecondaryClick}
            type="button"
            className={
              autoplaySecondary === "0"
                ? "inline-flex items-center px-4 py-2 text-base leading-6 font-medium rounded bg-teal-100 dark:bg-gray-800 text-teal-500 transition-colors duration-200 bg-gradient-to-r hover:from-teal-500 hover:to-teal-400 hover:text-white ease-in-out"
                : "inline-flex items-center px-4 py-2 text-base leading-6 font-medium rounded bg-red-100 dark:bg-gray-800 text-red-500 transition-colors duration-200 bg-gradient-to-r hover:from-red-500 hover:to-red-400 hover:text-white ease-in-out"
            }>
            {autoplaySecondary === "0"
              ? "Reproducir Videos Secundarios"
              : "Detener Videos Secundarios"}
          </button>
        </div>
      </div>

      <div className="w-full h-3/3 mb-4">
        <YouTubeEmbed
          embedId={activeChannel.embedId}
          height="480"
          mute="0"
          autoplay="1"
        />
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
              mute="1"
              autoplay={autoplaySecondary}
            />
          )
        )}
      </div>
    </div>
  );
};

export default VideoCol;
