import { useState } from "react";
import styled from "styled-components"

export const CustomParagraph = ({ title, children }) => {
    let limit = 300
    let trimmedContent = `${children.slice(0, limit)} ...`
    const [content, setContent] = useState(children);
    const [detail, setDetail] = useState("full");



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
font-family: Gotham;
font-weight: 500;
`

const Header = styled('div')`
// border:1px solid red;
display: flex;
margin-bottom: 20px;
flex-direction: row;
justify-content: start;
align-items: start;
`
const Beacon = styled('div')`
    background-color: #ff7055;
    height: 13px;
    width: 4px;
    margin-right: 5px
`
const Body = styled('div')`
font-family: Gotham;
color: #707070;
line-height: 24px;


`

const ReadMore = styled('div')`
font-family: Gotham;
color: #dd3f21;
margin-top: 15px;
cursor: pointer
`
