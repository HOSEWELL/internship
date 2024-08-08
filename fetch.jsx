import React, { useState, useEffect } from "react";
import ProductCard from "./productcard";


const Product= () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then((response) => {
                response.json().then((resp) => {
                    console.log(resp)
                    setProducts(resp.filter((product) =>
                        product.title.toLowerCase().includes(searchTerm.toLowerCase())
                    ))
                })
            }).catch((err) => {
                console.err(err);
            })
    })

    return (
        <>
                <div>                    
                    {
                        products.map((prod, index) => {
                            return (
                                <div className="col-md-4 mb-3" key={index}>
                                    <ProductCard product={prod} />
                                </div>
                            )
                        })
                    }
                </div>

           
        </>
    )
}
export default Product;
