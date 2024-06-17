import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ItemRegistration.css';

const ItemRegistration = () => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [discountRate, setDiscountRate] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [saleTitle, setSaleTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 등록 로직
    console.log({
      itemName,
      itemPrice,
      discountRate,
      stockQuantity,
      category,
      saleTitle,
      description,
      file,
    });
    // 서버로 데이터를 전송하는 로직을 추가하세요
  };

  return (
    <>
      <Header />
      <main style={{ marginBottom: "5%" }}>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px", width: "100%" }}>
          <div className="p-5" style={{ maxWidth: "800px", width: "100%", backgroundColor: "white", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
            <h3 className="fs-4" style={{ fontWeight: "bold" }}>상품 등록</h3>
            <h6 style={{ color: "#666" }} >판매할 상품의 정보를 작성해주세요.</h6>
            <hr />
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formItemName" className="mb-3">
                <Form.Label>상품명</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="상품명을 입력하세요"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formItemPrice" className="mb-3">
                <Form.Label>상품 가격</Form.Label>
                <Form.Control
                  type="number"
                  className="no-arrow"
                  placeholder="상품 가격을 입력하세요"
                  value={itemPrice}
                  onChange={(e) => setItemPrice(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formDiscountRate" className="mb-3">
                <Form.Label>할인율</Form.Label>
                <Form.Control
                  type="number"
                  className="no-arrow"
                  placeholder="할인율을 입력하세요"
                  value={discountRate}
                  onChange={(e) => setDiscountRate(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formStockQuantity" className="mb-3">
                <Form.Label>재고 수량</Form.Label>
                <Form.Control
                  type="number"
                  className="no-arrow"
                  placeholder="재고 수량을 입력하세요"
                  value={stockQuantity}
                  onChange={(e) => setStockQuantity(e.target.value)}
                />
              </Form.Group>

              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="formFile">
                    <Form.Label>파일 첨부</Form.Label>
                    <Form.Control type="file" onChange={handleFileChange} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formCategory">
                    <Form.Label>카테고리</Form.Label>
                    <div className="custom-select-wrapper">
                      <Form.Control as="select" value={category} onChange={(e) => setCategory(e.target.value)} className="custom-select">
                        <option value="">카테고리를 선택하세요</option>
                        <option value="방향제/공기청정">방향제/공기청정</option>
                        <option value="바닥매트/트렁크매트">바닥매트/트렁크매트</option>
                        <option value="시트/쿠션">시트/쿠션</option>
                        <option value="커버/몰딩">커버/몰딩</option>
                        <option value="수납/정리용품">수납/정리용품</option>
                        <option value="편의용품/액세서리">편의용품/액세서리</option>
                        <option value="햇빛가리개/썬팅">햇빛가리개/썬팅</option>
                      </Form.Control>
                    </div>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="formSaleTitle" className="mb-3">
                <Form.Label>판매글 제목</Form.Label>
                <Form.Control
                  type="text"
                  maxLength="50"
                  placeholder="판매글 제목을 입력하세요 (최대 50자)"
                  value={saleTitle}
                  onChange={(e) => setSaleTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formDescription" className="mb-3">
                <Form.Label>설명</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="상품의 광고 사진과 설명을 입력하세요"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>

              <div className="d-flex justify-content-start">
                <Button variant="primary" type="submit" style={{ marginRight: '10px' }}>
                  등록
                </Button>
                <Button variant="secondary" type="button" style={{ backgroundColor: '#555', border: 'none' }}>
                  취소
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ItemRegistration;
