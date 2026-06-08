import { MenuList } from "@mui/material";
import type { FC, ReactNode } from "react";

interface MyMenuParams {
  children: ReactNode;
}

const MyMenuList: FC<MyMenuParams> = ({children}) => {
  return (
    <MenuList sx={{display: 'flex', flexDirection: 'column', gap: '15px', height: '100%' }}>
      {children}
    </MenuList>
  )
}

export default MyMenuList