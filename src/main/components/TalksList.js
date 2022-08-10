import styled from "styled-components"
import { CustomParagraph } from "../custom/CustomText"
export const TalksList = ({ researchContent }) => {
    return (
        <div>
            <VideoContainer>
                {researchContent.talks.map((talk) => (
                    <Presentaion>
                        <VideoFrame>
                            <iframe src={talk.url} title={talk.title} width={"100%"} height={"100%"} />
                        </VideoFrame>

                        <CustomParagraph title={talk.title} body={talk.description} />
                    </Presentaion>
                ))}
            </VideoContainer>
        </div>
    )
}



const VideoContainer = styled.div({
    // border: "1px solid red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "start",
    flexWrap: "wrap"
    // width: "1200px"
})

const Presentaion = styled.div({
    // border: "1px solid" + COLORS_LIGHT.LIGHT_GRAY,
    backgroundColor: "white",
    boxShadow: "3px 3px 9px #b9b9b9",
    display: "flex",
    width: "31%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    boxSizing: "border-box",
    margin: "10px",
    padding: "10px",
    marginBottom: "15px"
})

const VideoFrame = styled.div({
    width: "100%",
    height: "210px",
    marginBottom: "10px"

})