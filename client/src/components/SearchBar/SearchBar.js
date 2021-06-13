import React, { useState } from "react";
import { InputBase, IconButton, makeStyles, Paper } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px 10px 10px 10px",
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const SearchBar = (props) => {
  const [userInput, setUserInput] = useState("");
  const [count, setCount] = useState("100");
  const classes = useStyles();

  return (
    <Paper variant="outlined" className={classes.root}>
      <InputBase
        style={{ width: "80%" }}
        placeholder="Search Tweets"
        type="text"
        value={userInput}
        onChange={(event) => {
          setUserInput(event.target.value);
        }}
        inputProps={{ "aria-label": "enter search terms" }}
      />
      <InputBase
        style={{ width: "10%" }}
        placeholder="Count"
        type="number"
        value={count}
        onChange={(event) => {
          setCount(event.target.value);
        }}
        inputProps={{ "aria-label": "enter the number of tweets" }}
      />
      <IconButton
        type="button"
        onClick={props.onSearch.bind(null, userInput, count)}
        className={classes.iconButton}
      >
        <SearchOutlined />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
