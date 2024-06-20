import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/ItemRegistration.css';

const ItemRegistration = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [itemTitle, setItemTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // FormData 객체 생성
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('discount', discount);
    formData.append('stockQuantity', stockQuantity);
    formData.append('categoryId', categoryId);
    formData.append('itemTitle', itemTitle);
    formData.append('description', description);
    formData.append('file', file);

    // 서버로 데이터 전송
    try {
      const response = await fetch('http://localhost:8080/item/addItem', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log('상품 등록 결과:', data);
      // 등록 완료 후 추가적인 작업 수행
    } catch (error) {
      console.error('상품 등록 중 오류 발생:', error);
      // 오류 처리 로직
    }
  };

  return (
    <>
      <div style={{ marginTop: "5%", marginBottom: "5%" }}>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px", width: "100%" }}>
          <div className="p-5" style={{ maxWidth: "800px", width: "100%", backgroundColor: "white", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
            <h3 className="fs-4" style={{ fontWeight: "bold" }}>상품 등록</h3>
            <h6 style={{ color: "#666" }}>판매할 상품의 정보를 작성해주세요.</h6>
            <hr />
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formItemName" className="mb-3">
                <Form.Label>상품명</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="상품명을 입력하세요"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formItemPrice" className="mb-3">
                <Form.Label>상품 가격</Form.Label>
                <Form.Control
                  type="number"
                  className="no-arrow"
                  placeholder="상품 가격을 입력하세요"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formDiscountRate" className="mb-3">
                <Form.Label>할인율</Form.Label>
                <Form.Control
                  type="number"
                  className="no-arrow"
                  placeholder="할인율을 입력하세요"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
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
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>파일 첨부</Form.Label>
                    <Form.Control type="file" onChange={handleFileChange} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formCategory">
                    <Form.Label>카테고리</Form.Label>
                    <div className="custom-select-wrapper">
                      <Form.Control as="select" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} className="custom-select">
                        <option value="">카테고리를 선택하세요</option>
                        <option value="40">방향제/공기청정</option>
                        <option value="41">바닥매트/트렁크매트</option>
                        <option value="42">시트/쿠션</option>
                        <option value="43">커버/몰딩</option>
                        <option value="44">수납/정리용품</option>
                        <option value="45">편의용품/액세서리</option>
                        <option value="46">햇빛가리개/썬팅</option>
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
                  value={itemTitle}
                  onChange={(e) => setItemTitle(e.target.value)}
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
      </div>
    </>
  );
};

export default ItemRegistration;
