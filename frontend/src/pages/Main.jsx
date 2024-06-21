import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import StarRating from '../components/StarRating';
import '../styles/Main.css';
import category1 from '../assets/category1.jpg';
import category2 from '../assets/category2.jpg';
import category3 from '../assets/category3.jpg';
import category4 from '../assets/category4.jpg';
import category5 from '../assets/category5.jpg';
import category6 from '../assets/category6.jpg';
import category7 from '../assets/category7.jpg';
import title from '../assets/title.jpg';

const Main = () => {
  const bestProducts = [
    { name: '베스트 상품 1', price: '₩10000', rating: 5, image: '' },
    { name: '베스트 상품 2', price: '₩20000', rating: 4, image: '' },
    { name: '베스트 상품 3', price: '₩30000', rating: 4.5, image: '' },
    { name: '베스트 상품 4', price: '₩40000', rating: 3.5, image: '' },
    { name: '베스트 상품 5', price: '₩50000', rating: 5, image: '' },
    { name: '베스트 상품 6', price: '₩60000', rating: 4, image: '' },
  ];

  const discountProducts = [
    { name: '할인 상품 1', price: '₩10000', discount: '10%', image: '' },
    { name: '할인 상품 2', price: '₩20000', discount: '20%', image: '' },
    { name: '할인 상품 3', price: '₩30000', discount: '30%', image: '' },
    { name: '할인 상품 4', price: '₩40000', discount: '40%', image: '' },
    { name: '할인 상품 5', price: '₩50000', discount: '50%', image: '' },
  ];

  const categoryProducts = [
    {
      name: '방향제/공기청정',
      bannerImage: category1,
      products: [
        { name: '상품 1', price: '₩10000', rating: 5, image: '' },
        { name: '상품 2', price: '₩20000', rating: 4, image: '' },
        { name: '상품 3', price: '₩30000', rating: 4.5, image: '' },
        { name: '상품 4', price: '₩40000', rating: 4, image: '' },
      ],
    },
    {
      name: '바닥/트렁크 매트',
      bannerImage: category2,
      products: [
        { name: '상품 1', price: '₩10000', rating: 5, image: '' },
        { name: '상품 2', price: '₩20000', rating: 4, image: '' },
        { name: '상품 3', price: '₩30000', rating: 4.5, image: '' },
        { name: '상품 4', price: '₩40000', rating: 4, image: '' },
      ],
    },
    {
      name: '시트/쿠션',
      bannerImage: category3,
      products: [
        { name: '상품 1', price: '₩10000', rating: 5, image: '' },
        { name: '상품 2', price: '₩20000', rating: 4, image: '' },
        { name: '상품 3', price: '₩30000', rating: 4.5, image: '' },
        { name: '상품 4', price: '₩40000', rating: 4, image: '' },
      ],
    },
    {
      name: '커버/차량몰딩',
      bannerImage: category4,
      products: [
        { name: '상품 1', price: '₩10000', rating: 5, image: '' },
        { name: '상품 2', price: '₩20000', rating: 4, image: '' },
        { name: '상품 3', price: '₩30000', rating: 4.5, image: '' },
        { name: '상품 4', price: '₩40000', rating: 4, image: '' },
      ],
    },
    {
      name: '수납/정리용품',
      bannerImage: category5,
      products: [
        { name: '상품 1', price: '₩10000', rating: 5, image: '' },
        { name: '상품 2', price: '₩20000', rating: 4, image: '' },
        { name: '상품 3', price: '₩30000', rating: 4.5, image: '' },
        { name: '상품 4', price: '₩40000', rating: 4, image: '' },
      ],
    },
    {
      name: '편의용품/액세서리',
      bannerImage: category6,
      products: [
        { name: '상품 1', price: '₩10000', rating: 5, image: '' },
        { name: '상품 2', price: '₩20000', rating: 4, image: '' },
        { name: '상품 3', price: '₩30000', rating: 4.5, image: '' },
        { name: '상품 4', price: '₩40000', rating: 4, image: '' },
      ],
    },
    {
      name: '썬팅/햇빛가리개',
      bannerImage: category7,
      products: [
        { name: '상품 1', price: '₩10000', rating: 5, image: '' },
        { name: '상품 2', price: '₩20000', rating: 4, image: '' },
        { name: '상품 3', price: '₩30000', rating: 4.5, image: '' },
        { name: '상품 4', price: '₩40000', rating: 4, image: '' },
      ],
    },
  ];

  return (
      <>
        <div className="main-container">
          <div className="container">
            <div className="title-image-container">
              <img src={title} alt="Hero" className="img-fluid title-image" />
            </div>

            <section className="best-products my-5">
              <h2>오늘의 BEST</h2>
              <div className="row">
                {bestProducts.map((product, index) => (
                    <div className="col-md-4" key={index}>
                      <div className="product-card">
                        <img src={product.image} alt={product.name} className="img-fluid" />
                        <div className="product-info">
                          <h5>{product.name}</h5>
                          <p>{product.price}</p>
                          <StarRating rating={product.rating} />
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </section>
            <hr />
            <section className="discount-products my-5">
              <h2>오늘의 할인 특가</h2>
              <div className="d-flex flex-wrap justify-content-between">
                {discountProducts.map((product, index) => (
                    <div className="product-card" key={index}>
                      <img src={product.image} alt={product.name} className="img-fluid" />
                      <div className="product-info">
                        <h5>{product.name}</h5>
                        <p>{product.price}</p>
                        <p>{product.discount}</p>
                      </div>
                    </div>
                ))}
              </div>
            </section>

            <section className="category-products my-5">
              <h2>카테고리별 추천 상품</h2>
              {categoryProducts.map((category, index) => (
                  <React.Fragment key={index}>
                    <hr />
                    <div className="category-section my-4">
                      <h3>{category.name}</h3>
                      <div className="row">
                        <div className="col-md-8">
                          <div className="row">
                            {category.products.map((product, idx) => (
                                <div className="col-md-6" key={idx}>
                                  <div className="product-card">
                                    <img src={product.image} alt={product.name} className="img-fluid" />
                                    <div className="product-info">
                                      <h5>{product.name}</h5>
                                      <p>{product.price}</p>
                                      <StarRating rating={product.rating} />
                                    </div>
                                  </div>
                                </div>
                            ))}
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="category-banner">
                            <img
                                src={category.bannerImage}
                                alt={category.name}
                                className="img-fluid"
                                style={{ width: '280px', height: '430px', objectFit: 'cover' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
              ))}
            </section>
          </div>
        </div>
      </>
  );
};

export default Main;