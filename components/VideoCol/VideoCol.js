import React, { useState, useEffect } from "react";
import YouTubeEmbed from "./YouTubeEmbed";
import { channels, provinces } from "./../../constants/constants";
import Banner from "../Banner";
import CountDown from "../CountDown";
import Select from "../Select";

const VideoCol = () => {
  const arrayChannels = channels;
  const [activeProvince, setActiveProvince] = useState(null);
  const [activeChannel, setActiveChannel] = useState(null);
  const [autoplaySecondary, setAutoplaySecondary] = useState("0");

  const handleClick = (embedId) => {
    arrayChannels.forEach((element) => {
      if (element.embedId === embedId) {
        setActiveChannel(element);
        localStorage.setItem("activeChannel", JSON.stringify(element));
      }
    });
  };

  const handleSecondaryClick = () => {
    autoplaySecondary === "0"
      ? setAutoplaySecondary("1")
      : setAutoplaySecondary("0");
  };

  //algorithm Fisher-Yates shuffle
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  useEffect(() => {
    let active = channels[Math.floor(Math.random() * channels.length)];
    if (localStorage.getItem("activeChannel")) {
      const savedChannel = localStorage.getItem("activeChannel");
      const initialValue = JSON.parse(savedChannel);
      setActiveChannel(initialValue);
    } else {
      setActiveChannel(active);
    }

    let activeProvince =
      provinces[Math.floor(Math.random() * provinces.length)];
    setActiveProvince(activeProvince);
  }, []);

  useEffect(() => {
    shuffle(arrayChannels);
  }, [arrayChannels]);

  return (
    <div className="w-7/12 bg-gray-50 dark:bg-gray-900 flex flex-col no-scrollbar overflow-auto min-h-full p-6 border-r border-r-gray-300 dark:border-none">
      <Banner
        text={
          <CountDown
            text="Elecciones PASO 2021: "
            textIf="Las Elecciones PASO 2021 se llevan a cabo el día de hoy, no te olvides
          de votar"
          />
        }
        textButton="Más información"
        linkButton={"https://www.electoral.gob.ar/nuevo/index.php"}
      />

      <div className="mt-6 mb-6">
        <h3 className="text-3xl font-medium text-gray-800 dark:text-white">
          Transmisiones en{" "}
          <strong className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Vivo
          </strong>
        </h3>
      </div>

      <div className="w-full pb-2 mb-2 flex justify-between">
        <div className="w-2/5 space-x-2">
          {activeChannel && (
            <div className="flex">
              <div className="w-2/3 mr-2">
                <Select
                  data={provinces}
                  active={activeProvince}
                  channelButton={false}
                />
              </div>
              <Select
                data={arrayChannels}
                active={activeChannel}
                handleClick={handleClick}
                channelButton={true}
              />
            </div>
          )}
        </div>

        <div className="w-2/3 space-x-2 flex justify-end">
          <button
            onClick={handleSecondaryClick}
            type="button"
            className={
              autoplaySecondary === "0"
                ? "inline-flex items-center px-4 text-base leading-6 font-medium rounded-md bg-purple-100 dark:bg-gray-800 text-purple-400 transition-colors duration-200 bg-gradient-to-r hover:from-purple-500 hover:to-purple-400 hover:text-white ease-in-out"
                : "inline-flex items-center px-4 text-base leading-6 font-medium rounded-md bg-red-100 dark:bg-gray-800 text-red-500 transition-colors duration-200 bg-gradient-to-r hover:from-red-500 hover:to-red-400 hover:text-white ease-in-out"
            }>
            {autoplaySecondary === "0"
              ? "Reproducir Videos Secundarios"
              : "Detener Videos Secundarios"}
          </button>
        </div>
      </div>

      <div className="w-full h-3/3 mb-4">
        {activeChannel && (
          <YouTubeEmbed
            embedId={activeChannel.embedId}
            height="480"
            mute="0"
            autoplay="1"
          />
        )}
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
