import { createContext, CSSProperties } from 'react';

import { useProduct } from '../hooks/useProduct';

import {
    ProductContextProps,
    Product,
    onChangeArgs,
    initialValues,
    ProductCardHandlers,
} from '../interfaces/interfaces';

import styles from '../style/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    //children?: ReactElement | ReactElement[];
    children: (args: ProductCardHandlers) => JSX.Element;
    product: Product;
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: initialValues;
}

export const ProductCart = ({
    children,
    product,
    className,
    style,
    onChange,
    value,
    initialValues,
}: Props) => {
    // eslint-disable-next-line prettier/prettier

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
        useProduct({
            onChange,
            product,
            value,
            initialValues,
        });

    return (
        <Provider value={{ counter, increaseBy, product, maxCount }}>
            <div className={`${styles.productCart} ${className}`} style={style}>
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,

                    increaseBy,
                    reset,
                })}
            </div>
        </Provider>
    );
};
