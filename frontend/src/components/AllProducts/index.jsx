import React from "react";
import { useState, useEffect } from "react";

import "./AllProducts.css";


function AllProducts() {

  const [ product, setProducts ] = useState([]);

  useEffect(() => {
    async function fetchData(){
        const returnProducts = await fetch("http://localhost:3005/products");
        setProducts(await returnProducts.json());
    }
    fetchData();    
}, []); 

  return (       

      <div className="container my-3">
        <div className="mt-3 row row-cols-3 text-center">
          
          {product.map(item => (            
            
              <div className="all-products">
                <div key={item.idProduto} id={item.categoria} className="box-product">
                  <img
                    src={require(`./images/${item.imagem}`).default}
                    alt="Imagem de Produtos"
                  />
                  <br />
                  <p className="description">{item.descricao}</p>
                  <hr />
                  <p className="previousvalue">R$ {item.precoAnterior}</p>
                  <p className="currentvalue">R$ {item.precoFinal}</p>
                </div>
              </div>            
          ))};
        </div>
      </div>    
  );
};

export default AllProducts;