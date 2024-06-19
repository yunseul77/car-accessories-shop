import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import test from '../../assets/test.png';
import styles from '../../styles/ItemListByCategory.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ItemListByCategory = () => {
    return (
    <>
    <Header />
        <main id="content" className="content list">
            <div className="category-bar">
                <div className="category-bar-content">
                    <div className="category-result">
                    <ul>
                        <li>
                            <a href="/" >
                                홈
                                <svg className="category-arrow-icon" width="12" height="13" viewBox="0 0 12 13" fill="none" xmins="http://www.w3.org/2000/svg">
                                <path d="M3.8859 2.15732C4.0606 1.9717 4.34367 1.94925 4.54434 2.09575L4.59268 2.1359L8.84268 6.1359C9.03746 6.31922 9.05137
                                6.61975 8.88442 6.81982L8.84268 6.8641L4.59268 10.8641C4.3916 11.0534 4.07516 11.0438 3.8859 10.8427C3.7112 10.6571 3.70593
                                10.3732 3.86432 10.1817L3.90732 10.1359L7.77 6.50001L3.90732 2.8641C3.7217 2.6894 3.69925 2.40634 3.84575 2.20566L3.8859 2.15732Z" fill="#AAB5C0">
                                </path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="/카테고리이름">
                                방향제/공기청정
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
            <form>
                <div className="item-container">
                    <div className="item-body">
                        <h2 className="item-list-title">방향제/공기청정</h2>
                        <div className="item-list-container">
                            <ul className="item-list">
                                <li className="baby-item">
                                    <a className="baby-item-link" href="/상품링크">
                                        <dl className="baby-item-wrap">
                                            <dt className="image">
                                                <img src={test} />
                                            </dt>
                                            <dd className="descriptions">
                                                <div className="name">12312124</div>
                                                <div className="price-area">
                                                    <del className="base-price">124124124</del>
                                                    <span className="discount-percentage">35%</span>
                                                </div>
                                                <div className="discount-price">123123124</div>
                                                <div className="rating-value">124124</div>
                                            </dd>
                                        </dl>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="product-list-paging">
                    <div className="page-warp">
                    </div>
                </div>
            </form>
        </main>
    <Footer />
    </ >
    )
}

export default ItemListByCategory;