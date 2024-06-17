import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const ItemPasswordCheck = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 비밀번호 확인 로직 (서버와 통신)
    const isPasswordCorrect = true; // 예시로 true로 설정
    if (isPasswordCorrect) {
      navigate('/edit-profile'); // 비밀번호가 맞으면 판매자 정보 수정 페이지로 이동
    } else {
      alert('비밀번호가 틀렸습니다. 다시 시도해주세요.');
    }
  };

  return (
    <>
      <Header />
      <main style={{ marginBottom: "5%" }}>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px", width: "100%" }}>
          <div className="p-5" style={{ maxWidth: "1000px", width: "100%", backgroundColor: "white", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
            <h3 className="fs-4" style={{ fontWeight: "bold" }}>상품정보 수정</h3>
            <h6 style={{ color: "#666" }}>정보 수정을 위해 비밀번호를 확인해주세요.</h6>
            <hr />
            <div className="d-flex flex-column flex-shrink-0 p-3" style={{ width: "90%", marginLeft: "2%", borderRadius: "10px", padding: "20px" }}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formPassword">
                  <Form.Label>비밀번호</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: '100%' }} // 입력 창 너비 조정
                  />
                </Form.Group>

                <div className="d-flex justify-content-start">
                  <Button variant="primary" type="submit" style={{ marginRight: '10px', marginTop: '20px' }}>
                    확인
                  </Button>
                  <Button variant="secondary" type="button" style={{ marginTop: '20px', backgroundColor: '#555', border: 'none' }}>
                    취소
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ItemPasswordCheck;
