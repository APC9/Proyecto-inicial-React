import { ProductCart } from '../components/ProductCart';

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
                <ProductCart product={product} />
            </div>
        </div>
    );
};
