import { ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'danger';
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({
  children,
  size = 'small',
  variant = 'primary',
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={`${styles.btn} ${styles[size]} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
