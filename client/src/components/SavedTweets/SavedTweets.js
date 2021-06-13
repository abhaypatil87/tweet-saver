import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { Box, IconButton, makeStyles, Typography } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

import { Tweet } from "../Tweet";
import { STORAGE_KEY } from "../../config";
import { ItemTypes, storageWrapper } from "../../utils";
import { SnackBar } from "../SnackBar";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    margin: "12px",
    width: "auto",
  },
  innerRoot: {
    padding: "12px",
    height: "100%",
    width: "auto",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
  },
}));

const SavedTweets = () => {
  const [savedTweets, setSavedTweets] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setSavedTweets(storageWrapper.get(STORAGE_KEY));
  }, []);

  const classes = useStyles();

  function handleTweetDrop(item) {
    let result = [];
    const storedTweets = storageWrapper.get(STORAGE_KEY);
    if (storedTweets !== null) {
      result = storedTweets.filter((tweet) => item.id === tweet.id);
    }

    if (result.length === 0) {
      storedTweets.push(item);
    } else {
      setIsOpen(true);
      setErrorMessage("This tweet has already been saved!");
    }

    storageWrapper.set(STORAGE_KEY, storedTweets);
    setSavedTweets(storedTweets);
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.TWEET,
    drop: (item) => handleTweetDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const removeSavedTweets = () => {
    storageWrapper.set(STORAGE_KEY, []);
    setSavedTweets([]);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsOpen(false);
    setErrorMessage("");
  };

  return (
    <div ref={drop} className={classes.root}>
      <Box marginTop={1} marginBottom={1}>
        <Typography component="div" variant="h6">
          Saved Tweets
          <IconButton
            size="medium"
            aria-label={"Remove stored tweets"}
            onClick={removeSavedTweets}
          >
            <DeleteOutlineIcon />
          </IconButton>
        </Typography>
        <Typography variant="body2">
          Below are the tweets that have been saved locally. You may use the
          delete button to remove those.
        </Typography>
      </Box>
      <Box
        spacing={1}
        className={classes.innerRoot}
        style={{
          border: isOver ? "5px solid lightgrey" : "5px solid darkgrey",
        }}
      >
        {savedTweets &&
          savedTweets.length > 0 &&
          savedTweets.map((tweet) => (
            <Tweet
              key={tweet.id}
              id={tweet.id}
              author_id={tweet.author_id}
              author={tweet.author}
              handle={tweet.handle}
              content={tweet.content}
              created_at={tweet.created_at}
              profile_image_url={tweet.profile_image_url}
            />
          ))}
      </Box>
      <SnackBar
        message={errorMessage}
        open={isOpen}
        severity={"error"}
        onClose={handleClose}
      />
    </div>
  );
};

export default SavedTweets;
