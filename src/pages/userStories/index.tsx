import Navbar from "@/components/Navbar";
import { GeneratedContent, Links, MainContent } from "./style";
import HistoryOfStories from "@/components/HistoryOfStories";
import GeneratedHistory from "@/components/GeneratedHistory";
import ShortCardList from "@/components/ShortCardList";
import ExportPDF from "@/components/ExportPDFBUtton";
import ExportPDFButton from "@/components/ExportPDFBUtton";
import GenerateAgainButton from "@/components/GenerateAgainButton";

function UserStories() {
    return (
        <>
        <Navbar />
        <MainContent>
            <HistoryOfStories />
            <GeneratedContent>
                <ShortCardList />
                <GeneratedHistory />
                
                <Links>
                    <ExportPDFButton />
                    <GenerateAgainButton />
                </Links>
                
            </GeneratedContent>
        </MainContent>
        </>
    )
}

export default UserStories;