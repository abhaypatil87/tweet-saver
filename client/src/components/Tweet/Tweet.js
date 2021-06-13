import {
  Box,
  Grid,
  Link,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { useDrag } from "react-dnd";

import { ItemTypes } from "../../utils";
import { TweetDate } from "../TweetDate";
import { VerifiedIcon } from "./index";
import { TWITTER_URL } from "../../config";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "12px",
    flexGrow: "1",
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: "10px",
    maxWidth: "100%",
  },
  author: {
    fontSize: "1.2rem",
    fontWeight: "500",
  },
  handle: {
    marginLeft: "4px",
  },
  avatar: {
    borderRadius: "9999px",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  profileLink: {
    color: "#1a1a1a",
    cursor: "pointer",
    "&:hover": {
      color: "#2158d0",
    },
  },
}));

const Tweet = (props) => {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type: ItemTypes.TWEET,
      item: { ...props },
      end: (item, monitor) => {},
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    []
  );

  const classes = useStyles();
  const tweetHref = `${TWITTER_URL}/${props.handle}`;

  return (
    <div ref={drag} className={classes.root} style={{ opacity }}>
      <Paper
        component="article"
        role="article"
        tabIndex={0}
        elevation={3}
        className={classes.paper}
      >
        <Grid item xs={12} sm container>
          <Box marginRight={1}>
            <img
              className={classes.avatar}
              alt={props.author}
              src={props.profile_image_url}
            />
          </Box>
          <Box>
            <Typography
              component="span"
              variant="h1"
              className={classes.author}
            >
              <Link
                target="_blank"
                rel="noreferrer"
                href={tweetHref}
                className={classes.profileLink}
              >
                {props.author}
              </Link>
            </Typography>
            {props.verified && <VerifiedIcon />}
            <Typography
              component="span"
              variant="body2"
              className={classes.handle}
            >
              @{props.handle}
            </Typography>
            <TweetDate date={props.created_at} />
          </Box>
          <Box>
            <Typography aria-label={props.content} variant="body2">
              {props.content}
            </Typography>
          </Box>
        </Grid>
      </Paper>
    </div>
  );
};

export default Tweet;
