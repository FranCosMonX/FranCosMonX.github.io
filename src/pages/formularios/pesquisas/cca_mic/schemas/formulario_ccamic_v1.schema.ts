import { z } from "zod";
import {
  AREA_ATUACAO_LIST,
  CONHECIMENTO_NV5_LIST,
  CONCORDANCIA_NV5_LIST,
  SIM_NAO_LIST,
} from "../../../../../types/quetionario";

export const avaliacao_ccamic_v1_schema = z.object({
  area_atuacao: z.enum(AREA_ATUACAO_LIST, {error: 'Selecione uma opção.'}),

  nivel_conhecimento_programacao: z.enum(CONHECIMENTO_NV5_LIST, {error: 'Selecione uma opção.'}),

  nivel_conhecimento_microcontrolador: z.enum(CONHECIMENTO_NV5_LIST, {error: 'Selecione uma opção.'}),

  facil_compreender: z.enum(SIM_NAO_LIST, {error: 'Selecione uma opção.'}).transform((valor) => valor === "Sim"),

  opcoes_apresentadas_sao_claras: z.enum(SIM_NAO_LIST, {error: 'Selecione uma opção.'}).transform((valor) => valor === "Sim"),

  facil_configurar_ambiente: z.enum(CONCORDANCIA_NV5_LIST, {error: 'Selecione uma opção.'}),

  navegacao_intuitiva: z.enum(CONCORDANCIA_NV5_LIST, {error: 'Selecione uma opção.'}),

  ia_compreendeu_requisitos: z.enum(SIM_NAO_LIST, {error: 'Selecione uma opção.'}).transform((valor) => valor === "Sim"),

  ia_gerou_resposta_coerente: z.enum(SIM_NAO_LIST, {error: 'Selecione uma opção.'}).transform((valor) => valor === "Sim"),

  audio_foi_usado: z.enum(SIM_NAO_LIST, {error: 'Selecione uma opção.'}).transform((valor) => valor === "Sim"),

  codigo_atendeu_necessidades: z.enum(SIM_NAO_LIST, {error: 'Selecione uma opção.'}).transform((valor) => valor === "Sim"),

  codigo_facil_compreencao: z.enum(SIM_NAO_LIST, {error: 'Selecione uma opção.'}).transform((valor) => valor === "Sim"),

  codigo_muitas_alteracoes_manuais: z.enum(SIM_NAO_LIST, {error: 'Selecione uma opção.'}).transform((valor) => valor === "Sim"),

  compilacao_projeto_util: z.enum(SIM_NAO_LIST, {error: 'Selecione uma opção.'}).transform((valor) => valor === "Sim"),

  gravacao_no_microcontrolador_util: z.enum(SIM_NAO_LIST, {error: 'Selecione uma opção.'}).transform((valor) => valor === "Sim"),

  ajudou_entender_desenvolvimento_mic: z.enum(SIM_NAO_LIST, {error: 'Selecione uma opção.'}).transform((valor) => valor === "Sim"),

  reduziu_dificuldade_tecnica_no_desenvolvimento: z.enum(SIM_NAO_LIST, {error: 'Selecione uma opção.'}).transform((valor) => valor === "Sim"),

  auxiliou_na_aprendizagem: z.enum(SIM_NAO_LIST, {error: 'Selecione uma opção.'}).transform((valor) => valor === "Sim"),

  esta_satisfeita_com_aplicacao: z.enum(SIM_NAO_LIST, {error: 'Selecione uma opção.'}).transform((valor) => valor === "Sim"),

  utilizaria_projeto_futuro: z.enum(SIM_NAO_LIST, {error: 'Selecione uma opção.'}).transform((valor) => valor === "Sim"),

  recomendaria_para_pessoas: z.enum(SIM_NAO_LIST, {error: 'Selecione uma opção.'}).transform((valor) => valor === "Sim"),

  nota_atribuida_aplicacao: z
    .number({
      error: "Informe uma nota válida"
    })
    .min(0, "A nota deve ser maior ou igual a 0")
    .max(10, "A nota deve ser menor ou igual a 10")
    .refine((v) => !Number.isNaN(v), {
      message: "Informe uma nota válida"
    }),

  o_que_melhoraria: z
    .string()
    .trim()
    .optional()
    .or(z.literal("")),

  funcionalidades_futuras: z
    .string()
    .trim()
    .optional()
    .or(z.literal("")),
});

export type Avaliacao_v1_ccamic_FormData = z.infer<typeof avaliacao_ccamic_v1_schema>;
export type Avaliacao_v1_ccamic_FormInput = z.input<typeof avaliacao_ccamic_v1_schema>;
export type Avaliacao_v1_ccamic_FormOutput = z.output<typeof avaliacao_ccamic_v1_schema>;