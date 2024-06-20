import React from 'react';
import StarRating from './StarRating';
import styles from '../styles/BabyItem.css';
import { Link } from 'react-router-dom';

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
                            <del className="base-price">{item.price.toLocaleString()}원</del>
                            <span className="discount-percentage">{item.discount}%</span>
                        </div>
                        <div className="discount-price">{item.discountPrice.toLocaleString()}원</div>
                        <div className="rating-value">
                            <StarRating rating={item.ratingValue} />
                        </div>
                    </dd>
                </dl>
            </Link>
        </li>
    );
};

export default BabyItem;
