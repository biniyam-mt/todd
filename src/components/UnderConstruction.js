import { faPersonDigging } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

export const UnderConstruction = () => {
    return (
        <Container>
            <FontAwesomeIcon icon={faPersonDigging} size="6x" />
            Under Construction
        </Container>
    )
}

const Container = styled.div({
    // border: "1px solid red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    padding: "50px 0px",
    color: "#707070"

})