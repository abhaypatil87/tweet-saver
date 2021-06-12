import { useEffect, useState } from "react";
import Tweet from "../Tweet/Tweet";
import { SERVER_PORT, SERVER_URL } from "../../config";

const Tweets = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchAllTweets = async () => {
      let response = await fetch(
        `http://${SERVER_URL}:${SERVER_PORT}/api/tweets`
      );
      response = await response.json();
      setTweets(response.tweets.data.statuses);
    };
    fetchAllTweets();
  }, []);

  return (
    <div>
      {tweets.map((tweet, index) => {
        return (
          <Tweet
            key={tweet.id}
            author_id={tweet.user.id}
            author={tweet.user.name}
            handle={tweet.user.screen_name}
            content={tweet.text}
            created_at={tweet.created_at}
          />
        );
      })}
    </div>
  );
};

export default Tweets;
