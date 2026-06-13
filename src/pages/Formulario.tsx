import { useEffect, type FC } from "react";
// import { supabase } from "../../supabase";
import MyButton from "../components/questionario/MyButton";
import Questao from "../components/questionario/Questao";
import { type AREA_ATUACAO, type CONHECIMENTO_NV5, type CONCORDANCIA_NV5, AREA_ATUACAO_LIST, CONCORDANCIA_NV5_LIST, CONHECIMENTO_NV5_LIST, SIM_NAO_LIST } from '../types/quetionario';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { avaliacao_ccamic_v1_schema, type Avaliacao_v1_ccamic_FormInput, type Avaliacao_v1_ccamic_FormOutput } from "./formularios/pesquisas/cca_mic/schemas/formulario_ccamic_v1.schema";
// import type z from "zod";

export interface QuestFormParams {
  area_atuacao?: AREA_ATUACAO;
  nivel_conhecimento_programacao?: CONHECIMENTO_NV5;
  nivel_conhecimento_microcontrolador?: CONHECIMENTO_NV5;

  facil_compreender?: boolean;
  opcoes_apresentadas_sao_claras?: boolean;
  facil_configurar_ambiente?: CONCORDANCIA_NV5;
  navegacao_intuitiva?: CONCORDANCIA_NV5;

  ia_compreendeu_requisitos?: boolean;
  ia_gerou_resposta_coerente?: boolean;
  audio_foi_usado?: boolean;

  codigo_atendeu_necessidades?: boolean;
  codigo_facil_compreencao?: boolean;
  codigo_muitas_alteracoes_manuais?: boolean;

  compilacao_projeto_util?: boolean;
  gravacao_no_microcontrolador_util?: boolean;

  ajudou_entender_desenvolvimento_mic?: boolean;
  reduziu_dificuldade_tecnica_no_desenvolvimento?: boolean;
  auxiliou_na_aprendizagem?: boolean;

  esta_satisfeita_com_aplicacao?: boolean;
  utilizaria_projeto_futuro?: boolean;
  recomendaria_para_pessoas?: boolean;

  nota_atribuida_aplicacao?: number;

  o_que_melhoraria?: string;
  funcionalidades_futuras?: string;
}

