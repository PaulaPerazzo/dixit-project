import { GradientTitle, Input } from "@/components";
import Navbar from "@/components/Navbar";
import PromptForm from "@/components/PromptForm";
import ImagePlaceholder from "@/components/Utils/ImagePlaceholder";
import { MainPage, ColumnPage, PrimaryTitle, GridContainer } from "@/styles/main";



function homePage() {
    return (
        <>
        {/* import NavBar here */}
        <MainPage>
            <ColumnPage boderRight={true} borderTop={true}>
                <GradientTitle text={"Prompt"} />
                <PromptForm />
                
            </ColumnPage >
            <ColumnPage borderTop={true} padding={'20px'}>
                <ImagePlaceholder/>
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

export default homePage;