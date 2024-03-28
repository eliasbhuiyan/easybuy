import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Badge from './Badge';
import Product from './Product';
import {ProductData} from '../api/api'
import axios from 'axios';

function Items({ currentItems }) {
  console.log("currentItems", currentItems);
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
            <div key={item._id} className='w-[48%] sm:w-[31%] relative'>
                <Product src={item.image} alt={item.imageAlt}/>
                    <Badge title="New"/>
                    <div>
                        <div className="flex justify-between gap-x-1 pt-2 pb-2 lg:pt-6 lg:pb-4">
                            <h2 className='font-dn font-bold text-primary text-sm'>{item.name}</h2>
                            <p className='font-dn font-normal text-secondary text-xs'>$44.00</p>
                        </div>
                        <p className='font-dn font-normal text-secondary text-sm'>Black</p>
                    </div>
            </div>
        ))}
    </>
  );
}

export const Pagination = ({itemsPerPage}) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const data = async () => {
      await ProductData()
        .then((res) => {
          setProduct(res.data.product);
        }).catch((err) => {
          console.log(err);
        })
    };
    data();
  }, []);

  console.log(product);


  const items = [...Array(3).keys()];
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = product.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(product.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % product.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
    <div className='flex flex-wrap justify-between gap-y-12'>
      <Items currentItems={currentItems} />
    </div>
    <div className='flex flex-col md:flex-row gap-y-2 justify-between items-center mt-12'>
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
        <p className='font-dm font-normal text-secondary text-sm'>Products from {itemOffset} to {itemOffset+ itemsPerPage} of {product.length}</p>
        </div>
    </div>
  );
}
import PropTypes from 'prop-types';

Items.propTypes = {
  currentItems: PropTypes.array.isRequired,
};