import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Main.css'; // 새로운 CSS 파일을 임포트합니다.

const Main = () => {
  const bestProducts = [
    // 여기에 오늘의 BEST 상품 데이터 추가
  ];

  const discountProducts = [
    // 여기에 오늘의 할인 특가 상품 데이터 추가
  ];

  const categoryProducts = [
    // 여기에 카테고리별 추천 상품 데이터 추가
  ];

  return (
      <>
        <Header />
        <div className="main-container">
          <div className="container">
            <div className="hero-section">
              <img src="../assets/hero-image.jpg" alt="Hero" className="img-fluid" />
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
                          <p>{product.rating}</p>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </section>

            <section className="discount-products my-5">
              <h2>오늘의 할인 특가</h2>
              <div className="row">
                {discountProducts.map((product, index) => (
                    <div className="col-md-4" key={index}>
                      <div className="product-card">
                        <img src={product.image} alt={product.name} className="img-fluid" />
                        <div className="product-info">
                          <h5>{product.name}</h5>
                          <p>{product.price}</p>
                          <p>{product.discount}</p>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </section>

            <section className="category-products my-5">
              <h2>카테고리별 추천 상품</h2>
              {categoryProducts.map((category, index) => (
                  <div key={index} className="category-section">
                    <h3>{category.name}</h3>
                    <div className="row">
                      {category.products.map((product, idx) => (
                          <div className="col-md-4" key={idx}>
                            <div className="product-card">
                              <img src={product.image} alt={product.name} className="img-fluid" />
                              <div className="product-info">
                                <h5>{product.name}</h5>
                                <p>{product.price}</p>
                                <p>{product.rating}</p>
                              </div>
                            </div>
                          </div>
                      ))}
                      <div className="col-md-4">
                        <div className="category-banner">
                          <img src={category.bannerImage} alt={category.name} className="img-fluid" />
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </section>
          </div>
        </div>
        <Footer />
      </>
  );
};

export default Main;