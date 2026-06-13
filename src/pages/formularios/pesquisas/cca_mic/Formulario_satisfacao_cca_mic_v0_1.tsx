import { useEffect, type FC } from "react";
import { AREA_ATUACAO_LIST, CONCORDANCIA_NV5_LIST, CONHECIMENTO_NV5_LIST, SIM_NAO_LIST } from '../../../../types/quetionario';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { avaliacao_ccamic_v1_schema, type Avaliacao_v1_ccamic_FormInput, type Avaliacao_v1_ccamic_FormOutput } from "./schemas/formulario_ccamic_v1.schema";
import { supabase } from "../../../../../supabase";
import Questao from "../../../../components/questionario/Questao";
import MyButton from "../../../../components/questionario/MyButton";

const Formulario_Satisfacao_CCA_MIC_V0_1: FC = () => {
  const { handleSubmit, setValue, register, formState: {errors, isSubmitted} } = useForm<
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

  const onSubmit = async (e: Avaliacao_v1_ccamic_FormOutput) => {
    console.log(e)
    const { data, error } = await supabase
      .from("cca_mic_satisfacao") 
      .insert([e]); 

    if (error) {
      console.error(error);
      alert("Erro ao salvar");
    } else {
      console.log(e);
      alert("Dados salvos com sucesso!");
      console.log(data);
    }
  };

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
        }}
        error={!!errors.area_atuacao && isSubmitted}
        helpertext={errors.area_atuacao?.message}
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
        }}
        error={!!errors.nivel_conhecimento_programacao && isSubmitted}
        helpertext={errors.nivel_conhecimento_programacao?.message}
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
        }}
        error={!!errors.nivel_conhecimento_microcontrolador && isSubmitted}
        helpertext={errors.nivel_conhecimento_microcontrolador?.message}
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
        }}
        error={!!errors.facil_compreender && isSubmitted}
        helpertext={errors.facil_compreender?.message}
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
        }}
        error={!!errors.opcoes_apresentadas_sao_claras && isSubmitted}
        helpertext={errors.opcoes_apresentadas_sao_claras?.message}
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
        }}
        error={!!errors.facil_configurar_ambiente && isSubmitted}
        helpertext={errors.facil_configurar_ambiente?.message}
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
        }}
        error={!!errors.navegacao_intuitiva && isSubmitted}
        helpertext={errors.navegacao_intuitiva?.message}
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
        }}
        error={!!errors.ia_compreendeu_requisitos && isSubmitted}
        helpertext={errors.ia_compreendeu_requisitos?.message}
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
        }}
        error={!!errors.ia_gerou_resposta_coerente && isSubmitted}
        helpertext={errors.ia_gerou_resposta_coerente?.message}
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
        }}
        error={!!errors.audio_foi_usado && isSubmitted}
        helpertext={errors.audio_foi_usado?.message}
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
        }}
        error={!!errors.codigo_atendeu_necessidades && isSubmitted}
        helpertext={errors.codigo_atendeu_necessidades?.message}
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
        }}
        error={!!errors.codigo_facil_compreencao && isSubmitted}
        helpertext={errors.codigo_facil_compreencao?.message}
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
        }}
        error={!!errors.codigo_muitas_alteracoes_manuais && isSubmitted}
        helpertext={errors.codigo_muitas_alteracoes_manuais?.message}
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
        }}
        error={!!errors.compilacao_projeto_util && isSubmitted}
        helpertext={errors.compilacao_projeto_util?.message}
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
        }}
        error={!!errors.gravacao_no_microcontrolador_util && isSubmitted}
        helpertext={errors.gravacao_no_microcontrolador_util?.message}
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
        }}
        error={!!errors.ajudou_entender_desenvolvimento_mic && isSubmitted}
        helpertext={errors.ajudou_entender_desenvolvimento_mic?.message}
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
        }}
        error={!!errors.reduziu_dificuldade_tecnica_no_desenvolvimento && isSubmitted}
        helpertext={errors.reduziu_dificuldade_tecnica_no_desenvolvimento?.message}
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
        }}
        error={!!errors.auxiliou_na_aprendizagem && isSubmitted}
        helpertext={errors.auxiliou_na_aprendizagem?.message}
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
        }}
        error={!!errors.esta_satisfeita_com_aplicacao && isSubmitted}
        helpertext={errors.esta_satisfeita_com_aplicacao?.message}
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
        }}
        error={!!errors.utilizaria_projeto_futuro && isSubmitted}
        helpertext={errors.utilizaria_projeto_futuro?.message}
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
        }}
        error={!!errors.recomendaria_para_pessoas && isSubmitted}
        helpertext={errors.recomendaria_para_pessoas?.message}
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
        }}
        error={!!errors.nota_atribuida_aplicacao && isSubmitted}
        helpertext={errors.nota_atribuida_aplicacao?.message}
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
        }}
        error={!!errors.o_que_melhoraria && isSubmitted}
        helpertext={errors.o_que_melhoraria?.message}
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
        }}
        error={!!errors.funcionalidades_futuras && isSubmitted}
        helpertext={errors.funcionalidades_futuras?.message}
      />
      
      <MyButton variant="contained" type={"submit"} onClick={() =>  console.log(errors)} >ENVIAR</MyButton>
    </form>
  );
}

export default Formulario_Satisfacao_CCA_MIC_V0_1
// Formulario_Satisfacao_CCA_MIC_V0_1