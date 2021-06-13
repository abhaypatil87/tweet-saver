import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { Box, makeStyles, Typography } from "@material-ui/core";

import Tweet from "../Tweet/Tweet";
import { STORAGE_KEY } from "../../config";
import storageWrapper from "../../utils/storage";
import { ItemTypes } from "../../utils/ItemTypes";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    marginLeft: "12px",
    padding: "12px",
    width: "auto",
  },
}));

const SavedTweets = () => {
  const [savedTweets, setSavedTweets] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const tweets = storageWrapper.get(STORAGE_KEY);
    setSavedTweets(tweets);
  }, []);

  function handleTweetDrop(item) {
    const storedTweets = storageWrapper.get(STORAGE_KEY);
    const result = storedTweets.filter((tweet) => item.id === tweet.id);

    if (result.length === 0) {
      storedTweets.push(item);
    }

    storageWrapper.set(STORAGE_KEY, storedTweets);
    setSavedTweets(storedTweets);
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.TWEET,
    drop: (item, monitor) => handleTweetDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={classes.root}
      style={{
        border: isOver ? "5px solid lightgrey" : "5px solid darkgrey",
      }}
    >
      <Typography variant="h5">Saved Tweets</Typography>
      <Box component="div" spacing={1}>
        {savedTweets.length > 0 &&
          savedTweets.map((tweet) => (
            <Tweet
              key={tweet.id}
              id={tweet.id}
              author_id={tweet.author_id}
              author={tweet.author}
              handle={tweet.handle}
              content={tweet.content}
              created_at={tweet.created_at}
            />
          ))}
      </Box>
    </div>
  );
};

export default SavedTweets;
