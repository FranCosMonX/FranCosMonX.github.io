import { Typography } from "@mui/material"
import MyBody from "../components/MyBody"
import MyContainer from "../components/MyContainer"
import MyMenu from "../components/MyMenu"
import type { FC } from "react"
import Questao from "../components/questionario/Questao"
import MyButton from "../components/questionario/MyButton"

const Pesquisas_Pagina: FC = () => {
  return (
    <MyBody>
      <MyMenu />
      <MyContainer>
        <Typography>Aqui irá conter uma lista de pesquisas podendo ter formulários para serem preenchidoso.</Typography>

        <Questao  
          pergunta="Isso funcionará?"
          resposta_callback={(resposta) => {console.log(resposta)} }
          opcoes_resposta={['Sim', 'Não']}
          resposta_objetiva={true}
        />
        
        <MyButton variant="contained" >Teste</MyButton>

        <Questao 
          pergunta="Tens alguma recomendação? se Sim, qual?"
          resposta_callback={(resposta) => console.log(resposta)}
          resposta_objetiva={false}
        />
      </MyContainer>
    </MyBody>
  )
}

export default Pesquisas_Pagina