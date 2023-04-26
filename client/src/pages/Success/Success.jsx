import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/service";

function Success() {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await newRequest.put(`/orders`, { payment_intent });
        setTimeout(() => {
          navigate("/myorders");
        }, [5000]);
      } catch (error) {
        console.log(error);
      }
    };
    makeRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>
        Payment sucessfull.You are being redirected to the orders page. Please
        do not close the page.
      </h1>
    </div>
  );
}

export default Success;
