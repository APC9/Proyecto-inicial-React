import { ProductCart as ProductCartHOC } from './ProductCart';

import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

import { ProductCardHOCProps } from '../interfaces/interfaces';

//export { ProductCart } from './ProductCart';
export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

export const ProductCart: ProductCardHOCProps = Object.assign(ProductCartHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
});

export default ProductCart;
