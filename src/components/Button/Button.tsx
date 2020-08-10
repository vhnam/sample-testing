import React, {
  FC,
  AllHTMLAttributes,
  useCallback,
  Fragment,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from 'react';
import clsx from 'clsx';

import {ButtonColors, ButtonVariants} from './types';

import styles from './Button.module.css';

interface ButtonProps
  extends AllHTMLAttributes<HTMLButtonElement & HTMLAnchorElement> {
  type?: 'button' | 'submit' | 'reset';
  color?: ButtonColors;
  variant?: ButtonVariants;
}

const Button: FC<ButtonProps> = ({
  children,
  type,
  className,
  color,
  variant,
  ...others
}) => {
  const getColor = useCallback(() => {
    switch (color) {
      case ButtonColors.Primary:
        return styles.primary;
      case ButtonColors.Secondary:
        return styles.secondary;
      case ButtonColors.Success:
        return styles.success;
      case ButtonColors.Warning:
        return styles.warning;
      case ButtonColors.Error:
        return styles.error;
      default:
        return styles.default;
    }
  }, [color]);

  const getVariant = useCallback(() => {
    switch (variant) {
      case ButtonVariants.Outline:
        return styles.outline;
      case ButtonVariants.Ghost:
        return styles.ghost;
      case ButtonVariants.Link:
        return styles.link;
      default:
        return styles.default;
    }
  }, [variant]);

  return (
    <Fragment>
      {ButtonVariants.Link === variant && (
        <a
          className={clsx(styles.button, className, getColor(), getVariant())}
          {...(others as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      )}

      {ButtonVariants.Link !== variant && (
        <button
          className={clsx(styles.button, className, getColor(), getVariant())}
          type={type}
          {...(others as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
          {children}
        </button>
      )}
    </Fragment>
  );
};

export default Button;
