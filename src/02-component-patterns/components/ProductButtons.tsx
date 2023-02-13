import { useContext } from 'react';
import { ProductContext } from './ProductCart';
import styles from '../style/styles.module.css';

// eslint-disable-next-line prettier/prettier
export const ProductButtons = () => {
    const { increaseBy, counter } = useContext(ProductContext);

    return (
        <div className={styles.buttonsContainer}>
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
