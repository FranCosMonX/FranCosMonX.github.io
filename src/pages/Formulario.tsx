import { useState, type FC } from "react";
import { supabase } from "../../supabase";
import MyButton from "../components/questionario/MyButton";
import Questao from "../components/questionario/Questao";

export interface QuestFormParams {
  area_atuacao?: string | null;
  nivel_conhecimento_programacao?: string | null;
  nivel_conhecimento_microcontrolador?: string | null;

  facil_compreender?: boolean | null;
  opcoes_apresentadas_sao_claras?: boolean | null;
  facil_configurar_ambiente?: boolean | null;
  navegacao_intuitiva?: boolean | null;

  ia_compreendeu_requisitos?: boolean | null;
  ia_gerou_resposta_coerente?: boolean | null;
  audio_foi_usado?: boolean | null;

  codigo_atendeu_necessidades?: boolean | null;
  codigo_facil_compreencao?: boolean | null;
  codigo_muitas_alteracoes_manuais?: boolean | null;

  compilacao_projeto_util?: boolean | null;
  gravacao_no_microcontrolador_util?: boolean | null;

  ajudou_entender_desenvolvimento_mic?: boolean | null;
  reduziu_dificuldade_tecnica_no_desenvolvimento?: boolean | null;
  auxiliou_na_aprendizagem?: boolean | null;

  esta_satisfeita_com_aplicacao?: boolean | null;
  utilizaria_projeto_futuro?: boolean | null;
  recomendaria_para_pessoas?: boolean | null;

  nota_atribuida_aplicacao?: number | null;

  o_que_melhoraria?: string | null;
  funcionalidades_futuras?: string | null;
}

