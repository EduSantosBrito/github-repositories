import { ChangeEvent, useEffect, useMemo, useState } from "react";
import debounce from "lodash.debounce";

type SearchInputProps = {
    label: string;
    defaultValue?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
    onSearch?: (value: string) => void;
};

const SearchInput = ({ onChange, label, placeholder, defaultValue = "", onSearch }: SearchInputProps) => {
    const [value, setValue] = useState<string>(defaultValue);
    const debouncedOnChange = useMemo(() => (onChange ? debounce(onChange, 1000) : null), []);

    useEffect(() => {
        if (onChange && debouncedOnChange) {
            debouncedOnChange(value);
        }
    }, [value]);

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleOnClick = () => {
        onSearch?.(value);
    };

    return (
        <div>
            <label htmlFor="search-input">{label}</label>
            <input name="search-input" id="search-input" type="search" value={value} placeholder={placeholder} onChange={handleOnChange} />
            <button type="button" onClick={handleOnClick}>
                Search
            </button>
        </div>
    );
};

export default SearchInput;
