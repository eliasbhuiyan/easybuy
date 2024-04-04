import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";
import { ProductData } from "../api/api";
import Loading from "./Loading";

function Items({ currentItems }) {
  return (
    <>
      {currentItems.map(
        (item) =>
          item.status === "approved" && (
            <Product key={item._id} product={item} />
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

Items.propTypes = {
  currentItems: PropTypes.array.isRequired,
};
