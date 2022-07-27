import { useEffect, useState } from "react"
import styled from "styled-components"

export const Nav = ({ activeTab, setActiveTab }) => {
    const [navBarColor, setNavBarColor] = useState("trans")

    const listenScrollEvent = (event) => {
        if (window.scrollY === 0) {
            return setNavBarColor("transparent")
        } else {
            return setNavBarColor("white")
        }
        // setNavBarColor(window.scrollY)
    }
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);
    return (
        <NavContainer style={{ backgroundColor: navBarColor }}>
            <TitleContainer onClick={() => { setActiveTab("home") }}>
                <Title>
                    TODD AUSTIN
                </Title>

                <Beacon active={activeTab === "home"} />

            </TitleContainer>
            <NavItemsContainer>
                <NavItem onClick={() => { setActiveTab("research") }} active={activeTab === "research"}>
                    <NavBeacon active={activeTab === "research"} />
                    RESEARCH
                </NavItem>
                <NavItem onClick={() => { setActiveTab("lab") }} active={activeTab === "lab"}>
                    <NavBeacon active={activeTab === "lab"} />
                    AUSTIN-LAB
                </NavItem>
                <NavItem onClick={() => { setActiveTab("news") }} active={activeTab === "news"}>
                    <NavBeacon active={activeTab === "news"} />
                    NEWS
                </NavItem>
                <NavItem onClick={() => { setActiveTab("teaching") }} active={activeTab === "teaching"}>
                    <NavBeacon active={activeTab === "teaching"} />
                    TEACHING
                </NavItem>
            </NavItemsContainer>
            <DarkModeContainer>
                DARK MODE
            </DarkModeContainer>
        </NavContainer>
    )
}

const NavContainer = styled.div({
    // border: "1px solid red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // height: 50,
    padding: "0px 20px",
    position: "fixed",
    right: 0,
    left: 0,
    zIndex: 1000,


})

const TitleContainer = styled.div({
    // border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    cursor: "pointer"


})
const Title = styled.div({
    // border: "1px solid red",
    fontFamily: "Gotham ",
    fontSize: "115%",
    fontWeight: 600

})
const Beacon = styled('div')`
    background-color: ${(props) => props.active ? "#ff7055" : "transparent"};
    height: 5px;
    width: 15px;
`
const NavItemsContainer = styled.div({
    // border: "1px solid red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "50%",
    // fontWeight: "bold"

})

const NavItem = styled('div')`
    height: 33px;
    // border: 1px solid green;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin:0px 20px;
    padding-bottom: 15px;
    font-family: Gotham  ${(props) => props.active ? "" : "thin"};
    font-weight: 600;
    cursor: pointer;
    font-size: 95%;
`

const NavBeacon = styled('div')`
    background-color: ${(props) => props.active ? "#ff7055" : "transparent"};
    height: 3px;
    width: 20px


`;

const DarkModeContainer = styled.div({
    // border: "1px solid red",
    fontFamily: "Gotham",
    fontWeight: 500,
    fontSize: "85%",


})