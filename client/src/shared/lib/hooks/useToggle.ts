import { useState } from 'react';

type ToggleReturnType = [boolean, () => void];

const useToggle = (initialValue = false): ToggleReturnType => {
    const [value, setValue] = useState<boolean>(initialValue);

    const toggle = () => {
        setValue(!value);
    };

    return [value, toggle];
};

export default useToggle;
