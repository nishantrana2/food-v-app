import React, { Component } from 'react';
// import logo from './logo.svg';

// import classes from "./App.module.css";
import Foodviraam from './containers/Foodviraam/Foodviraam';
import { Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
        <main >
            <Route
                path="/"
                render={
                    () =>

                        < Foodviraam />
                }
            />
        </main>
    );

}
}


