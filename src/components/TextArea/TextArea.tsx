import React, {FC, TextareaHTMLAttributes} from 'react';
import clsx from 'clsx';

import styles from './TextArea.module.css';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  assistiveText?: string;
  noBorder?: boolean;
  resizable?: boolean;
}

const TextArea: FC<TextAreaProps> = ({
  id,
  name,
  error,
  required,
  className,
  assistiveText,
  noBorder,
  resizable,
  ...others
}) => {
  return (
    <div>
      <textarea
        required={required}
        id={id}
        className={clsx(styles.textArea, className, {
          [styles.error]: error,
          [styles.noBorder]: noBorder,
          [styles.resizable]: resizable,
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

export default TextArea;
