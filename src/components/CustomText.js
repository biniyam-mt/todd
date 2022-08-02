import { useState } from "react";
import styled from "styled-components"
import { COLORS_LIGHT } from "./Values";

export const CustomParagraph = ({ title, children, display = "trimmed" }) => {
    let limit = 300
    let trimmedContent = children.length > limit ? `${children.slice(0, limit)} ...` : children;
    const [content, setContent] = useState(display === "full" ? children : trimmedContent);
    const [detail, setDetail] = useState(display === "full" ? "full" : "trimmed");


    return (
        <CustomDiv>
            <Header>
                <Beacon />
                <CustomTitleDiv>{title}</CustomTitleDiv>
            </Header>
            <Body>
                {content}
                {children.length > limit && detail === "trimmed" && <ReadMore onClick={() => { setContent(children); setDetail("full") }}>Show More</ReadMore>}
                {children.length > limit && detail === "full" && <ReadMore onClick={() => { setContent(trimmedContent); setDetail("trimmed") }}>Show Less</ReadMore>}
            </Body>
        </CustomDiv>
    )
}

export const CustomTitle = ({ title }) => {




    return (
        <CustomDiv>
            <Header>
                <Beacon />
                <CustomTitleDiv>{title}</CustomTitleDiv>
            </Header>
        </CustomDiv>
    )
}

const CustomDiv = styled('div')`
// border:1px solid red;
// padding: 15px 15px;
`
const CustomTitleDiv = styled('div')`
font-size: 100%;
font-weight: 600;
font-family: Montserrat;
padding: 1px;
`

const Header = styled('div')`
// border:1px solid red;
display: flex;
margin-bottom: 20px;
flex-direction: row;
justify-content: start;
align-items: center;
`
const Beacon = styled('div')`
    background-color: ${COLORS_LIGHT.ACCENT};
    height: 12px;
    width: 4px;
    margin-right: 5px
`
const Body = styled('div')`
color: ${COLORS_LIGHT.DARK_GRAY};
line-height: 24px;


`

const ReadMore = styled('div')`
color: ${COLORS_LIGHT.ACCENT};
margin-top: 15px;
cursor: pointer
`
