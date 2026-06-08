import { Container, type SxProps } from "@mui/material"
import type { Breakpoint, Theme } from "@mui/material/styles";
import type { FC, ReactNode } from "react"

interface MyBodyParams{
  children?: ReactNode;
  sx?: SxProps<Theme> | undefined;
  maxWidth?: false | Breakpoint | undefined;
  className?: string;
}

const MyBody: FC <MyBodyParams> = ({className, children, sx, maxWidth}) => {
  return (
    <Container className={className} maxWidth={!maxWidth ? 'xs' : maxWidth} sx={sx} >
      {children}
    </Container>
  )
}

export default MyBody