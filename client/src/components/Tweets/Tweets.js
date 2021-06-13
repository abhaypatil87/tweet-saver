import { useEffect, useState } from "react";
import Tweet from "../Tweet/Tweet";
import { SERVER_PORT, SERVER_URL } from "../../config";
import { Box, makeStyles } from "@material-ui/core";
import { SearchBar } from "../SearchBar";
import { SnackBar } from "../SnackBar";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    width: "auto",
  },
  innerRoot: {
    height: "100%",
    width: "auto",
    border: "5px solid darkgrey",
  },
}));

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [infoMessage, setInfoMessage] = useState("");
  const classes = useStyles();

  useEffect(() => {
    const fetchAllTweets = async () => {
      let response = await fetch(
        `http://${SERVER_URL}:${SERVER_PORT}/api/tweets?${searchTerm}`
      );
      response = await response.json();
      setTweets(response.tweets.data.statuses);
    };

    if (searchTerm.trim().length === 0) {
      setIsOpen(true);
      setInfoMessage("Please enter a Search Term to fetch some tweets!");
    } else {
      fetchAllTweets();
    }
  }, [searchTerm]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsOpen(false);
    setInfoMessage("");
  };

  const searchChangeHandler = (userInput, count) => {
    let limit = isNaN(parseInt(count)) ? 100 : parseInt(count);
    setSearchTerm(`q=${userInput}&count=${limit}&timestamp=${Date.now()}`);
  };

  return (
    <div className={classes.root}>
      <Box marginTop={1} marginBottom={1}>
        <SearchBar onSearch={searchChangeHandler} />
      </Box>
      <Box padding={1} className={classes.innerRoot}>
        {tweets.map((tweet) => {
          return (
            <Tweet
              key={tweet.id}
              id={tweet.id}
              author_id={tweet.user.id}
              author={tweet.user.name}
              handle={tweet.user.screen_name}
              content={tweet.text}
              created_at={tweet.created_at}
              verified={tweet.user.verified}
              profile_image_url={tweet.user.profile_image_url}
            />
          );
        })}
      </Box>
      <SnackBar
        message={infoMessage}
        open={isOpen}
        severity={"info"}
        onClose={handleClose}
      />
    </div>
  );
};

export default Tweets;
