import styled from "styled-components"
import { CustomParagraph, CustomTitle } from "../custom/CustomText"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import alabContent from "../content/aLab.json"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel"
import { COLORS_LIGHT } from "../Values"
import { CustomSeparator } from "../custom/CustomSeparator"
import { A } from "../custom/CustomElements"
export const LabPage = () => {
    return (<>
        <CarouselView />
        <Content>
            <Students />
            <Presentaions />
            <Posters />
            <Interns />
        </Content>
    </>
    )
}
const CarouselView = () => {
    return (
        <CarouselContainer>
            <CarouselDiv>

                <Carousel autoPlay={"true"} infiniteLoop={"true"} interval={"5000"}>
                    {
                        alabContent.pictureUrls.map((picture) => (
                            <CarouselImage>
                                <img src={picture.url} alt="carousel" />
                            </CarouselImage>
                        ))
                    }
                </Carousel>
                <LabBio />
            </CarouselDiv>

        </CarouselContainer >
    )
}

const LabBio = () => {
    return (
        <SectionContainer>
            <CustomParagraph title={"WHAT WE DO"}>
                Et elit sunt enim elit irure. Sit sunt in sint id do amet qui esse ad quis magna. Nostrud ut veniam pariatur pariatur amet nisi enim anim quis sunt. Sit commodo voluptate sunt duis veniam irure nulla amet nisi.Amet qui id ad pariatur. Aliquip cupidatat dolor duis elit minim ullamco velit ipsum dolor non. Consectetur proident mollit consectetur in occaecat fugiat exercitation consectetur aliqua anim sint ea aliquip. Dolore aliquip dolore eiusmod dolore voluptate quis irure adipisicing nisi dolor elit fugiat Lorem do. Commodo aliqua aliqua anim duis. Labore ipsum sit laborum qui aute consectetur adipisicing reprehenderit cupidatat do consequat in ea. Minim cupidatat culpa mollit fugiat.Sit et sit nostrud laborum veniam incididunt ad pariatur anim. Eiusmod magna consectetur ipsum in mollit duis laborum dolore dolor culpa ex sit in reprehenderit. Ad sit laborum amet id laborum incididunt aliqua ipsum sit enim dolore. Occaecat ex aute tempor exercitation. Tempor eu labore et nisi ea ullamco pariatur magna in eiusmod aliqua mollit. Occaecat ipsum amet minim cillum.
            </CustomParagraph >
        </SectionContainer>
    )
}

const Students = () => {
    return (
        <SectionContainer>
            <CustomTitle title={"CURRENT STUDENTS"} />
            <StudentsContainer>
                {alabContent.students.map((student, idx) => (

                    <Student student={student} alignRight={idx % 2 === 0} />
                ))}
            </StudentsContainer>
        </SectionContainer>
    )
}

const Student = ({ student, alignRight }) => {
    return (
        <StudentDiv alignRight={alignRight} width={"1200px"}>
            <StudentPhotoContainer>
                <ImageFrame>
                    <img src={student.photoUrl} alt="student" height={"300px"} />
                </ImageFrame>
                <JellyBean>
                    <svg xmlns='http://www.w3.org/2000/svg' height='100%' viewBox='0 0 3890.303 2752.572'>
                        <path id='Path_1' data-name='Path 1' d='M1698.446-70.623S1639.3,155.428,819.96,214.089-251.867,1318.881,966.628,1715.621s3015.725,52.321,3051.585-1302.1C4049.339-762.119,3006.728-1105.8,2320.371-747.287A1065.278,1065.278,0,0,0,2043.81-539.048C1882.614-292.806,1698.446-70.623,1698.446-70.623Z' transform='translate(-128.591 882.483)' fill={COLORS_LIGHT.PRIMARY_SHAPES} />
                    </svg>
                </JellyBean>
            </StudentPhotoContainer>
            <StudentBioContainer alignRight={alignRight} fixed>
                <CustomParagraph title={student.fullName}>
                    {student.bio}
                </CustomParagraph>
                <PersonalWebsite style={{ color: COLORS_LIGHT.ACCENT }} href={student.websiteLink} rel="noreferrer" target="_blank">PERSONAL WEBSITE</PersonalWebsite>
                <p><FontAwesomeIcon icon={faAt} size="1x" color={COLORS_LIGHT.ACCENT} /> {student.email}</p>
                <SocialContainer>

                    <SocialItems>
                        <A href={student.googleScholarLink} rel="noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faUserGraduate} size="lg" />
                        </A>
                    </SocialItems>
                    <SocialItems>
                        <A href={student.linkedInLink} rel="noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </A>
                    </SocialItems>
                    <SocialItems>
                        <A href={student.twitterLink} rel="noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </A>
                    </SocialItems>
                </SocialContainer>

            </StudentBioContainer>
        </StudentDiv>
    )
}

const Presentaions = () => {
    return (
        <PresentaionsContainer>
            <SectionContainer>
                <CustomTitle title={"STUDENT PRESENTATIONS"} />

                <VideoContainer>
                    {alabContent.videos.map((video) => (
                        <Presentaion>
                            <VideoFrame>
                                <iframe src={video.url} title={video.title} width={"100%"} height={"100%"} />
                            </VideoFrame>

                            <CustomParagraph title={video.author} >
                                {video.title}
                                <br />
                                {video.description}
                            </CustomParagraph>
                        </Presentaion>
                    ))}
                </VideoContainer>
            </SectionContainer>
        </PresentaionsContainer>
    )
}

