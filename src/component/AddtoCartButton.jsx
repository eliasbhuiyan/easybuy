import axios from "axios";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
const AddtoCartButton = ({ product, variant, quantity }) => {
  const user = useSelector((state) => state.user_sec.user);
  const handelAdd = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}product/addtocart`,
        {
          userId: user.auth,
          productId: product,
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
  };
  return (
    <button onClick={handelAdd} className="btn">
      Add To Cart
    </button>
  );
};
AddtoCartButton.propTypes = {
  product: PropTypes.object.isRequired,
  variant: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
export default AddtoCartButton;
