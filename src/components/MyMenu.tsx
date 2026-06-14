import { useState, type FC } from "react";
import MyMenuList from "./MyMenuList";
import { Box, Drawer, ListItemText, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const MyMenu:FC = () => {
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(false)

  const contentList = (
    <MyMenuList>
      {
        !isMobile && 
        <MenuItem sx={{border: '.8px solid var(--social-bg)', borderRadius: '25%'}}>
          <ListItemText title="Voltar ao Inicio" onClick={() => navigate('/')} >FranCosMonX</ListItemText>
        </MenuItem>
      }
      <MenuItem sx={{':hover': {backgroundColor: 'var(--accent-bg)'}}}>
        <ListItemText title="Projetos" onClick={() => navigate('/projetos')} >Projetos</ListItemText>
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
  )

  return (
    <Box sx={{
      minHeight: '100%',
      minWidth: '180px',
      width: {
        xs: '100%'
      },
      maxWidth: {
        md: '210px'
      },
      marginRight: '5px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRight: '1px solid var(--accent-bg)',
    }}>
      <Box component={'menu'} sx={{
        padding: '0px',
        display: {
          xs: 'none',
          md: 'flex'
        }
      }}>
        {contentList}
      </Box>

      <Box component={'menu'} sx={{
        padding: '0px',
        display: {
          xs: 'flex',
          md: 'none'
        },
        width: '100%',
        position: 'relative'
      }}>
        <Box
          component="div"
          sx={{
            display: "flex",
            minWidth: '100%',
            justifyContent: 'space-between',
            paddingLeft: '10px',
            paddingRight: '10px',
            alignItems: "center",
          }}
        >
          <Box component={'div'} title="Menu" onClick={() => setIsMobile(true)} sx={{cursor: 'pointer'}}>
            <MenuIcon fontSize="large"/>
          </Box>
          <Box component={'span'} title="Voltar ao Inicio" onClick={() => navigate('/')} sx={{cursor: 'pointer', fontSize: '1.5em'}}>FranCosMonX</Box>
        </Box>
        <Drawer
          open={isMobile}
          onClose={() => setIsMobile(false)}
        >
          <Box
            sx={{
              width: 250,
              height: '100vh',
              padding: "10px",
              backgroundColor: 'var(--bg)',
              color: 'var(--text)',
              textAlign: 'center'
            }}
          >
            {contentList}
          </Box>
        </Drawer>
      </Box>
      
    </Box>
  )
}

export default MyMenu