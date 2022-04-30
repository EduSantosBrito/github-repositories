type PaginationProps = {
    page: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
};

const Pagination = ({ page, totalPages, onPageChange }: PaginationProps) => {
    const pages = Array.from(new Array(totalPages));

    return (
        <div>
            {pages?.map((_, index) => {
                return (
                    <button onClick={() => onPageChange(index + 1)} key={index}>
                        {index + 1}
                        {index + 1 === page && "active"}
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;
