import React, { useState, useEffect } from "react";
import TweetEmbed from "./TweetEmbed";
import TweetPulse from "./TweetPulse";

const TweetsCol = () => {
  const [loading, setLoading] = useState(false);
  const [dataTweets, setDataTweets] = useState(false);
  const [quotedTweets, setQuotedTweets] = useState(false);
  const [users, setUsers] = useState(false);
  const [medias, setMedias] = useState(false);
  const [reloadButton, setReloadButton] = useState(false);
const ss=encodeURIComponent('kuwait (الكويت OR or OR كويت)') ;
  const getData = async () => {
    setLoading(false);
    await fetch("https://argentina-2021.herokuapp.com/tweets?ht=kuwait city").then(
      (response) =>
        response.json().then((data) => {
          setDataTweets(data.data);
          setQuotedTweets(data.includes.tweets);
          setUsers(data.includes.users);
          setMedias(data.includes.media);
        })
    );
    setLoading(false);
  };

  useEffect(() => {
	   setInterval(() => {
                 getData();
            },5000);

    setTimeout(() => {
      setReloadButton(true);
    }, 1000);
  }, []);

  const handleClick = () => {
    getData();
    setReloadButton(false);
    setTimeout(() => {
      setReloadButton(true);
    }, 6000);
  };

  return (
    <div className="lg:w-3/12 w-4/12 bg-gray-200 dark:bg-gray-850 hidden md:flex md:flex-col p-6 no-scrollbar overflow-auto">
      <div className="mt-3">
        {dataTweets && !loading && !reloadButton ? (
          <h4 className="text-xxl font-medium text-gray-800 dark:text-white">
            Últimos{" "}
            <strong className="font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              Tweets
            </strong>
          </h4>
        ) : (
          <div class="w-full flex justify-center">
            <button
              onClick={handleClick}
              class="bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-800">
              تغريدات جديدة
            </button>
          </div>
        )}
      </div>
      {dataTweets && !loading ? (
        <div className="flex flex-col space-y-6">
          {dataTweets?.map((tweet) => (
            <TweetEmbed
              key={tweet.id}
              tweet={tweet}
              quotedTweets={quotedTweets}
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
          <TweetPulse />
        </div>
      )}
    </div>
  );
};

export default TweetsCol;
