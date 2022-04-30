import "@testing-library/jest-dom";
import { vi } from "vitest";
import { render, screen, userEvent } from "../../utils/test-utils";
import SearchInput from "./index";

describe("SearchInput", async () => {
    it("should render the input", () => {
        render(<SearchInput />);
        expect(
            screen.getByRole("textbox", {
                name: /search input/i,
            }),
        ).toBeInTheDocument();
    });
    it("should render the input with placeholder", () => {
        render(<SearchInput placeholder="Write your username" />);
        const input: HTMLInputElement = screen.getByRole("textbox", {
            name: /search input/i,
        });
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("placeholder", "Write your username");
    });
    it("should change input value", async () => {
        render(<SearchInput />);
        const input: HTMLInputElement = screen.getByRole("textbox", {
            name: /search input/i,
        });
        expect(input).toBeInTheDocument();
        await userEvent.type(input, "1337");
        expect(input).toHaveValue("1337");
    });
    it("should call onChange only once", async () => {
        const onChange = vi.fn();
        render(<SearchInput onChange={onChange} />);
        const input: HTMLInputElement = screen.getByRole("textbox", {
            name: /search input/i,
        });
        expect(input).toBeInTheDocument();
        await userEvent.type(input, "1337");
        await new Promise(r => setTimeout(r, 1000));
        expect(onChange).toBeCalledTimes(1);
    });
    it("should call onSearch when click on button", async () => {
        const onSearch = vi.fn();
        render(<SearchInput onSearch={onSearch} />);
        const button: HTMLInputElement = screen.getByRole("button", {
            name: /search/i,
        });
        expect(button).toBeInTheDocument();
        await userEvent.click(button);
        expect(onSearch).toBeCalledTimes(1);
    });
});
