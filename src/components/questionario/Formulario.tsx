import type { FC, ReactNode } from "react"
import MyBody from "../../components/MyBody"
import MyContainer from "../../components/MyContainer"
import { Divider, Typography } from "@mui/material"

interface FormularioParams {
  children: ReactNode;
}

const Formulario: FC <FormularioParams> = ({children}) => {
  return (
    <MyBody adicionaMenu={true}>
      <MyContainer maxWidth={"md"} sx={{
        paddingTop: '30px',
        width: '100%',
        minHeight: '100%'
      }}>
        <Typography variant="h4">Formulário de satisfação</Typography>
        <Divider sx={{height: '2px', backgroundColor: 'var(--accent-bg)', marginTop: '20px', marginBottom: '20px'}} />
        {children}
      </MyContainer>
    </MyBody>
  )
}

export default Formulario;