import React from "react";
import TweetEmbed from "./TweetEmbed";

const TweetsCol = () => {
  return (
    <div className="w-3/12 bg-gray-200 dark:bg-gray-850 flex flex-col p-6 overflow-auto">
      <h4 className="text-xxl font-medium text-gray-800 dark:text-white">
        Últimos <strong className="font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Tweets</strong>
      </h4>
      <div className="flex flex-col space-y-6">
        <TweetEmbed />
        <TweetEmbed />
        <TweetEmbed />
        <TweetEmbed />
      </div>
    </div>
  );
};

export default TweetsCol;
