import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Badge from './Badge';
import Product from './Product';

const items = [...Array(120).keys()];
function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
            <div className='w-[48%] sm:w-[31%] relative'>
                <Product src="images/product-1.png"/>
                    <Badge title="New"/>
                    <div>
                        <div className="flex justify-between gap-x-1 pt-2 pb-2 lg:pt-6 lg:pb-4">
                            <h2 className='font-dn font-bold text-primary text-sm'>Basic Crew Neck Tee</h2>
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
    const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
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
        <p className='font-dm font-normal text-secondary text-sm'>Products from {itemOffset} to {itemOffset+ itemsPerPage} of {items.length}</p>
        </div>
    </div>
  );
}