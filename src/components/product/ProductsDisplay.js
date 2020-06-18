import React      from 'react';
import { Link }   from 'react-router-dom';

import './ProductsDisplay.css'


const ProductsDisplay = (props) => {


    return(
        <div 
            className="products-display"
            style={{backgroundColor:props.background}}
        >
            {props.products.map( (product) => {
                return(
                    <div className="card">
                        <img src={product.image} alt={product.name} style={{width:"100%"}} />
                        <h1>{product.name}</h1>
                        <p className="price">{product.price}</p>
                        <Link to={`/product/${product.id}`}><button>Ver detalhes</button></Link>
                    </div>
                )
            })}
        </div>
    );
}


export default  ProductsDisplay;
