import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // useParams 추가
import BabyItem from './BabyItem';
import Pagination from './Pagination';

const ItemListPaginationForm = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const [category, setCategory] = useState('');
    const [items, setItems] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // useParams를 통해 category 값을 가져옴
    const { category: urlCategory } = useParams();

    useEffect(() => {
        // URL에서 category 값을 가져와서 설정
        if (urlCategory) {
            setCategory(urlCategory);
        }

        fetchItems();
    }, [pageNumber, urlCategory]); // category 값이 변경될 때마다 다시 불러옴

    const fetchItems = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`/item/${category}?page=${pageNumber}&size=16`);
            console.log(`페이지 데이터를 가져오는 중 ${pageNumber}:`, response.data);

            setItems(response.data.content);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('데이터를 가져오는 중에 오류가 발생했습니다.:', error);
            setError('데이터를 가져오는 중에 오류가 발생했습니다.');
        } finally {
            setLoading(false);
        }
    };

    const handlePageChange = (newPage) => {
        setPageNumber(newPage);
    };

    return (
        <div>
            {/* 에러 메시지 표시 */}
            {error && <div className="error-message">{error}</div>}

            {/* 로딩 중 표시 */}
            {loading ? (
                <div className="loading">로딩 중...</div>
            ) : (
                <>
                    <ul className="item-list">
                        {items.map((item) => (
                            <BabyItem key={item.id} item={item} />
                        ))}
                    </ul>

                    {/* 페이지네이션 컴포넌트 추가 */}
                    <Pagination
                        currentPage={pageNumber}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </>
            )}

        </div>
    );
};

export default ItemListPaginationForm;
