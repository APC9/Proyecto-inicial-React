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
    maxCount?: number;
    increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Title: (props: titleProps) => JSX.Element;
    Image: (props: imageProsp) => JSX.Element;
    Buttons: (props: buttonsProps) => JSX.Element;
}

export interface onChangeArgs {
    product: Product;
    count: number;
}

//Es una interfaz de tipo productos y le se le agrega otra propiedad con la palabra extends
export interface ProductInCart extends Product {
    count: number;
}

export interface initialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;

    increaseBy: (value: number) => void;
    reset: () => void;
}
