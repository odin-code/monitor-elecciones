import React, { useState, useEffect } from "react";
import TweetEmbed from "./TweetEmbed";
import TweetPulse from "./TweetPulse";

const TweetsCol = () => {
  const [dataTweets, setDataTweets] = useState();
  const [tweets, setTweets] = useState();
  const [users, setUsers] = useState();
  const [medias, setMedias] = useState();

  useEffect(() => {
    const getData = async () => {
      await fetch(
        "https://argentina-2021.herokuapp.com/tweets?ht=PASO2021"
      ).then((response) =>
        response.json().then((data) => {
          setDataTweets(data.data);
          setTweets(data.includes.tweets);
          setUsers(data.includes.users);
          setMedias(data.includes.media);
        })
      );
    };
    getData();
  }, []);

  return (
    <div className="w-3/12 bg-gray-200 dark:bg-gray-850 flex flex-col p-6 no-scrollbar overflow-auto">
      <div className="mt-3">
        <h4 className="text-xxl font-medium text-gray-800 dark:text-white">
          Últimos{" "}
          <strong className="font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Tweets
          </strong>
        </h4>
      </div>
      {tweets ? (
        <div className="flex flex-col space-y-6">
          {dataTweets?.map((tweet) => (
            <TweetEmbed
              key={tweet.id}
              tweet={tweet}
              tweets={tweets}
              users={users}
              medias={medias}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col space-y-6">
          <TweetPulse />
          <TweetPulse />
          <TweetPulse />
          <TweetPulse />
        </div>
      )}
    </div>
  );
};

export default TweetsCol;
