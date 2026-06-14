import { Box } from "@mui/material";
import type { ReactNode } from "react";
import type React from "react";

interface MyTextoCorridoParams {
  textAlign: 'center' | 'left' | 'right' | 'end' | 'start' | 'justify';
  children: ReactNode;
  sx?: {};
}

const MyTextoCorrido: React.FC<MyTextoCorridoParams> = ({textAlign, sx, children}) => {
  return (
    <Box
      sx={{
        textAlign: textAlign,
        maxWidth: '100%',
        marginBottom: '10px',
        "& h1": { fontSize: 38, fontWeight: 700 },
        "& h2": { fontSize: 32, fontWeight: 600 },
        "& p": { fontSize: 'var(--text-size)', lineHeight: 'var(--line-height)' },
        "& code": {
          background: "#eee",
          padding: "2px 6px",
          borderRadius: "4px",
        },
        ...sx
      }}
    >
      {children}
    </Box>
  )
}

export default MyTextoCorrido;