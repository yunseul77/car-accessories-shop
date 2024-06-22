import React from 'react';
import StarRating from './StarRating';
import styles from '../styles/BabyItem.css';
import { Link } from 'react-router-dom';

const formatCurrency = (amount) => {
        return Math.floor(amount).toLocaleString();
    };

const BabyItem = ({ item }) => {
    return (
        <li className="baby-item">
            <Link className="baby-item-link" to={`/item/${item.id}`}>
                <dl className="baby-item-wrap">
                    <dt className="image">
                        <img src={item.titleImageUrl || '/default-image.jpg'} alt="상품이미지" />
                    </dt>
                    <dd className="descriptions">
                        <div className="name">{item.itemTitle}</div>
                        <div className="price-area">
                            <del className="base-price">{formatCurrency(item.price)}원</del>
                            <span className="discount-percentage">{item.discount}%</span>
                        </div>
                        <div className="discount-price"><strong>{formatCurrency(item.discountPrice)}원</strong></div>
                        <div className="rating-value">
                            <StarRating rating={item.averageRating} /> <span>{item.averageRating}점 ({item.reviewCount}개 리뷰)</span>
                        </div>
                    </dd>
                </dl>
            </Link>
        </li>
    );
};

export default BabyItem;
