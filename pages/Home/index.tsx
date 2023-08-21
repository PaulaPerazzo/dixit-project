import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';

//@ts-ignore
export default function Home() {

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '80vh', width: '100%'}}>
      <h1> NEXT.JS TEMPLATE </h1>
    </div>
  );
};
