import { useState } from 'react';

type ToggleReturnType = [boolean, () => void, (vl: boolean) => void];

const useToggle = (initialValue = false): ToggleReturnType => {
    const [value, setValue] = useState<boolean>(initialValue);

    const toggle = () => {
        setValue(!value);
    };

    const fun = (vl: boolean) => {
        setValue(vl)
    }

    return [value, toggle, fun];
};

export default useToggle;
