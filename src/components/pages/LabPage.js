import styled from "styled-components"
import { CustomParagraph, CustomTitle } from "../CustomText"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import alabContent from "../content/aLab.json"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel"
export const LabPage = () => {
    return (<>
        <CarouselView />
        <Content>
            <LabBio />
            <Students />
        </Content>
    </>
    )
}
const CarouselView = () => {
    return (
        <CarouselContainer>
            <CarouselDiv>

                <Carousel autoPlay={"true"} infiniteLoop={"true"} interval={"5000"} dynamicHeight={"true"}>
                    {
                        alabContent.pictureUrls.map((picture) => (
                            <div>
                                <img src={picture.url} alt="carousel" />
                            </div>
                        ))
                    }
                </Carousel>
            </CarouselDiv>
        </CarouselContainer >
    )
}

const LabBio = () => {
    return (
        <BioContainer>
            <CustomParagraph title={"WHAT WE DO"}>
                Et elit sunt enim elit irure. Sit sunt in sint id do amet qui esse ad quis magna. Nostrud ut veniam pariatur pariatur amet nisi enim anim quis sunt. Sit commodo voluptate sunt duis veniam irure nulla amet nisi.Amet qui id ad pariatur. Aliquip cupidatat dolor duis elit minim ullamco velit ipsum dolor non. Consectetur proident mollit consectetur in occaecat fugiat exercitation consectetur aliqua anim sint ea aliquip. Dolore aliquip dolore eiusmod dolore voluptate quis irure adipisicing nisi dolor elit fugiat Lorem do. Commodo aliqua aliqua anim duis. Labore ipsum sit laborum qui aute consectetur adipisicing reprehenderit cupidatat do consequat in ea. Minim cupidatat culpa mollit fugiat.Sit et sit nostrud laborum veniam incididunt ad pariatur anim. Eiusmod magna consectetur ipsum in mollit duis laborum dolore dolor culpa ex sit in reprehenderit. Ad sit laborum amet id laborum incididunt aliqua ipsum sit enim dolore. Occaecat ex aute tempor exercitation. Tempor eu labore et nisi ea ullamco pariatur magna in eiusmod aliqua mollit. Occaecat ipsum amet minim cillum.
            </CustomParagraph >
        </BioContainer>
    )
}

const Students = () => {
    return (
        <div>
            <CustomTitle title={"CURRENT STUDENTS"} />
            <StudentsContainer>
                {alabContent.students.map((student, idx) => (

                    <Student student={student} alignRight={idx % 2 === 0} />
                ))}
            </StudentsContainer>
        </div>
    )
}

const Student = ({ student, alignRight }) => {
    return (
        <StudentDiv alignRight={alignRight}>
            <StudentPhotoContainer>
                <ImageFrame>
                    <img src={student.photoUrl} alt="student" height={"300px"} />
                </ImageFrame>
                <JellyBean>
                    <svg xmlns='http://www.w3.org/2000/svg' height='100%' viewBox='0 0 3890.303 2752.572'>
                        <path id='Path_1' data-name='Path 1' d='M1698.446-70.623S1639.3,155.428,819.96,214.089-251.867,1318.881,966.628,1715.621s3015.725,52.321,3051.585-1302.1C4049.339-762.119,3006.728-1105.8,2320.371-747.287A1065.278,1065.278,0,0,0,2043.81-539.048C1882.614-292.806,1698.446-70.623,1698.446-70.623Z' transform='translate(-128.591 882.483)' fill='#FADFC6' />
                    </svg>
                </JellyBean>
            </StudentPhotoContainer>
            <StudentBioContainer alignRight={alignRight}>
                <CustomParagraph title={student.fullName}>
                    {student.bio}
                </CustomParagraph>
                <a style={{ color: "#ff7055" }} href={student.websiteLink} rel="noreferrer" target="_blank">PERSONAL WEBSITE</a>
                <p><FontAwesomeIcon icon={faAt} size="1x" color="#ff7055" /> {student.email}</p>
                <SocialContainer>

                    <SocialItems>
                        <a href={student.googleScholarLink} rel="noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faUserGraduate} size="lg" />
                        </a>
                    </SocialItems>
                    <SocialItems>
                        <a href={student.linkedInLink} rel="noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                    </SocialItems>
                    <SocialItems>
                        <a href={student.twitterLink} rel="noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </a>
                    </SocialItems>
                </SocialContainer>

            </StudentBioContainer>
        </StudentDiv>
    )
}




// styled components ------------------------------------------------------------------
const Content = styled.div({
    // border: "1px solid red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#edf1f9",
})

const CarouselContainer = styled.div({
    // border: "2px solid red",
    padding: "70px 0px 0px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#edf1f9",
})
const CarouselDiv = styled.div({
    // border: "1px solid yellow",
    width: "1200px",
    // height: "500px"
})


const BioContainer = styled.div({
    // border: "1px solid red",
    margin: "30px 0px",
    width: "1200px",
})

const StudentsContainer = styled.div({
    // border: "1px solid green",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",


})

const StudentDiv = styled.div`
    // border: 1px solid green;
    // background-image: url("./grid.png");
    width: 1200px;
    display: flex;
    flex-direction: ${(props) => props.alignRight ? "row" : "row-reverse"};
    justify-content: ${(props) => props.alignRight ? "start" : "end"};;
    align-items: start;
    margin: 30px 0px

`
const StudentPhotoContainer = styled.div({
    backgroundImage: "url('./grid.png')",
    // border: "1px solid green",
    // display: "flex",
    // justifyContent: "center",

})
const ImageFrame = styled.div({
    // border: "1px solid green",
    zIndex: 991,
    position: "absolute"

    // display: "flex",
    // justifyContent: "center",

})
const JellyBean = styled.div({
    // border: "1px solid green",
    // marginTop: "0px",
    zIndex: 990,
    paddingTop: "50px",
    height: "200px",
    transform: "rotate(300deg)"

})
const StudentBioContainer = styled.div`
    // border: 1px solid green;
    width: 500px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    margin-left: ${(props) => props.alignRight ? "20px" : "0px"};
    margin-right: ${(props) => props.alignRight ? "0px" : "20px"};

`
const SocialContainer = styled.div({
    // border: "1px solid red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    // padding: "20px 0px"
})

const SocialItems = styled.div({
    // border: "1px solid green",
    width: "15px",
    height: "15px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "#707070",
    marginRight: "55px",
    cursor: "pointer"
})