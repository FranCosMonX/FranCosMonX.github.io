import ReactMarkdown from "react-markdown";
import { styled } from "@mui/material/styles";

// Criando um wrapper estilizado para o Markdown
const MyMarkdownWrapper = styled("div")(({ theme }) => ({
  // estilo geral do container
  fontFamily: theme.typography.fontFamily,

  // inline code
  "& code": {
    background: 'var(--code-bg)',
    padding: "2px 6px",
    borderRadius: 8,
    fontFamily: "Fira Code, monospace",
    fontSize: "0.9em",
  },

  // bloco de código
  "& pre code": {
    display: "block",
    background: 'var(--code-bg)',
    color: 'var(--code-text)',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    overflowX: "auto",
  },

  '& h1, & h2, & h3, & h4':{
    lineHeight: 'var(--line-height)'
  },

  "& h1": {
    fontSize: '52px',
  },

  '& h2': {
    fontSize: '42px',
  },

  '& h3': {
    fontSize: '32px',
  },

  '& h4': {
    fontSize: '22px',
  }
}));

type MarkdownProps = {
  content: string;
};

export default function MyMarkdown({ content }: MarkdownProps) {
  return (
    <MyMarkdownWrapper>
      <ReactMarkdown>{content}</ReactMarkdown>
    </MyMarkdownWrapper>
  );
}