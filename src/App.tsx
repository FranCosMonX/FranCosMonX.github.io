import { Route, Routes } from 'react-router-dom'
import Pagina_Inicio from './pages/Inicio'
import Pesquisas_Pagina from './pages/Pesquisas'
import './App.css'
import Formulario_Satisfacao_CCA_MIC_V0_1 from './pages/formularios/pesquisas/cca_mic/Formulario_satisfacao_cca_mic_v0_1'
import Formulario from './components/questionario/Formulario'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Pagina_Inicio />} />
        <Route path="/pesquisas" element={<Pesquisas_Pagina />} />
        <Route path='/pesquisas/satisfacaoo_cca_mic_1' element={<Formulario><Formulario_Satisfacao_CCA_MIC_V0_1 /></Formulario>} />
      </Routes>
    </div>
  )
}

export default App
