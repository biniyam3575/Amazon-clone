import { Route , Routes } from 'react-router'
import Home from './src/Pages/Home/Home'
import Auth from './src/Pages/Auth/Auth'
import SignIn from './src/Pages/Auth/SignIn'
import ProductDetail from './src/Pages/ProductDetail/ProductDetail'
import Order from './src/Pages/Order/Order'
import Payment from './src/Pages/Payment/Payment'
import Cart from './src/Pages/Cart/Cart'
import Result from './src/Pages/Result/Result'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Signin' element={<SignIn/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/detail' element={<ProductDetail/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/category/:categoryName' element={<Result/>}/>
    </Routes>
  )
}

export default Router