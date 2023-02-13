import { Props as ProductCardProps } from '../components/ProductCart';
import { buttonsProps } from '../components/ProductButtons';
import { imageProsp } from '../components/ProductImage';
import { titleProps } from '../components/ProductTitle';

export interface Product {
    id: string;
    title: string;
    image?: string;
}

export interface ProductContextProps {
    product: Product;
    counter: number;
    increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Title: (props: titleProps) => JSX.Element;
    Image: (props: imageProsp) => JSX.Element;
    Buttons: (props: buttonsProps) => JSX.Element;
}
