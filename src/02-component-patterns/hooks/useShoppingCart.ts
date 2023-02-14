import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{
        // es un objeto [ X cantidad de key: tipo string]: Es de tipo ProductInCart
        [key: string]: ProductInCart;
    }>({});

    // eslint-disable-next-line prettier/prettier
    const onProductCountChange = ({ count, product }: {count:number, product: Product}) => {
        setShoppingCart((oldshoppingCart) => {
            const productInCart: ProductInCart = oldshoppingCart[
                product.id
            ] || { ...product, count: 0 };

            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...oldshoppingCart,
                    [product.id]: productInCart,
                };
            }

            //Borrar el producto
            const { [product.id]: toDelete, ...rest } = oldshoppingCart;
            return { ...rest };

            /* if (count === 0) {
                const { [product.id]: toDelete, ...rest } = oldshoppingCart;
                return { ...rest };
            }

            return {
                ...oldshoppingCart,
                [product.id]: { ...product, count },
            }; */
        });
    };

    return {
        shoppingCart,
        onProductCountChange,
    };
};
