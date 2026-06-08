import { Typography } from "@mui/material"
import MyBody from "../components/MyBody"
import MyContainer from "../components/MyContainer"
import MyMenu from "../components/MyMenu"
import type { FC } from "react"

const Pesquisas_Pagina: FC = () => {
  return (
    <MyBody>
      <MyMenu />
      <MyContainer>
        <Typography>Aqui irá conter uma lista de pesquisas podendo ter formulários para serem preenchidoso.</Typography>
      </MyContainer>
    </MyBody>
  )
}

export default Pesquisas_Pagina