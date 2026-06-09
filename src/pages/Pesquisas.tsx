import { Divider, Typography } from "@mui/material"
import MyBody from "../components/MyBody"
import MyContainer from "../components/MyContainer"
import MyMenu from "../components/MyMenu"
import type { FC } from "react"
import MyCard from "../components/MyCard"

const Pesquisas_Pagina: FC = () => {
  return (
    <MyBody>
      <MyMenu />
      <MyContainer maxWidth={"md"} sx={{
        paddingTop: '30px',
        width: '100%',
        minHeight: '100%'
      }}>
        <Typography variant="h4">Todas as pesquisas</Typography>
        <Divider sx={{height: '2px', backgroundColor: 'var(--accent-bg)', marginTop: '20px', marginBottom: '20px'}} />
        <MyCard 
          titulo="Pesquisa de satisfação da primeira versão do CCA Mic."
          conteudo="Para concluir essa primeira etapa de desenvolvimento, é necessário obter dados de usuários reais sobre a usabilidade da aplicação. Dessa forma, é aceitavel a ajuda de todos que puderem responder ao questionário após experimentarem a aplicação."
          autor="Autor do Site"
          data_modificacao="09/06/2026 às 00:11"
          sites={[
            {nome: 'Backend CCA Mic', href: 'https://github.com/FranCosMonX/TCC-CCA-MIC-BKend', href_externo: true},
            {nome: 'Frontend CCA Mic', href: 'https://github.com/FranCosMonX/TCC-CCA-MIC-ftend', href_externo: true},
            {nome: 'Formulário de satisfação',  href: '/pesquisas/satisfacaoo_cca_mic_1', href_externo: false}
          ]}
        />
      </MyContainer>
    </MyBody>
  )
}

export default Pesquisas_Pagina