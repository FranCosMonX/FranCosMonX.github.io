import type { FC } from "react";
import MyMenuList from "./MyMenuList";
import { Box, ListItemText, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";


const MyMenu:FC = () => {
  const navigate = useNavigate()

  return (
    <Box sx={{
      height: '100%',
      width: '180px',
      paddingLeft: '10px',
      paddingRight: '5px',
      borderRight: '1px solid var(--accent-bg)'
    }}>
      <MyMenuList>
        <MenuItem sx={{border: '.8px solid var(--social-bg)', borderRadius: '25%'}}>
          <ListItemText title="Voltar ao Inicio" onClick={() => navigate('/')} >FranCosMonX</ListItemText>
        </MenuItem>
        <MenuItem sx={{':hover': {backgroundColor: 'var(--accent-bg)'}}}>
          <ListItemText title="Projetos">Projetos</ListItemText>
        </MenuItem>
        <MenuItem sx={{':hover': {backgroundColor: 'var(--accent-bg)'}}}>
          <ListItemText title="Pesquisas" onClick={(() => navigate('/pesquisas'))} >Pesquisas</ListItemText>
        </MenuItem>
        <MenuItem sx={{':hover': {backgroundColor: 'var(--accent-bg)'}}}>
          <ListItemText title="Apps">Apps</ListItemText>
        </MenuItem>
        <MenuItem sx={{':hover': {backgroundColor: 'var(--accent-bg)'}}}>
          <ListItemText title="Sobre">Sobre</ListItemText>
        </MenuItem>
      </MyMenuList>
    </Box>
  )
}

export default MyMenu