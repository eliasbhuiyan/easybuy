import { useEffect, useState } from "react";
import Breadcrumd from "../component/Breadcrumd";
import { Pagination } from "../component/Pagination";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { CatagoryData } from "../api/api";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

export const Shop = () => {
  let [showNumber, setShowNumber] = useState(12);
  let [fixed, setFixed] = useState(false);
  const [catagory, setCatagory] = useState([]);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      let scrolling = window.scrollY;
      if (scrolling > 300) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    });
  }, []);

  useEffect(() => {
    CatagoryData().then((res) => {
      setCatagory(res.data.catagory);
    });
  }, []);
  return (
    <div>
      <div className="container">
        <Breadcrumd />
        <div className="flex flex-col md:flex-row gap-x-10">
          <div className="w-full md:w-1/4 relative">
            <div
              className={
                fixed &&
                "w-full fixed md:sticky top-[100px] left-0 z-40 md:z-0 bg-bg md:bg-white dropfixedMenu transition-all pl-3 md:pl-0 shadow-[0_1px_0px_rgb(0,0,0,0.12)] md:shadow-none md:pb-48 md:h-screen md:overflow-y-scroll scrl"
              }
            >
              <div>
                <h2 className="font-dm font-bold text-2xl">Shop By Category</h2>
                <Accordion>
                  {catagory.map(
                    (item) =>
                      item.status === "published" && (
                        <AccordionItem
                          key={item._id}
                          header={item.name}
                          className="border-b py-3 catagory"
                        >
                          {item.subCatagory.map((sub) => (
                            <div
                              key={sub._id}
                              className="flex items-start gap-2 font-dm font-normal text-lg text-secondary ml-2 mt-2 hover:translate-x-1 transition-all"
                            >
                              <MdOutlineSubdirectoryArrowRight />
                              <button>{sub.name}</button>
                            </div>
                          ))}
                        </AccordionItem>
                      )
                  )}
                </Accordion>
              </div>
              <div>
                <Accordion>
                  <AccordionItem
                    header={"Short By Price"}
                    className="border-b py-3 font-dm font-bold text-2xl relative price"
                  >
                    <div className="flex items-start gap-2 font-dm font-normal text-lg text-secondary ml-2 mt-4 hover:translate-x-1 transition-all">
                      <MdOutlineSubdirectoryArrowRight />
                      <button>$0.00 - $9.99</button>
                    </div>
                    <div className="flex items-start gap-2 font-dm font-normal text-lg text-secondary ml-2 mt-4 hover:translate-x-1 transition-all">
                      <MdOutlineSubdirectoryArrowRight />
                      <button>$10.00 - $19.99</button>
                    </div>
                    <div className="flex items-start gap-2 font-dm font-normal text-lg text-secondary ml-2 mt-4 hover:translate-x-1 transition-all">
                      <MdOutlineSubdirectoryArrowRight />
                      <button>$20.00 - $29.99</button>
                    </div>
                    <div className="flex items-start gap-2 font-dm font-normal text-lg text-secondary ml-2 mt-4 hover:translate-x-1 transition-all">
                      <MdOutlineSubdirectoryArrowRight />
                      <button>$30.00 - $39.99</button>
                    </div>
                    <div className="flex items-start gap-2 font-dm font-normal text-lg text-secondary ml-2 mt-4 hover:translate-x-1 transition-all">
                      <MdOutlineSubdirectoryArrowRight />
                      <button>$40.00 - $69.99</button>
                    </div>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="w-full md:w-9/12">
            <div className="flex justify-end gap-x-1 md:gap-x-10 mb-14">
              <div>
                <label
                  htmlFor="featured"
                  className="mb-2 text-sm font-medium text-secondary mr-3"
                >
                  Search by:
                </label>
                <input
                  type="text"
                  placeholder="Product Name"
                  className="w-auto md:w-60 border text-secondary text-sm font-dm rounded-lg focus:ring-amber-500 focus:border-amber-500 p-2.5"
                />
              </div>
              <div>
                <label
                  htmlFor="show"
                  className="mb-2 text-sm font-medium text-secondary mr-3"
                >
                  Show:
                </label>
                <select
                  onChange={(e) => setShowNumber(+e.target.value)}
                  id="show"
                  className="w-auto md:w-60 border text-secondary text-sm font-dm rounded-lg focus:ring-amber-500 focus:border-amber-500 p-2.5"
                >
                  <option selected value="12">
                    12
                  </option>
                  <option value="24">24</option>
                  <option value="48">48</option>
                </select>
              </div>
            </div>
            <Pagination itemsPerPage={showNumber} />
          </div>
        </div>
      </div>
    </div>
  );
};
