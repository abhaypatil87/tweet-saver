import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { useDrag } from "react-dnd";

import { ItemTypes } from "../../utils/ItemTypes";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: "10px",
    maxWidth: "100%",
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

  const ariaLabel = props.handle;
  const classes = useStyles();
  return (
    <div ref={drag} style={{ opacity, marginTop: "12px" }}>
      <Paper elevation={3} className={classes.paper}>
        <Grid item xs={12} sm container>
          <Grid aria-label={ariaLabel}>
            <Typography component="span" variant="h6">
              {props.author}
            </Typography>
            <Typography component="span" variant="subtitle1">
              @{props.handle}
            </Typography>
          </Grid>
          <Grid component="div">
            <Typography aria-label={props.content} variant="subtitle2">
              {props.content}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Tweet;
