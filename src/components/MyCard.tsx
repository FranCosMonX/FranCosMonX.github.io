import { Card, CardContent, CardHeader, Divider, Link, Typography } from "@mui/material";
import { Fragment, type FC } from "react";

interface SitesParams {
  nome: string;
  href: string;
}

interface MyCard {
  titulo: string;
  conteudo: string;
  data_modificacao: string;
  autor?: string;
  sites?: SitesParams[]
}

const MyCard : FC<MyCard> = ({titulo, conteudo, data_modificacao, autor,sites}) => {
  
  return (
    <Card sx={{
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: 'var(--accent-bg)', 
      color: 'var(--text)', 
      borderRadius: '9px 9px',
      padding: '10px'
    }}>
      {autor == undefined || autor.length == 0 && <CardHeader title={titulo} />}
      {autor != undefined && autor.length != 0 && <CardHeader title={titulo} about={autor}/>}
      <Divider sx={{backgroundColor: 'var(--text)', width: '80%'}} />
      <CardContent>
        <Typography align="justify" sx={{marginTop: '8px', marginBottom: '8px'}}>{conteudo}</Typography>
        {
          sites != undefined && sites.length > 0 && 
          <Typography align="left">
          Links úteis: {sites != undefined && 
            sites?.map((site, index) => {
              if (sites.length == 1 || sites.length - 1 == index){
                return (
                  <Fragment>
                    <Link href={site.href}>{site.nome}.</Link>
                  </Fragment>
                )
              } else {
                return (
                  <Fragment>
                    <Link href={site.href}>{site.nome}, </Link>
                  </Fragment>
                )
              }
            })}
        </Typography>
        }
        <Typography variant="body2" align="right">{data_modificacao}</Typography>
      </CardContent>
    </Card>
  )
}

export default MyCard