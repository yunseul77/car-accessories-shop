import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import StarRating from '../../components/StarRating';
import '../../styles/ItemDetail.css'; // 새로운 CSS 파일을 임포트합니다.
import ListPagination from '../../components/ListPagination';

const ItemDetail = () => {
    const { itemId } = useParams(); // URL에서 itemId 파라미터를 가져옴
    const [pageNumber, setPageNumber] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [itemDetail, setItemDetail] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // 상품 상세 정보 및 리뷰 데이터를 가져오는 함수
    const fetchItemDetail = async (page) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`http://localhost:8080/item/${itemId}`);
            setItemDetail(response.data.item); // 서버에서 받아온 상품 정보 설정
            setReviews(response.data.reviews.content); // Page 객체에서 리뷰 데이터 추출하여 설정
            setTotalPages(response.data.reviews.totalPages); // 총 페이지 수 설정
        } catch (error) {
            console.error('상품 정보를 가져오는 중에 오류가 발생했습니다.:', error);
            setError('상품 정보를 가져오는 중에 오류가 발생했습니다.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (itemId) {
            fetchItemDetail(pageNumber); // 페이지 번호가 변경될 때마다 데이터 다시 가져오기
        }
    }, [itemId, pageNumber]);

    const handlePageChange = (newPage) => {
        setPageNumber(newPage);
    };

    return (
        <>
            <div className="container product-detail-container">
                <div className="breadcrumb">
                    {/* 임시로 하드코딩된 예시입니다. 실제로는 상품의 카테고리 정보를 표시할 수 있습니다. */}
                    홈 > 방향제/공기청정
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src={itemDetail?.image} alt={itemDetail?.name} className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h1>{itemDetail?.name}</h1>
                        <StarRating rating={4.5} /> <span>4.5점 (997,931개 리뷰)</span>
                        <p><strong>{itemDetail?.discount}% <del>{itemDetail?.price?.toLocaleString()}</del>원</strong></p>
                        <p><strong className="price">{itemDetail?.discountPrice?.toLocaleString()}원</strong></p>
                        <p>판매자: {itemDetail?.seller}</p>
                        <p>남은 상품 개수: {itemDetail?.stockQuantity}개</p>
                        <div className="d-flex align-items-center mb-3">
                            <input type="number" className="form-control w-25 mr-2" defaultValue="1" />
                            <button className="btn btn-outline-secondary mr-2">장바구니 담기</button>
                            <button className="btn btn-primary">구매하기</button>
                        </div>
                    </div>
                </div>
                <div className="product-description my-5">
                    <h2>상품 설명</h2>
                    <img src={itemDetail?.contentImageUrl || '/default-image.jpg'} alt="상품이미지" />
                    <p>{itemDetail?.description}</p>
                </div>
                <div className="product-reviews my-5">
                    <h2>총 상품평</h2>
                    <StarRating rating={itemDetail?.ratingValue} /> <span>5점 (98,757)</span>
                    <div className="reviews-list">
                        {reviews.map((review, index) => (
                            <div key={index} className="review-item">
                                <div className="review-header d-flex align-items-center justify-content-between">
                                    <div>
                                        <strong>{review.summary}</strong><span>{review.date}</span>
                                    </div>
                                    <StarRating rating={review.ratingValue} />
                                </div>
                                <p>{review.description}</p>
                            </div>
                        ))}
                    </div>
                    <ListPagination
                        currentPage={pageNumber}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </>
    );
};

export default ItemDetail;

