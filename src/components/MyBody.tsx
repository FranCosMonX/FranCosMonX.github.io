import { Container } from "@mui/material";
import type { FC, ReactNode } from "react";

interface MyBodyParams {
  children?: ReactNode;
}

const MyBody: FC <MyBodyParams> = ({ children }) => {
  return (
    <Container disableGutters maxWidth={'xl'} sx={{
      minWidth: '100%',
      minHeight: '100%',
      maxWidth: '100%',
      maxHeight: '100%',
      paddingTop: '20px',
      height: '100%',
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