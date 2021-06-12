import { Box, Grid, makeStyles } from "@material-ui/core";
import Tweets from "../components/Tweets/Tweets";
import SavedTweets from "../components/SavedTweets/SavedTweets";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const TweetsView = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Tweets />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SavedTweets />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TweetsView;
