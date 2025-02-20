import { useContext } from "react";
import { ProductContext } from "../../context/context";

export const ProductList = () => {
   const { products, total, setTotal } = useContext(ProductContext);

  return (
    <div>
      <h1>Lista de productos</h1>
      <ul>   
         {products.map((product) => (     
          <li>
            {product.name}
            {product.price}
            {product.date}
          </li> 
         ))}       
      </ul>
    </div>
  );
};
/*crear boton eliminar, mostrar fechaa y ordenar por precio
  1. crear boton eliminar
  2. mostrar fecha
  3. ordenar por precio o alfabeticamente
  4. generar id automaticamente
*/
