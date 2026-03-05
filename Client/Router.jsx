import { Route, Routes } from 'react-router';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Home from './src/Pages/Home/Home';
import Auth from './src/Pages/Auth/Auth';
import ProductDetail from './src/Pages/ProductDetail/ProductDetail';
import Order from './src/Pages/Order/Order';
import Payment from './src/Pages/Payment/Payment';
import Cart from './src/Pages/Cart/Cart';
import Result from './src/Pages/Result/Result';

const stripePromise = loadStripe('YOUR_PUBLIC_KEY_HERE');

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/product/:productId' element={<ProductDetail/>}/>
        <Route path='/payment' element={
          <Elements stripe={stripePromise}>
            <Payment/>
          </Elements>
        }/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/category/:categoryName' element={<Result/>}/>
        <Route path='/auth' element={<Auth/>}/>
    </Routes>
  );
};

export default Router;