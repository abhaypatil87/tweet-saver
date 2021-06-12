import { useEffect, useState } from "react";
import Tweet from "../Tweet/Tweet";
import { Box } from "@material-ui/core";

const SavedTweets = () => {
  const [savedTweets, setSavedTweets] = useState([]);

  useEffect(() => {
    const tweets = localStorage.getItem("tweets");
    if (tweets) {
      setSavedTweets(tweets);
    }
  }, []);
  return (
    <Box component="div">
      {savedTweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          author_id={tweet.user.id}
          author={tweet.user.name}
          handle={tweet.user.screen_name}
          content={tweet.text}
          created_at={tweet.created_at}
        />
      ))}
    </Box>
  );
};

export default SavedTweets;
