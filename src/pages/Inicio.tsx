import { Button, Typography } from "@mui/material"
import MyBody from "../components/MyBody"
import MyContainer from "../components/MyContainer"
import MyMenu from "../components/MyMenu"
import type { FC } from "react"
import { useNavigate } from "react-router-dom"

const Pagina_Inicio: FC = () => {
  const navigate = useNavigate()

  return (
    <MyBody>
      <MyMenu />
      <MyContainer>
        <Typography>Teste do Navigate</Typography>
        <Button onClick={() => navigate('/pesquisas')}>Ir para a página de pesquisas</Button>
      </MyContainer>
    </MyBody>
  )
}

export default Pagina_Inicio