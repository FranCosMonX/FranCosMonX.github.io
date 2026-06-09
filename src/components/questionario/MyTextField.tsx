import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const MyTextField = styled(TextField)({
  // Label
  "& .MuiInputLabel-root": {
    color: "var(--text)",
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "var(--accent)",
  },

  // Texto digitado
  "& .MuiInputBase-input": {
    color: "var(--text)",
  },

  // Placeholder
  "& .MuiInputBase-input::placeholder": {
    color: "var(--text)",
    opacity: 0.8,
  },

  // OUTLINED
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "var(--accent-border)",
    },

    "&:hover fieldset": {
      borderColor: "var(--accent-border)",
    },

    "&.Mui-focused fieldset": {
      borderColor: "var(--accent)",
    },
  },

  // STANDARD
  "& .MuiInput-root": {
    "&:before": {
      borderBottomColor: "var(--accent-border)",
    },

    "&:hover:not(.Mui-disabled):before": {
      borderBottomColor: "var(--accent-border)",
    },

    "&.Mui-focused:after": {
      borderBottomColor: "var(--accent)",
    },
  },

  // FILLED
  "& .MuiFilledInput-root": {
    "&:before": {
      borderBottomColor: "var(--accent-border)",
    },

    "&:hover:not(.Mui-disabled):before": {
      borderBottomColor: "var(--accent-border)",
    },

    "&.Mui-focused:after": {
      borderBottomColor: "var(--accent)",
    },
  },
});
export default MyTextField