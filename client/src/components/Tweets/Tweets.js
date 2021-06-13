import { useEffect, useState } from "react";
import Tweet from "../Tweet/Tweet";
import { SERVER_PORT, SERVER_URL } from "../../config";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    border: "5px solid darkgrey",
    height: "100%",
    width: "auto",
    padding: "12px",
  },
}));

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const classes = useStyles();
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
    <div className={classes.root}>
      {tweets.map((tweet, index) => {
        return (
          <Tweet
            key={tweet.id}
            id={tweet.id}
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
