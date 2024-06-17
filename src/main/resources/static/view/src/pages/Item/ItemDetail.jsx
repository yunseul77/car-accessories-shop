import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import StarRating from '../../components/StarRating';
import '../../styles/ItemDetail.css'; // 새로운 CSS 파일을 임포트합니다.

const ItemDetail = () => {
  const product = {
    image: '../assets/product.jpg',
    name: '상품 이름이 들어갈 공간입니다.',
    price: '12345원',
    discount: '253%',
    originalPrice: '31234원',
    seller: '(주)엘리스물산',
    stock: '32,725개',
    description: '판매자가 등록한 상품 관련 설명과 제품사진',
  };

  const reviews = [
    {
      name: '홍길동',
      date: '2024.05.24',
      rating: 4,
      content: '리뷰 내용이 들어갑니다. 리뷰 250자까지...'
    },
    {
      name: '이몽룡',
      date: '2024.05.24',
      rating: 5,
      content: '리뷰 내용이 들어갑니다. 리뷰 250자까지...'
    },
    {
      name: '김삿갓',
      date: '2024.05.24',
      rating: 3.5,
      content: '리뷰 내용이 들어갑니다. 리뷰 250자까지...'
    },
  ];

  return (
      <>
        <Header />
        <div className="container product-detail-container">
          <div className="breadcrumb">
            홈 > 방향제/공기청정
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src={product.image} alt={product.name} className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h1>{product.name}</h1>
              <StarRating rating={4.5} /> <span>4.5점 (997,931개 리뷰)</span>
              <p><strong>{product.discount} {product.originalPrice}</strong></p>
              <p><strong className="price">{product.price}</strong></p>
              <p>판매자: {product.seller}</p>
              <p>남은 상품 개수: {product.stock}</p>
              <div className="d-flex align-items-center mb-3">
                <input type="number" className="form-control w-25 mr-2" defaultValue="1" />
                <button className="btn btn-outline-secondary mr-2">장바구니 담기</button>
                <button className="btn btn-primary">구매하기</button>
              </div>
            </div>
          </div>
          <div className="product-description my-5">
            <h2>상품 설명</h2>
            <p>{product.description}</p>
          </div>
          <div className="product-reviews my-5">
            <h2>총 상품평</h2>
            <StarRating rating={5} /> <span>5점 (98,757)</span>
            <div className="reviews-list">
              {reviews.map((review, index) => (
                  <div key={index} className="review-item">
                    <div className="review-header d-flex align-items-center justify-content-between">
                      <div>
                        <strong>{review.name}</strong> <span>{review.date}</span>
                      </div>
                      <StarRating rating={review.rating} />
                    </div>
                    <p>{review.content}</p>
                  </div>
              ))}
            </div>
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex="-1">Previous</a>
                </li>
                {[...Array(10).keys()].map(num => (
                    <li className="page-item" key={num}>
                      <a className="page-link" href="#">{num + 1}</a>
                    </li>
                ))}
                <li className="page-item">
                  <a className="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Footer />
      </>
  );
};

export default ItemDetail;