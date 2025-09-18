import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import Pokemons from './pages/pokemons'

function App() {


  return (
    <ThemeProvider>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
            
              <li><Link to="/pokemons">Pokemons</Link></li>
  
              
            </ul>
          </nav>
          <ThemeToggleButton />
        </div>

        {/* Define as rotas */}
        <div>
          <Routes>
            <Route path="/pokemons" element={<Pokemons />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
