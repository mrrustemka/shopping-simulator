import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Info from "./Info";
import Product from "./Product";
import products from "../data/products_sample.json";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

function ProductList() {
  const customerInfo = useSelector((state) => state);
  let basketPrice = 0;
  customerInfo.basket.forEach((element) => {
    const positionPrice = products.find((el) => el.sku === element.sku);
    basketPrice += positionPrice.price * element.quantity;
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
                  count={basketPrice.toFixed(2)}
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
          <Button variant="outlined">Proceed to Checkout</Button>
        </Link>
      </div>
    </div>
  );
}

export default ProductList;
