"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";

// Interface para os dados do item
interface Item {
  name: string;
  value: number;
}

// Componente para obter dados do backend
function DataPage() {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    // Fazer uma requisição GET ao backend
    axios
      .get<Item[]>("/api/images") // Substitua pela URL correta do seu backend
      .then((response) => {
        setData(response.data); // Define os dados no estado
      })
      .catch((error) => {
        console.error("Erro ao buscar dados do backend:", error);
      });
  }, []);

  return (
    <div>
      <h2>Dados do Backend</h2>
      <ul>
        {data.map((item) => (
          <li key={item.name}>
            {item.name} {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Componente para enviar dados para o backend
function PostDataPage() {
  const [formData, setFormData] = useState<Item>({ name: "", value: 0 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Fazer uma requisição POST ao backend
    axios
      .post("http://localhost:8080/itens", formData) 
      .then((response) => {
        console.log("Dados enviados com sucesso:", response.data);
      })
      .catch((error) => {
        console.error("Erro ao enviar dados:", error);
      });
  };

  return (
    <div>
      <h2>Enviar Dados para o Backend</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            className="text-black"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            className="text-black"
            type="number"
            name="value"
            value={formData.value.toString()} // Convertemos para string para evitar erro de tipo
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <DataPage />
      <PostDataPage />
    </div>
  );
}