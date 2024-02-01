// This is a function hook that will help us do something after a timeout

import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    const handleDebounce = () => {
        const idDebounce = setTimeout(() => setDebounceValue(value), delay);

        return () => clearTimeout(idDebounce);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(handleDebounce, [value]);

    return debounceValue;
}

export default useDebounce;
