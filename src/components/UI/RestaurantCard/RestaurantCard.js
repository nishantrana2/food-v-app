import React from "react";
import {Helmet} from "react-helmet";

import classes from "./RestaurantCard.module.css";


export default function RestaurantCard(props) {
    return (
        <div className={classes.Card} onClick={props.clicked}>
            <Helmet>
            <title>{props.name}</title>
        <meta name="description" content={props.restaurantDescription} />
            </Helmet>
           < div className={classes.Header}>
               
                    <img src={props.imgSrc} alt={props.name} />
              
            </div>
           
            <h4 className={classes.Title}>{props.name}</h4>
            <div className={classes.Cusines}>
             <h5>{props.restaurantDescription}</h5>
                
            </div>
        </div>
    );
}
