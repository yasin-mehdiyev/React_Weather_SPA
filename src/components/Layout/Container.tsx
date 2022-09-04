import { FC } from 'react';

// Models (Types)
import { ChildrenProps } from '../../models/types/Common';

const Container: FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="container">
        {children}
    </div>
  )
}

export default Container;