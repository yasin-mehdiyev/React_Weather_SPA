import React, { FC } from 'react';
import { ChildrenProps } from '../../models/types/Common';
import classes from "../../styles/Wrapper.module.css";

const Wrapper: FC<ChildrenProps> = ({ children }) => {
  return (
    <div className={classes.wrapper}>
        {children}
    </div>
  )
}

export default Wrapper;