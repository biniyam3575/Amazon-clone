import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { db } from "../../Utils/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import classes from "./Order.module.css";
import Loading from "../../components/Loading/Loading"; // Assuming this is your loading component

const Order = () => {
  const [{ user }] = useContext(DataContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const ordersRef = collection(db, "users", user.uid, "orders");
      const q = query(ordersRef, orderBy("created", "desc"));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
        setLoading(false);
      });

      return () => unsubscribe();
    } else {
      setLoading(false);
    }
  }, [user]);

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.orders_container}>
          <h1>Your Orders</h1>
          
          {loading ? (
            <Loading /> 
          ) : (
            <div className={classes.orders_list}>
              {orders?.length === 0 ? (
                <div className={classes.no_orders}>
                   <p>You haven't placed any orders yet.</p>
                </div>
              ) : (
                orders.map((eachOrder) => (
                  <div key={eachOrder.id} className={classes.order_card}>
                    {/* Header: Order Meta Info */}
                    <div className={classes.order_header}>
                      <div className={classes.meta_group}>
                        <p className={classes.label}>ORDER PLACED</p>
                        <p>{new Date(eachOrder.data.created * 1000).toLocaleDateString()}</p>
                      </div>
                      <div className={classes.meta_group}>
                        <p className={classes.label}>TOTAL</p>
                        <p className={classes.total_price}>
                          ${(eachOrder.data.amount / 100).toFixed(2)}
                        </p>
                      </div>
                      <div className={classes.order_id_box}>
                        <p className={classes.label}>ORDER # {eachOrder.id}</p>
                      </div>
                    </div>

                    {/* Body: List of Products in this order */}
                    <div className={classes.order_items}>
                      {eachOrder.data.cart.map((item) => (
                        <div key={item.id} className={classes.single_item}>
                          <img src={item.image} alt={item.title} />
                          <div className={classes.item_info}>
                            <h3>{item.title}</h3>
                            <p className={classes.item_desc}>
                              {item.description?.slice(0, 150)}...
                            </p>
                            <p className={classes.item_qty}>Quantity: {item.amount}</p>
                            <p className={classes.item_price}>${item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Order;