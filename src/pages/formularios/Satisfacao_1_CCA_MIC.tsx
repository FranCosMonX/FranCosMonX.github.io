import type { FC } from "react"
import MyBody from "../../components/MyBody"
import MyMenu from "../../components/MyMenu"
import MyContainer from "../../components/MyContainer"
import { Divider, Typography } from "@mui/material"

const Formulario_Satisfacao_1_CCA_MIC: FC = () => {
  return (
    <MyBody>
      <MyMenu />
      <MyContainer sx={{
        paddingTop: '30px',
        width: '100%',
        minHeight: '100%'
      }}>
        <Typography variant="h4">Formulário de satisfação</Typography>
        <Divider sx={{height: '2px', backgroundColor: 'var(--accent-bg)', marginTop: '20px', marginBottom: '20px'}} />
      </MyContainer>
    </MyBody>
  )
}

export default Formulario_Satisfacao_1_CCA_MIC