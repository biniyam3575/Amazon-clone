import { useContext, useEffect } from 'react'
import Router from '../Router.jsx'
import './App.css'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'
import { DataContext } from './components/DataProvider/DataProvider.jsx'
import { auth } from './Utils/firebase.js'
import { Type } from './Utils/action.type.js'
function App() {
  const [user , dispatch] = useContext(DataContext);
  useEffect(()=>{
    auth.onAuthStateChanged((authuser)=>{
      if(authuser){
        dispatch({
          type: Type.SET_USER,
          user: authuser
        })
      }else{
        dispatch({
          type: Type.SET_USER,
          user: null
        })

      }
    })
  },[])

  return (
    <>
      <ScrollToTop />
      <Router/>
    </>
  )
}

export default App
