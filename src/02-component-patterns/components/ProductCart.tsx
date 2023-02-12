import { useProduct } from '../hooks/useProduct';
import styles from '../style/styles.module.css';
import noImage from '../assets/no-image.jpg';

interface Props {
    product: Product;
}

interface Product {
    id: string;
    title: string;
    image?: string;
}

export const ProductCart = ({ product }: Props) => {
    const { counter, increaseBy } = useProduct();

    const num1: number = 0;
    if (num1 === counter) {
        console.log('hola');
    }

    return (
        <div className={styles.productCart}>
            <img
                className={styles.productImg}
                src={product.image ? product.image : noImage}
                alt="coffee mug"
            />

            <br />
            <span className={styles.productDescription}>{product.title}</span>

            <div className={styles.buttonsContainer}>
                <button
                    className={styles.buttonMinus}
                    onClick={() => increaseBy(-1)}
                >
                    {' '}
                    -{' '}
                </button>

                <div className={styles.countLabel}>{counter}</div>

                <button
                    className={styles.buttonAdd}
                    onClick={() => increaseBy(1)}
                >
                    {' '}
                    +{' '}
                </button>
            </div>
        </div>
    );
};
