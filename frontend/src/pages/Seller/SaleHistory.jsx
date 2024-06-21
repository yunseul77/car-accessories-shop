import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from '../../components/Header';
import Footer from "../../components/Footer";
import '../../styles/SaleHistory.css'; // 새로운 CSS 파일을 임포트합니다.

const SaleHistory = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    // 여기에 API 호출을 통해 데이터를 가져오는 로직을 추가할 수 있습니다.
    // 현재는 예시 데이터를 사용합니다.
    const fetchSales = async () => {
      const exampleSales = [
        {
          category: '생활용품/잡화',
          productName: '상품명 예시',
          productPrice: '238000원',
          quantity: 20,
          totalAmount: '5660000원',
          buyerId: 'qwerasdf1234',
          buyerName: '홍길동',
          buyerPhone: '010-9999-8888',
          saleTime: '2024-05-25 17:56:32',
        },
        // 여기에 더 많은 예시 데이터를 추가하세요
      ];
      setSales(exampleSales);
    };

    fetchSales();
  }, []);

  return (

        <div className="body-background">
          <div className="container sale-history-container">
            <h3 className="fs-4" style={{fontWeight: 'bold'}}>판매완료 내역</h3>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="thead-dark">
                <tr>
                  <th>카테고리</th>
                  <th>상품명</th>
                  <th>판매가격</th>
                  <th>판매수량</th>
                  <th>총 판매 금액</th>
                  <th>구매자 ID</th>
                  <th>구매자 성명</th>
                  <th>구매자 연락처</th>
                  <th>판매완료 시간</th>
                </tr>
                </thead>
                <tbody>
                {sales.map((sale, index) => (
                    <tr key={index}>
                      <td>{sale.category}</td>
                      <td>{sale.productName}</td>
                      <td>{sale.productPrice}</td>
                      <td>{sale.quantity}</td>
                      <td>{sale.totalAmount}</td>
                      <td>{sale.buyerId}</td>
                      <td>{sale.buyerName}</td>
                      <td>{sale.buyerPhone}</td>
                      <td>{sale.saleTime}</td>
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

  );
};

export default SaleHistory;