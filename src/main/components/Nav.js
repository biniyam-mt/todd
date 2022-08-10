import { useEffect, useState } from "react"
import styled from "styled-components"
import { Link, useLocation } from 'react-router-dom'
import { COLORS_LIGHT } from "../custom/Values";
import basicInfo from "../content/basicInfo.json"

export const Nav = () => {

    const currentPath = useLocation().pathname;
    const [navBarColor, setNavBarColor] = useState("trans")

    const listenScrollEvent = (event) => {
        if (window.scrollY === 0) {
            return setNavBarColor("transparent")
        } else {
            return setNavBarColor("white")
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);
    return (
        <NavContainer style={{ backgroundColor: navBarColor }}>
            <TitleContainer >
                <Title>
                    <Link to={"/toddaustin/"}>
                        <NavText>
                            {basicInfo.fullName.toUpperCase()}
                        </NavText>
                    </Link>
                </Title>
                <Beacon active={currentPath === "/toddaustin/"} />

            </TitleContainer>
            <NavItemsContainer>
                <Link to={"/toddaustin/research"}>
                    <NavItem active={currentPath === "/toddaustin/research"}>
                        <NavBeacon active={currentPath === "/toddaustin/research"} />
                        <NavText>
                            RESEARCH
                        </NavText>
                    </NavItem>
                </Link>
                <Link to={"/toddaustin/austin-lab"}>
                    <NavItem active={currentPath === "/toddaustin/austin-lab"}>
                        <NavBeacon active={currentPath === "/toddaustin/austin-lab"} />
                        <NavText>
                            AUSTIN-LAB
                        </NavText>
                    </NavItem>
                </Link>
                <Link to={"/toddaustin/teaching"}>
                    <NavItem active={currentPath === "/toddaustin/teaching"}>
                        <NavBeacon active={currentPath === "/toddaustin/teaching"} />
                        <NavText>
                            TEACHING
                        </NavText>
                    </NavItem>
                </Link>
            </NavItemsContainer>
            <DarkModeContainer>
                {/* DARK MODE */}
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
    fontSize: "115%",
    fontWeight: 600

})
const Beacon = styled('div')`
    background-color: ${(props) => props.active ? COLORS_LIGHT.ACCENT : "transparent"};
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
// border: 1px solid green;
    height: 33px;
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
    background-color: ${(props) => props.active ? COLORS_LIGHT.ACCENT : "transparent"};
    height: 3px;
    width: 20px


`;

const DarkModeContainer = styled.div({
    // border: "1px solid red",
    fontWeight: 500,
    fontSize: "85%",


})

const NavText = styled.span({
    // border: "1px solid red",
    color: "black",
    textDecoration: "none",


})