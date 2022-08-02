import styled from "styled-components"
import { COLORS_LIGHT } from "../Values"

export const CustomSeparator = ({ tag }) => {
    return (

        <Container>
            <HrLeft>
                <hr />
            </HrLeft>
            <TagContainer>
                {tag}
            </TagContainer>
            <HrRight>
                <hr />
            </HrRight>
        </Container>
    )
}


//styled ----------------------------------

const Container = styled.div({
    // border: "1px solid red",
    width: "100%",
    // height: "50px",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "start",
    alignItems: "center",

})

const TagContainer = styled.div({
    // border: "1px solid blue",
    // marginLeft: "40px",
    padding: "10px",
    // fontWeight: "bold",
    color: COLORS_LIGHT.DARK_GRAY,
    // width: "100%",
})

const HrLeft = styled.div({
    // border: "1px solid red",
    // height: "50px",
    width: "30px",
    // width: "30%",
    // position: "absolute",

})
const HrRight = styled.div({
    // border: "1px solid red",
    // width: "100%",
    flexGrow: "1"
    // position: "absolute",

})