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
- **WinGet:** Instalador de aplicativos do Windows suportado na versão 1809 (build 17763) ou superior do Windows 10 e integrado ao windows 11. Para mais detalhes, visite o site oficial da microsoft sobre o assunto: [learn.microsoft.com/pt-br](https://learn.microsoft.com/pt-br/windows/package-manager/winget/).
  > Caso não tenha, todos as ferramentas deveram ser instaladas manualmente pelo usuário.
- **Bibliotecas de IA:** bibliotecas necessárias para conectar a aplicação às IAs da OpenAI e do Google.
- **SQLite:** para armazenar os dados localmente na máquina do usuário.

Já o frontend foi desenvolvido utilizando:

- **React com typescript:** projeto criado a partir do **PNPM v10.17** do **Node.js v22**.
- **AssemblyAI:** API de transcrição de áudio.
- **Zod + HookForm:** para validação simples dos campos do formulário.
- **MaterialUI Components:** facilitando a construção do frontend sem muita complexidade.

### Segurança e Limitações

Por se tratar de um protótipo acadêmico, o sistema ainda não implementa mecanismos robustos de segurança para ambientes de produção.

Atualmente o sistema possui algumas limitações:

- Não há proteção avançada contra acessos indevidos;
- Não existem mecanismos completos de autenticação;
- O sistema não foi projetado para exposição pública na internet;
- O uso remoto deve ser realizado com cautela;
- Necessidade do Windows ter o winget, para instalar o arduino-cli automaticamente;
- Suporte há apenas alguns modelos de microcontroladores;
- Suporte há apenas alguns modelos da IA do Google e OpenAI;
- Edição manual dos arquivos de texto, quando for preciso interagir com os arquivos do projeto em desenvolvimento;
- Perda do projeto com o mesmo nome criado anteriormente á geração do novo código;
- Não há suporte a multiplos usuários na atual versão.

Portanto, recomenda-se utilizar o sistema apenas em ambientes controlados para fins acadêmicos, testes e desenvolvimento.

### Funcionalidades

O sistema tem como objetivo abstrair operações complexas para usuários que não possuem domínio técnico avançado sobre desenvolvimento de Sistemas Embarcados. Entre suas principais responsabilidades, destacam-se:

1. Intermediar a comunicação entre o usuário e a Inteligência Artificial, embora não impeça o envio de informações pessoais por meio de linguagem natural;

2. Preparar automaticamente o ambiente de desenvolvimento necessário para a aplicação discutida entre o usuário e a IA;

3. Gerar arquivos de código-fonte e arquivos de configuração necessários para compilação e execução do projeto;

4. Realizar a gravação do código no microcontrolador, desde que não existam erros de compilação, utilizando conexão USB por meio de comunicação serial.

## Configurando Ambientes de Execução

----

Antes de iniciar a instalação das ferramentas utilizadas para executar a aplicação, verifique se o seu computador obedece os requisitos minimos:

- Sistema Opeeracional (S.O.): Windows 10 versão 1809 (build 17763) ou superior / Windows 11
- Tem suporte á Winget: prima WIN + R e digite "cmd". Ao aparecer uma janela preta, escreva "winget". Se aparecer a versão, além de comandos possíveis, o S.O. terá suporte e estaará configurado. Caso o S.O. seja o Windows 10 com a versão 1809 ou superior e não possua o winget, acesse [learn.microsoft.com/pt-br](https://learn.microsoft.com/pt-br/windows/package-manager/winget/) para saber como ativá-lo.

![Janela Executar do Windows ao apertar o WIN + R](screenshots/win_sum_r_com_cmd.png "Janela Executar do Windows ao apertar o WIN + R")

### Instalação rápida de todos os recursos

Antes de mostrar o passo a passo de configurar o sistema para uso, é necessário a instalação dos recursos principal para sua execução. São eles:

- Python: versão 3.13 ou superior;
- Node.js: versão 22 ou superior;
- PNPM: versão 10.17 ou superior;
- Git: opcional para evitar complexidades;

A instalação pode ser feita de várias formas, mas só será mostrada 2 formas para o Windows 10/11.

#### Instalando recursos de forma simples

Antes de iniciar, é importante relembrar que o Windows deve ter suporte ao Winget, principal recurso para a instalação simplificada. Caso contrário, deverá ser instalado não só os itens da lista, como também o *arduiino-cli*.

Primeiro, prima **WIN + R**, digite **cmd** e prima Enter. Isso fará uma editor preto ou colorido (de acordo com o tema do computador) aparecer. Para averiguar se o SO tem suporte ao winget, basta escrever \`winget\` e apertar Enter. O resultado deverá ser iguual ou semelhante ao visto na imagem a seguir.

![Exemplo do resultado do comando winget](screenshots/winget_exemplo.png "Resuultado do uso do comando winget no terminal")

Com o S.O. tendo o recurso Winget, para instalar os recursos, seguindo a lista, basta usar os comandos a seguir:
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

### Baixando os arquivos do sistema

Antes de iniciar, crie uma pasta, para armazenar os arquivos do sistema, em documentos ou outro diretório que não tenha permissão de administrador (diretório raiz). Após isto, abra a pasta, aperte o botão direito do mouse em uma área vazia da pasta e selecione a opção "abrir no terminal" no Windows 11 (uma opção semelhante no windows 10).

![Opções visiveis após apertar o botão direito do mouse em uma área vazia da pasta](screenshots/opcao_abrir_terminal_estando_pasta.png "Exemplo do clicar do botão direito do mouse em uma área vazia")

Quando o editor preto/colorido aparecer use os dois comandos a seguir, para baixar os arquivos sem muita complexidade.
\`\`\` terminal
git clone https://github.com/FranCosMonX/TCC-CCA-MIC-BKend.git
\`\`\`

> Para baixar os arquivos do backend já descompactado.

\`\`\`terminal
git clone https://github.com/FranCosMonX/TCC-CCA-MIC-ftend.git
\`\`\`

> Para baixar os arquivos do frontend já descompactado.

Quando o download das 2 aplicações tiverem terminado, oo terminal pode ser fechado.

Para finalizar, é necessário instalar o **Arduin-CLI** para evitar erros durante o uso da aplicação, já que o mesmo é instalado pelo sistema se não for detectado (Windows com suporte a Winget). Para isto, acesse o site oficial da Arduino [https://arduino.github.io/arduino-cli/dev/installation/](https://arduino.github.io/arduino-cli/dev/installation/) e baixe o arduino-cli de acordo com a caracteristica do seu PC e SO (normalmente o mesmo visto na imagem logo a seguir).

![Localização dos links de download do arduino-cli](screenshots/instalacao_arduino_cli_win.png "Localização dos links de download do arduino-cli")

Após baixar, descompacte o arquivo \`.zip\` e copie o arquivo **arduino-cli.exe** para a seguinte pasta: \`C:\Program Files\Arduino CLI\` (se não houver, crie as pastas e subpastas com o mesmo nome informado). Ou seja, em \`Program Files\`, localizado na raiz do disco C, crie uma pasta chamada **Arduino CLI** e *cole* o arquivo dentro desta pasta.

### Configurando o backend

Navegue até a pasta baixada chamada *"TCC-CCA-MIC-BKend"*, aperte o botão direito do mouse em algum local vazio da pasta (não funciona se for em cima de um arquivo) e selecione a opção **Abrir no Terminal** ou opção semelhante.

Com o terminal aberto e com o python instalado, utilize os comandos a seguir:

\`\`\`terminal
python -m venv venv
\`\`\`

> Responsável por criar um ambiente virtual dentro da própria pasta (pasta venv) para impedir que instalações de pacotes sejam instalados na versão global.

\`\`\`terminal
.\\venv\\Scripts\\activate
\`\`\`

> Ativando o ambiente virtual criado anteriormente.

\`\`\`terminal
pip install -r requirements.txt
\`\`\`

> Instalando todos os pacotes usados na aplicação (bibliotecas).

\`\`\`terminal
flask run
\`\`\`

> Rodando a aplicação backend.

Feito isso, o resultado do terminal deve ser semelhante ao visto na imagem logo a seguir. É importante destacar que a URL em que o servidor está rodando **deverá ser guardada para configurar o frontend** (que no exemplo é \`http://127.0.0.1:5000\` ja que está rodando apenas no computador e **não** sendo disponibilizado pela internet). Além disso, o terminal não deverá ser fechado durante o uso da aplicação (deverá ser aberto outro posteriormente para a configuração do frontend).

![Resultado bem sucedido da configuração e execução do backend](screenshots/resultado_exe_backend_ok.png "Exemplo de execução da aplicação backend após ser configurada")

### Configurando o frontend

Com o Nodejs v22 e PNPM instalados, entre na pasta baixada nomeada de *"TCC-CCA-MIC-ftend"*, aperte o botão direito do mouse em algum local vazio da pasta (não funciona se for em cima de um arquivo) e selecione a opção **Abrir no Terminal** ou opção semelhante.

Antes de colocar os comandos, primeiro copie o arquivo da pasta chamado \`.env-example\` e cole ele no mesmo local, mas renomeando-o para \`.env\`, assim como visto na imagem.

![Arquivo .env-example copiado para o arquivo .env estando no mesmo diretório](screenshots/exemplo_localizacao_novo_env_no_cca_mic.png "exemplo de arquivo duplicado, mas renomeado posteriormente")

Logo a seguir, abra o arquivo *.env* com editor de texto (podendo ser o bloco de notas do windows). Dentro do arquivo terá algumas variáveis de ambiente usadas ao longo da aplicação.

\`\`\`
VITE_API_URL=http://{ip}:{porta}/api
VITE_KEY_ASSEMBLY_AI=API_KEY
\`\`\`

É dentro deste arquivo, após **VITE_API_URL=** e antes do **/api**, que deverá estar a **URL do servidor backend** ainda em execução em outro terminal. O conteúdo, após a modificação, deverá se assemelhar ao conteúdo a seguir.

\`\`\`
VITE_API_URL=http://127.0.0.1:5000/api
VITE_KEY_ASSEMBLY_AI=API_KEY
\`\`\`

Com o arquivo alterado, salve as modificações e feche o arquivo.

> Caso use o recurso de áudio, visite o site [assemblyai.com](https://www.assemblyai.com/), se cadastre e coloque a API Key após **VITE_KEY_ASSEMBLY_AI=**, substituindo "API_KEY".

No terminal anteriormente aberto, execute os comandos logo a seguir.

\`\`\`terminal
pnpm install
\`\`\`

> Utilizado para baixar todos os pacotes usados (bibliotecas).

Caso apareça um aviso sobre "ignored build scripts", como visto na imagem a seguir, utilize o comando indicado no próprio terminal \`pnpm approve-builds\`, aperte **espaço** para selecionnar o campo, aperte **Enter** para confirmar e **y** para aceitar e continuar. Sem essa opção, a aplicação do frontend poderá não ser iniciada por causa do erro \`ERR_PNPM_IGNORED_BUILDS\`.

![Visualização da mensagem de warning](screenshots/warningn_cca_mic_front_pnpmAprove.png "Visualização da mensagem de warning")

\`\`\`terminal
pnpm run dev
\`\`\`

> Execução da aplicação em modo desenvolvedor, usado pelo fato da aplicação estar rodando localmente devido a segurança de dados e de privacidade.

Ao executar o último comando, será disponibilizado a URL em que o Frontend estará disponível, como \`http://localhost:5173/\` visto na imagem logo abaixo.

![Resultado após utilizar o comando pnpm run dev, mostrando a URL em que a aplicação está disponível](screenshots/resultado_exe_frontend_ok.png "Resultado após utilizar o comando pnpm run dev, mostrando a URL em que a aplicação está disponível")

## Utilizando o sistema

A execução do Sistema só funcionará se ambas as aplicações tiverem sido configuradas corretamente. Vale lembrar que o backend deve ser executado primeiro para gerar a URL de acesso que será incluso no arquivo *.env* do frontend. É por meio dessa URL que as aplicações iram interagir. O \`vite\`, por padrão, executará a aplicação na porta local 5173, definido previamente no backend. Ou seja, se o frontend não estiver executando nessa porta, o acesso às resposta da API será bloqueado devido ás politicas de CORS.

![Código que define quem pode receber as respostas da API](screenshots/cca_mic_com_front_definido_no_back.png "Código que define quem pode receber as respostas da API")

Caso o frontend não esteja sendo executado nesta porta, no terminal aperte **CTRL + C** para interromper a execução e use o comando \`pnpm run dev --port 5173\`. Se mesmo assim não funcionar ou der errado, deve haver outra aplicação usando essa mesma porta no computador. Neste caso, interrompa esta outra aplicação ou altere a porta no arquivo \`app.py\` contido na pasta raiz do diretório do backend.

### Problemas iniciais possíveis

Caso o backend não esteja iniciado ou sua URL não informada no arquivo *.env*, localizado no diretório do frontend, o erro, como visto na imagem a seguir, pode surgir. Ou, principalmente se a URL no arquivo *.env* estiver errada, acontecimentoo inesperado pode surgir como uma mensagem informando que tens dados já salvo e posteriormente, independente da escolhe de manter os dados, irá aparecer uma mensagem do sistema sem conteúdo, apenas com um botão de OK (neste cenário, verifique o arquivo .env lembrando que após a URL deverá ter \`/api\`).

![Mnesagem de erro - backend desconectado ou com problema](screenshots/problemas/error_backend_com_problema_cca_mic_ou_interrompido.png "Mnesagem de erro - backend desconectado ou com problema")

Caso a mensagem continue aparecendo mesmo com o backend sendo executado e informado no arquivo *.env*, clique com o botão direito do mouse no site e selecione "inspecionar". No lado direito da aba "elementos", da interface que apareceu quando selecionaste inspecionar, aperte em "Console." Se houver o erro de politica de CORS, é porque o frontend está sendo executado em uma porta diferente da porta 5173. Dessa forma, refaça o último passo informado na configuração do frontend.

### Definindo as configurações iniciais

Quando se acessa a página [http://localhost:5173](http://localhost:5173), o sistema mostrará a página de apresentação para o usuário. Nela pode ser encontrado 3 botões na parte superior da tela e o campo de nome de usuário e botão de entrar. Nos primeiros 3 botões citados, estão, da esquerda para a direita, a configuração geral, voltar para o ínicio e configuração do microcontrolador (passe o mouse em cima para ver a função).

![Interface de apresentação](screenshots/usecase/apresentacao_cca_mic.png "Interface de apresentação")

A primeira coisa a ser definida é a **configuração geral**. Mas para isto será necessário possuir uma Chave de API da OpenAI ou Gemini. Para conseguir uma chave de API do Gemini gratuuitamente, siga o passo a passo instruído em [mundobytes.com/pt/](https://mundobytes.com/pt/Guia-completo-para-obter-e-usar-a-API-gratuita-do-Gemini./#google_vignette). Para conseguir uma chave gratuita da openai, basta criar uma conta e acessá-la [https://help.openai.com/en/](https://help.openai.com/en/articles/4936850-where-do-i-find-my-openai-api-key).

Além de estar em posse de uma chave de API de uma IA, é necessário fornecer a URI que será armazenado o arquivo de configuração e os projetos criados durante o uso da aplicação. No computador, primeiro crie uma pasta (em documentos, por exemplo) e coloque essa URI no campo **"diretório"**. Na imagem abaixo, mostra o exemplo da URI (localização de uma pasta localizada na máquina do usuuário) da pasta *"111_EXEMPLO"* criada.

![exemplo de uri de uma pasta recem criada](screenshots/exemplo_coleta_uri.png "exemplo de uri de uma pasta recem criada")

Tendo essas informações, na tela de apresentação, aperte no botão com imagem de engrenagem no canto superior esquerdo e escolha a IA a ser usada, o modelo e a API Key. Logo a seguir, aperte o botão localizado do lado direito do campo "api key" para verificar se a chave de API é válida, se for, termine de preencher os dados: nome do projeto, diretório (que será armazenado os dados do projeto), se deverá ser mostrado o código fonte no chat e se ele deve adicionar comentários no código.

![Interface de usuário para definir as configurações gerais do sistema](screenshots/usecase/conf_geral_cca_mic.png "Interface de usuário para definir as configurações gerais do sistema")

Logo a seguir, na interface de apresentação do usuário, clique no botão localizado no canto direito superior com desenho de microchip para definir qual microcontrolador será usado na criação do código, compilação e gravação do mesmo para o microcontrolador em questão. Nesta interface, basta selecionar o microcontrolador contido na lista. Durante está etapa, **será solicitado permissão de usuário administrativo para instalar os drives das placas**, principalmente para as reconhecer na porta USB do computador (será solicitado mais de uma vez, negar a permissão de um pode, mais para a frente, impedir que o código seja gravado no microcontrolador escolhido).

![Interface de usuário para definir o microcontrolador](screenshots/usecase/conf_mic_cca_mic.png "Interface de usuário para definir o microcontrolador")

Concluindo tudo, basta voltar para a interface de apresentação e definir um apelido para que a IA possa interagir normalmente.

![adicionando apelido na interface de apresentação](screenshots/usecase/apresentacao_preenchida_cca_mic.png "adicionando apelido na interface de apresentação")

### Criando Projeto: Hello World

Um projeto simples criado quando se inicia na programação de sistemas embarcados, o chamado *"hello world"* para mmicrocontroladores, é o Blink - fazer o led piscar a cada 1 segundo. Para tal, será o seguinte prompting:

- **Microcontrolador**: Arduino UNO R3 - \`Arduino UNO\`;
- **S.O.**: Windows 11;
- **Nodejs**: versão 22.19.0;
- **PNPM**: versão 10.17.0;
- **Python**: versão 3.13.12;
- **Nome do projeto**: Hello_World;
- **Prompting**: *"Crie o código necessário para fazer o principal LED do microcontrolador piscar a cada 1 segundo."*

![Visualizando tela de interação com IA que contém a resposta gerada pela mesma](screenshots/resultados/resultado_solicitacao_blink_cca_mic.png "Visualizando tela de interação com IA que contém a resposta gerada pela mesma")

Tendo gerado o código corretamente, em baixo, no último botão da direita (gerar, compilar e gravar código), irá mostrar novas funcionalidades. Primeiro será solicitado a criação do projeto e dos arquivos, depois a compilação do mesmo e por último a gravação do projeto no microcontrolador em questão.

TituloImagem: ![Visualizando tela com funcionalidades responsáveis por interagir com o microcontrolador](screenshots/resultados/resultado_solicitacao_gerar_compilar_cca_mic.png "Visualizando tela com funcionalidades responsáveis por interagir com o microcontrolador")

Para concluir o projeto Hello_World, foi executado o mesmo prompting, mas usando o microcontrolador ESP32S da NodeMCU. Entretanto, teve que fazer uma configuração adicional: **instalar do drive do chip CP2102** [Silicon Labs: Drive CP2102](https://www.silabs.com/software-and-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads). Com a tabela, pode-se notar que a aplicação conseguiu atender ao prompting gerando o código concreto para o projeto Blink, fazendo o led piscar a cada 1 segundo.

| Microcontrolador | Geração | Compilação | Gravação | Execução |
|:-----------------|:------:|:----------:|:--------:|:--------:|
| Arduino UNO R3   | SIM    | SIM        | SIM      | SIM      |
| ESP32S NodeMCU   | SIM    | SIM        | SIM      | SIM      |

![Mostrando resultado da gravação do Projeto no mic ESP32S da NodeMCU](screenshots/resultados/resultado_solicitacao_blink_esp32snodemcu.png "Mostrando resultado da gravação do Projeto no mic ESP32S da NodeMCU")

## Fluxos alternativos básicos

Além das funcionalidades vistas ao longo do tutorial, a aplicação **salva o contexto** caso a aplicação trave ou caso o usuário feche a aba que estaria executando a aplicação (aba do navegador). O usuário, quando reconectado, pode optar por **manter os dados de configuração** e, quando for entrar no chat, pode optar por **apagar paenas os dados do chat feitas anteriormente**. Estes dois recursos são importantes pois **o usuário terá de ir a tela inicial e alterar o nome do projeto** quando quiser **criar um projeto diferente** do anterior (apagando o registro do chat), evitando que o anterior seja esquecido quando o novo for gerado.

          `} />
        </MyTextoCorrido>
      </MyContainer>
    </MyBody>
  )
}

export default Tutorial_CCA_MIC