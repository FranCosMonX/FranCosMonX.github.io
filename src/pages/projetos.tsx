import type { FC } from "react"
import MyBody from "../components/MyBody";
import MyContainer from "../components/MyContainer";
import { Divider, Typography } from "@mui/material";
import MyCard from "../components/MyCard";

const Projetos : FC = () => {
  return (
    <MyBody adicionaMenu={true}>
      <MyContainer maxWidth={"md"} sx={{
        paddingTop: '30px',
        width: '100%',
        minHeight: '100%'
      }}>
        <Typography variant="h4">Todos os projetos</Typography>
        <Divider sx={{height: '2px', backgroundColor: 'var(--accent-bg)', marginTop: '20px', marginBottom: '20px'}} />
        <MyCard 
          titulo="Construtor de Código Automático para Microcontroladores - CCA Mic"
          conteudo="Uma aplicação inspirada em chatbot para o desenvolvimento facilitado de sistemas para microcontroladores. O sistema contém duas aplicações com o objetivo de tornar o backend independente do frontend permitindo criação de interfaces para smartphone e outros aparelhos."
          data_modificacao="14/06/2026 ás 00:03"
          autor="Autor do site"
        />
      </MyContainer>
    </MyBody>
  )
}

export default Projetos;