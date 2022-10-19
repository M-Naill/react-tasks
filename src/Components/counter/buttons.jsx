import { useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "../../redux/counterSlice";

function Buttons() {
  const dispatch = useDispatch();
  const increase = () => {
    dispatch(incrementCount(5));
  };
  const decrease = () => {
    dispatch(decrementCount(5));
  };

  return (
    <div className="d-flex justify-content-center">
      <button className="btn btn-primary" onClick={increase}>
        +
      </button>
      <button className="btn btn-danger" onClick={decrease}>
        -
      </button>
    </div>
  );
}

export default Buttons;
