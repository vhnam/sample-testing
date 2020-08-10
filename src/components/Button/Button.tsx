import React, {FC, HTMLProps, ReactNode} from 'react';

import styles from './Button.module.css';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  role?: string;
}

const Button: FC<ButtonProps> = ({children, type, role, ...others}) => {
  return (
    <button className={styles.button} type={type} {...others} role={role}>
      {children}
    </button>
  );
};

export default Button;
