import React, {
  FC,
  AllHTMLAttributes,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

import Input from '../Input';
import Label from '../Label';
import TextArea from '../TextArea';

import styles from './TextField.module.css';

interface TextFieldProps
  extends AllHTMLAttributes<HTMLInputElement & HTMLTextAreaElement> {
  label: string;
  assistiveText?: string;
  error?: boolean;
  noBorder?: boolean;
  multiline?: boolean;
  resizable?: boolean;
}

const TextField: FC<TextFieldProps> = ({
  id,
  label,
  name,
  required,
  assistiveText,
  error,
  multiline,
  resizable,
  ...others
}) => {
  return (
    <div className={styles.textField}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      {multiline && (
        <TextArea
          id={id}
          name={name}
          required={required}
          error={error}
          assistiveText={assistiveText}
          resizable={resizable}
          {...(others as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      )}
      {!multiline && (
        <Input
          id={id}
          name={name}
          required={required}
          error={error}
          assistiveText={assistiveText}
          {...(others as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </div>
  );
};

export default TextField;
