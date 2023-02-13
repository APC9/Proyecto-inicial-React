import {
    ProductButtons,
    ProductCart,
    ProductImage,
    ProductTitle,
} from '../components';

import '../style/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee Mug Card',
    image: '../../../public/coffee-mug.png',
};

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
                <ProductCart product={product}>
                    <ProductCart.Image
                        image={'../../../public/vite.svg'}
                        className="bg-dark"
                    />
                    <hr />
                    <ProductCart.Title />
                    <ProductCart.Buttons className="custon-buttons" />
                </ProductCart>

                <ProductCart product={product} className="bg-dark">
                    <ProductImage className="custom-image" />
                    <hr />
                    <ProductTitle className="text-blue" />
                    <ProductButtons className="custon-buttons" />
                </ProductCart>

                <ProductCart
                    product={product}
                    style={{ background: '#70d1f8' }}
                >
                    <ProductImage style={{ WebkitBorderRadius: '50%' }} />
                    <hr />
                    <ProductTitle
                        style={{ fontWeight: 'bold', color: 'black' }}
                    />
                    <ProductButtons
                        style={{ display: 'flex', justifyContent: 'end' }}
                    />
                </ProductCart>
            </div>
        </div>
    );
};
