import React, { useContext, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Layout from '../../components/Layout/Layout';
import { DataContext } from '../../components/DataProvider/DataProvider';
import classes from './Payment.module.css';

const Payment = () => {
  const [{ cart, user }] = useContext(DataContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.amount, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.amount, 0);

  const [cardError,setCardError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Stripe logic here
  };

  const handelChange = (e)=>{
    console.log(e)
    e?.error?.type ? setCardError(e?.error?.message): setCardError('');
  }
  return (
    <Layout>
      <div className={classes.payment_container}>
        <h2>Checkout ({totalItems} items)</h2>
        <hr /><br />
        
        <div className={classes.payment_content}>
          {/* LEFT COLUMN: Items */}
          <div className={classes.payment_section}>
            <h3>Review items and delivery</h3>
            {cart.map((item) => (
              <div key={item.id} className={classes.payment_item}>
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
                <p>${(item.price * item.amount).toFixed(2)}<small>({item.amount})</small></p>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: Address & Payment */}
          <div className={classes.right_column}>
            <div className={classes.payment_section}>
              <h3>Delivery Address</h3>
              <p>{user?.email}</p>
              <p>123 React Lane, Addis Ababa</p>
            </div>

            <div className={classes.payment_section}>
              <h3>Payment Method</h3>
              <form onSubmit={handleSubmit}>
                <div className={classes.payment_form}>
                  {cardError && <small style={{color:'red'}}>{cardError}</small>}
                   <CardElement onChange={handelChange}/>
                </div>
                <div className={classes.payment_price}>
                    <h3>Order Total: ${total.toFixed(2)}</h3>
                    <button type="submit" className={classes.pay_btn}>
                        Place your order
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;