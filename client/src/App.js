import React from "react";
import "./App.css";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

import TweetsContainer from "./containers/TweetsContainer";

function App() {
  return (
    <Container maxWidth="lg">
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Save On Tweets!
          </Typography>
        </Toolbar>
      </AppBar>
      <TweetsContainer />
    </Container>
  );
}

export default App;
