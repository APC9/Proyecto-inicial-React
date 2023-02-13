import {
    ProductButtons,
    ProductCart,
    ProductImage,
    ProductTitle,
} from '../components';

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
                    <ProductCart.Image image={'../../../public/vite.svg'} />
                    <hr />
                    <ProductCart.Title title={'Hola mundo'} />
                    <ProductCart.Buttons />
                </ProductCart>

                <ProductCart product={product}>
                    <ProductImage />
                    <hr />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCart>
            </div>
        </div>
    );
};
