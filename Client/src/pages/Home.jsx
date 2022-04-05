// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
// import { resetRegisteredOrLogin } from "../redux/userRedux";
// import { publicRequest, userRequest } from "../requestmethods";

const Home = () => {
  // const { currentUser } = useSelector((state) => state.user);
  // const ROL = useSelector((state) => state.user?.registeredOrLogin);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const createCart = async () => {
  //     // console.log(currentUser);
  //     if (ROL === "registered") {
  //       const token = currentUser?.accessToken;
  //       const { data: cartData } = await publicRequest.post(
  //         `/carts`,
  //         {
  //           userId: currentUser._id,
  //         },
  //         {
  //           headers: { token: "Bearer " + token },
  //         }
  //       );
  //       dispatch(resetRegisteredOrLogin());
  //       // console.log(cartData);
  //     } else if (ROL === "login") {
  //       const token = currentUser?.accessToken;
  //       // console.log(token);
  //       const { data: cartData } = await publicRequest.get(
  //         `/carts/find/${currentUser?._id}`,
  //         {
  //           headers: { token: "Bearer " + token },
  //         }
  //       );
  //       dispatch(resetRegisteredOrLogin());
  //       // console.log(cartData);
  //     }
  //   };
  //   currentUser && createCart();
  // }, [currentUser]);

  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
