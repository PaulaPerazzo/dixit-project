import { GradientTitle, Input } from "@/components";

import Navbar from "@/components/Navbar";
import PromptForm from "@/components/PromptForm";
import ImagePlaceholder from "@/components/Utils/ImagePlaceholder";
import { MainPage, ColumnPage, PrimaryTitle, GridContainer } from "@/styles/main";
import { useState, useEffect } from 'react';


function HomePage() {
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const intervalId = setInterval(() => {
            const storedData = localStorage.getItem('responseData');
            if (storedData) {
              const parsedData = JSON.parse(storedData);
              setImage(parsedData);
            }

          localStorage.removeItem("responseData")
          console.log("ok")

          }, 1000);
          return () => {
            clearInterval(intervalId);
          };
    }, [image]);

    return (
        <>
        <MainPage>
            <ColumnPage boderRight={true} borderTop={true}>
                <GradientTitle text={"Prompt"} />
                <PromptForm />
                
            </ColumnPage >
            <ColumnPage borderTop={true} padding={'20px'}>
                <ImagePlaceholder url={image}/>
            </ColumnPage>
            <ColumnPage borderLeft={true} borderTop={true}>
                <PrimaryTitle> Generated Images</PrimaryTitle>
                <GridContainer>
                    <ImagePlaceholder width='100px' height='150px'/>
                    <ImagePlaceholder width='100px' height='150px'/>
                    <ImagePlaceholder width='100px' height='150px'/>
                    <ImagePlaceholder width='100px' height='150px'/>
                    <ImagePlaceholder width='100px' height='150px'/>
                </GridContainer>
            </ColumnPage>
        </MainPage>
        
        </>
    )
}

export default HomePage;