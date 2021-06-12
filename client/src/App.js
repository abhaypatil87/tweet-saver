import React from "react";
import "./App.css";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import TweetsView from "./views/TweetsView";

function App() {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
              Save On Tweets!
            </Typography>
          </Toolbar>
        </AppBar>
        <TweetsView />
      </Container>
    </React.Fragment>
  );
}

export default App;
