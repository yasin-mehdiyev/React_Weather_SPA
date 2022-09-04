import React, { FC } from 'react';
import { ChildrenProps } from '../../models/types/Common';

const Container: FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="container">
        {children}
    </div>
  )
}

export default Container;