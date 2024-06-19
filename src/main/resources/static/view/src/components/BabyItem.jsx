import React from 'react';
import StarRating from './StarRating';
import styles from '../styles/BabyItem.css';

const BabyItem = ({ item }) => {
    return (
        <li className="baby-item">
            <a className="baby-item-link" href={`/item/${item.id}`}>
                <dl className="baby-item-wrap">
                    <dt className="image">
                        <img src={item.titleImageUrl || '/default-image.jpg'} alt="상품이미지" />
                    </dt>
                    <dd className="descriptions">
                        <div className="name">{item.name}</div>
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
            </a>
        </li>
    );
};

export default BabyItem;
