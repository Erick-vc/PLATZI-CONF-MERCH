import React, { useContext } from 'react';
import AppContext from '../context/AppContex';
import { useNavigate } from 'react-router-dom';
import '../styles/components/Payment.css'


const Payment = () => {

  const { state } = useContext(AppContext);
  const { cart } = state;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/checkout/success')
  }

  return (
    <div className='Payment'>
      <div className='Payment-content'>
        <h3>Resumen del pedido</h3>
        {cart.map((item) => (
          <div className='Payment-item' key={item.title}>
            <div className='Payment-element'>
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className='Payment-button'>
          <button type='button' onClick={handleClick} > Pagar final </button>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default Payment;
