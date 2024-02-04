import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Info from "./Info";
import Product from "./Product";
import products from "../data/products_sample.json";
import {
  Button,
  Typography,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  Table,
} from "@mui/material";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

function ProductList() {
  const customerInfo = useSelector((state) => state);
  customerInfo.totalPrice = 0;
  customerInfo.basket.forEach((element) => {
    const positionPrice = products.find((el) => el.sku === element.sku);
    customerInfo.totalPrice += positionPrice.price;
  });
  return (
    <div>
      <Typography variant="h1" component="h1" textAlign="center">
        Catalog
      </Typography>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell align="center">
                <Info
                  message="Basket Items"
                  count={customerInfo.basket.length}
                  unit=""
                />
              </TableCell>
              <TableCell align="center">
                <Info
                  message="Total Price"
                  count={customerInfo.totalPrice}
                  unit="$"
                />
              </TableCell>
            </TableRow>
          </TableHead>
          {products.map((product) => (
            <Product
              key={product.sku}
              id={product.sku}
              name={product.name}
              description={product.description}
              price={product.price}
              basketLimit={product.basketLimit}
            />
          ))}
        </Table>
      </TableContainer>
      <div className="navigation">
        <Link to="/basket" align="center">
          <Button variant="outlined" endIcon={<ShoppingBasketOutlinedIcon />}>
            Proceed to Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ProductList;
