import { FC } from 'react';

// Styles
import classes from "../../styles/404.module.css";

const NotFound: FC = () => {
  return (
    <div className={classes.not_found}>
      Error, 404 not found page
    </div>
  )
}

export default NotFound;