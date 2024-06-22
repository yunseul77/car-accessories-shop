import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import Cookies from 'js-cookie'; // Add this import if you use js-cookie to manage cookies
import '../../styles/ItemManage.css';

const ItemManage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const fetchProducts = async (page = 0, size = 10) => {
    try {
      const accessToken = Cookies.get('accessToken');
      if (!accessToken) {
        throw new Error("접근 권한이 없습니다.");
      }

      const response = await axios.get(`http://localhost:8080/item/itemList`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
        params: {
          page: page,
          size: size
        }
      });

      const { content, totalPages } = response.data;
      setProducts(content);
      setTotalPages(totalPages);
      setCurrentPage(page);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handlePageChange = (page) => {
    fetchProducts(page);
  };

  return (
      <>
        <div className="main-container">
          <div className="container content-container">
            <h3 className="fs-4" style={{fontWeight: 'bold'}}>상품 관리</h3>
            <div className="d-flex justify-content-end mb-3">
              <button className="btn btn-primary">상품 등록</button>
            </div>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="thead-dark">
                <tr>
                  <th>등록 상품</th>
                  <th>납품 제고</th>
                  <th>판매가/정상가/할인율</th>
                  <th>등록된 페이지</th>
                  <th>등록일</th>
                  <th>변경</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product, index) => (
                    <tr key={index}>
                      <td>
                        <div className="product-info">
                          <img src={product.titleImageUrl} alt="상품 이미지" className="product-image"/>
                          <span>{product.name}</span>
                        </div>
                      </td>
                      <td>{product.id}</td>
                      <td>
                        {product.price}<br/>
                        {product.discount}
                      </td>
                      <td>{product.categoryName}</td>
                      <td>{product.date}</td>
                      <td>
                        <button className="btn btn-secondary btn-sm mx-1">수정</button>
                        <button className="btn btn-danger btn-sm mx-1">삭제</button>
                      </td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 0 ? 'disabled' : ''}`}>
                  <a className="page-link" href="#" tabIndex="-1" onClick={() => handlePageChange(currentPage - 1)}>Previous</a>
                </li>
                {[...Array(totalPages).keys()].map(num => (
                    <li className={`page-item ${currentPage === num ? 'active' : ''}`} key={num}>
                      <a className="page-link" href="#" onClick={() => handlePageChange(num)}>{num + 1}</a>
                    </li>
                ))}
                <li className={`page-item ${currentPage === totalPages - 1 ? 'disabled' : ''}`}>
                  <a className="page-link" href="#" onClick={() => handlePageChange(currentPage + 1)}>Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </>
  );
};

export default ItemManage;
