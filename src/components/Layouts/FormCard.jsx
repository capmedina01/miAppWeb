import React, { useState } from 'react'

export const FormCard = () => {
const[productName, setProductName ]= useState("");
const[productPrice, setProductPrice ]= useState(0);
const[productDate, setProductDate ]= useState("");
const [products, setProducts] = useState([]);

const handleAddProduct = (e) =>{
   e.preventDefault()

   const newProduct = {
      name: productName,
      price: productPrice,
      date: productDate
   }
   setProducts([...products,newProduct]);
   productName ="";
   productPrice = 0;
   productDate = "";

}

  return (
    <div className='flex-row '>
      <div>
         
         <form action=""
         onSubmit={handleAddProduct}
         >
         <h1>Agregar Producto</h1>
            <input
             type="text" 
             placeholder='agregue un producto'
             onChange={(e) => setProductName(e.target.value)}

             />
             <input
             type="number" 
             placeholder='agregue el precio'
             onChange={(e) => setProductPrice(e.target.value)}
             />
             <input
             type="date" 
             placeholder='fecha de compra'
             onChange={(e) => setProductDate(e.target.value)}
             />
             <button
             type='submit'             
             >
               Agregar Producto
             </button>
         </form>
      </div>
      <div>
         <h1>Lista de productos</h1>
         <ul>
            { products.map((product, index) => (
               <li>
                  {product.name}
                  {product.price}
                  {product.date}               
               </li>
            )
            
            )}
            
         </ul>
      </div>
    </div>
  )
}



