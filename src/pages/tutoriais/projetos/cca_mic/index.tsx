import type { FC } from "react"
import MyBody from "../../../../components/MyBody"
import MyContainer from "../../../../components/MyContainer"

const Tutorial_CCA_MIC : FC = () => {
  return (
    <MyBody adicionaMenu={true}>
      <MyContainer maxWidth={"md"} sx={{
        paddingTop: '30px',
        width: '100%',
        minHeight: '100%'
      }}>

      </MyContainer>
    </MyBody>
  )
}

export default Tutorial_CCA_MIC