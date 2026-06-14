import type { FC } from "react"
import MyBody from "../components/MyBody";
import MyMenu from "../components/MyMenu";
import MyContainer from "../components/MyContainer";

const Projetos : FC = () => {
  return (
    <MyBody>
      <MyMenu />
      <MyContainer maxWidth={"md"} sx={{
        paddingTop: '30px',
        width: '100%',
        minHeight: '100%'
      }}>

      </MyContainer>
    </MyBody>
  )
}

export default Projetos;