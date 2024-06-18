import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevPage = () => {
        if (currentPage > 0) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            onPageChange(currentPage + 1);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 0; i < totalPages; i++) {
            pageNumbers.push(
                <li key={i} className={i === currentPage ? 'active' : ''}>
                    <button onClick={() => onPageChange(i)}>{i + 1}</button>
                </li>
            );
        }
        return pageNumbers;
    };

    return (
        <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 0}>
                이전
            </button>
            <ul className="pagination-list">
                {renderPageNumbers()}
            </ul>
            <button onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
                다음
            </button>
        </div>
    );
};

export default Pagination;
