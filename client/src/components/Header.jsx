import Navbar from './Navbar.jsx'

const Header = () => {
  return (
    <header>
        <img src="/logo.jpg" className="w-96 h-auto mb-8" alt="Logo" />
        <h1>Taso Research</h1>
        <Navbar />
    </header>
  )
}

export default Header