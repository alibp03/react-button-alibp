import { ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary' | 'danger';
    onClick?: () => void;
    disabled?: boolean;
};
declare function Button({ children, size, variant, onClick, disabled, }: ButtonProps): any;

export { Button as default };
