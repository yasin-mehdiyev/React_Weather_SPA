import React, { FC } from 'react';
import { ButtonProps } from '../../models/types/Button';
import classes from "../../styles/Button.module.css";

const Button: FC<ButtonProps> = ({ content, onClick, disabled }) => {
    return (
        <>
            <button
                type="submit"
                onClick={(e) => onClick(e)}
                className={classes.button}
                disabled={disabled}
                style={disabled ? { cursor: 'not-allowed' } : { cursor: 'pointer' }}
            >
                {content}
            </button>
        </>
    )
}

export default Button;