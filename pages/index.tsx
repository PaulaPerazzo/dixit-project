import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';


// export default Home

// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await fetch('https://api.github.com/users/PaulaPerazzo/repos');
  
//   const data = await response.json();
//   const repositoryNames = data.map((item) => item.name);

//   return {
  //     props: {
//       repositories: repositoryNames,
//       date: new Date().toISOString(),
//     }
//   };
// };


// static server generation (SSG) only works in main branches, not deveĺop
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/PaulaPerazzo/repos');
  
  const data = await response.json();
  
  const repositoryNames = data.map((item: { name: any; }) => item.name);
    
  return {
    props: {
      repositories: repositoryNames,
      date: new Date().toISOString(),
    },

    revalidate: 60*60*4,
  };
};

//@ts-ignore
export default function Home({ repositories, date }) {

  console.log(repositories)

  return (
    <>
      <h1>{date}</h1>

      <ul>
        {/* @ts-ignore */}
        {repositories.map((repo) => (
          <li key={repo}>{repo}</li>
          ))};
      </ul>
    </>
  );
};