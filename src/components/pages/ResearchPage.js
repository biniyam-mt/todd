import { useState } from "react"
import styled from "styled-components"
import { PublicationList } from "./PublicationList";
import { TalksList } from "./TalksList";
import { SoftwaresList } from "./SoftwaresList";

export const ResearchPage = () => {
    const [activeTab, setActiveTab] = useState("publications");
    return (
        <Content>
            <InnerContainer>
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabContent activeTab={activeTab} />
            </InnerContainer>
        </Content>
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
                return <PublicationList />;
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
    border: "1px solid green",
    paddingTop: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
})

const InnerContainer = styled.div({
    border: "1px solid green",
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
                    border-bottom: ${(props) => props.active ? "2px solid #ff7055" : "1px solid #909090"};
                    color:${(props) => props.active ? "#ff7055" : ""};
                    cursor: pointer;
                    padding: 5px 0px;

                    `