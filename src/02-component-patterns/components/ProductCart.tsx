import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';

import {
    ProductContextProps,
    ProductCardProps,
} from '../interfaces/interfaces';

import styles from '../style/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCart = ({ children, product }: ProductCardProps) => {
    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={styles.productCart}>{children}</div>
        </Provider>
    );
};
