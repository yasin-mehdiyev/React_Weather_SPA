import React, { FC } from 'react';
import { WrapperProps } from '../../models/types/Wrapper';
import classes from "../../styles/Wrapper.module.css";

const Wrapper: FC<WrapperProps> = ({ children, bgColor }) => {
  return (
    <div className={classes.wrapper} style={{ backgroundColor: bgColor }}>
        {children}
    </div>
  )
}

export default Wrapper;