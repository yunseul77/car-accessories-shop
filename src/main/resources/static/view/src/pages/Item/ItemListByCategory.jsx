import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BabyItem from '../../components/BabyItem';
import ListPagination from '../../components/ListPagination';

const ItemListByCategory = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const [categoryId, setCategoryId] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [items, setItems] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // useParams를 통해 category 값을 가져옴
    const { categoryId: urlCategory } = useParams();

    useEffect(() => {
        // URL에서 category 값을 가져와서 설정
        if (urlCategory) {
            setCategoryId(urlCategory);
            setPageNumber(0); // 카테고리가 변경되면 페이지 번호를 0으로 초기화
            fetchItems(0); // 페이지 번호 0으로 데이터 가져오기
        }
    }, [urlCategory]); // urlCategory 값이 변경될 때마다 다시 불러옴

    const fetchItems = async (page) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`http://localhost:8080/item/category/${urlCategory}?page=${page}&size=16`);
            console.log(`페이지 데이터를 가져오는 중 ${page}:`, response.data);

            // 데이터 구조에 맞게 content 배열을 설정
            setItems(response.data.content);
            setTotalPages(response.data.page.totalPages);

            // 카테고리 이름 설정 (초기 데이터에서 가져옴)
            setCategoryName(response.data.content[0].categoryName);
        } catch (error) {
            console.error('데이터를 가져오는 중에 오류가 발생했습니다.:', error);
            setError('데이터를 가져오는 중에 오류가 발생했습니다.');
            setItems([]);
        } finally {
            setLoading(false);
        }
    };

    const handlePageChange = (newPage) => {
        setPageNumber(newPage);
        fetchItems(newPage); // 페이지 번호가 변경될 때마다 데이터 다시 가져오기
    };

    return (
        <>
            <div className="category-bar">
                <div className="category-bar-content">
                    <div className="category-result">
                        <ul>
                            <li>
                                <Link to="/" >
                                    홈
                                    <svg className="category-arrow-icon" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.8859 2.15732C4.0606 1.9717 4.34367 1.94925 4.54434 2.09575L4.59268 2.1359L8.84268 6.1359C9.03746 6.31922 9.05137
                                    6.61975 8.88442 6.81982L8.84268 6.8641L4.59268 10.8641C4.3916 11.0534 4.07516 11.0438 3.8859 10.8427C3.7112 10.6571 3.70593
                                    10.3732 3.86432 10.1817L3.90732 10.1359L7.77 6.50001L3.90732 2.8641C3.7217 2.6894 3.69925 2.40634 3.84575 2.20566L3.8859 2.15732Z" fill="#AAB5C0">
                                        </path>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/item/category/${categoryId}`}>
                                    {categoryName}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <form>
                <div className="item-container">
                    <div className="item-body">
                        <h2 className="item-list-title">{categoryName}</h2>
                        <div className="item-list-container">
                            <ul className="item-list">
                                {items.map((item) => (
                                    <BabyItem key={item.id} item={item} />
                                ))}
                            </ul>
                            <ListPagination
                                currentPage={pageNumber}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ItemListByCategory;
