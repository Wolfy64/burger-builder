import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => (
  <div className={classes.BuildControls}>
    {controls.map(e => (
      <BuildControl
        added={() => props.ingredientsAdded(e.type)}
        removed={() => props.ingredientRemoved(e.type)}
        disabled={props.disabled[e.type]}
        key={e.label}
        label={e.label}
      />
    ))}
  </div>
); 
export default BuildControls;
