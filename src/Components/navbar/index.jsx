import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartcount = useSelector((store) => store.cart.cartcount);
  const cartitems = useSelector((store) => store.cart.cartItems);
  console.log(cartitems);
  return (
    <nav className="navbar  navbar-expand-lg bg-light">
      <div className="container-fluid mx-5">
        <Link className="navbar-brand" to="/">
          Naill Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end  "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item me-3">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/counter">
                Donate
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/signup">
                Sign Up
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/signin">
                Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart">
                <button type="button" className="btn btn-primary">
                  <FontAwesomeIcon icon={faCartShopping} />{" "}
                  <span className="badge bg-secondary">{cartcount}</span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
