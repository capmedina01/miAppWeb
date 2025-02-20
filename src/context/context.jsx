import { createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [nameProduct, setNameProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState(0);
  const [dateProduct, setDateProduct] = useState("");
  const [total, setTotal] = useState(0);

  return(
      <ProductContext.Provider value={{
         products,
         setProducts,
         nameProduct,
         setNameProduct,
         priceProduct,
         setPriceProduct,
         dateProduct,
         setDateProduct,
         total,
         setTotal
      }}>
         {children}
      </ProductContext.Provider>
  )
};
