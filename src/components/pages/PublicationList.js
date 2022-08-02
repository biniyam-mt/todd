import { faAward, faFileInvoice, faQuoteRight } from "@fortawesome/free-solid-svg-icons"
import { faFilePdf } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import { COLORS_LIGHT } from "../Values"
import { A } from "../CustomElements"
export const PublicationList = ({ publicationRecord }) => {
    console.log("List rendered!")

    return (
        <PublicationContainer>
            {
                publicationRecord.map((publication) => (
                    <PublicationItem publication={publication} />
                ))
            }
        </PublicationContainer>
    )
}
const PublicationItem = ({ publication }) => {
    return (
        <PublicationDiv>
            <Thumbnail>
                <FontAwesomeIcon icon={faFileInvoice} size="3x" color={COLORS_LIGHT.LIGHT_GRAY} />
            </Thumbnail>
            <PubBody>
                <PubTitle>
                    {publication.title}
                </PubTitle>
                <PubDetail>
                    <AuthorsContainer>
                        {
                            publication.authors.map((author, idx) => (
                                <span style={{ color: `${author === "Todd Austin" ? COLORS_LIGHT.ACCENT : ""}`, fontWeight: `${author === "Todd Austin" ? "bold" : ""}` }}>{author}{idx !== publication.authors.length - 1 ? ", " : ""}</span>

                            ))
                        }
                    </AuthorsContainer>
                    <ConferenceContainer>{publication.conference}</ConferenceContainer>
                </PubDetail>
            </PubBody>
            <ActionsContainer>
                <TopActionContainer>
                    <YearTextContainer>{publication.year}</YearTextContainer>
                    <div>
                        {
                            publication.citations !== 0 &&
                            <CitationTextContainer>
                                <FontAwesomeIcon icon={faQuoteRight} />
                                {" " + publication.citations}
                            </CitationTextContainer>
                        }
                    </div>
                    <div>
                        <DownloadTextContainer>
                            <A href={publication.link} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faFilePdf} size="lg" />
                                {" "}
                                Download
                            </A>
                        </DownloadTextContainer>
                    </div>
                </TopActionContainer>
                <BottomActionContainer>
                    {
                        publication.awards.map((award) => (
                            <AwardTextContainer>
                                <FontAwesomeIcon icon={faAward} size="lg" />
                                {" " + award}
                            </AwardTextContainer>
                        ))

                    }
                </BottomActionContainer>
            </ActionsContainer>
        </PublicationDiv>
    )
}




// styled components ------------------------------------------------------------------
const PublicationContainer = styled.div({
    // border: "1px solid green",
    padding: "15px",
    fontFamily: "Montserrat",
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    // margin: "50px 0px"
})

const PublicationDiv = styled.div({
    // border: "1px solid red",
    // height: "110px",
    boxShadow: "3px 3px 9px #b9b9b9",
    marginBottom: "25px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    // margin: "50px 0px"
})

const Thumbnail = styled.div({
    // border: "1px solid red",
    width: "10%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
})

const PubBody = styled.div({
    // border: "1px solid black",
    width: "65%",
    padding: "10px",
})
const PubTitle = styled.div({
    // border: "1px solid black",
    marginBottom: "10px",

})

const PubDetail = styled.div({
    // border: "1px solid black",
    color: COLORS_LIGHT.MEDIUM_GRAY,
    fontSize: "85%"
})

const AuthorsContainer = styled.div({
    marginBottom: "8px",
})

const ConferenceContainer = styled.div({

})


const ActionsContainer = styled.div({
    // border: "1px solid red",
    padding: "10px",
    width: "25%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

})

const TopActionContainer = styled.div({
    // border: "1px solid red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"

})
const BottomActionContainer = styled.div({
    // border: "1px solid red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
    alignItems: "center"
})

const AwardTextContainer = styled.span({
    // border: "1px solid black",
    marginLeft: "5px",
    color: COLORS_LIGHT.GOLD,
    textAlign: "center",
    fontSize: "85%"

})

const DownloadTextContainer = styled.span({
    // border: "1px solid black",
    color: COLORS_LIGHT.ACCENT,
    cursor: "pointer"

})

const CitationTextContainer = styled.span({
    // border: "1px solid black",
    color: COLORS_LIGHT.SECONDARY_ACCENT,

})

const YearTextContainer = styled.span({
    // border: "1px solid black",
    color: COLORS_LIGHT.MEDIUM_GRAY,

})