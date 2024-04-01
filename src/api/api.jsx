let Catagory = [
  {
    name: "Girls' Fashion",
    subCatagory: [
      {
        name: "শারি",
      },
      {
        name: "ব্লাউজ",
      },
      {
        name: "লিপস্টিক",
      },
      {
        name: "ময়দা",
      },
    ],
  },
  {
    name: "Mens' Fashion",
    subCatagory: [
      {
        name: "পাঞ্জাবি",
      },
      {
        name: "শার্ট",
      },
      {
        name: "বক্সার",
      },
      {
        name: "Trimmer",
      },
    ],
  },
  {
    name: "Kids fashion",
  },
];
let Colors = [
  {
    name: "Pink",
    code: "pink",
  },
  {
    name: "Red",
    code: "red",
  },
  {
    name: "Green",
    code: "green",
  },
  {
    name: "Blue",
    code: "blue",
  },
];
let Brand = [
  {
    name: "Mens World",
  },
  {
    name: "Catch Eye",
  },
  {
    name: "Rich Man",
  },
  {
    name: "CR7",
  },
];
let Price = [
  {
    name: "$0.00 - $9.99",
  },
  {
    name: "$10.00 - $19.99",
  },
  {
    name: "$20.00 - $29.99",
  },
  {
    name: "$30.00 - $39.99",
  },
];

import axios from "axios";

// const UserList = (auth) => {
//   try {
//     const res = axios.get(`${import.meta.env.VITE_API_URL}auth/userlist`, {
//       headers: {
//         Authorization: `Bearer user@${auth}@${import.meta.env.VITE_SWTSECRT}`,
//       },
//     });
//     return res;
//   } catch (error) {
//     return error;
//   }
// };
const FindUser = (auth, id) => {
  try {
    const res = axios.post(
      `${import.meta.env.VITE_API_URL}auth/finduser`,
      {
        id,
      },
      {
        headers: {
          Authorization: `Bearer user@${auth}@${import.meta.env.VITE_SWTSECRT}`,
        },
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};
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
const CatagorybyId = (auth, id) => {
  try {
    const res = axios.post(
      `${import.meta.env.VITE_API_URL}catagory/getcatagorybyid`,
      { id },
      {
        headers: {
          Authorization: `Bearer user@${auth}@${import.meta.env.VITE_SWTSECRT}`,
        },
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};
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

export {
  //   AllMerchant,
  //   UserList,
  CatagoryData,
  SubCatagoryData,
  ProductData,
  CatagorybyId,
  FindOneProduct,
  FindUser,
  Catagory,
  Colors,
  Brand,
  Price,
};
