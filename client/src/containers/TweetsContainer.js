import { makeStyles } from "@material-ui/core";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import { Tweets } from "../components/Tweets";
import { SavedTweets } from "../components/SavedTweets";

const useStyles = makeStyles(() => ({
  flexContainer: {
    display: "flex",
  },
  flexChild: {
    flex: "1",
  },
}));

const TweetsContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.flexContainer} role="main">
      <DndProvider backend={HTML5Backend}>
        <div className={classes.flexChild}>
          <Tweets />
        </div>
        <div className={classes.flexChild}>
          <SavedTweets />
        </div>
      </DndProvider>
    </div>
  );
};

export default TweetsContainer;
