import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

function Details() {
  const params = useParams();
  const { id } = useParams;

  const [prod, setProd] = useState({});

  const getProd = () => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProd(json));
  };

  useEffect(() => {
    getProd();
  }, []);

  return (
    <div className="container text-center pt-5">
      <div className="row d-flex mt-5">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={prod.image} />
          <Card.Body>
            <Card.Title>{prod.title}</Card.Title>
            <Card.Title>{prod.category}</Card.Title>
            <Card.Text>{prod.description} </Card.Text>
            <Card.Text className="price text-danger fz-4">
              {prod.price} EGP
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Details;
