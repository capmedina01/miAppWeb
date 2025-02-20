import React from "react";
import { ProductContext } from "../../context/context";
import { useContext } from "react";

export const FormCard = () => {
  const {
    products,
    setProducts,
    nameProduct,
    setNameProduct,
    priceProduct,
    setPriceProduct,
    dateProduct,
    setDateProduct,
    total,
    setTotal,
  } = useContext(ProductContext);

   const handleAddProduct = (e) => {
      e.preventDefault();
   }

  return (
    <div className="flex-row ">
      <div>
        <form action="" onSubmit="handleAddProduct">
          <h1>Agregar Producto</h1>
          <input type="text" placeholder="agregue un producto" onChange="" />
          <input type="number" placeholder="agregue el precio" onChange="" />
          <input type="date" placeholder="fecha de compra" onChange="" />
          <button type="submit">Agregar Producto</button>
        </form>
      </div>
    </div>
  );
};
