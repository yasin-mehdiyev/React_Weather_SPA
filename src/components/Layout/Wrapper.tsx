import React, { FC } from 'react';
import classes from "../../styles/Wrapper.module.css";

const Wrapper : FC<{ children: any }> = ({ children }) => {
  return (
    <div className={classes.wrapper}>
      {children}
    </div>
  )
}

export default Wrapper;