import { useContext, CSSProperties } from 'react';
import { ProductContext } from './ProductCart';
import styles from '../style/styles.module.css';

export interface titleProps {
    className?: string;
    title?: string;
    style?: CSSProperties;
}

export const ProductTitle = ({ title, className, style }: titleProps) => {
    const { product } = useContext(ProductContext);
    return (
        <span
            className={`${styles.productDescription} ${className}`}
            style={style}
        >
            {title ? title : product.title}
        </span>
    );
};
