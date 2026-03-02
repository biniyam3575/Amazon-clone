import React, { useContext } from 'react';
import Layout from '../../components/Layout/Layout';
import { DataContext } from '../../components/DataProvider/DataProvider';
import { Type } from '../../Utils/action.type';
import classes from './Cart.module.css';

const Cart = () => {
  const [{ cart }, dispatch] = useContext(DataContext);

  // Grouping logic for the UI
  const groupedItems = cart.reduce((acc, item) => {
    const existing = acc.find(i => i.id === item.id);
    if (existing) { existing.amount += 1; } 
    else { acc.push({ ...item, amount: 1 }); }
    return acc;
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <Layout>
      <section className={classes.cart_container}>
        <div className={classes.cart_left}>
          <h1>Shopping Cart</h1>
          {groupedItems.length === 0 ? <p>Your cart is empty.</p> : (
            groupedItems.map((item) => (
              <div key={item.id} className={classes.cart_item}>
                <img src={item.image} alt={item.title} />
                <div className={classes.cart_details}>
                  <h3>{item.title}</h3>
                  <div className={classes.controls}>
                    <select value={item.amount} onChange={(e) => dispatch({ type: Type.UPDATE_QTY, id: item.id, qty: parseInt(e.target.value) })}>
                      {[...Array(10).keys()].map(x => <option key={x+1} value={x+1}>{x+1}</option>)}
                    </select>
                    <span className={classes.pipe}>|</span>
                    <button onClick={() => dispatch({ type: Type.REMOVE_FROM_CART, id: item.id })}>Delete</button>
                  </div>
                </div>
                <div className={classes.cart_price}>${item.price.toFixed(2)}</div>
              </div>
            ))
          )}
        </div>

        <div className={classes.cart_right}>
          <div className={classes.subtotal_box}>
            <p>Subtotal ({cart.length} items): <strong>${total.toFixed(2)}</strong></p>
            <button className={classes.checkout_btn}>Proceed to checkout</button>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Cart;