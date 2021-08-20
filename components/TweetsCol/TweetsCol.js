import React, { useState, useEffect } from "react";
import TweetEmbed from "./TweetEmbed";
import * as data from "../../constants/tweets.json";

const TweetsCol = () => {
  const [dataTweets, setDataTweets] = useState(data);
  const [tweets, setTweets] = useState(data.includes.tweets);
  const [users, setUsers] = useState(data.includes.users);

  useEffect(() => {
    const getData = async () => {
      await fetch(
        "https://argentina-2021.herokuapp.com/tweets?ht=carpincho"
      ).then((response) =>
        response.json().then((data) => {
          setDataTweets(data);
          setTweets(data.includes.tweets);
          setUsers(data.includes.users);
        })
      );
    };
    getData();
    //console.log(dataTweets);
    //console.log(tweets);
    //console.log(users);
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
      <div className="flex flex-col space-y-6">
        {tweets?.map((tweet) => (
          <TweetEmbed key={tweet.id} tweet={tweet} users={users} />
        ))}
      </div>
    </div>
  );
};

export default TweetsCol;
