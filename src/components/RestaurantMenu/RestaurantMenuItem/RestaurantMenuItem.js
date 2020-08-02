import React from "react";

import classes from "./RestaurantMenuItem.module.css";

import Button from "../../UI/Button/Button";

export default function RestaurantMenuItem(props) {

    return (
        <div className={classes.Item}>
            <div className={classes.Header}>
               
               <img src={props.product.imgsrc} alt={props.name} />
         
               
         
       </div>
            <div className={classes.Leading}>

            
                {/* {props.product.image ? (
                    <img src={props.product.imgsrc} alt={props.product.name} />
                ) : null} */}
                <h3>{props.product.name}</h3>
              
            </div>
            <h3
                // style={
                //     props.product.mealType === "veg"
                //         ? { color: "green" }
                //         : { color: "red" }
                // }
            >
                {props.product.mealType}
            </h3>
            <h3>Price: {props.product.price}</h3>

            
        </div>
    );
}
