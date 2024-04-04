import axios from "axios";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const AddtoCartButton = ({ productId, variant, quantity }) => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user_sec.user);
  const handelAdd = () => {
    if(!user){
      navigate("/login")
    }else{
      axios
      .post(
        `${import.meta.env.VITE_API_URL}product/addtocart`,
        {
          userId: user.auth,
          productId: productId._id,
          variantId: variant,
          quantity,
        },
        {
          headers: {
            Authorization: `Bearer user@${user.auth}@${
              import.meta.env.VITE_SWTSECRT
            }`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };
  return (
    <button onClick={handelAdd} className="btn">
      Add To Cart
    </button>
  );
};
AddtoCartButton.propTypes = {
  productId: PropTypes.object.isRequired,
  variant: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
export default AddtoCartButton;
