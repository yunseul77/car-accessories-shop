import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useParams, useNavigate } from 'react-router-dom';

const ItemEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [itemInfo, setItemInfo] = useState({
    itemName: '',
    itemPrice: '',
    discountRate: '',
    stockQuantity: '',
    category: '',
    saleTitle: '',
    description: '',
  });
  const [file, setFile] = useState(null);

  useEffect(() => {
    // 상품 정보를 가져오는 로직
    fetch(`/api/items/${id}`)
      .then(response => response.json())
      .then(data => {
        setItemInfo({
          itemName: data.itemName,
          itemPrice: data.itemPrice,
          discountRate: data.discountRate,
          stockQuantity: data.stockQuantity,
          category: data.category,
          saleTitle: data.saleTitle,
          description: data.description,
        });
      })
      .catch(error => {
        console.error("There was an error fetching the item!", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItemInfo({
      ...itemInfo,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 수정 로직
    const formData = new FormData();
    formData.append('itemName', itemInfo.itemName);
    formData.append('itemPrice', itemInfo.itemPrice);
    formData.append('discountRate', itemInfo.discountRate);
    formData.append('stockQuantity', itemInfo.stockQuantity);
    formData.append('category', itemInfo.category);
    formData.append('saleTitle', itemInfo.saleTitle);
    formData.append('description', itemInfo.description);
    if (file) {
      formData.append('file', file);
    }

    fetch(`/api/items/${id}`, {
      method: 'PUT',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log("Item updated successfully:", data);
        navigate(`/items/${id}`);
      })
      .catch(error => {
        console.error("There was an error updating the item!", error);
      });
  };

  return (
    <>
      <Header />
      <main style={{ marginBottom: "5%" }}>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px", width: "100%" }}>
          <div className="p-5" style={{ maxWidth: "800px", width: "100%", backgroundColor: "white", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
            <h3 className="fs-4" style={{ fontWeight: "bold" }}>상품 수정</h3>
            <h6 style={{ color: "#666" }} >수정할 상품의 정보를 입력해주세요.</h6>
            <hr />
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formItemName" className="mb-3">
                <Form.Label>상품명</Form.Label>
                <Form.Control
                  type="text"
                  name="itemName"
                  value={itemInfo.itemName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formItemPrice" className="mb-3">
                <Form.Label>상품 가격</Form.Label>
                <Form.Control
                  type="number"
                  className="no-arrow"
                  name="itemPrice"
                  value={itemInfo.itemPrice}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formDiscountRate" className="mb-3">
                <Form.Label>할인율</Form.Label>
                <Form.Control
                  type="number"
                  className="no-arrow"
                  name="discountRate"
                  value={itemInfo.discountRate}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formStockQuantity" className="mb-3">
                <Form.Label>재고 수량</Form.Label>
                <Form.Control
                  type="number"
                  className="no-arrow"
                  name="stockQuantity"
                  value={itemInfo.stockQuantity}
                  onChange={handleChange}
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
                      <Form.Control as="select" name="category" value={itemInfo.category} onChange={handleChange} className="custom-select">
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
                  name="saleTitle"
                  maxLength="50"
                  value={itemInfo.saleTitle}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formDescription" className="mb-3">
                <Form.Label>설명</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="description"
                  value={itemInfo.description}
                  onChange={handleChange}
                />
              </Form.Group>

              <div className="d-flex justify-content-start">
                <Button variant="primary" type="submit" style={{ marginRight: '10px' }}>
                  수정 완료
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

export default ItemEdit;
