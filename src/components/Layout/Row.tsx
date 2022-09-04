import { FC } from 'react';

// Models( Types)
import { ChildrenProps } from '../../models/types/Common';

const Row: FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="row">
      {children}
    </div>
  )
}

export default Row;