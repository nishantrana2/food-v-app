import React, { Component } from "react";
import { Route } from "react-router-dom";

import { getUser } from "../../store/reducer";
import { connect } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import Restaurants from "../../components/Restaurants/Restaurants";
import RestaurantMenu from "../../components/RestaurantMenu/RestaurantMenu";

class Foodviraam extends Component {
    state = {
        // form: "s-in",
        show: false,
        selectedRestaurant: null,
    };

    menuHandler = (restaurant) => {
        this.setState({ selectedRestaurant: restaurant });
    };

    render() {
        return (
            <React.Fragment>
                <Navbar cancel={this.popModal} showModal={this.showModal} />
                {/* <Navbar /> */}
                <Route
                   path="/"
                   exact
                   render={() => (
                                    <Restaurants menuHandler={this.menuHandler} />
                                )}
                />

                <Route
                   exact
                   path="/menu"
                   render={() => (
                                     <RestaurantMenu
                                       {...this.props.history}
                                        restaurant={this.state.selectedRestaurant}
                            />
                        )}
                    />

            </React.Fragment>

        )
        }

    }

    const mapStateToProps = (state) => ({
        user: getUser(state),
    });
    
    export default connect(mapStateToProps)(Foodviraam);
