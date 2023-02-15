import { useEffect, useRef, useState } from 'react';
import { Product, onChangeArgs, initialValues } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: initialValues;
}

export const useProduct = ({
    onChange,
    product,
    value = 0,
    initialValues,
}: useProductArgs) => {
    // eslint-disable-next-line prettier/prettier

    const [counter, setCounter] = useState<number>(
        initialValues?.count || value
    );

    const maxCount = initialValues?.maxCount ? initialValues.maxCount : 0;

    const isMounted = useRef(false);

    const increaseBy = (value: number) => {
        const newValue = initialValues?.maxCount
            ? Math.max(Math.min(initialValues?.maxCount, counter + value), 0)
            : Math.max(counter + value, 0);

        setCounter(newValue);
        onChange && onChange({ count: newValue, product });
    };

    const reset = () => {
        setCounter(initialValues?.count || value);
    };

    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(initialValues?.count || value);
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
    }, []);

    return {
        counter,
        maxCount,
        isMaxCountReached:
            initialValues !== undefined && initialValues.maxCount === counter,

        increaseBy,
        reset,
    };
};
