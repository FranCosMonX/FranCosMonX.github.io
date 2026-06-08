import { useState, type FC } from "react";
import { supabase } from "../../supabase";

const Formulario: FC = () => {
  const [nome, setNome] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { data, error } = await supabase
      .from("teste") // nome da tabela no Supabase
      .insert([{ nome }]);

    if (error) {
      console.error(error);
      alert("Erro ao salvar");
    } else {
      alert("Dados salvos com sucesso!");
      setNome("");
      alert(data)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome"
      />
      <button type="submit">Salvar</button>
    </form>
  );
}

export default  Formulario