const Formulario: FC = () => {
  

  // const [gabarito, setGabarito] = useState<QuestFormParams>()
  const { handleSubmit, setValue, register, formState: {errors} } = useForm<
    Avaliacao_v1_ccamic_FormInput,
    any,
    Avaliacao_v1_ccamic_FormOutput
  >({
    resolver: zodResolver(avaliacao_ccamic_v1_schema)
  });

  useEffect(() => {
    register("area_atuacao");
    register("nivel_conhecimento_programacao");
    register("nivel_conhecimento_microcontrolador");
    register("facil_compreender");
    register("opcoes_apresentadas_sao_claras");
    register("facil_configurar_ambiente");
    register("navegacao_intuitiva");
    register("ia_compreendeu_requisitos");
    register("ia_gerou_resposta_coerente");
    register("audio_foi_usado");
    register("codigo_atendeu_necessidades");
    register("codigo_facil_compreencao");
    register("codigo_muitas_alteracoes_manuais");
    register("compilacao_projeto_util");
    register("gravacao_no_microcontrolador_util");
    register("ajudou_entender_desenvolvimento_mic");
    register("reduziu_dificuldade_tecnica_no_desenvolvimento");
    register("auxiliou_na_aprendizagem");
    register("esta_satisfeita_com_aplicacao");
    register("utilizaria_projeto_futuro");
    register("recomendaria_para_pessoas");
    register("nota_atribuida_aplicacao");
    register("o_que_melhoraria");
    register("funcionalidades_futuras");
  }, [register]);

  const onSubmit = (data: Avaliacao_v1_ccamic_FormOutput) => {
    console.log(data);
  };
  // async function handleSubmit(e: React.FormEvent) {
  //   e.preventDefault();
  //   if (!gabarito) {
  //     alert("Preencha o formulário antes de enviar");
  //     return;
  //   }
    
  //   const lista = [
  //     gabarito.area_atuacao,
  //     gabarito.nivel_conhecimento_programacao,
  //     gabarito.nivel_conhecimento_microcontrolador,

  //     gabarito.facil_compreender,
  //     gabarito.opcoes_apresentadas_sao_claras,
  //     gabarito.facil_configurar_ambiente,
  //     gabarito.navegacao_intuitiva,

  //     gabarito.ia_compreendeu_requisitos,
  //     gabarito.ia_gerou_resposta_coerente,
  //     gabarito.audio_foi_usado,

  //     gabarito.codigo_atendeu_necessidades,
  //     gabarito.codigo_facil_compreencao,
  //     gabarito.codigo_muitas_alteracoes_manuais,

  //     gabarito.compilacao_projeto_util,
  //     gabarito.gravacao_no_microcontrolador_util,

  //     gabarito.ajudou_entender_desenvolvimento_mic,
  //     gabarito.reduziu_dificuldade_tecnica_no_desenvolvimento,
  //     gabarito.auxiliou_na_aprendizagem,

  //     gabarito.esta_satisfeita_com_aplicacao,
  //     gabarito.utilizaria_projeto_futuro,
  //     gabarito.recomendaria_para_pessoas,

  //     gabarito.nota_atribuida_aplicacao,

  //     gabarito.o_que_melhoraria,
  //     gabarito.funcionalidades_futuras
  //   ];

  //   // let contador = 0;
  //   // for (let i of lista){
  //   //   try{
  //   //     if (i === undefined || i === null) {
  //   //       alert('Erro ao Mandar solicitação. faltou responder um campo')
  //   //       console.error(contador)
  //   //       return;
  //   //     }
  //   //     if (typeof i === "string" && i.length <= 0){
  //   //       alert('Erro ao Mandar solicitação. faltou responder um campo')
  //   //       console.error(contador)
  //   //       return;
  //   //     }
  //   //     if (typeof i == "number" && i >= 0 && i <= 10){
  //   //       alert('O valor deve estar entre 0 e 10.')
  //   //       return;
  //   //     }
  //   //   }
  //   //   catch (e){
  //   //     alert('Problema inesperado nas checagens dos campos')
  //   //     return;
  //   //   }
  //   //   contador ++;
  //   // }

  //   console.log(gabarito)
  //   // const { data, error } = await supabase
  //   //   .from("cca_mic_satisfacao") 
  //   //   .insert([gabarito]); 

  //   // if (error) {
  //   //   console.error(error);
  //   //   alert("Erro ao salvar");
  //   // } else {
  //   //   console.log(gabarito);
  //   //   alert("Dados salvos com sucesso!");
  //   //   console.log(data);
  //   // }
  // }

  return (
    <form className="formularios" onSubmit={handleSubmit(onSubmit)}>
      <Questao
        campo_obrigatorio={true}
        pergunta="Qual sua área de atuação?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={AREA_ATUACAO_LIST}
        resposta_callback={(resposta) => {
          setValue('area_atuacao', resposta, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        })
          // setGabarito({
          //   ...gabarito,
          //   area_atuacao: typeof resposta === "string" ? resposta : undefined
          // })
        }}
      />
      <Questao
        campo_obrigatorio={true}
        pergunta="Qual seu nível de conhecimento em programação?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={CONHECIMENTO_NV5_LIST}
        resposta_callback={(resposta) => {
          setValue('nivel_conhecimento_programacao', resposta, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        })
          // setGabarito({
          //   ...gabarito,
          //   nivel_conhecimento_programacao: typeof resposta === "string" && CONHECIMENTO_NV5_LIST.includes(resposta) ? String(resposta) : undefined
          // })
        }}
      />
      <Questao 
        campo_obrigatorio={true}
        pergunta="Qual seu nível de conhecimento em microcontroladores?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={CONHECIMENTO_NV5_LIST}
        resposta_callback={(resposta) => {
          setValue('nivel_conhecimento_microcontrolador', resposta, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        })
          // setGabarito({
          //   ...gabarito,
          //   nivel_conhecimento_microcontrolador: typeof resposta === "string" && CONHECIMENTO_NV5_LIST.includes(resposta) ? String(resposta) : undefined
          // })
        }}
      />
      <Questao 
        campo_obrigatorio={true}
        pergunta="A aplicação foi fácil de compreender?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={SIM_NAO_LIST}
        resposta_callback={(resposta) => {
          setValue('facil_compreender', resposta, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        })
          // setGabarito({
          //   ...gabarito,
          //   facil_compreender: resposta != undefined && typeof resposta === "string" ?
          //     resposta == "Sim" ? true : false
          //   : undefined
          // })
        }}
      />
      <Questao
        campo_obrigatorio={true}
        pergunta="As opções apresentadas pela aplicação são claras?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={SIM_NAO_LIST}
        resposta_callback={(resposta) => {
          setValue('opcoes_apresentadas_sao_claras', resposta, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        })
          // setGabarito({
          //   ...gabarito,
          //   opcoes_apresentadas_sao_claras:
          //     resposta != undefined && typeof resposta === "string"
          //     ? resposta == "Sim"
          //     : undefined
          // });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="Foi fácil configurar o ambiente de desenvolvimento?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={CONCORDANCIA_NV5_LIST}
        resposta_callback={(resposta) => {
          setValue('facil_configurar_ambiente', resposta, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        })
          // setGabarito({
          //   ...gabarito,
          //   facil_configurar_ambiente:
          //     resposta != undefined && typeof resposta === "string" && CONCORDANCIA_NV5_LIST.includes(resposta)
          //       ? resposta
          //       : undefined
          // });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="A navegação da aplicação é intuitiva?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={CONCORDANCIA_NV5_LIST}
        resposta_callback={(resposta) => {
          setValue('navegacao_intuitiva', resposta, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        })
          // setGabarito({
          //   ...gabarito,
          //   navegacao_intuitiva:
          //     resposta != undefined && typeof resposta === "string" && CONCORDANCIA_NV5_LIST.includes(resposta)
          //       ? resposta
          //       : undefined
          // });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="A IA compreendeu corretamente os requisitos informados?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={SIM_NAO_LIST}
        resposta_callback={(resposta) => {
          setValue('ia_compreendeu_requisitos', resposta, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        })
          // setGabarito({
          //   ...gabarito,
          //   ia_compreendeu_requisitos:
          //     resposta != undefined && typeof resposta === "string"
          //       ? resposta == "Sim"
          //       : undefined
          // });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="A IA gerou respostas coerentes com o que foi solicitado?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={SIM_NAO_LIST}
        resposta_callback={(resposta) => {
          setValue('ia_gerou_resposta_coerente', resposta, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        })
          // setGabarito({
          //   ...gabarito,
          //   ia_gerou_resposta_coerente:
          //     resposta != undefined && typeof resposta === "string"
          //       ? resposta == "Sim"
          //       : undefined
          // });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="Você utilizou a funcionalidade de áudio?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={SIM_NAO_LIST}
        resposta_callback={(resposta) => {
          setValue('audio_foi_usado', resposta, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        })
          // setGabarito({
          //   ...gabarito,
          //   audio_foi_usado:
          //     resposta != undefined && typeof resposta === "string"
          //       ? resposta == "Sim"
          //       : undefined
          // });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="O código gerado atendeu às necessidades do projeto?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={SIM_NAO_LIST}
        resposta_callback={(resposta) => {
          setValue('codigo_atendeu_necessidades', resposta, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        })
          // setGabarito({
          //   ...gabarito,
          //   codigo_atendeu_necessidades:
          //     resposta != undefined && typeof resposta === "string"
          //       ? resposta == "Sim"
          //       : undefined
          // });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="O código gerado foi fácil de compreender?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={SIM_NAO_LIST}
        resposta_callback={(resposta) => {
          setValue('codigo_facil_compreencao', resposta, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        })
          // setGabarito({
          //   ...gabarito,
          //   codigo_facil_compreencao:
          //     resposta != undefined && typeof resposta === "string"
          //       ? resposta == "Sim"
          //       : undefined
          // });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="O código exigiu muitas alterações manuais?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={SIM_NAO_LIST}
        resposta_callback={(resposta) => {
          setValue('codigo_muitas_alteracoes_manuais', resposta, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        })
          // setGabarito({
          //   ...gabarito,
          //   codigo_muitas_alteracoes_manuais:
          //     resposta != undefined && typeof resposta === "string"
          //       ? resposta == "Sim"
          //       : undefined
          // });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="A funcionalidade de compilação do projeto foi útil?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={SIM_NAO_LIST}
        resposta_callback={(resposta) => {
          setValue('compilacao_projeto_util', resposta, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        })
          // setGabarito({
          //   ...gabarito,
          //   compilacao_projeto_util:
          //     resposta != undefined && typeof resposta === "string"
          //       ? resposta == "Sim"
          //       : undefined
          // });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="A funcionalidade de gravação no microcontrolador foi útil?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={SIM_NAO_LIST}
        resposta_callback={(resposta) => {
          setValue('gravacao_no_microcontrolador_util', resposta, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        })
          // setGabarito({
          //   ...gabarito,
          //   gravacao_no_microcontrolador_util:
          //     resposta != undefined && typeof resposta === "string"
          //       ? resposta == "Sim"
          //       : undefined
          // });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="A aplicação ajudou você a entender melhor o desenvolvimento para microcontroladores?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={SIM_NAO_LIST}
        resposta_callback={(resposta) => {
          setValue('ajudou_entender_desenvolvimento_mic', resposta, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        })
          // setGabarito({
          //   ...gabarito,
          //   ajudou_entender_desenvolvimento_mic:
          //     resposta != undefined && typeof resposta === "string"
          //       ? resposta == "Sim"
          //       : undefined
          // });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="A aplicação reduziu a dificuldade técnica durante o desenvolvimento?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={SIM_NAO_LIST}
        resposta_callback={(resposta) => {
          setValue('reduziu_dificuldade_tecnica_no_desenvolvimento', resposta, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        })
          // setGabarito({
          //   ...gabarito,
          //   reduziu_dificuldade_tecnica_no_desenvolvimento:
          //     resposta != undefined && typeof resposta === "string"
          //       ? resposta == "Sim"
          //       : undefined
          // });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="A aplicação auxiliou no processo de aprendizagem?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={SIM_NAO_LIST}
        resposta_callback={(resposta) => {
          setValue('auxiliou_na_aprendizagem', resposta, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        })
          // setGabarito({
          //   ...gabarito,
          //   auxiliou_na_aprendizagem:
          //     resposta != undefined && typeof resposta === "string"
          //       ? resposta == "Sim"
          //       : undefined
          // });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="Você ficou satisfeito com a aplicação?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={SIM_NAO_LIST}
        resposta_callback={(resposta) => {
          setValue('esta_satisfeita_com_aplicacao', resposta, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        })
          // setGabarito({
          //   ...gabarito,
          //   esta_satisfeita_com_aplicacao:
          //     resposta != undefined && typeof resposta === "string"
          //       ? resposta == "Sim"
          //       : undefined
          // });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="Você utilizaria a aplicação em projetos futuros?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={SIM_NAO_LIST}
        resposta_callback={(resposta) => {
          setValue('utilizaria_projeto_futuro', resposta, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        })
          // setGabarito({
          //   ...gabarito,
          //   utilizaria_projeto_futuro:
          //     resposta != undefined && typeof resposta === "string"
          //       ? resposta == "Sim"
          //       : undefined
          // });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="Você recomendaria a aplicação para outras pessoas?"
        resposta_objetiva={true}
        tipo_resposta={'string'}
        opcoes_resposta={SIM_NAO_LIST}
        resposta_callback={(resposta) => {
          setValue('recomendaria_para_pessoas', resposta, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        })
          // setGabarito({
          //   ...gabarito,
          //   recomendaria_para_pessoas:
          //     resposta != undefined && typeof resposta === "string"
          //       ? resposta === "Sim"
          //       : undefined
          // });
        }}
      />

      <Questao
        campo_obrigatorio={true}
        pergunta="Qual nota você atribui à aplicação? (0 a 10)"
        resposta_objetiva={false}
        tipo_resposta={'number'}
        resposta_callback={(resposta) => {
          setValue('nota_atribuida_aplicacao', 
            typeof resposta == 'string' && resposta.length > 0 ? Number(resposta) : NaN, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
        })
          // console.log(typeof resposta)
          // try {
          //   setGabarito({
          //     ...gabarito,
          //     nota_atribuida_aplicacao:
          //       resposta != undefined  && typeof resposta == 'number' 
          //       ? resposta
          //       : typeof resposta == 'string'
          //         ? Number(resposta)
          //         : undefined
          //   });
          // } catch {
          //   setGabarito({
          //     ...gabarito,
          //     nota_atribuida_aplicacao: undefined
          //   });
          // }
        }}
      />

      <Questao
        campo_obrigatorio={false}
        pergunta="O que você melhoraria na aplicação?"
        resposta_objetiva={false}
        tipo_resposta={'string'}
        resposta_callback={(resposta) => {
          setValue('o_que_melhoraria', resposta, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        })
          // setGabarito({
          //   ...gabarito,
          //   o_que_melhoraria:
          //     typeof resposta === "string" ? resposta : undefined
          // });
        }}
      />

      <Questao
        campo_obrigatorio={false}
        pergunta="Quais funcionalidades você gostaria de ver em versões futuras?"
        resposta_objetiva={false}
        tipo_resposta={'string'}
        resposta_callback={(resposta) => {
          setValue('funcionalidades_futuras', resposta, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        })
          // setGabarito({
          //   ...gabarito,
          //   funcionalidades_futuras:
          //     typeof resposta === "string" ? resposta : undefined
          // });
        }}
      />
      
      <MyButton variant="contained" type={"submit"} onClick={() =>  console.log(errors)} >ENVIAR</MyButton>
    </form>
  );
}

export default  Formulario