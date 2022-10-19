import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTocart, removefromcart } from "../../redux/cartSlice";

function Shop() {
  const [prods, setProds] = useState([]);
  const dispatch = useDispatch();
  const getProds = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProds(json));
  };

  const handleaddTocart = (product) => {
    dispatch(addTocart(product));
  };

  useEffect(() => {
    getProds();
  }, []);

  return (
    <>
      <h2 className="pb-4"> Our Products </h2>
      <div className="container">
        <div className="row">
          {prods.map((prod) => {
            // console.log(prod);
            return (
              <div className="col " key={prod.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={prod.image} />
                  <Card.Body>
                    <Card.Title>{prod.title}</Card.Title>
                    <Card.Text>{prod.description} </Card.Text>
                    <Card.Text className="price text-danger fz-4">
                      {prod.price} EGP{" "}
                    </Card.Text>
                    <Button
                      variant="dark"
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
