import React           from 'react';
import { useParams }   from 'react-router-dom';
import DbFaker         from '../data/DbFaker';
import './Product.css';


const Product = (props) => {

    // Gets the database product id from the caller component (ProductsDisplay)
    const productId = useParams().id;
    console.log('productId => ' + productId);

    // Gets the product object which has productId, from DbFaker
    const dbFaker = new DbFaker();
    const product = dbFaker.getProductById(productId);

    return(
        <div className="product">
            <img 
                className="product-img" 
                src={product.image} 
                alt={product.name}
            />
            <div className="product-basic-info">
                <h1>{product.name}</h1>
                <p className="price">{product.price}</p>
                <p><button>Incluir no carrinho</button></p>
            </div>
            <div className="product-info">
                <p>{product.information}</p>
            </div>
        </div>
    );
}


export default  Product;