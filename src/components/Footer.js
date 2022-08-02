import styled from "styled-components"
import { COLORS_LIGHT } from "./Values"
export const Footer = () => {
    return (
        <FooterContainer>

        </FooterContainer>
    )
}



const FooterContainer = styled.div({
    // border: "1px solid red",
    width: "100%",
    backgroundColor: COLORS_LIGHT.MEDIUM_GRAY,
    display: "flex",
    height: 50,
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    padding: "20px 0px"
})
