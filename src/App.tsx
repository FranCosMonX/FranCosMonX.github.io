import { Route, Routes } from 'react-router-dom'
import Pagina_Inicio from './pages/Inicio'
import Pesquisas_Pagina from './pages/Pesquisas'
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Pagina_Inicio />} />
        <Route path="/pesquisas" element={<Pesquisas_Pagina />} />
      </Routes>
    </div>
  )
}

export default App
