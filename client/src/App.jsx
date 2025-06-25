import { Link, Outlet} from 'react-router-dom'
import './App.css'

function App() {
  const d = new Date(); 
  return (
    <div>
      <header>
          <img src="/logo.jpg" className="logo" alt="Logo" />
          <h1>Taso Research</h1>
        <nav>
          <ul>
            <li><Link to={"/"}>Etusivu</Link></li>
            <li><Link to={"/palvelut"}>Palvelut</Link></li>
            <li><Link to={"/me"}>Me</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        © {d.getUTCFullYear()} Taso Research. All rights reserved.
      </footer>
    </div>
  )
}

export default App
