import { Link, Outlet} from 'react-router-dom'
import '../tailwind.css'

function App() {
  const d = new Date(); 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <header>
          <img src="/logo.jpg" className="w-96 h-auto mb-8" alt="Logo" />
          <h1>Taso Research</h1>
        <nav className="bg-primary text-light px-6 py-2">
          <div className="flex justify-center space-x-6">
            <Link to={"/"} className='nav-link'>Etusivu   </Link>
            <Link to={"/palvelut"} className='nav-link'>Palvelut   </Link>
            <Link to={"/me"} className='nav-link'>Meistä </Link>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer  className="bg-primary text-light px-6 py-4 text-sm">
        <div className="flex flex-col justify-between items-center gap-4">
          <div>© {d.getUTCFullYear()} Taso Research. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span>Seuraa meitä:</span> 
            <a href="https://www.linkedin.com/company/taso-research/" target="_blank" rel="noopener noreferrer">
              <img src="/LI-In-Bug.png" alt="LinkedIn" width="24" height="24" className="inline-block"/>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
