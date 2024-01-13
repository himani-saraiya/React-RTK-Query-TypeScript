import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import GoogleIcon from "@mui/icons-material/Google";
import { useGetProductsDataQuery } from "../services/BuySlice";

const Buy = () => {
  const { data, isLoading, error } = useGetProductsDataQuery("");
  const [paymentOption, setPaymentOption] = useState("cash");
  const navigate = useNavigate();
  const { elId } = useParams<{ elId: string }>();

  useEffect(() => {
    handleData();
  });

  const handlePaymentOptionChange = (option: string) => {
    setPaymentOption(option);
  };

  const handleData = () => {
    if (isLoading) {
      return <p>Loading....</p>;
    } else if (error) {
      return <p>Error loading data</p>;
    }

    const selectedProduct = data.products.find((el: any) => el.id === (elId ? parseInt(elId) : 0));

    if (!selectedProduct) {
      return <p>Product not found</p>;
    }

    return (
      <div className="main bg-slate-200  " key={selectedProduct.id}>
        <div className=" buy-container grid grid-cols-4 gap-4">
          <div className="imgbuy">
            <img className="image" src={selectedProduct.images[0]} alt="" />
          </div>
          <div>
            <h1 style={{ fontFamily: "sans-serif", marginTop: "40px" }} className="cart ">
              Id: {selectedProduct.id}
              <br />
              <br />
              category: {selectedProduct.category}
              <br />
              <br />
              price: {selectedProduct.price}
              <br />
              <br />
              Title: {selectedProduct.title}
              <br />
              <br />
              Rating:
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </h1>
            <br />

            <div>
              <h3 className="text-blue-600">Select Payment Option:</h3>
              <br />

              <div className="payment-option">
                <input
                  type="radio"
                  checked={paymentOption === "cash"}
                  onChange={() => handlePaymentOptionChange("cash")}
                />
                <label htmlFor="cash">
                  <LocalShippingIcon /> Cash on Delivery
                </label>
              </div>
              <br />

              <div className="payment-option">
                <input
                  type="radio"
                  checked={paymentOption === "phonepe"}
                  onChange={() => handlePaymentOptionChange("phonepe")}
                  required
                />
                <label htmlFor="phonepe">
                  <PhoneAndroidIcon /> PhonePe
                </label>
              </div>
              <br />

              <div className="payment-option">
                <input
                  type="radio"
                  checked={paymentOption === "googlepay"}
                  onChange={() => handlePaymentOptionChange("googlepay")}
                />
                <label htmlFor="googlepay">
                  {" "}
                  <GoogleIcon />
                  Google Pay
                </label>
              </div>
            </div>

            <div className="d-grid gap-2" style={{ marginTop: "20px" }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<PaymentIcon />}
                onClick={() => {navigate("/productconfirmed")}}
              >
                Buy
              </Button>
            </div>

            <div className="d-grid gap-2" style={{ marginTop: "10px" }}>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<HomeIcon />}
                onClick={() => {
                  navigate("/");
                }}
              >
                Go To Home Page
              </Button>
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="card1">
        <div className="main bg-slate-200">
          <div>{handleData()}</div>
        </div>
      </div>
    </>
  );
};

export default Buy;
