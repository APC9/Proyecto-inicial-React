import { useContext, CSSProperties } from 'react';
import { ProductContext } from './ProductCart';
import noImage from '../assets/no-image.jpg';
import styles from '../style/styles.module.css';

export interface imageProsp {
    image?: string;
    className?: string;
    style?: CSSProperties;
}

export const ProductImage = ({ image, className, style }: imageProsp) => {
    const { product } = useContext(ProductContext);
    let imgToShow: string;

    if (image) {
        imgToShow = image;
    } else if (product.image) {
        imgToShow = product.image;
    } else {
        imgToShow = noImage;
    }

    return (
        <img
            className={`${styles.productImg} ${className}`}
            src={imgToShow}
            alt="coffee mug"
            style={style}
        />
    );
};
