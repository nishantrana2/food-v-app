import React, { Component } from "react";
import classes from "./Navbar.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";


import { getUser } from "../../store/reducer";
import { connect } from "react-redux";



class Navbar extends Component {
    state = {
        hover: false,
    };

    toggleHover = () => {
        this.setState({ hover: !this.state.hover });
    };

    render() {
        return (
            <div className={classes.Navbar}>
                <div className={classes["Item"]}>
                    <a href="/">
                        <NavigationItem reload link="/" logo name="F O O D V I R A A M" />
                    </a>
                </div>
               
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: getUser(state),
});

export default connect(mapStateToProps)(Navbar);
