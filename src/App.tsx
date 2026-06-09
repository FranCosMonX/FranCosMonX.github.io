import { Route, Routes } from 'react-router-dom'
import Pagina_Inicio from './pages/Inicio'
import Pesquisas_Pagina from './pages/Pesquisas'
import './App.css'
import Formulario_Satisfacao_1_CCA_MIC from './pages/formularios/Satisfacao_1_CCA_MIC'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Pagina_Inicio />} />
        <Route path="/pesquisas" element={<Pesquisas_Pagina />} />
        <Route path='/pesquisas/satisfacaoo_cca_mic_1' element={<Formulario_Satisfacao_1_CCA_MIC />} />
      </Routes>
    </div>
  )
}

export default App
