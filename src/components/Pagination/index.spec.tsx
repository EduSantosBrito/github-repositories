import "@testing-library/jest-dom";
import { vi } from "vitest";
import { render, screen, userEvent } from "../../utils/test-utils";
import Pagination from "./index";

describe("Pagination", async () => {
    it("should render the pagination", () => {
        const onPageChange = vi.fn();
        render(<Pagination page={1} totalPages={10} onPageChange={onPageChange} />);
        expect(screen.getByRole("button", { current: "page" })).toBeInTheDocument();
    });
    it("should change page", async () => {
        let page = 1;
        const onPageChange = vi.fn().mockImplementation(newPage => {
            page = newPage;
        });
        const { rerender } = render(<Pagination page={page} totalPages={10} onPageChange={onPageChange} />);
        const [nextPage] = screen.getAllByRole("button", { current: false, name: /goto page/i });
        expect(nextPage).toBeInTheDocument();
        await userEvent.click(nextPage as HTMLElement);
        rerender(<Pagination page={page} totalPages={10} onPageChange={onPageChange} />);
        expect(onPageChange).toBeCalledTimes(1);
        expect(screen.getByRole("button", { current: "page" })).toHaveTextContent(page.toString());
        expect(page).toBe(2);
    });
    it("should go to next page clicking on next button", async () => {
        let page = 1;
        const onPageChange = vi.fn().mockImplementation(newPage => {
            page = newPage;
        });
        const { rerender } = render(<Pagination page={page} totalPages={10} onPageChange={onPageChange} />);
        const nextPageButton = screen.getByRole("button", { name: /goto next page/i });
        expect(nextPageButton).toBeInTheDocument();
        await userEvent.click(nextPageButton);
        rerender(<Pagination page={page} totalPages={10} onPageChange={onPageChange} />);
        expect(onPageChange).toBeCalledTimes(1);
        expect(screen.getByRole("button", { current: "page" })).toHaveTextContent(page.toString());
        expect(page).toBe(2);
    });
    it("should not go to next page clicking on next button beeing in last page", async () => {
        let page = 10;
        const onPageChange = vi.fn().mockImplementation(newPage => {
            page = newPage;
        });
        const { rerender } = render(<Pagination page={page} totalPages={10} onPageChange={onPageChange} />);
        const nextPageButton = screen.getByRole("button", { name: /goto next page/i });
        expect(nextPageButton).toBeInTheDocument();
        await userEvent.click(nextPageButton);
        rerender(<Pagination page={page} totalPages={10} onPageChange={onPageChange} />);
        expect(onPageChange).toBeCalledTimes(0);
        expect(screen.getByRole("button", { current: "page" })).toHaveTextContent(page.toString());
        expect(page).toBe(10);
    });
    it("should go to previous page clicking on previous button", async () => {
        let page = 2;
        const onPageChange = vi.fn().mockImplementation(newPage => {
            page = newPage;
        });
        const { rerender } = render(<Pagination page={page} totalPages={10} onPageChange={onPageChange} />);
        const previousPageButton = screen.getByRole("button", { name: /goto previous page/i });
        expect(previousPageButton).toBeInTheDocument();
        await userEvent.click(previousPageButton);
        rerender(<Pagination page={page} totalPages={10} onPageChange={onPageChange} />);
        expect(onPageChange).toBeCalledTimes(1);
        expect(screen.getByRole("button", { current: "page" })).toHaveTextContent(page.toString());
        expect(page).toBe(1);
    });
    it("should not go to previous page clicking on previous button beeing in first page", async () => {
        let page = 1;
        const onPageChange = vi.fn().mockImplementation(newPage => {
            page = newPage;
        });
        const { rerender } = render(<Pagination page={page} totalPages={10} onPageChange={onPageChange} />);
        const previousPageButton = screen.getByRole("button", { name: /goto previous page/i });
        expect(previousPageButton).toBeInTheDocument();
        await userEvent.click(previousPageButton);
        rerender(<Pagination page={page} totalPages={10} onPageChange={onPageChange} />);
        expect(onPageChange).toBeCalledTimes(0);
        expect(screen.getByRole("button", { current: "page" })).toHaveTextContent(page.toString());
        expect(page).toBe(1);
    });
});
