import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from '../../components/Header';
import '../../styles/ItemManage.css';
import Footer from "../../components/Footer"; // 새로운 CSS 파일을 임포트합니다.

const ItemManage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // 여기에 API 호출을 통해 데이터를 가져오는 로직을 추가할 수 있습니다.
    // 현재는 예시 데이터를 사용합니다.
    const fetchProducts = async () => {
      const exampleProducts = [
        {
          image: '../assets/test.png',
          name: '차량용 침입 모기장',
          id: '123121',
          price: '12345원',
          discount: '253%',
          page: '판매중 페이지',
          date: '2024.05.25',
        },
        // 여기에 더 많은 예시 데이터를 추가하세요
      ];
      setProducts(exampleProducts);
    };

    fetchProducts();
  }, []);

  return (
      <>
        <Header/>
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
                          <img src={product.image} alt="상품 이미지"
                               className="product-image"/>
                          <span>{product.name}</span>
                        </div>
                      </td>
                      <td>{product.id}</td>
                      <td>
                        {product.price}<br/>
                        {product.discount}
                      </td>
                      <td>{product.page}</td>
                      <td>{product.date}</td>
                      <td>
                        <button className="btn btn-secondary btn-sm mx-1">수정
                        </button>
                        <button className="btn btn-danger btn-sm mx-1">삭제
                        </button>
                      </td>
                    </tr>
                ))}
                </tbody>
              </table>
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
        <Footer/>
      </>
  );
};

export default ItemManage;