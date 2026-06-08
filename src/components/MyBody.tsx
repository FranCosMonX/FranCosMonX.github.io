import { Container } from "@mui/material";
import type { ReactNode } from "react";

interface MyBodyParams {
  children?: ReactNode;
}

const MyBody: React.FC<MyBodyParams> = ({ children }) => {
  return (
    <Container disableGutters maxWidth={'xl'} sx={{
      minWidth: '100vw', 
      height: '100vh', 
      color: 'var(--text)',
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'var(--bg)'
    }}>
      {children}
    </Container>
  )
}

export default MyBody;