import React, { useContext, useState } from 'react';

import { AppContext }         from '../../AppContext';
import WaitingSpinner         from '../ui/WaitingSpinner';
import ErrorModal             from '../ui/ErrorModal';
import Slideshow              from '../ui/Slideshow';
import Banner                 from '../ui/Banner';
import Footer                 from '../ui/Footer';
import ProductsDisplay        from '../product/ProductsDisplay';
import BrandsDisplay          from '../brand/BrandsDisplay';
import PaymentMethodsDisplay  from '../payment/PaymentMethodsDisplay';
import DbFaker                from '../data/DbFaker';

import './Home.css';


const slides = [ 
//  { 
//      url: "https://images.unsplash.com/photo-1478131535094-78de1c9450ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//      name: "Black Canon"
//  },
  {
      url: "https://images.unsplash.com/photo-1483820493755-c9210384ed8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      name: "Flat Monitor"
  },
  {
      url: "https://images.unsplash.com/photo-1487219116710-23ffcb172b2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1474&q=80",
      name: "Quadcopter"
  }
];


const Home = props => {
  
  // Needed for recovering domain name and user id
  const appContext = useContext(AppContext);

  // ------------------------------ STATE ---------------------------------
  // This state goes true whenever a request was sent to the 
  // backend and the response was not received yet
  const [ waiting, setWaiting ] = useState(false);

  // This state saves any error ocurred when communicating with the backend
  const [ error, setError ] = useState('');

  const dbFaker = new DbFaker();

  // ---------------------------- FUNCTIONS -------------------------------
  // Clears the error modal
  const clearError = () => {
    setError('');
  };    


  // ---------------------------- RENDERING -------------------------------
  return (
    <React.Fragment>
      <ErrorModal    // Shows the Error modal
        error={error} 
        onClear={clearError}
      />
      {waiting && (  // Shows the waiting spinner
        <div className="center">
          <WaitingSpinner asOverlay='true'/>
        </div>
      )}
      { // Renders the content of the Home component
        !waiting && (   
        <div className='home-screen'>
          <Slideshow slides={slides}/>
          <Banner 
            height="100px"
            background="rgb(240, 240, 240)"
            color="black"
            fontSize="35px"
            message="Lançamentos"
          />
          <ProductsDisplay products={dbFaker.getNewProducts()} background="rgb(240, 240, 240)"/>
          <br></br>
          <br></br>
          <Banner 
            height="100px"
            background="darkgrey"
            color="rgb(240, 240, 240)"
            fontSize="35px"
            message="Todos os Produtos"
          />
          <ProductsDisplay products={dbFaker.getProducts()} background="darkgray"/>
          <br></br>
          <br></br>
          <Banner 
            height="100px"
            background="rgb(240, 240, 240)"
            color="black"
            fontSize="35px"
            message="Produtos com desconto"
          />
          <ProductsDisplay products={dbFaker.getSales()} background="rgb(240, 240, 240)"/>
          <BrandsDisplay />
          <PaymentMethodsDisplay />
          <Footer />
        </div>
      )}
    </React.Fragment>
  );
};


export default  Home;
