import type { FC } from "react"
import MyBody from "../../../../components/MyBody"
import MyContainer from "../../../../components/MyContainer"
import MyTextoCorrido from "../../../../components/MyTextoCorrido"
import MyMarkdown from "../../../../components/MyMarkdown"

const Tutorial_CCA_MIC : FC = () => {
  return (
    <MyBody adicionaMenu={true}>
      <MyContainer maxWidth={"md"} sx={{
        paddingTop: '30px',
        width: '100%',
        minHeight: '100%',
      }}>
        <MyTextoCorrido textAlign="justify">
          <MyMarkdown content={`
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
  > Caso não tenha, todos as ferramentas deveram ser instaladas manualmente pelo usuário.
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

### Instalação rápida de todos os recursos

Antes de mostrar o passo a passo de configurar o sistema para uso, é necessário a instalação dos recursos principal para sua execução. São eles:

- Python: versão 3.13 ou superior;
- Node.js: versão 22 ou superior;
- PNPM: versão 11 ou superior;
- Git: opcional para evitar complexidades;

A instalação pode ser feita de várias formas, mas só será mostrada 2 formas para o Windows 10/11.

#### Instalando recursos de forma simples

Antes de iniciar, é importante relembrar que o Windows deve ter suporte ao Winget, principal recurso para a instalação simplificada. Caso contrário, deverá ser instalado não só os itens da lista, como também o *arduiino-cli*.

Primeiro, prima **WIN + R**, digite **cmd** e prima Enter. Isso fará uma editor preto ou colorido (de acordo com o tema do computador) aparecer. Para averiguar se o SO tem suporte ao winget, basta escrever \`winget\` e apertar Enter. O resultado deverá ser iguual ou semelhante ao visto na imagem a seguir.

![Janela Executar do Windows ao apertar o WIN + R](screenshots/win_sum_r_com_cmd.png "Janela Executar do Windows ao apertar o WIN + R")

![Exemplo do resultado do comando winget](screenshots/winget_exemplo.png "Resuultado do uso do comando winget no terminal")

Com o SO tendo o recurso Winget, para instalar os recursos, seguindo a lista, basta usar os comandos a seguir:
- \`winget install "Python.Python.3.13"\`: para instalar o python na versão 3.13.14;
- \`winget install "OpenJS.NodeJS.22"\`: para instalar o node.js na versão 22.22.3. Este não instala o gerenciador de pacote alternativo ao NPM, chamado PNPM, o que nos leva ao próximoo item;
- \`npm install -g pnpm\`: irá instalar a versão suficiente para rodar a aplicação;
- \`winget install "Microsoft.Git"\`: para instalar o git e facilitar a coleta dos arquivos do sistema.

#### Instalando os recuursos manualmente

Para instalar o Python, veja o tutorial simples no site [https://python.dev.br/guias/instalando-python-windows/](https://python.dev.br/guias/instalando-python-windows/)

Para instalar o Node.js, basta acessar o site oficial [nodejs.org](https://nodejs.org/en/download), selecionar a versão 22 LTS e clicar no botão "Windows Installer (.msi)". Quando o mesmo terminar de baixar, basta executar o instalador e prosseguir de acordo como instruído na tela, aceitando os termos e continuar apertando "avançar" e por fim "instalar".

Abrindo o Terminal, com **WIN + R**, digitando *cmd* e apertando em Enter, basta usar o comando \`node --version\` e \`npm --version\` para assegurar que o Nodejs foi inistalado com êxito.

Antes de seguir para a instalação do **pnpm**, ainda no terminal, utilize o comando \`pnpm --version\` para verificar se o gerenciador de pacotes já se encontra instalado.

Caso o pnpm não tenha sido instalado junto com o node, ainda no terminal, utilize o comando  \`npm install -g pnpm\`. Isso fará com que o pnpm seja instalado em sua versão suuficiente para executuar a aplicação.

Para instalar o Git, basta acessar o site [git-scm.com](https://git-scm.com/install/windows) e apertar no hiperlink contendo "Git for Windows" a depender da máquina (normalmente "Git for Windows/x64 Setup"). Ao baixar, faça o mesmo procedimento realizado na instalação do nodejs. No terminal, ao concluir a instalação, basta usar o comando \`git --version\`.

### Configurando o Backend

O **python** é usado como a principal linguagem de programação no backend. Ele, por sua vez, suporta versões do python a partir da versão 3.13, embora tenha sido desenvolvida na versão 3.14.

          `} />
        </MyTextoCorrido>
      </MyContainer>
    </MyBody>
  )
}

export default Tutorial_CCA_MIC