"use client"
import React, { useState, useEffect } from "react";
import Image from 'next/image'
import { NextResponse } from 'next/server'
import axios from "axios";

// Interface para os dados do item
interface Pokemon {
  name: string;
  url: String;
}

type GetPokemonResponse = {
  data: Pokemon[];
};



// Componente para obter dados do backend
function DataPage() {
  const [data, setData] = useState<Pokemon[]>([]);

  useEffect(() => {
    // Fazer uma requisição GET ao backend
    axios
      .get<Pokemon[]>("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0") // Substitua pela URL correta do seu backend
      .then((response) => {
        setData(response); // Define os dados no estado
      })
      .catch((error) => {
        console.error("Erro ao buscar dados do backend:", error);
      });
  }, []);

async function loadPokemonData(){
  try {
    // 👇️ const data: GetUsersResponse
    const { data, status } = await axios.get<GetPokemonResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    console.log(JSON.stringify(data, null, 4));

    // 👇️ "response status is: 200"
    console.log('response status is: ', status);

    return data;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

  return (
    <div>
      <h2>Dados do Backend</h2>
      <ul>
        
      <img src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-nfVwmGNeis6QAWSMq9O5ZoFb/user-HYZkIc5YZGSyfFdv37QsKitE/img-q7sTGXWxUGaiHHxN8ozBA6S2.png?st=2023-09-04T17%3A59%3A01Z&se=2023-09-04T19%3A59%3A01Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-09-04T13%3A34%3A48Z&ske=2023-09-05T13%3A34%3A48Z&sks=b&skv=2021-08-06&sig=UtXorS9I8NszX96bPEXAGC2k7FAsByegXoOeYBTxmkc%3D" width={256} height={256}/>
      </ul>
    </div>
  );
}

// Componente para enviar dados para o backend
function PostDataPage() {
  const [formData, setFormData] = useState<Pokemon>({ name: "", value: 0 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Fazer uma requisição POST ao backend
    axios
      .post("/api/service", formData) 
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