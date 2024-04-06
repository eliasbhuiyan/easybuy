import axios from "axios";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
export const BuyProduct = ({ productId, variant, quantity }) => {
  const user = useSelector((state) => state.user_sec.user);
  const stripePromise = loadStripe(
    "pk_test_51P2RlyEfcXF8Whok4AVhQy1rgThYS8EhRB42XrQZf25eXi3oTHQZLKFZoyPgbavEQA5edRQAENbp2S3Nm9m4JxdS00otFeplFf"
  );
  // process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  const hendelBuy = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}product/createorder`,
        {
          userId: user.auth,
          product: productId._id,
          variant: variant._id,
          quantity: quantity,
          totalAmount: variant.sellingPrice,
        },
        {
          headers: {
            Authorization: `Bearer user@${user.auth}@${
              import.meta.env.VITE_SWTSECRT
            }`,
          },
        }
      )
      .then(async (product) => {
        const stripe = await stripePromise;
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}product/create-checkout-session`,
          {
            product: product.data,
            name: productId.name,
          },
          {
            headers: {
              Authorization: `Bearer user@${user.auth}@${
                import.meta.env.VITE_SWTSECRT
              }`,
            },
          }
        );
        console.log(res.data.id);
        await stripe
          .redirectToCheckout({
            sessionId: res.data.id,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <button onClick={hendelBuy} className="btn">
      Buy Now
    </button>
  );
};
