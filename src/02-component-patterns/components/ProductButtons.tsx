import React, { useCallback } from 'react';
import { useContext, CSSProperties } from 'react';
import { ProductContext } from './ProductCart';
import styles from '../style/styles.module.css';

export interface buttonsProps {
    className?: string;
    style?: CSSProperties;
}

export const ProductButtons = React.memo(
    ({ className, style }: buttonsProps) => {
        const { increaseBy, counter, maxCount } = useContext(ProductContext);

        const isMAxReached = useCallback(
            () => Boolean(maxCount) && counter === maxCount,
            [counter, maxCount]
        );

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

                <button
                    className={`${styles.buttonAdd} ${
                        isMAxReached() ? styles.disable : ''
                    }`}
                    onClick={() => increaseBy(1)}
                >
                    {' '}
                    +{' '}
                </button>
            </div>
        );
    }
);
