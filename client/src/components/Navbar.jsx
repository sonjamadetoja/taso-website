import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-primary text-light px-6 py-2">
      <div className="flex justify-center space-x-6">
        <Link to={"/"} className='nav-link'>Etusivu   </Link>
        <Link to={"/palvelut"} className='nav-link'>Palvelut   </Link>
        <Link to={"/me"} className='nav-link'>Meistä </Link>
      </div>
    </nav>
  )
}

export default Navbar