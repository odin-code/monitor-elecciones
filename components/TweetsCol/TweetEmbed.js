import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import Image from "next/image";
import QuotedTweet from "./QuotedTweet";
import RepliedTo from "./RepliedTo";

const TweetEmbed = ({ tweet, users, medias, quotedTweets }) => {
  const [user, setUser] = useState();
  const [tweetDate, setTweetDate] = useState();
  const [formattedText, setFormattedText] = useState();
  const [mediaID, setMediaID] = useState();
  const [mediaData, setMediaData] = useState();

  const [quotedTweet, setQuotedTweet] = useState();
  const [quotedTweetData, setQuotedTweetData] = useState();

  const [repliedTo, setRepliedTo] = useState();
  const [repliedToData, setRepliedToData] = useState();
  const [userReplied, setUserReplied] = useState();

  const getUser = (id) => {
    users.forEach((user) => {
      if (user.id === id) {
        setUser(user);
      }
    });
  };

  const getMedia = (mediaID) => {
    let arrayMedia = [];
    medias.forEach((m) => {
      mediaID.forEach((id) => {
        if (m.media_key === id) {
          arrayMedia.push(m);
        }
      });
    });
    if (arrayMedia.length > 0) {
      setMediaData(arrayMedia);
    }
  };

  const setQuote = (id) => {
    quotedTweets.forEach((q) => {
      if (q.id === id) {
        setQuotedTweetData(q);
      }
    });
  };

  const setReplied = (id) => {
    quotedTweets.forEach((q) => {
      if (q.id === id) {
        setRepliedToData(q);
      }
    });
  };

  const getUserReplied = (id) => {
    users.forEach((user) => {
      if (user.id === id) {
        setUserReplied(user);
      }
    });
  };

  useEffect(() => {
    if (tweet) {
      setTweetDate(new Date(tweet.created_at));
      setFormattedText(tweet.text.replace(/https:\/\/[\n\S]+/g, "")); //delete media links
      setQuotedTweet(
        tweet.referenced_tweets &&
          tweet.referenced_tweets.find((t) => t.type === "quoted")
      );
      setRepliedTo(
        tweet.referenced_tweets &&
          tweet.referenced_tweets.find((t) => t.type === "replied_to")
      );
      setMediaID(tweet.attachments ? tweet.attachments.media_keys : null);
    }
  }, [tweet]);

  useEffect(() => {
    users && getUser(tweet.author_id);
  }, [users]);

  useEffect(() => {
    medias && mediaID && getMedia(mediaID);
  }, [medias, mediaID]);

  useEffect(() => {
    quotedTweet && setQuote(quotedTweet.id);
  }, [quotedTweet]);

  useEffect(() => {
    repliedTo && setReplied(repliedTo.id);
  }, [repliedTo]);

  useEffect(() => {
    users &&
      repliedToData &&
      repliedToData.author_id &&
      getUserReplied(repliedToData.author_id);
  }, [repliedToData]);

  return (
    <div className="rounded-md border border-gray-300 dark:border-none px-6 py-4 mt-4 w-full bg-gray-50 dark:bg-gray-800">
      {user ? (
        <a
          title="Ver Tweet"
          href={`https://twitter.com/${user.username}/status/${tweet.id}`}
          target="_blank"
          rel="noopener noreferrer">
          {repliedTo ? (
            <RepliedTo repliedToData={repliedToData} users={users} />
          ) : null}
          <div className="flex items-center">
            <a
              title="Ver perfil"
              className="flex h-12 w-12"
              href={`https://twitter.com/${user.username}`}
              target="_blank"
              rel="noopener noreferrer">
              <img
                alt="profil"
                src={user.profile_image_url}
                className="rounded-full"
              />
            </a>
            <a
              href={`https://twitter.com/${user.username}`}
              className="author"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col ml-3">
              <span
                className="flex items-center font-bold text-gray-900 dark:text-white leading-5"
                title="Ver perfil">
                {user.name}
                {user.verified ? (
                  <svg
                    aria-label="Verified Account"
                    className="ml-1 text-blue-500 dark:text-white inline h-4 w-4"
                    viewBox="0 0 24 24">
                    <g fill="currentColor">
                      <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                    </g>
                  </svg>
                ) : null}
              </span>
              <span
                className="text-gray-500 dark:text-gray-300"
                title="Ver perfil">
                {" "}
                @{user.username}{" "}
              </span>
            </a>
            <a
              className="ml-auto"
              href={`https://twitter.com/${user.username}/status/${tweet.id}`}
              target="_blank"
              rel="noopener noreferrer">
              <svg
                viewBox="328 355 335 276"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A 70, 70 0 0 1 370, 523 A 70, 70 0 0 0 401, 521 A 70, 70 0 0 1 344, 455 A 70, 70 0 0 0 372, 460 A 70, 70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A 67, 67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A 65, 65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A 65, 65 0 0 1 630, 425 Z"
                  fill="#3BA9EE"
                />
              </svg>
            </a>
          </div>
          <div className="mt-2">
            {repliedToData && (
              <span className="text-sm text-gray-500 dark:text-gray-400">
                En respuesta a
                {userReplied && (
                  <span
                    className="text-twitter-500 font-medium"
                    title="Ver perfil">
                    {" "}
                    @{userReplied.username}{" "}
                  </span>
                )}
              </span>
            )}
          </div>
          <div className="mt-2 mb-2 leading-normal whitespace-pre-wrap text-lg text-gray-700 dark:text-gray-200">
            {formattedText}
          </div>
          {mediaData && mediaData.length ? (
            <div
              className={
                mediaData.length === 1
                  ? "inline-grid grid-cols-1 gap-x-2 gap-y-2 my-2"
                  : "inline-grid grid-cols-2 gap-x-2 gap-y-2 my-2"
              }>
              {mediaData.map((m) => (
                <Image
                  key={m.media_key}
                  alt={formattedText}
                  height={m.height}
                  width={m.width}
                  src={m.url ? m.url : m.preview_image_url}
                  className="rounded-md"
                />
              ))}
            </div>
          ) : null}
          {quotedTweet ? (
            <QuotedTweet quotedTweetData={quotedTweetData} users={users} />
          ) : null}
          <a
            className="text-gray-500 dark:text-gray-400 text-sm hover:underline"
            href={`https://twitter.com/${user.username}/status/${tweet.id}`}
            target="_blank"
            rel="noopener noreferrer">
            <time
              title={`Publicado el ${format(tweetDate, "d MMM, y - h:mm a")}`}
              dateTime={tweetDate.toISOString()}>
              {format(tweetDate, "h:mm a - MMM d, y")}
            </time>
          </a>
          <div className="flex text-gray-700 mt-2">
            <a
              title="Comentar"
              className="flex items-center mr-4 text-gray-500 dark:text-gray-400 dark:hover:text-blue-500 hover:text-blue-500 transition hover:underline"
              href={`https://twitter.com/intent/tweet?in_reply_to=${tweet.id}`}
              target="_blank"
              rel="noopener noreferrer">
              <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24">
                <path
                  className="fill-current"
                  d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.045.286.12.403.143.225.385.347.633.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.368-3.43-7.788-7.8-7.79zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.334-.75-.75-.75h-.395c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
                />
              </svg>
              <span>{tweet.public_metrics.reply_count}</span>
            </a>
            <a
              title="Retweetear"
              className="flex items-center mr-4 text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500 transition hover:underline"
              href={`https://twitter.com/intent/retweet?tweet_id=${tweet.id}`}
              target="_blank"
              rel="noopener noreferrer">
              <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24">
                <path
                  className="fill-current"
                  d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"
                />
              </svg>
              <span>
                {tweet.public_metrics.retweet_count +
                  tweet.public_metrics.quote_count}
              </span>
            </a>
            <a
              title="Dar like"
              className="flex items-center text-gray-500 dark:text-gray-400 dark:hover:text-red-600 hover:text-red-500 transition hover:underline"
              href={`https://twitter.com/intent/like?tweet_id=${tweet.id}`}
              target="_blank"
              rel="noopener noreferrer">
              <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24">
                <path
                  className="fill-current"
                  d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.813-1.148 2.353-2.73 4.644-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.375-7.454 13.11-10.037 13.156H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.035 11.596 8.55 11.658 1.52-.062 8.55-5.917 8.55-11.658 0-2.267-1.822-4.255-3.902-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.015-.03-1.426-2.965-3.955-2.965z"
                />
              </svg>
              <span>{tweet.public_metrics.like_count}</span>
            </a>
          </div>
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default TweetEmbed;
