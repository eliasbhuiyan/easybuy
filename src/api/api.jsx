import axios from "axios";

const CatagoryData = () => {
  try {
    const res = axios.get(
      `${import.meta.env.VITE_API_URL}catagory/getallcatagory`,
      {
        headers: {
          Authorization: `Bearer user@${import.meta.env.VITE_PUBLICROUTE}@${
            import.meta.env.VITE_SWTSECRT
          }`,
        },
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};
// const CatagorybyId = (auth, id) => {
//   try {
//     const res = axios.post(
//       `${import.meta.env.VITE_API_URL}catagory/getcatagorybyid`,
//       { id },
//       {
//         headers: {
//           Authorization: `Bearer user@${auth}@${import.meta.env.VITE_SWTSECRT}`,
//         },
//       }
//     );
//     return res;
//   } catch (error) {
//     return error;
//   }
// };
const SubCatagoryData = () => {
  try {
    const res = axios.get(
      `${import.meta.env.VITE_API_URL}catagory/getallsubcatagory`,
      {
        headers: {
          Authorization: `Bearer user@${import.meta.env.VITE_PUBLICROUTE}@${
            import.meta.env.VITE_SWTSECRT
          }`,
        },
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};
const ProductData = () => {
  try {
    const res = axios.get(
      `${import.meta.env.VITE_API_URL}product/getallproduct`,
      {
        headers: {
          Authorization: `Bearer user@${import.meta.env.VITE_PUBLICROUTE}@${
            import.meta.env.VITE_SWTSECRT
          }`,
        },
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};
const FindOneProduct = (id) => {
  try {
    const res = axios.post(
      `${import.meta.env.VITE_API_URL}product/findoneproduct`,
      {
        id: id,
      },
      {
        headers: {
          Authorization: `Bearer user@${import.meta.env.VITE_PUBLICROUTE}@${
            import.meta.env.VITE_SWTSECRT
          }`,
        },
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};
const ShowCart = (auth) => {
  if(auth){
    try {
      const res = axios.get(`${import.meta.env.VITE_API_URL}product/showcart`, {
        headers: {
          Authorization: `Bearer user@${auth}@${import.meta.env.VITE_SWTSECRT}`,
        },
      });
      return res;
    } catch (error) {
      return error;
    }
  }
};

export {
  CatagoryData,
  SubCatagoryData,
  ProductData,
  // CatagorybyId,
  FindOneProduct,
  ShowCart,
};
