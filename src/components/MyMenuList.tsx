import { MenuList } from "@mui/material";
import type { FC, ReactNode } from "react";

interface MyMenuParams {
  children: ReactNode;
  sx?: {}
}

const MyMenuList: FC<MyMenuParams> = ({children, sx}) => {
  return (
    <MenuList sx={{display: 'flex', flexDirection: 'column', gap: '15px', height: '100%', sx }}>
      {children}
    </MenuList>
  )
}

export default MyMenuList