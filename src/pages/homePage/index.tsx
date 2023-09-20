import { GradientTitle, Input } from "@/components";

import Navbar from "@/components/Navbar";
import PromptForm from "@/components/PromptForm";
import ImagePlaceholder from "@/components/Utils/ImagePlaceholder";
import { MainPage, ColumnPage, PrimaryTitle, GridContainer } from "@/styles/main";
import { useState, useEffect } from 'react';


type ParsedDataItem = {
    url: string;
  };

function HomePage() {
    const [arrayImage, setArrayImage] = useState<string[]>([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const intervalId = setInterval(() => {
            const storedData = localStorage.getItem('responseData');
            console.log(storedData);
            if (storedData) {
              const parsedData: ParsedDataItem[] = JSON.parse(storedData);
              const arrayOfUrls = parsedData.map(({ url }) => url);
              
              setArrayImage(arrayOfUrls);
            }

          localStorage.removeItem("responseData")
          console.log("ok")

          }, 1000);
          return () => {
            clearInterval(intervalId);
          };
    }, [arrayImage]);

    return (
        <>
        <MainPage>
            <ColumnPage boderRight={true} borderTop={true}>
                <GradientTitle text={"Prompt"} />
                <PromptForm />
                
            </ColumnPage >
            <ColumnPage borderTop={true} padding={'20px'}>
                <ImagePlaceholder url={arrayImage[0]}/>
            </ColumnPage>
            <ColumnPage borderLeft={true} borderTop={true}>
                <PrimaryTitle> Generated Images</PrimaryTitle>
                <GridContainer>
                    <ImagePlaceholder width='100px' height='150px' url={arrayImage[1]}/>
                    <ImagePlaceholder width='100px' height='150px' url={arrayImage[2]}/>
                    <ImagePlaceholder width='100px' height='150px' url={arrayImage[3]}/>
                    <ImagePlaceholder width='100px' height='150px' url={arrayImage[4]}/>
                    <ImagePlaceholder width='100px' height='150px' url={arrayImage[5]}/>
                </GridContainer>
            </ColumnPage>
        </MainPage>
        
        </>
    )
}

export default HomePage;