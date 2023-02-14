import { createContext, ReactElement, CSSProperties } from 'react';

import { useProduct } from '../hooks/useProduct';

import {
    ProductContextProps,
    Product,
    onChangeArgs,
} from '../interfaces/interfaces';

import styles from '../style/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export const ProductCart = ({
    children,
    product,
    className,
    style,
    onChange,
    value,
}: Props) => {
    const { counter, increaseBy } = useProduct({ onChange, product, value });

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={`${styles.productCart} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    );
};
