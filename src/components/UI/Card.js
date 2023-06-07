import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  const classesProps = `${classes.card} ${props.className} `;

  return <div className={classesProps}>{props.children}</div>;
};

export default Card;
