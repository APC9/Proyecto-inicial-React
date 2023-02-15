import {
    ProductButtons,
    ProductCart,
    ProductImage,
    ProductTitle,
} from '../components';

import { products } from '../data/product';

import '../style/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {
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
                <ProductCart
                    product={product}
                    className="bg-dark"
                    initialValues={{
                        count: 0,
                        maxCount: 10,
                    }}
                >
                    {({ reset, increaseBy, count, isMaxCountReached }) => (
                        <>
                            <ProductImage />
                            <br />
                            <ProductTitle />
                            <ProductButtons />
                            <button onClick={reset}>Reset</button>
                            <button
                                onClick={() => increaseBy(2)}
                                className={`${
                                    isMaxCountReached ? 'eliminar' : ''
                                }`}
                            >
                                {' '}
                                +2{' '}
                            </button>
                            <button onClick={() => increaseBy(-2)}> -2 </button>
                            <span>{count}</span>
                        </>
                    )}
                </ProductCart>
            </div>
        </div>
    );
};
