import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import StarRating from "../component/StarRating";
import HtmltoText from "../component/HtmltoText";
import { FindOneProduct } from "../api/api";
import Loading from "../component/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddtoCartButton from "../component/AddtoCartButton";
import { useSelector } from "react-redux";
const ProductDetails = () => {
  const user = useSelector((state) => state.user_sec.user);
  let [searchParams] = useSearchParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [variantID, setvariantID] = useState(0);
  const [countQuantity, setCountQuantity] = useState(1);
  const [reviewData, setReviewData] = useState({
    rating: "",
    email: "",
    comment: "",
    id: "",
  });
  // Fetch Data
  useEffect(() => {
    const data = async () => {
      await FindOneProduct(searchParams.get("pid"))
        .then((res) => {
          setLoading(false);
          setProduct(res.data.product);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    data();
  }, []);
  useEffect(() => {}, []);
  const handelRate = (value) => {
    setReviewData({ ...reviewData, rating: value });
  };
  const handelSubmitReview = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}product/review`,
        {
          rating: reviewData.rating,
          comment: reviewData.comment,
          email: reviewData.email,
          id: searchParams.get("pid"),
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
        toast.success(res.data.message, {
          position: "bottom-center",
          autoClose: 5000,
          closeOnClick: true,
          theme: "light",
        });
        setReviewData({
          rating: "",
          email: "",
          comment: "",
          shortID: "",
        });
      })
      .catch((err) => {
        console.log(err.response.data.error);
        toast.error(err.response.data.error, {
          position: "bottom-center",
          autoClose: 5000,
          closeOnClick: true,
          theme: "light",
        });
      });
  };
  if (loading) {
    return <Loading />;
  }
 console.log(user);
  return (
    <section className="py-8">
      <ToastContainer />
      <div className="container">
        <div className="border-b pb-4 mb-6 flex flex-col lg:flex-row justify-around items-center lg:items-start relative">
          <h2 className="text-3xl font-bold lg:text-2xl text-primary font-sans uppercase text-center">
            Product Details
          </h2>
        </div>
        {/* Product Details */}
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2 flex gap-2 product_image h-fit">
            {product?.variant.map((item, i) => (
              <div
                onClick={() => setvariantID(i)}
                key={item._id}
                className={`border rounded-lg overflow-hidden cursor-pointer ${
                  i === variantID ? "active" : ""
                }`}
              >
                <img src={item?.image} alt="img" />
              </div>
            ))}
          </div>
          <div className="lg:w-1/2">
            <div>
              <h3 className="font-bold lg:text-2xl text-primary font-sans mb-2 text-start capitalize">
                {product?.name}
              </h3>
              <h4 className="font-bold lg:text-2xl text-primary font-sans mb-2 text-start capitalize">
                ID: {product?.shortID}
              </h4>
              <div className="flex items-center gap-2 my-2">
                <ul className="flex gap-1 text-orange-400">
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                </ul>
                <p className="font-sans text-base font-semibold text-primary">
                  {product?.reviews.length} Reviews
                </p>
              </div>
              <div className="border-b flex gap-3">
                <h3 className="font-bold lg:text-2xl font-sans uppercase text-lg mb-2 text-start text-slate-500 line-through">
                  {product?.variant[variantID]?.originalPrice}Tk
                </h3>
                <h3 className="font-bold lg:text-2xl text-primary font-sans uppercase mb-2 text-start">
                  {product?.variant[variantID]?.sellingPrice}Tk
                </h3>
              </div>
              <div className="flex gap-2 items-center mt-4">
                <p className="text-xl font-sans uppercase font-semibold text-primary  text-start">
                  Color:
                </p>
                <ul className="flex gap-1 items-center mt-2 product_color">
                  {product?.variant.map((item, i) => (
                    <li
                      key={item?._id}
                      className={`${i === variantID ? "active" : ""}`}
                    >
                      <span
                        onClick={() => setvariantID(i)}
                        style={{ backgroundColor: item.color }}
                        className={`w-6 h-6 cursor-pointer rounded-full border inline-block`}
                      ></span>
                    </li>
                  ))}
                </ul>
              </div>
              {product?.variant[variantID]?.size && (
                <div className="flex gap-2 items-center my-4">
                  <p className="text-xl font-sans uppercase font-semibold text-primary  text-start">
                    Size:
                  </p>
                  <ul className="flex gap-1 items-center">
                    {product?.variant?.map((item) => (
                      <li key={item?._id}>
                        <span className="py-1 px-2 rounded-sm border inline-block">
                          {item?.size}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {product?.variant[variantID]?.storage && (
                <div className="flex gap-2 items-center my-4">
                  <p className="text-xl font-sans uppercase font-semibold text-primary  text-start">
                    Size:
                  </p>
                  <ul className="flex gap-1 items-center">
                    {product?.variant?.map((item) => (
                      <li key={item?._id}>
                        <span className="py-1 px-2 rounded-sm border inline-block">
                          {item?.storage}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-3">
                <div className="flex items-center gap-2">
                  <p className="text-xl font-sans uppercase font-semibold text-primary  text-start">
                    Quantity:
                  </p>
                  <div className="border border-secondary w-fit">
                    <button
                      onClick={() =>
                        countQuantity > 1 && setCountQuantity(countQuantity - 1)
                      }
                      className="px-8 py-1 text-xl font-bold"
                    >
                      -
                    </button>
                    <span className="font-semibold text-primary text-xl">
                      {countQuantity}
                    </span>
                    <button
                      onClick={() => setCountQuantity(countQuantity + 1)}
                      className="px-8 py-1 text-xl font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="text-xl font-sans uppercase font-semibold text-primary mt-2 text-start">
                  Status:
                  <span className="py-1 px-2 font-normal text-secondary font-sans text-center capitalize">
                    {product?.variant[variantID]?.quantity > 0
                      ? "In Stock"
                      : "Out Of Stock"}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex gap-5 mt-10">
              <AddtoCartButton
                productId={product}
                variant={product?.variant[variantID]._id}
                quantity={countQuantity}
              />
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="my-8">
          <p className="font-bold lg:text-2xl text-primary font-sans uppercase text-start mb-2">
            Product Details:
          </p>
          <HtmltoText htmlContent={product?.description} />
        </div>
        {/* Customer Review */}
        <div className="my-4">
          <p className="font-bold lg:text-2xl text-primary font-sans uppercase text-start mb-2 mt-8">
            Customer Review (5) :
          </p>
          {product?.reviews.map((item) => (
            <div key={item._id} className="border-b pb-3 my-3">
              <div className="flex gap-2 items-center pb-2">
                <p className="font-sans text-base font-semibold text-primary">
                  {item?.userId?.fullName}
                </p>
                <ul className="flex gap-1 text-orange-400">
                  {[...Array(item.rating).keys()].map((item) => (
                    <li key={item}>
                      <FaStar className="text-yellow-500" />
                    </li>
                  ))}
                </ul>
              </div>
              <p className=" font-sans text-secondary">{item?.comment}</p>
            </div>
          ))}
          {/* Add Review */}
          <div className="md:w-1/2 xl:w-1/4">
            <p className="font-bold lg:text-2xl text-primary font-sans uppercase mt-8 mb-3 text-start">
              Add Review
            </p>
            <p className="font-sans text-base font-semibold text-primary">
              Your Rating
            </p>
            <StarRating getRate={handelRate} />
            <div className="mt-5">
              <label className="font-sans text-base font-semibold text-primary">
                Email
                <input
                  value={reviewData.email}
                  type="email"
                  placeholder="Your email.."
                  className="inputField ml-0"
                  onChange={(e) =>
                    setReviewData({ ...reviewData, email: e.target.value })
                  }
                />
              </label>
              <label className="font-sans text-base font-semibold text-primary">
                Review
                <textarea
                  value={reviewData.comment}
                  type="email"
                  placeholder="Your opinion"
                  className="inputField ml-0"
                  onChange={(e) =>
                    setReviewData({ ...reviewData, comment: e.target.value })
                  }
                />
              </label>
            </div>
            <button onClick={handelSubmitReview} className="btn py-3 px-8">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
