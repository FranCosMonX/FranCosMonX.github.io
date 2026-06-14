import { Typography } from "@mui/material";
import type { FC, ReactNode } from "react";

interface MyParagraphParams{
  children: ReactNode;
  textAlign: 'justify' | 'left' | 'rigth';
}

const MyParagraph : FC <MyParagraphParams> = ({ children, textAlign }) => {
  return (
    <Typography sx={{
      fontSize: '20px',
      textAlign: textAlign,
      marginTop: '20px',
      marginBottom: '20px'
    }}>
      {children}
    </Typography>
  )
}

export default MyParagraph;