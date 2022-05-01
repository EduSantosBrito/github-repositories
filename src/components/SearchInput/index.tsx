import { ChangeEvent, useEffect, useMemo, useState } from "react";
import debounce from "lodash.debounce";
import * as S from "./styled";

type SearchInputProps = {
    placeholder?: string;
    onChange?: (value: string) => void;
    onSearch?: (value: string) => void;
};

const SearchInput = ({ onChange, placeholder, onSearch }: SearchInputProps) => {
    const [value, setValue] = useState<string>("");
    const debouncedOnChange = useMemo(() => (onChange ? debounce(onChange, 1000) : null), []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.code === "Enter" && value) {
                onSearch?.(value);
                return;
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [value]);

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
        <S.SearchContainer>
            <S.SearchInputContainer role="search">
                <S.SearchLabel aria-labelledby="search-title" htmlFor="search-input">
                    <S.SearchIcon />
                </S.SearchLabel>
                <S.SearchInput
                    aria-label="Search input"
                    name="search-input"
                    id="search-input"
                    type="text"
                    value={value}
                    placeholder={placeholder}
                    onChange={handleOnChange}
                    required
                />
            </S.SearchInputContainer>
            <S.SearchButton type="button" aria-label="Search submit button" onClick={handleOnClick}>
                Search
            </S.SearchButton>
        </S.SearchContainer>
    );
};

export default SearchInput;
