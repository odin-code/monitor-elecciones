import React from "react";
import TweetEmbed from "./TweetEmbed";
import { getTweets } from "./../../lib/twitter";

export default function TweetsCol({ tweets }) {
  const getData = async () => {
    const tweet = await getTweets([
      "1189444653059174401",
      "935857414435495937",
    ]);
    console.log(tweet);
  };

  getData();

  return (
    <div className="w-3/12 bg-gray-200 dark:bg-gray-850 flex flex-col p-6 overflow-auto">
      <h4 className="text-xxl font-medium text-gray-800 dark:text-white mt-2">
        Últimos{" "}
        <strong className="font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Tweets
        </strong>
      </h4>
      <div className="flex flex-col space-y-6">
        {tweets?.map((tweet) => (
          <TweetEmbed key={tweet.id} {...tweet} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const tweets = await getTweets([
    "1189444653059174401",
    "935857414435495937",
    "1334528781139259400",
    "1334334544598740994",
    "826528907381739520",
    "1308509070140162048",
    "1385236589547331589",
    "1402689156434776069",
    "997895977179721728",
    "1341090253864542208",
    "1383873047619276812",
    "1026872652290379776",
    "1346113149112619016",
    "1340107217970683906",
    "992629481578745856",
    "989142253468708864",
    "807626710350839808",
    "1341962177272537089",
    "1342869937841266688",
    "1116362674319908864",
    "1331380003716681728",
    "1002104154737684480",
  ]);

  return { props: { tweets } };
}
