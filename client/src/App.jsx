import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
