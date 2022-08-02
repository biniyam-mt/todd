import { useState } from "react"
import styled from "styled-components"
import { TalksList } from "../TalksList";
import { SoftwaresList } from "../SoftwaresList";
import { PublicationsPage } from "./PublicationsPage";
import { CustomParagraph } from "../custom/CustomText";
import { COLORS_LIGHT } from "../Values";

export const ResearchPage = () => {
    const [activeTab, setActiveTab] = useState("publications");
    return (
        <Content>
            <ResearchBio />
            <InnerContainer>
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabContent activeTab={activeTab} />
            </InnerContainer>
        </Content>
    )
}
const ResearchBio = () => {
    return (
        <ResearchBioContainer>
            <SectionContainer>
                <CustomParagraph title={"RESEARCH INTEREST"}>
                    Et elit sunt enim elit irure. Sit sunt in sint id do amet qui esse ad quis magna. Nostrud ut veniam pariatur pariatur amet nisi enim anim quis sunt. Sit commodo voluptate sunt duis veniam irure nulla amet nisi.Amet qui id ad pariatur. Aliquip cupidatat dolor duis elit minim ullamco velit ipsum dolor non. Consectetur proident mollit consectetur in occaecat fugiat exercitation consectetur aliqua anim sint ea aliquip. Dolore aliquip dolore eiusmod dolore voluptate quis irure adipisicing nisi dolor elit fugiat Lorem do. Commodo aliqua aliqua anim duis. Labore ipsum sit laborum qui aute consectetur adipisicing reprehenderit cupidatat do consequat in ea. Minim cupidatat culpa mollit fugiat.Sit et sit nostrud laborum veniam incididunt ad pariatur anim. Eiusmod magna consectetur ipsum in mollit duis laborum dolore dolor culpa ex sit in reprehenderit. Ad sit laborum amet id laborum incididunt aliqua ipsum sit enim dolore. Occaecat ex aute tempor exercitation. Tempor eu labore et nisi ea ullamco pariatur magna in eiusmod aliqua mollit. Occaecat ipsum amet minim cillum.
                </CustomParagraph >
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

const TabContent = ({ activeTab }) => {
    const renderSwitch = (activeTab) => {
        switch (activeTab) {
            case "publications":
                return <PublicationsPage />;
            case "talks":
                return <TalksList />;
            case "softwares":
                return <SoftwaresList />;
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