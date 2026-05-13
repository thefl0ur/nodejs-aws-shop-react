const API_PATHS = {
  product: import.meta.env.VITE_API_PRODUCT || "",
  order: import.meta.env.VITE_API_ORDER || "",
  import: import.meta.env.VITE_API_IMPORT || "",
  bff: import.meta.env.VITE_API_BFF || "",
  cart: import.meta.env.VITE_API_CART || "",
};

export default API_PATHS;
