import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../redux/cartSlice";
import { fetchProducts } from "../../redux/productsSlice";
import "./style.css";
function Shop() {
  const dispatch = useDispatch();
  const productList = useSelector((store) => store.product.productsList);
  console.log(productList);
  const handleaddTocart = (product) => {
    dispatch(addTocart(product));
  };

  useEffect(() => {
    dispatch(fetchProducts());
  });

  return (
    <>
      <h2 className="pb-4"> Our Products </h2>
      <div className="container">
        <div className="row">
          {productList.map((prod) => {
            return (
              <div className="col " key={prod.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    className="img-wrapper "
                    variant="top"
                    src={prod.image}
                  />
                  <Card.Body>
                    <Card.Title className="product-title">
                      {prod.title}
                    </Card.Title>
                    <Card.Text className="product-desc">
                      {prod.description}{" "}
                    </Card.Text>
                    <Card.Text className="price text-danger fz-4">
                      {prod.price} EGP{" "}
                    </Card.Text>
                    <Button
                      variant="primary"
                      className="me-3"
                      onClick={() => handleaddTocart(prod)}
                    >
                      Add To Cart
                    </Button>
                    <Link to={`shop/${prod.id}`}>
                      {" "}
                      <Button variant="dark">Details</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Shop;
