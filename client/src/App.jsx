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
          <Link to={"/"}>Etusivu   </Link>
          <Link to={"/palvelut"}>Palvelut   </Link>
          <Link to={"/me"}>Meistä </Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div>© {d.getUTCFullYear()} Taso Research. All rights reserved.</div>
        <div>Seuraa meitä: 
          <a href="https://www.linkedin.com/company/taso-research/" target="_blank" rel="noopener noreferrer">
            <img src="/LI-In-Bug.png" alt="LinkedIn" width="24" height="24"/>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
