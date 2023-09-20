import { GradientTitle, Input } from "@/components";

import Navbar from "@/components/Navbar";
import PromptForm from "@/components/PromptForm";
import ImagePlaceholder from "@/components/Utils/ImagePlaceholder";
import { MainPage, ColumnPage, PrimaryTitle, GridContainer } from "@/styles/main";
import { useState, useEffect } from 'react';
import { ContainerText, ContainerImages, Container } from "./style";
import Button from '../../components/Button';

type ParsedDataItem = {
  url: string;
};

function HomePage() {
  const [image, setImage] = useState("");
  const [arrayImage, setArrayImage] = useState<string[]>([]);
  const [storieText, setStorieText] = useState<string>();

  const text = "Create a vintage style image that is reminiscent of a classic Dixit card. The main focus should be on depicting a traditional beer scene, such as a lithe hand gripping a frosty beer mug or perhaps a rustic alehouse in the distance. Unsurprisingly, vibrant colors and whimsical elements are highly encouraged to induce a sense of nostalgia and classism. There should be no text or words present anywhere in the image. The aim of the design should engage the viewer to interpret the classic theme of beer without any written explanation."

  const handlePdfGenerator = () => {
    // colocar o pdf generator aqui
    console.log("ola")
  }

  useEffect(() => {
      const intervalId = setInterval(() => {
          const storedData = localStorage.getItem('responseData');
          if (storedData) {
            const parsedData: ParsedDataItem[] = JSON.parse(storedData);
            const arrayOfUrls = parsedData.map(({ url }) => url);
            setArrayImage(arrayOfUrls);
          }

        // localStorage.removeItem("responseData")
        // console.log("ok")

        }, 1000);
        return () => {
          clearInterval(intervalId);
        };
  }, [image]);


  return (
      <>
      <ContainerImages>
        <ImagePlaceholder width='50px' height='75px' url={arrayImage[0]}/>
        <ImagePlaceholder width='50px' height='75px' url={arrayImage[1]}/>
        <ImagePlaceholder width='50px' height='75px' url={arrayImage[2]}/>
        <ImagePlaceholder width='50px' height='75px' url={arrayImage[3]}/>
        <ImagePlaceholder width='50px' height='75px' url={arrayImage[4]}/>
        <ImagePlaceholder width='50px' height='75px' url={arrayImage[5]}/>
      </ContainerImages>
      <Container>
          <ColumnPage boderRight={true} borderTop={true}>             
          </ColumnPage >
          <ColumnPage borderTop={true} padding={'20px'} align={"center"}>
              <ContainerText>
                {text}    
              </ContainerText>

          <Button type={"submit"} text={'Generate PDF'} onClick={handlePdfGenerator}/>

          </ColumnPage>
          <ColumnPage borderLeft={true} borderTop={true}>
          </ColumnPage>
      </Container>
      
      </>
  )
}

export default HomePage;
