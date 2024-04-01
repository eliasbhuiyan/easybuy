import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";
import { ProductData } from "../api/api";
import Loading from "./Loading";

function Items({ currentItems }) {
  const navigate = useNavigate();
  const handelDetails = (item) => {
    navigate(`/productdetails/:${item.slug}?pid=${item._id}`);
  };
  return (
    <>
      {currentItems.map(
        (item) =>
          item.status === "approved" && (
            <div
              key={item._id}
              className="w-[48%] sm:w-[31%] border rounded-md"
            >
              <Product src={item.image} alt={item.imageAlt} pid={item._id} />
              <div
                onClick={() => handelDetails(item)}
                className="p-2 cursor-pointer"
              >
                <div className="flex justify-between gap-x-1 pt-2 pb-2 lg:pt-6 lg:pb-4">
                  <h2 className="font-dn font-bold text-primary text-sm">
                    {item.name}
                  </h2>
                  <div className="border-b flex gap-3 items-center">
                    <h3 className="text-sm mb-2 text-start text-slate-500 line-through">
                      {item.variant[0].originalPrice}Tk
                    </h3>
                    <h3 className=" mb-2 text-start text-brand">
                      {item.variant[0].sellingPrice}Tk
                    </h3>
                  </div>
                </div>
                {item.variant[0].color && (
                  <>
                    <p className="block">Color :</p>
                    <p className="font-dn font-normal text-secondary text-sm flex gap-1">
                      {item.variant.map((variant) => (
                        <span key={variant._id}>{variant.color} ,</span>
                      ))}
                    </p>
                  </>
                )}
              </div>
            </div>
          )
      )}
    </>
  );
}

export const Pagination = ({ itemsPerPage }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = async () => {
      await ProductData()
        .then((res) => {
          setProduct(res.data.product);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    data();
  }, []);

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = product.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(product.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % product.length;
    setItemOffset(newOffset);
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="flex flex-wrap justify-between gap-y-12">
        <Items currentItems={currentItems} />
      </div>
      <div className="flex flex-col md:flex-row gap-y-2 justify-between items-center mt-12">
        <ReactPaginate
          breakLabel="..."
          nextLabel=""
          previousLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="flex flex-wrap gap-2"
          activeClassName="bg-primary border-primary text-white"
          pageClassName="py-1 px-2 md:py-2 md:px-4 border-2 text-secondary font-dm font-normal text-sm"
        />
        <p className="font-dm font-normal text-secondary text-sm">
          Products from {itemOffset} to {itemOffset + itemsPerPage} of{" "}
          {product.length}
        </p>
      </div>
    </div>
  );
};
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

Items.propTypes = {
  currentItems: PropTypes.array.isRequired,
};
