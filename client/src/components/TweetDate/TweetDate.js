import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  date: {
    color: "#535c6e",
  },
}));
const TweetDate = (props) => {
  const date = new Date(props.date);
  const classes = useStyles();
  return (
    <Typography className={classes.date} variant="body2">
      {date.toLocaleString()}
    </Typography>
  );
};

export default TweetDate;
