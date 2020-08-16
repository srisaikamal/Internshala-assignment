import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  links: {
    color: "white",
    textDecoration: "none",
  },
}));
const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Internshala Project
          </Typography>
          <Button color="inherit">
            <Link className={classes.links} to="/">
              Home
            </Link>
          </Button>
          <Button color="inherit">
            <Link className={classes.links} to="/about">
              About
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
