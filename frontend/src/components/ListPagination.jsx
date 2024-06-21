import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListPagination = ({ currentPage, totalPages, onPageChange }) => {
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
        return [...Array(totalPages).keys()].map((num) => (
            <li className={`page-item ${num === currentPage ? 'active' : ''}`} key={num}>
                <button className="page-link" onClick={() => onPageChange(num)}>{num + 1}</button>
            </li>
        ));
    };

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 0 ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={handlePrevPage} disabled={currentPage === 0}>
                        이전
                    </button>
                </li>
                {renderPageNumbers()}
                <li className={`page-item ${currentPage === totalPages - 1 ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
                        다음
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default ItemListPagination;
