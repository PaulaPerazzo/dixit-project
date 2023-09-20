import { GradientTitle, Input } from "@/components";

import Navbar from "@/components/Navbar";
import PromptForm from "@/components/PromptForm";
import ImagePlaceholder from "@/components/Utils/ImagePlaceholder";
import { MainPage, ColumnPage, PrimaryTitle, GridContainer } from "@/styles/main";
import { useState, useEffect, useRef } from 'react';
import { ContainerText, ContainerImages, Container } from "./style";
import Button from '../../components/Button';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

type ParsedDataItem = {
  url: string;
};

function HomePage() {
  const text = "Create a vintage style image that is reminiscent of a classic Dixit card. The main focus should be on depicting a traditional beer scene, such as a lithe hand gripping a frosty beer mug or perhaps a rustic alehouse in the distance. Unsurprisingly, vibrant colors and whimsical elements are highly encouraged to induce a sense of nostalgia and classism. There should be no text or words present anywhere in the image. The aim of the design should engage the viewer to interpret the classic theme of beer without any written explanation."
  const imageRef = useRef(null);
  const [image, setImage] = useState("");
  const [arrayImage, setArrayImage] = useState<string[]>([]);
  const [storieText, setStorieText] = useState<string>("");


  const handlePdfGenerator = () => {
    geradorPDF(storieText, "An Dixit History")
    console.log("ola")
  }

  async function geradorPDF(texto: string, titulo: string) {
    // Crie um novo documento PDF
    const doc = new jsPDF();
  
    // Tamanho da página
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
  
    // Estilo de fonte para o título
    doc.setFontSize(18);
    doc.setFont('bold');
    // https://www.fontspace.com/category/rpg
    // Título centralizado
    const titleWidth = doc.getStringUnitWidth(titulo) * 3 / doc.internal.scaleFactor;
    const xTitle = (pageWidth - titleWidth) / 2;
    const yTitle = 20; // Ajuste a posição vertical conforme necessário
    doc.text(titulo, xTitle, yTitle, { align: 'center' });
  
    // Estilo de fonte para o texto principal
    doc.setFontSize(12);
    doc.setFont('normal');
  
    // Texto corrido
    const longText = texto;
  
    // Largura máxima do texto em cada linha
    const maxWidth = pageWidth - 20; // Margens de 10 unidades em cada lado
  
    // Dividir o texto em parágrafos com base na largura máxima
    const paragraphs: string[] = doc.splitTextToSize(longText, maxWidth);
  
    // Posição inicial abaixo do título
    let x = 10;
    let y = yTitle + 30; // Ajuste a posição vertical conforme necessário
  
    // Espaçamento entre parágrafos
    const lineHeight = 7;
  
    // Adicione cada parágrafo ao PDF
    paragraphs.forEach(paragraph => {
      doc.text(paragraph, x, y);
      y += lineHeight;
  
      // Verifique se a próxima linha excederá a altura da página
      if (y + lineHeight > pageHeight) {
        doc.addPage();
        y = 10; // Volte ao topo da nova página
      }
    });
    
        // Salve ou exiba o PDF
        doc.save('exemplo.pdf');
  }

  function showItensPDF(): String {
    return "string"
  }


  function showItens(): String {

    return "string"
  }


  useEffect(() => {
      const intervalId = setInterval(() => {
          const storedData = localStorage.getItem('responseData');
          if (storedData) {
            const parsedData: ParsedDataItem[] = JSON.parse(storedData);
            const arrayOfUrls = parsedData.map(({ url }) => url);
            setArrayImage(arrayOfUrls);
          }

          const userHistory = localStorage.getItem('history');
          if(userHistory){
            const parsedDataHistory = JSON.parse(userHistory);
            console.log(parsedDataHistory.data)
            setStorieText(parsedDataHistory.data)
          }

        // localStorage.removeItem("responseData")
        }, 1000);
        return () => {
          clearInterval(intervalId);
        };
  }, [image]);


  return (
      <>
      <ContainerImages>
        <ImagePlaceholder width='75px' height='112.5px' url={arrayImage[0]}/>
        <ImagePlaceholder width='75px' height='112.5px' url={arrayImage[1]}/>
        <ImagePlaceholder width='75px' height='112.5px' url={arrayImage[2]}/>
        <ImagePlaceholder width='75px' height='112.5px' url={arrayImage[3]}/>
        <ImagePlaceholder width='75px' height='112.5px' url={arrayImage[4]}/>
        <ImagePlaceholder width='75px' height='112.5px' url={arrayImage[5]}/>
      </ContainerImages>
      <Container>
          <ColumnPage boderRight={true} borderTop={true}>             
          </ColumnPage >
          <ColumnPage borderTop={true} padding={'20px'} align={"center"}>
              <ContainerText>
                {storieText}    
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
