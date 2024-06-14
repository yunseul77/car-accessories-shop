import {useEffect, useState} from "react";

const usePrice = (initialPrice = 0) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const UpdateTotalPrice = async () => {
    try{
      const response = await fetch(`${sellerId}/orderpages`, {
        method: "GET",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({ totalPrice: totalPrice})
      });

      if (response.ok) {
        const data = await response.json();
        setTotalPrice(data.totalPrice || initialPrice);
      } else {
        console.log("총 결제금액 업데이트에 실패했습니다");
      }
    } catch (error) {
      console.log("총 결제금액을 불러오는데 실패했습니다.");
    }
  };

  useEffect(() => {

  }, []);

}