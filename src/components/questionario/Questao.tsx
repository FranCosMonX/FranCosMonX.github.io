import { Box, Divider, List, ListItem, Typography } from "@mui/material"
import { useEffect, useState, type FC } from "react"
import MyButton from "./MyButton";
import MyTextField from "./MyTextField";

interface QuestaoParams {
  pergunta: string;
  tipo_resposta: string | number;
  resposta_objetiva?: boolean;
  opcoes_resposta?: string[];
  resposta_callback: (resposta: any) => void;
  campo_obrigatorio: boolean;
  error?: boolean;
  helpertext?: string;
}

const Questao : FC <QuestaoParams> = ({pergunta, resposta_objetiva, opcoes_resposta, resposta_callback, campo_obrigatorio, tipo_resposta, error, helpertext}) => {
  const [pergunta_iniciada, set_pergunta_iniciada] = useState(false)
  const [opcaoo_ativa, set_opcao_ativa] = useState<string | null>(null)
  const [input_text_field, set_input_text_field] = useState("")
  
  useEffect(() => {
    if(!pergunta_iniciada){
      set_pergunta_iniciada(true)
    }
  }, [pergunta_iniciada])

  useEffect (() => {
    console.log(input_text_field)
    resposta_callback(input_text_field)
  }, [input_text_field])

  return (
    <Box sx={{
      backgroundColor: 'var(--accent-bg)',
      color: 'var(--text)',
      width: '100%',
      padding: '20px',
      paddingTop: '10px',
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      borderRadius: '13px',
      position: 'relative'
    }}>
      {campo_obrigatorio && <span className="campo_obrigatorio">obrigatório</span>}
      <Typography sx={{marginTop: '20px'}} variant="body1" align="justify">{pergunta}</Typography>
      <Divider sx={{backgroundColor: 'var(--text)', width: '100%'}} />
      {
        resposta_objetiva != undefined && pergunta_iniciada && resposta_objetiva && opcoes_resposta != undefined && opcoes_resposta.length > 0 && 
        <List sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: '5px',
          paddingTop: '7px'
        }}>
          {opcoes_resposta.map((opcao, index) => {
            return (
              <ListItem key={index}>
                <MyButton
                  onSelect={() => {
                    resposta_callback(opcao)
                    set_opcao_ativa(opcao)
                  }}
                  variant={opcaoo_ativa === opcao ? "contained" : "outlined"} // muda estilo se ativo
                  onClick={() => {
                    resposta_callback(opcao)
                    set_opcao_ativa(opcao)
                  }}
                  sx={{
                    width: '100%',
                    backgroundColor: opcaoo_ativa === opcao ? 'var(--social-bg)' : 'var(--accent-bg)',
                    border: opcaoo_ativa === opcao ? '1px solid var(--text)' : 'var(--accent-bg)',
                    color: 'var(--text)'
                  }}>
                  {opcao}
                </MyButton>
              </ListItem>
            )
          })}
        </List>
      }
      {
        resposta_objetiva != undefined && pergunta_iniciada && !resposta_objetiva &&
        <MyTextField
          type="string"
          variant="outlined"
          value={input_text_field}
          onChange={(e) => {
            const value = e.target.value;
            if (tipo_resposta === 'string'){
              set_input_text_field(value);
              return
            }
            if (/^[0-9]*[0]*$/.test(value)) {
              set_input_text_field(value);
            }
          }}
        />
      }
      {
        error != undefined && error &&
        <Box sx={{
          backgroundColor: ('var(--error-bg)'),
          borderRadius: '19px',
          padding: '5px'
        }}
        >
          {
            helpertext != undefined && helpertext?.length > 0 && 
            <Typography variant="body1">{helpertext}</Typography>
          }
          {
            (helpertext == undefined || helpertext.length == 0) && 
            <Typography variant="body1">Houve um problema ao responder a questão. Tente Novamente.</Typography>
          }
        </Box>
      }
    </Box>
  )
}

export default Questao