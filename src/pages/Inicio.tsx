import { Box, Divider, Typography } from "@mui/material"
import MyBody from "../components/MyBody"
import MyContainer from "../components/MyContainer"
import type { FC } from "react"
import MyCard from "../components/MyCard"

const Pagina_Inicio: FC = () => {

  return (
    <MyBody adicionaMenu={true}>
      <MyContainer maxWidth={"md"}>
        <Box sx={{
          paddingTop: '30px',
          width: '100%',
          minHeight: '100%'
        }}>
          <Typography variant="h4" >ATUALIZAÇÃO DO SITE</Typography>
          <Divider sx={{height: '2px', backgroundColor: 'var(--accent-bg)', marginTop: '20px', marginBottom: '20px'}} />
          <MyCard 
            autor="Autor do Site"
            titulo="CCA Mic"
            conteudo="Protótipo de aplicação para ser apresentado como TCC. Focando em pessoas que queiram criar sistemas embarcados sem dominar muito o assunto. O mesmo atualmente está em etapa de teste para as funcionalidades já implementadas." 
            data_modificacao="08/06/2026 ás 17:15"
            sites={[
              {nome: 'Backend CCA Mic', href: 'https://github.com/FranCosMonX/TCC-CCA-MIC-BKend', href_externo: true},
              {nome: 'Frontend CCA Mic', href: 'https://github.com/FranCosMonX/TCC-CCA-MIC-ftend', href_externo: true}
            ]}
          />
        </Box>  
      </MyContainer>
    </MyBody>
  )
}

export default Pagina_Inicio