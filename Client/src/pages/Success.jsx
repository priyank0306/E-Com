import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { userRequest } from "../requestmethods";

const Success = () => {
  const location = useLocation();

  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            _id: item._id,
            quantity: item.quantity,
          })),
          amount: cart.totalPrice,
          address: `${data.card.address_line1 || "Unknown"}, ${
            data.card.address_zip || "Unknown"
          }, ${data.card.address_city || "Unknown"}, ${
            data.card.address_country || "Unknown"
          }`,
        });
        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}

      <Link to="/"></Link>
      <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
    </div>
  );
};

export default Success;

// import React from "react";

// const Success = () => {
//   const location = useLocation();

//   console.log(location.state);
//   return <div>Success</div>;
// };

// export default Success;
