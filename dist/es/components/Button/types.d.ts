export type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';
export interface ButtonProps {
    type?: ButtonType;
    size?: ButtonSize;
    block?: boolean;
    disabled?: boolean;
    loading?: boolean;
}