const Posters = () => {
    return (
        <PostersContainer>
            <SectionContainer>
                <CustomTitle title={"STUDENT POSTERS"} />

                <VideoContainer>
                    {alabContent.posters.map((poster) => (
                        <Presentaion>
                            <PosterFrame href={poster.url} target="_blank" rel="noreferrer">
                                <img src={poster.coverImage} alt="poster" width={"100%"} height={"100%"} />
                            </PosterFrame>

                            <CustomParagraph title={poster.author} >
                                {poster.title}
                                <br />
                                {poster.description}
                            </CustomParagraph>
                        </Presentaion>
                    ))}
                </VideoContainer>
            </SectionContainer>
        </PostersContainer>
    )
}
const Interns = () => {
    return (
        <InternsContainer>

            <SectionContainer>
                <CustomParagraph title={"UNDERGRADUATE RESEARCHERS"} >
                    Amet nostrud aliquip quis aliqua aliquip sunt qui ut tempor ea minim amet. Aute labore quis tempor sint sint amet exercitation fugiat qui velit sit amet qui aute. Velit ut reprehenderit labore dolor aute reprehenderit eu proident minim cupidatat Lorem eiusmod. Elit consectetur aliquip reprehenderit ex velit exercitation.Elit consectetur aliquip reprehenderit ex velit exercitation.
                </CustomParagraph>
                <CustomSeparator tag={"2022"} />
                <StudentsContainer>
                    {alabContent.undergrads.filter(student => student.year === 2022).map((student, idx) => (

                        <Intern student={student} alignRight={true} width={"1200px"} />
                    ))}
                </StudentsContainer>
                <CustomSeparator tag={"2021"} />
                <StudentsContainer>
                    {alabContent.undergrads.filter(student => student.year === 2021).map((student, idx) => (

                        <Intern student={student} alignRight={true} width={"1200px"} />
                    ))}
                </StudentsContainer>
                <CustomSeparator tag={"2020"} />
                <StudentsContainer>
                    {alabContent.undergrads.filter(student => student.year === 2020).map((student, idx) => (

                        <Intern student={student} alignRight={true} width={"1200px"} />
                    ))}
                </StudentsContainer>
                <CustomSeparator tag={"2019"} />
                <StudentsContainer>
                    {alabContent.undergrads.filter(student => student.year === 2019).map((student, idx) => (

                        <Intern student={student} alignRight={true} width={"1200px"} />
                    ))}
                </StudentsContainer>
            </SectionContainer>
        </InternsContainer>
    )
}

const Intern = ({ student }) => {
    return (
        <div>
            <StudentDiv alignRight={true} width={"1200px"}>
                <img src={student.photoUrl} alt="student" height={"150px"} />
                <StudentBioContainer alignRight={true}>
                    <CustomParagraph title={student.fullName}>
                        {student.bio}
                    </CustomParagraph>
                    <PersonalWebsite style={{ color: COLORS_LIGHT.ACCENT }} href={student.websiteLink} rel="noreferrer" target="_blank">PERSONAL WEBSITE</PersonalWebsite>
                </StudentBioContainer>
                <InternPresentations>
                    {student.posterURL !== "" && (
                        <PosterFrame href={student.posterURL} target="_blank" rel="noreferrer">
                            <img src={student.posterCoverUrl} alt="poster" width={"100%"} height={"100%"} />
                        </PosterFrame>
                    )
                    }
                    {student.videoUrl !== "" &&

                        <InternVideoFrame>
                            <iframe src={student.videoUrl} title={student.fullName} width={"100%"} height={"100%"} />
                        </InternVideoFrame>
                    }
                </InternPresentations>
            </StudentDiv>
        </div>
    )
}


// styled components ------------------------------------------------------------------

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

const Content = styled.div({
    // border: "1px solid red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
})

const CarouselContainer = styled.div({
    // border: "2px solid red",
    padding: "70px 0px 0px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS_LIGHT.SECONDARY_BG,
})
const CarouselDiv = styled.div({
    // border: "1px solid blue",
    maxWidth: "1200px",
    // height: "500px"
})
const CarouselImage = styled.div({
    // border: "1px solid red",
    maxHeight: "600px",
    overflow: "hidden"
})


const SectionContainer = styled.div({
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
    width: ${(props) => props.width};
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
    height: ${(props) => props.fixed ? "300px" : ""};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    margin-left: ${(props) => props.alignRight ? "20px" : "0px"};
    margin-right: ${(props) => props.alignRight ? "0px" : "20px"};

`
const PersonalWebsite = styled(A)`
    // border: 1px solid red;
    margin: 10px 0px;
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
    color: COLORS_LIGHT.MEDIUM_GRAY,
    marginRight: "55px",
    cursor: "pointer"
})

const PresentaionsContainer = styled.div({
    // border: "1px solid green",
    backgroundColor: COLORS_LIGHT.SECONDARY_BG,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
})

const PostersContainer = styled.div({
    // border: "1px solid green",
    backgroundColor: COLORS_LIGHT.NEUTRAL,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
})


const InternsContainer = styled.div({
    // border: "1px solid green",
    backgroundColor: COLORS_LIGHT.SECONDARY_BG,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
})

const PosterFrame = styled(A)`
    // border: 1px solid red,
    height: 100%;
    margin-bottom: 10px;
`


const InternPresentations = styled.div({
    // border: "1px solid green",
    width: "50%",
    height: "150px",
    backgroundColor: COLORS_LIGHT.SECONDARY_BG,
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    // alignItems: "center",
    padding: "0px 15px"
})

const InternVideoFrame = styled(A)`
    // border: 1px solid red;
    // width: 100%;
    // height: 170px;
    margin-left: 10px;
`