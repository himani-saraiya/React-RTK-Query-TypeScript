import React, { useEffect, useState } from "react";
import "./Fatchdata.css"
import {useNavigate } from "react-router-dom";
import {
  AppBar,
  Button,
  IconButton,
  Rating,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useGetProductsQuery } from "../services/PostSlice";

const FatchData: React.FC = () => {
  const { data , isLoading, error } = useGetProductsQuery("");
  const [count, setCount] = useState<number>(0);
  const navigate=useNavigate()
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    handleData();
  });
  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleAddToCart = (el: any) => {
    const countAsString = String(count);
    setCount(parseFloat(countAsString) + 1);
  };

  const handleData = () => {
    if (isLoading) {
      return <p>Loading....</p>;
    } else if (error) {
      return <p>Error loading data</p>;
    } else {
      // console.log(data);
    }
  };
  const filteredProducts = data?.products?.filter((el: any) => {
    return el.brand.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <TextField
              style={{ width: "500px" }}
              focused
              type="text"
              placeholder="Search products"
              value={searchTerm}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: <SearchIcon style={{ color: "white" }} />,
              }}
            />
          </Typography>
          <Typography variant="h6" component="div">
            <AddShoppingCartIcon />
            Cart: {count}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="main">
        <div className="btn-group-sm" style={{ marginTop: "20px" }}></div>
        {filteredProducts?.map((post: any) => {
          return (
            <div className="card" key={post.id}>
              <div className="img">
                <img
                  className="image card-img-top"
                  src={post.images[0]}
                  alt="abc"
                ></img>
              </div>

              <h1 style={{ fontFamily: "sans-serif" }}>
                Id:{post.id}
                <br />
                Brand:{post.brand}
                <br />
                category:{post.brand}
                <br />
                price:{post.category}
                <br />
                Title:{post.title}
                <br />
                <br />
                Rating:
                <Rating  value={post.rating}/>
              </h1>
              <IconButton color="error" aria-label="add to shopping cart" onClick={handleAddToCart}>
                <AddShoppingCartIcon/>
                Add to cart
              </IconButton>
              <Button
                variant="outlined"
                size="small"
                onClick={() => navigate(`/products/${post.id}`)}
              >
                <ShoppingBasket />
                Buy
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FatchData;
