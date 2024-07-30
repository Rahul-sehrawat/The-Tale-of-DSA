import React from 'react';

interface PaginationProps {
    totalNotes: number;
    notesPerPage: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    totalNotes,
    notesPerPage,
    currentPage,
    setCurrentPage
}) => {
    const pageNumbers: number[] = [];
    for (let i = 1; i <= Math.ceil(totalNotes / notesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
            {pageNumbers.map(number => (
                <button
                    key={number}
                    className={currentPage === number ? 'active' : ''}
                    onClick={() => setCurrentPage(number)}
                >
                    {number}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
