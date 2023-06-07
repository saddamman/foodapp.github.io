import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>Choose your favorite meals form our brand selection of available meals and enjoy a delicious lunch or dinner at home.</p>
      <p>All oru meals are cooked with high-quality indgrdients, just-in-time and of course by experienced chefs!</p>
    </section>
  );
};
export default MealsSummary;
