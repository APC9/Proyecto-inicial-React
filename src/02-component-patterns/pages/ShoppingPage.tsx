import {
    ProductButtons,
    ProductCart,
    ProductImage,
    ProductTitle,
} from '../components';

import { products } from '../data/product';
import { useShoppingCart } from '../hooks/useShoppingCart';

import '../style/custom-styles.css';

export const ShoppingPage = () => {
    const { onProductCountChange, shoppingCart } = useShoppingCart();
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}
            >
                {products.map((product) => (
                    <ProductCart
                        product={product}
                        className="bg-dark"
                        key={product.id}
                        onChange={onProductCountChange}
                        value={shoppingCart[product.id]?.count || 0}
                    >
                        <ProductImage />
                        <br />
                        <ProductTitle />
                        <ProductButtons />
                    </ProductCart>
                ))}
            </div>

            <div className="shopping-card ">
                {Object.entries(shoppingCart).map(([key, product]) => (
                    <ProductCart
                        product={product}
                        key={key}
                        value={product.count}
                        onChange={onProductCountChange}
                    >
                        <ProductImage />
                        <br />
                        <ProductButtons />
                    </ProductCart>
                ))}
            </div>
        </div>
    );
};
