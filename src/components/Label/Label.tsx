import React, {FC, LabelHTMLAttributes} from 'react';
import clsx from 'clsx';

import styles from './Label.module.css';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
  required?: boolean;
}

const Label: FC<LabelProps> = ({htmlFor, required, children, ...others}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx(styles.label, {
        [styles.required]: required,
      })}
      {...others}
    >
      {children}
    </label>
  );
};

export default Label;
