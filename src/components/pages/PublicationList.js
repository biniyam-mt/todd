import styled from "styled-components"
export const PublicationList = () => {
    return (
        <PublicationContainer>
            <PublicationItem />
        </PublicationContainer>
    )
}
const PublicationItem = () => {
    return (
        <PublicationDiv>
            <div>thumbnail</div>
            <div>body</div>
            <div>action and badge</div>
        </PublicationDiv>
    )
}

const PublicationContainer = styled.div({
    border: "1px solid green",
    padding: "15px"
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    // margin: "50px 0px"
})

const PublicationDiv = styled.div({
    // border: "1px solid red",
    height: "100px",
    boxShadow: "3px 3px 9px #b9b9b9"
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    // margin: "50px 0px"
})