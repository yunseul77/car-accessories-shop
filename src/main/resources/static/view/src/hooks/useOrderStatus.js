import {useState, useEffect} from "react";

const useOrderStatus = (initialStatus = "주문 완료") => {
  const [deliveryStatus, setDeliveryStatus] = useState(initialStatus);

const updateDeliveryStatus = async () => {
  try {
    const response = await fetch('${sellerId}/orderpages', {
      method: "GET",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({ deliveryStatus: deliveryStatus})
    });

    if (response.ok) {
      const data = await response.json();
      setDeliveryStatus(data.deliveryStatus || initialStatus);
    } else {
      console.log("배송 상태 업데이트에 실패했습니다.")
    }
  }
  catch (error) {
    console.log("배송 상태를 불러오는데 실패했습니다.")
  }
}

useEffect(() => {
  updateDeliveryStatus();
}, [deliveryStatus]);

return [deliveryStatus, setDeliveryStatus];
};

export default useOrderStatus;
