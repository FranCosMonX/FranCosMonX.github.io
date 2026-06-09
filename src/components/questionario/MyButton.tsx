import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const MyButton = styled(Button)({
  width: "100%",
  "&.MuiButton-contained": {
    backgroundColor: "var(--accent)",       
    color: "var(--text)",                    
    borderColor: "var(--accent-border)",     
    "&:hover": {
      backgroundColor: "var(--accent-bg)",   
      color: "var(--accent)",              
    },
  },
  "&.MuiButton-outlined": {
    borderColor: "var(--accent-border)",    
    color: "var(--text)",                 
    "&:hover": {
      backgroundColor: "var(--accent-bg)",  
      color: "var(--accent)",          
    },
  },
});



export default MyButton;