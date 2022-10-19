import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { removefromcart } from "../../redux/cartSlice";

const Cart = () => {
  let cartitems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();
  const handleremovecart = (product) => {
    dispatch(removefromcart(product));
    console.log(product);
  };
  console.log(cartitems);
  return cartitems.map((item) => {
    return (
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col">
            <div className="card-body p-4">
              <div className="row align-items-center">
                <div className="col-md-2">
                  <img
                    src={item.image}
                    className="img-fluid"
                    alt="Generic placeholder image"
                  />
                </div>
                <div className="col-md-2 d-flex justify-content-center">
                  <div>
                    <p className="small text-muted mb-4 pb-2">Name</p>
                    <p className="lead fw-normal mb-0">{item.title}</p>
                  </div>
                </div>
                <div className="col-md-2 d-flex justify-content-center">
                  <div>
                    <p className="small text-muted mb-4 pb-2">Quantity</p>
                    <div className="d-flex">
                      <button className="btn btn-danger">-</button>
                      <p className="lead fw-normal mb-0"></p>
                      <button className="btn btn-success">+</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 d-flex justify-content-center">
                  <div>
                    <p className="small text-muted mb-4 pb-2">Price</p>
                    <p className="lead fw-normal mb-0">{item.price}$</p>
                  </div>
                </div>
                <div className="col-md-2 d-flex justify-content-center">
                  <div>
                    <p className="small text-muted mb-4 pb-2">Total</p>
                    <p className="lead fw-normal mb-0">$</p>
                  </div>
                </div>
                <div className="col-md-2 d-flex justify-content-center">
                  <div>
                    <a>
                      {" "}
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => handleremovecart(item)}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};
export default Cart;
