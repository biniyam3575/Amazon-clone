// components/Layout/Layout.jsx
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
        <Header />
        <main className="main-content">
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default Layout