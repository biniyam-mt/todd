import styled from "styled-components";
import { COLORS_LIGHT } from "./Values";

export const A = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: ${COLORS_LIGHT.MEDIUM_GRAY};
    &:visited{
        color: ${COLORS_LIGHT.MEDIUM_GRAY};
    }
    &:hover{
        color: ${COLORS_LIGHT.ACCENT};
    }
`

export const IFrame = styled.a`
    border: 0
`