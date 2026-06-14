import type { FC } from "react"
import MyBody from "../../../../components/MyBody"
import MyContainer from "../../../../components/MyContainer"
import MyTextoCorrido from "../../../../components/MyTextoCorrido"
import Markdown from "react-markdown"

const Tutorial_CCA_MIC : FC = () => {
  return (
    <MyBody adicionaMenu={true}>
      <MyContainer maxWidth={"md"} sx={{
        paddingTop: '30px',
        width: '100%',
        minHeight: '100%'
      }}>
        <MyTextoCorrido textAlign="justify">
          <Markdown>{`
# Tutorial: CCA MIC

O **CCA MIC** (Construtor de Códigos Automáticos para Microcontroladores) é uma aplicação desenvolvida com o objetivo de auxiliar usuários no desenvolvimento de sistemas embarcados utilizando Inteligência Artificial. A proposta do projeto é reduzir a complexidade envolvida na criação, compilação e gravação de códigos para microcontroladores, permitindo que tanto iniciantes quanto profissionais da área possam desenvolver soluções de forma mais prática e eficiente.

Atualmente, muitas ferramentas voltadas para sistemas embarcados exigem conhecimentos avançados em programação, eletrônica e configuração de ambientes de desenvolvimento. Isso acaba dificultando o acesso de usuários que desejam apenas automatizar tarefas do cotidiano ou criar aplicações específicas para casa, estudos ou trabalho.

Nesse contexto, o CCA MIC atua como uma camada intermediária entre o usuário e os serviços de Inteligência Artificial, automatizando etapas repetitivas do desenvolvimento e simplificando o fluxo de criação de projetos embarcados.

## Sistema

----

O sistema possui uma interface simples e objetiva, desenvolvida para facilitar a interação do usuário sem armazenar informações pessoais. Ela é responsável por permitir que o usuário configure parâmetros do projeto, selecione a Inteligência Artificial desejada e acompanhe o desenvolvimento do código gerado.

O sistema foi desenvolvido usando a IDE VSCode aliado a extensões do python, git e fileserver. O backend foi desenvolvido utilizando:

- **Ambiente Virtual:** evitando que as bibliotecas sejam instaladas globalmente.
- **Flask + python:** simplificando o desenvolvimento do backend.
- **WinGet:** Instalador de aplicativos do Windows a partir de certa compilação do windows 10 e integrado ao windows 11.
- **Bibliotecas de IA:** bibliotecas necessárias para conectar a aplicação às IAs da OpenAI e do Google.
- **SQLite:** para armazenar os dados localmente na máquina do usuário.

Já o frontend foi desenvolvido utilizando:

- **React com typescript:** projeto criado a partir do **PNPM** do **Node.js** com uma versão igual ou superior a 18.
- **AssemblyAI:** API de transcrição de áudio.
- **Zod + HookForm:** para validação simples dos campos do formulário.
- **MaterialUI Components:** facilitando a construção do frontend sem muita complexidade.

## Configurando Ambientes de Execução

----

Antes de iniciar a instalação das ferramentas utilizadas para executar a aplicação, verifique se o seu computador obedece os requisitos minimos:

- Sistema Opeeracional (SO): Windows 10/11
- Tem suporte á Winget: prima WIN + R e digite "cmd". Aoo aparecer uma janela preta, escreva "winget". Se aparecer a versão, além de comoandos possíveis, o SO terá suporte. 

### Configurando o Backend

O **python** é usado como a principal linguagem de programação no backend. Ele, por sua vez, suporta versões do python a partir da versão 3.13, embora tenha sido desenvolvida na versão 3.14.

Para instalar o Python, veja o tutorial simples no site [https://python.dev.br/guias/instalando-python-windows/](https://python.dev.br/guias/instalando-python-windows/)

          `}</Markdown>
        </MyTextoCorrido>
      </MyContainer>
    </MyBody>
  )
}

export default Tutorial_CCA_MIC