const Formulario: FC = () => {
  const [gabarito, setGabarito] = useState<QuestFormParams>()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!gabarito) {
      alert("Preencha o formulário antes de enviar");
      return;
    }
    
    const lista = [
      gabarito.area_atuacao,
      gabarito.nivel_conhecimento_programacao,
      gabarito.nivel_conhecimento_microcontrolador,

      gabarito.facil_compreender,
      gabarito.opcoes_apresentadas_sao_claras,
      gabarito.facil_configurar_ambiente,
      gabarito.navegacao_intuitiva,

      gabarito.ia_compreendeu_requisitos,
      gabarito.ia_gerou_resposta_coerente,
      gabarito.audio_foi_usado,

      gabarito.codigo_atendeu_necessidades,
      gabarito.codigo_facil_compreencao,
      gabarito.codigo_muitas_alteracoes_manuais,

      gabarito.compilacao_projeto_util,
      gabarito.gravacao_no_microcontrolador_util,

      gabarito.ajudou_entender_desenvolvimento_mic,
      gabarito.reduziu_dificuldade_tecnica_no_desenvolvimento,
      gabarito.auxiliou_na_aprendizagem,

      gabarito.esta_satisfeita_com_aplicacao,
      gabarito.utilizaria_projeto_futuro,
      gabarito.recomendaria_para_pessoas,

      gabarito.nota_atribuida_aplicacao,

      gabarito.o_que_melhoraria,
      gabarito.funcionalidades_futuras
    ];

    for (let i of lista){
      try{
        if (i === undefined || i === null || String(i + "").length <= 0) {
          alert('Erro ao Mandar solicitação. faltou responder um campo')
          return;
        }
        if (typeof i === "string" && i.length <= 0){
          alert('Erro ao Mandar solicitação. faltou responder um campo')
          return;
        }
        if (typeof i == "number" && i >= 0 && i <= 10){
          alert('O valor deve estar entre 0 e 10.')
          return;
        }
      }
      catch (e){
        alert('Problema inesperado nas checagens dos campos')
        return;
      }
      
    }

    const { data, error } = await supabase
      .from("cca_mic_satisfacao") 
      .insert([gabarito]); 

    if (error) {
      console.error(error);
      alert("Erro ao salvar");
    } else {
      console.log(gabarito);
      alert("Dados salvos com sucesso!");
      console.log(data);
    }
  }

  return (
    <form className="formularios" onSubmit={handleSubmit}>
      <Questao
        campo_obrigatorio={true}
        pergunta="Qual sua área de atuação?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={['Estudante', 'Professor', 'Pesquisador', 'Profissional da indústria', 'Outro']}
        resposta_callback={(resposta) => {
          setGabarito({
            ...gabarito,
            area_atuacao: typeof resposta === "string" ? String(resposta) : null
          })
        }}
      />
      <Questao
        campo_obrigatorio={true}
        pergunta="Qual seu nível de conhecimento em programação?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={['Nenhum', 'Básico', 'Intermediário', 'Avançado', 'Especialista']}
        resposta_callback={(resposta) => {
          setGabarito({
            ...gabarito,
            nivel_conhecimento_programacao: typeof resposta === "string" ? String(resposta) : null
          })
        }}
      />
      <Questao 
        campo_obrigatorio={true}
        pergunta="Qual seu nível de conhecimento em microcontroladores?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={['Nenhum', 'Básico', 'Intermediário', 'Avançado', 'Especialista']}
        resposta_callback={(resposta) => {
          setGabarito({
            ...gabarito,
            nivel_conhecimento_microcontrolador: typeof resposta === "string" ? String(resposta) : null
          })
        }}
      />
      <Questao 
        campo_obrigatorio={true}
        pergunta="A aplicação foi fácil de compreender?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={['Não', 'Sim']}
        resposta_callback={(resposta) => {
          setGabarito({
            ...gabarito,
            facil_compreender: resposta != undefined && typeof resposta === "string" ?
              resposta == "Sim" ? true : false
            : null
          })
        }}
      />
      <Questao
        campo_obrigatorio={true}
        pergunta="As opções apresentadas pela aplicação são claras?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={['Não', 'Sim']}
        resposta_callback={(resposta) => {
          setGabarito({
            ...gabarito,
            opcoes_apresentadas_sao_claras:
              resposta != undefined && typeof resposta === "string"
                ? resposta == "Sim"
                : null
          });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="Foi fácil configurar o ambiente de desenvolvimento?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={['Discordo totalmente','Discordo','Neutro','Concordo','Concordo totalmente']}
        resposta_callback={(resposta) => {
          setGabarito({
            ...gabarito,
            facil_configurar_ambiente:
              resposta != undefined && typeof resposta === "string"
                ? resposta == "Sim"
                : null
          });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="A navegação da aplicação é intuitiva?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={['Discordo totalmente','Discordo','Neutro','Concordo','Concordo totalmente']}
        resposta_callback={(resposta) => {
          setGabarito({
            ...gabarito,
            navegacao_intuitiva:
              resposta != undefined && typeof resposta === "string"
                ? resposta == "Sim"
                : null
          });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="A IA compreendeu corretamente os requisitos informados?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={['Não', 'Sim']}
        resposta_callback={(resposta) => {
          setGabarito({
            ...gabarito,
            ia_compreendeu_requisitos:
              resposta != undefined && typeof resposta === "string"
                ? resposta == "Sim"
                : null
          });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="A IA gerou respostas coerentes com o que foi solicitado?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={['Não', 'Sim']}
        resposta_callback={(resposta) => {
          setGabarito({
            ...gabarito,
            ia_gerou_resposta_coerente:
              resposta != undefined && typeof resposta === "string"
                ? resposta == "Sim"
                : null
          });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="Você utilizou a funcionalidade de áudio?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={['Não', 'Sim']}
        resposta_callback={(resposta) => {
          setGabarito({
            ...gabarito,
            audio_foi_usado:
              resposta != undefined && typeof resposta === "string"
                ? resposta == "Sim"
                : null
          });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="O código gerado atendeu às necessidades do projeto?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={['Não', 'Sim']}
        resposta_callback={(resposta) => {
          setGabarito({
            ...gabarito,
            codigo_atendeu_necessidades:
              resposta != undefined && typeof resposta === "string"
                ? resposta == "Sim"
                : null
          });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="O código gerado foi fácil de compreender?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={['Não', 'Sim']}
        resposta_callback={(resposta) => {
          setGabarito({
            ...gabarito,
            codigo_facil_compreencao:
              resposta != undefined && typeof resposta === "string"
                ? resposta == "Sim"
                : null
          });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="O código exigiu muitas alterações manuais?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={['Não', 'Sim']}
        resposta_callback={(resposta) => {
          setGabarito({
            ...gabarito,
            codigo_muitas_alteracoes_manuais:
              resposta != undefined && typeof resposta === "string"
                ? resposta == "Sim"
                : null
          });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="A funcionalidade de compilação do projeto foi útil?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={['Não', 'Sim']}
        resposta_callback={(resposta) => {
          setGabarito({
            ...gabarito,
            compilacao_projeto_util:
              resposta != undefined && typeof resposta === "string"
                ? resposta == "Sim"
                : null
          });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="A funcionalidade de gravação no microcontrolador foi útil?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={['Não', 'Sim']}
        resposta_callback={(resposta) => {
          setGabarito({
            ...gabarito,
            gravacao_no_microcontrolador_util:
              resposta != undefined && typeof resposta === "string"
                ? resposta == "Sim"
                : null
          });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="A aplicação ajudou você a entender melhor o desenvolvimento para microcontroladores?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={['Não', 'Sim']}
        resposta_callback={(resposta) => {
          setGabarito({
            ...gabarito,
            ajudou_entender_desenvolvimento_mic:
              resposta != undefined && typeof resposta === "string"
                ? resposta == "Sim"
                : null
          });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="A aplicação reduziu a dificuldade técnica durante o desenvolvimento?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={['Não', 'Sim']}
        resposta_callback={(resposta) => {
          setGabarito({
            ...gabarito,
            reduziu_dificuldade_tecnica_no_desenvolvimento:
              resposta != undefined && typeof resposta === "string"
                ? resposta == "Sim"
                : null
          });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="A aplicação auxiliou no processo de aprendizagem?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={['Não', 'Sim']}
        resposta_callback={(resposta) => {
          setGabarito({
            ...gabarito,
            auxiliou_na_aprendizagem:
              resposta != undefined && typeof resposta === "string"
                ? resposta == "Sim"
                : null
          });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="Você ficou satisfeito com a aplicação?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={['Não', 'Sim']}
        resposta_callback={(resposta) => {
          setGabarito({
            ...gabarito,
            esta_satisfeita_com_aplicacao:
              resposta != undefined && typeof resposta === "string"
                ? resposta == "Sim"
                : null
          });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="Você utilizaria a aplicação em projetos futuros?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={['Não', 'Sim']}
        resposta_callback={(resposta) => {
          setGabarito({
            ...gabarito,
            utilizaria_projeto_futuro:
              resposta != undefined && typeof resposta === "string"
                ? resposta == "Sim"
                : null
          });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="Você recomendaria a aplicação para outras pessoas?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={['Não', 'Sim']}
        resposta_callback={(resposta) => {
          setGabarito({
            ...gabarito,
            recomendaria_para_pessoas:
              resposta != undefined && typeof resposta === "string"
                ? resposta == "Sim"
                : null
          });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="Qual nota você atribui à aplicação? (0 a 10)"
        resposta_objetiva={false}
        tipo_resposta={'number'}
        resposta_callback={(resposta) => {
          setGabarito({
            ...gabarito,
            nota_atribuida_aplicacao:
              resposta != undefined ? Number(resposta) : null
          });
        }}
      />

      <Questao
        campo_obrigatorio={false}
        pergunta="O que você melhoraria na aplicação?"
        resposta_objetiva={false}
        tipo_resposta={'string'}
        resposta_callback={(resposta) => {
          setGabarito({
            ...gabarito,
            o_que_melhoraria:
              typeof resposta === "string" ? resposta : null
          });
        }}
      />

      <Questao
        campo_obrigatorio={false}
        pergunta="Quais funcionalidades você gostaria de ver em versões futuras?"
        resposta_objetiva={false}
        tipo_resposta={'string'}
        resposta_callback={(resposta) => {
          setGabarito({
            ...gabarito,
            funcionalidades_futuras:
              typeof resposta === "string" ? resposta : null
          });
        }}
      />
      
      <MyButton variant="contained" type={"submit"} >ENVIAR</MyButton>
    </form>
  );
}

export default  Formulario