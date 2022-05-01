import { useEffect } from "react";
import * as S from "./styled";

type PaginationProps = {
    page: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
};

const Pagination = ({ page, totalPages, onPageChange }: PaginationProps) => {
    const pages = Array.from(new Array(totalPages));

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.code === "ArrowRight" && page < pages.length) {
                onPageChange(page + 1);
                return;
            }
            if (event.code === "ArrowLeft" && page > 1) {
                onPageChange(page - 1);
                return;
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [page]);
    return (
        <S.Container role="navigation" aria-label="Pagination Navigation">
            <S.PaginationList>
                <S.PaginationItem>
                    <S.PaginationButton
                        aria-keyshortcuts="ArrowRight"
                        disabled={page === 1}
                        aria-label="Goto Previous Page"
                        aria-disabled={page === 1}
                        onClick={() => page > 1 && onPageChange(page - 1)}
                    >
                        <p>Previous</p>
                    </S.PaginationButton>
                </S.PaginationItem>
                {pages?.reduce<JSX.Element[]>((previousValue, _currentValue, currentIndex) => {
                    const isCurrentPage = currentIndex + 1 === page;
                    const isFirstPage = currentIndex === 0;
                    const isLastPage = currentIndex + 1 === pages.length;
                    const isNextPage = page < pages.length && pages.length > 2 && currentIndex + 1 === page + 1;
                    const isPreviousPage = page > 1 && currentIndex === page - 2 && pages.length > 2;
                    if (!isFirstPage && !isLastPage && !isCurrentPage && !isNextPage && !isPreviousPage) {
                        const isNearEnd = currentIndex >= page - 2 && page > pages.length - 3;
                        const isNearStart = currentIndex < page + 1 && page < 3;

                        if (!isNearEnd && !isNearStart) {
                            const isNearLeft = currentIndex <= page && currentIndex > page - 4;
                            const isNearRight = currentIndex > page && currentIndex < page + 4;
                            if (!isNearLeft && !isNearRight) {
                                return previousValue;
                            }
                            if (!isNearLeft) {
                                const alreadyHaveLeftDots = previousValue.find(element => element.key === "left-dot");
                                if (alreadyHaveLeftDots) {
                                    return previousValue;
                                }
                                return [
                                    ...previousValue,
                                    <S.PaginationDots key="left-dot" aria-label="Left dots" aria-disabled="true">
                                        ...
                                    </S.PaginationDots>,
                                ];
                            }
                            if (!isNearRight) {
                                const alreadyHaveRightDots = previousValue.find(element => element.key === "right-dot");
                                if (alreadyHaveRightDots) {
                                    return previousValue;
                                }
                                return [
                                    ...previousValue,
                                    <S.PaginationDots key="right-dot" aria-label="Right dots" aria-disabled="true">
                                        ...
                                    </S.PaginationDots>,
                                ];
                            }
                        }
                    }
                    return [
                        ...previousValue,
                        <S.PaginationItem key={currentIndex}>
                            <S.PaginationNumber
                                aria-label={`Goto Page ${currentIndex + 1}`}
                                aria-current={page === currentIndex + 1 ? "page" : "false"}
                                onClick={() => onPageChange(currentIndex + 1)}
                            >
                                {currentIndex + 1}
                            </S.PaginationNumber>
                        </S.PaginationItem>,
                    ];
                }, [])}
                <S.PaginationItem>
                    <S.PaginationButton
                        aria-keyshortcuts="ArrowLeft"
                        aria-label="Goto Next Page"
                        disabled={page === pages.length}
                        aria-disabled={page === pages.length}
                        onClick={() => page < pages.length && onPageChange(page + 1)}
                    >
                        <p>Next</p>
                    </S.PaginationButton>
                </S.PaginationItem>
            </S.PaginationList>
        </S.Container>
    );
};

export default Pagination;
