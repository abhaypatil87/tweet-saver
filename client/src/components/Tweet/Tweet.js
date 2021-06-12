import { Box, Grid, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: "10px",
    maxWidth: "100%",
  },
}));

const Tweet = (props) => {
  const ariaLabel = props.handle;
  const classes = useStyles();
  return (
    <Box component="div" marginTop={2}>
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
    </Box>
  );
};

export default Tweet;
