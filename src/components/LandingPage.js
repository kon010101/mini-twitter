import React from "react";
import "./LandingPage.css";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landingPage">
      <div className="landingPage__contentBox">
        <div className="landingPage__left">
          <span>
            <SearchIcon className="landingPage__icon" />
            Follow Your Passion
          </span>
          <span>Get to know, what people talk about</span>
          <span>Be there</span>
        </div>
        <div className="landingPage__right">
          <div className="landingPage__rightBox">
            <h2>Look at what is happening in the World right now</h2>
            <div className="landingPage__register">Sign Up now</div>
            <Button variant="outlined" className="landingPage__btn" fullWidth>
              Sign Up
            </Button>{" "}
            <NavLink to="/home">
              <Button
                variant="outlined"
                className="landingPage__btn2"
                fullWidth
              >
                Login
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="landingPage__footer">footer</div>
    </div>
  );
}

export default LandingPage;
