import { GradientTitle, Input } from "@/components";

import Navbar from "@/components/Navbar";
import PromptForm from "@/components/PromptForm";
import ImagePlaceholder from "@/components/Utils/ImagePlaceholder";
import { MainPage, ColumnPage, PrimaryTitle, GridContainer } from "@/styles/main";
import { useState, useEffect } from 'react';
import { ContainerText, ContainerImages } from "./style";


function HomePage() {
  const [image, setImage] = useState("");

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
      <ContainerImages>
        aaa
      </ContainerImages>
      <MainPage>
          <ColumnPage boderRight={true} borderTop={true}>             
          </ColumnPage >
          <ColumnPage borderTop={true} padding={'20px'}>
              <ContainerText>
                Create a vintage style image that is reminiscent of a classic Dixit card. The main focus should be on depicting a traditional beer scene, such as a lithe hand gripping a frosty beer mug or perhaps a rustic alehouse in the distance. Unsurprisingly, vibrant colors and whimsical elements are highly encouraged to induce a sense of nostalgia and classism. There should be no text or words present anywhere in the image. The aim of the design should engage the viewer to interpret the classic theme of beer without any written explanation.

              </ContainerText>
          </ColumnPage>
          <ColumnPage borderLeft={true} borderTop={true}>
          </ColumnPage>
      </MainPage>
      
      </>
  )
}

export default HomePage;
