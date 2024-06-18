import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

const PasswordCheck = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 비밀번호 확인 로직 (서버와 통신)
    const isPasswordCorrect = true; // 예시로 true로 설정
    if (isPasswordCorrect) {
      navigate('/edit-profile'); // 비밀번호가 맞으면 회원 정보 수정 페이지로 이동
    } else {
      alert('비밀번호가 틀렸습니다. 다시 시도해주세요.');
    }
  };

  return (
    <>
      <Header />
      <main style={{ marginBottom: "5%" }}>
        <div className="b-example-divider"></div>
        <div className="row">
          <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{ width: "14%", minHeight: "300px", maxHeight: "600px", overflowY: "auto", marginLeft: "17%" }}>
            <a href="#" className="d-flex align-items-center justify-content-center mb-3 mb-md-0 link-body-emphasis text-decoration-none">
              <span className="fs-4" style={{ fontWeight: "bold" }}>마이페이지</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <a href="/order" className="nav-link link-body-emphasis" aria-current="page">주문목록</a>
              </li>
              <li>
                <a href="/order" className="nav-link active">회원정보 조회/수정</a>
              </li>
              <li>
                <a href="/order" className="nav-link link-body-emphasis">작성리뷰 목록</a>
              </li>
            </ul>
            <hr />
          </div>
          <div className="d-flex flex-column flex-shrink-0 p-3" style={{ width: "48%", marginLeft: "2%" }}>
            <h3 className="fs-4" style={{ fontWeight: "bold" }}>회원정보 조회/수정</h3>
            <h6 style={{ color: "#666" }}>정보 조회를 위해 비밀번호를 확인해주세요.</h6>
            <hr />
            <Form onSubmit={handleSubmit} style={{ margin: '5% auto', width: '100%' }}>
              <Form.Group controlId="formPassword">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" style={{ marginRight: '10px', marginTop: '20px' }}>
                확인
              </Button>
              <Button variant="secondary" type="button" style={{ marginTop: '20px', backgroundColor: '#555', border: 'none' }}>
                취소
              </Button>
            </Form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PasswordCheck;
