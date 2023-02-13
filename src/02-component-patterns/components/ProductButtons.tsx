import { useContext, CSSProperties } from 'react';
import { ProductContext } from './ProductCart';
import styles from '../style/styles.module.css';

export interface buttonsProps {
    className?: string;
    style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: buttonsProps) => {
    const { increaseBy, counter } = useContext(ProductContext);

    return (
        <div
            className={`${styles.buttonsContainer} ${className}`}
            style={style}
        >
            <button
                className={styles.buttonMinus}
                onClick={() => increaseBy(-1)}
            >
                {' '}
                -{' '}
            </button>

            <div className={styles.countLabel}>{counter}</div>

            <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
                {' '}
                +{' '}
            </button>
        </div>
    );
};
