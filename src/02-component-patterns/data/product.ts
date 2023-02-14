import { Product } from '../interfaces/interfaces';

const product = {
    id: '1',
    title: 'Coffee Mug Card',
    image: '../../../public/coffee-mug.png',
};

const product2 = {
    id: '2',
    title: 'Coffee Mug - Meme',
    image: '../../../public/coffee-mug2.png',
};

//Arreglo de productos
export const products: Product[] = [product, product2];
