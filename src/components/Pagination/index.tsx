type PaginationProps = {
    page: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
};

const Pagination = ({ page, totalPages, onPageChange }: PaginationProps) => {
    const pages = Array.from(new Array(totalPages));

    return (
        <nav role="navigation" aria-label="Pagination Navigation">
            <ul>
                <li>
                    <button aria-label="Goto Previous Page" aria-disabled={page === 1} onClick={() => page > 1 && onPageChange(page - 1)}>
                        Previous
                    </button>
                </li>
                {pages?.reduce<JSX.Element[]>((previousValue, _currentValue, currentIndex) => {
                    const isCurrentPage = currentIndex + 1 === page;
                    const isFirstPage = currentIndex === 0;
                    const isLastPage = currentIndex + 1 === pages.length;
                    const isNextPage = page < pages.length && pages.length > 2 && currentIndex + 1 === page + 1;
                    const isPreviousPage = page > 1 && currentIndex - 2 === page - 1 && pages.length > 2;
                    if (!isFirstPage && !isLastPage && !isCurrentPage && !isNextPage && !isPreviousPage) {
                        const isNearEnd = currentIndex >= page - 3 && page > pages.length - 3;
                        const isNearStart = currentIndex < page + 3 && page < 3;
                        if (!isNearEnd && !isNearStart) {
                            const isNearLeft = currentIndex <= page && currentIndex > page - 4;
                            const isNearRight = currentIndex > page && currentIndex < page + 2;
                            if (!isNearLeft) {
                                const alreadyHaveLeftDots = previousValue.find(element => element.key === "left-dot");
                                if (alreadyHaveLeftDots) {
                                    return previousValue;
                                }
                                return [
                                    ...previousValue,
                                    <span key="left-dot" aria-label="Left dots" aria-disabled="true">
                                        ...
                                    </span>,
                                ];
                            }
                            if (!isNearRight) {
                                const alreadyHaveRightDots = previousValue.find(element => element.key === "right-dot");
                                if (alreadyHaveRightDots) {
                                    return previousValue;
                                }
                                return [
                                    ...previousValue,
                                    <span key="right-dot" aria-label="Right dots" aria-disabled="true">
                                        ...
                                    </span>,
                                ];
                            }
                        }
                    }
                    return [
                        ...previousValue,
                        <li key={currentIndex}>
                            <button
                                aria-label={`Goto Page ${currentIndex + 1}`}
                                aria-current={page === currentIndex + 1 ? "page" : "false"}
                                onClick={() => onPageChange(currentIndex + 1)}
                            >
                                {currentIndex + 1}
                            </button>
                        </li>,
                    ];
                }, [])}
                <li>
                    <button
                        aria-label="Goto Next Page"
                        aria-disabled={page === pages.length}
                        onClick={() => page < pages.length && onPageChange(page + 1)}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
