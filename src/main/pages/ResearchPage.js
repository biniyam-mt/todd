import { useState, useEffect } from "react"
import styled from "styled-components"
import { TalksList } from "../components/TalksList";
import { SoftwaresList } from "../components/SoftwaresList";
import { PublicationsPage } from "./PublicationsPage";
import { CustomParagraph } from "../custom/CustomText";
import { COLORS_LIGHT } from "../custom/Values";

export const ResearchPage = () => {
    const [activeTab, setActiveTab] = useState("publications");
    const [researchContent, setResearchContent] = useState({});

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/biniyam-mt/content/main/research.json')
            .then(res => res.json())
            .then(json => {
                //json vaiable contains object with data
                setResearchContent(json);
                console.log(json);
            })
    }, [])


    return (
        <Content>
            <ResearchBio researchContent={researchContent} />
            <InnerContainer>
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabContent activeTab={activeTab} researchContent={researchContent} />
            </InnerContainer>
        </Content>
    )
}
const ResearchBio = ({ researchContent }) => {

    console.log("sent: ", researchContent.bio)
    return (
        <ResearchBioContainer>
            <SectionContainer>
                <CustomParagraph title={"RESEARCH INTEREST"} body={researchContent.bio || ""} />
            </SectionContainer>
        </ResearchBioContainer>
    )
}

const Tabs = ({ activeTab, setActiveTab }) => {
    return (
        <TabContainer>
            <TabItems active={activeTab === "publications"} onClick={() => { setActiveTab("publications") }}>PUBLICATIONS</TabItems>
            <TabItems active={activeTab === "talks"} onClick={() => { setActiveTab("talks") }}>TALKS</TabItems>
            <TabItems active={activeTab === "softwares"} onClick={() => { setActiveTab("softwares") }}>SOFTWARES</TabItems>
        </TabContainer>
    )
}

const TabContent = ({ activeTab, researchContent }) => {
    const renderSwitch = (activeTab) => {
        switch (activeTab) {
            case "publications":
                return <PublicationsPage researchContent={researchContent} />;
            case "talks":
                return <TalksList researchContent={researchContent} />;
            case "softwares":
                return <SoftwaresList researchContent={researchContent} />;
            default:
                return;
        }
    }
    return (
        <div>
            {renderSwitch(activeTab)}
        </div>
    )

}
// styled components ------------------------------------------------------------------
const Content = styled.div({
    // border: "1px solid green",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
})

const ResearchBioContainer = styled.div({
    // border: "1px solid red",
    backgroundColor: COLORS_LIGHT.PRIMARY_BG,
    paddingTop: 50,
    // margin: "30px 0px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
})
const SectionContainer = styled.div({
    // border: "1px solid blue",
    margin: "30px 0px",
    width: "1200px",
})

const InnerContainer = styled.div({
    // border: "1px solid green",
    width: "1200px",

})

const TabContainer = styled.div({
    // border: "1px solid green",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "50px 0px"

})


const TabItems = styled.div`
                    // border: 1px solid green;
                    width: 100%;
                    height: 35px;
                    display: flex;
                    flex-direction: column;
                    justify-content: end;
                    align-items: center;
                    border-bottom: ${(props) => props.active ? "2px solid " + COLORS_LIGHT.ACCENT : "1px solid " + COLORS_LIGHT.LIGHT_GRAY};
                    color:${(props) => props.active ? COLORS_LIGHT.ACCENT : ""};
                    cursor: pointer;
                    padding: 5px 0px;

                    `