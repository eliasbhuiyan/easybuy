import { useNavigate } from "react-router-dom";
const Product = ({ product, width }) => {
  const item = product;
  const navigate = useNavigate();
  const handelDetails = (item) => {
    navigate(`/productdetails/:${item.slug}?pid=${item._id}`);
  };
  return (
    <div
      className={`${
        width ? width : "w-[48%] sm:w-[31%]"
      }  border rounded-md cursor-pointer`}
    >
      <div
        onClick={() => handelDetails(item)}
        className="relative group overflow-hidden"
      >
        <img className="w-full" src={item?.image} alt={item?.imageAlt} />
      </div>
      <div className="p-2">
        <div className="flex justify-between gap-x-1 pt-2 pb-2 lg:pt-6 lg:pb-4">
          <h2 className="font-dn font-bold text-primary text-sm">
            {item?.name}
          </h2>
          <div className="border-b flex gap-3 items-center">
            <h3 className="text-sm mb-2 text-start text-slate-500 line-through">
              {item?.variant[0].originalPrice}Tk
            </h3>
            <h3 className=" mb-2 text-start font-semibold">
              {item?.variant[0].sellingPrice}Tk
            </h3>
          </div>
        </div>
        {item?.variant[0].color && (
          <>
            <p className="block">Color :</p>
            <p className="font-dn font-normal text-secondary text-sm flex gap-1">
              {item?.variant.map((variant) => (
                <span key={variant._id}>{variant.color} ,</span>
              ))}
            </p>
          </>
        )}
      </div>
    </div>
  );
};
export default Product;
