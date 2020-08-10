import React, {InputHTMLAttributes, FC} from 'react';
import clsx from 'clsx';

import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  assistiveText?: string;
  noBorder?: boolean;
}

const Input: FC<InputProps> = ({
  id,
  name,
  error,
  required,
  className,
  assistiveText,
  noBorder,
  ...others
}) => {
  return (
    <div>
      <input
        required={required}
        id={id}
        className={clsx(styles.input, className, {
          [styles.error]: error,
          [styles.noBorder]: noBorder,
        })}
        name={name}
        aria-invalid={error}
        aria-describedby={`${id}-assistive-text`}
        {...others}
      />
      <div
        id={`${id}-assistive-text`}
        className={clsx(styles.assistiveText, {
          [styles.error]: error,
        })}
      >
        {assistiveText}
      </div>
    </div>
  );
};

export default Input;
