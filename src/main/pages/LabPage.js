import styled from "styled-components"
import { CustomParagraph, CustomTitle } from "../custom/CustomText"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel"
import { COLORS_LIGHT } from "../custom/Values"
import { CustomSeparator } from "../custom/CustomSeparator"
import { A } from "../custom/CustomElements"
import { useState, useEffect } from "react"
export const LabPage = () => {
    const [labContent, setLabContent] = useState({});
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/biniyam-mt/content/main/aLab.json')
            .then(res => res.json())
            .then(json => {
                //json vaiable contains object with data
                setLabContent(json);
            })
    }, [])

    return (<>
        <CarouselView labContent={labContent} />
        <Content>
            <Students labContent={labContent} />
            <Presentaions labContent={labContent} />
            <Posters labContent={labContent} />
            <Interns labContent={labContent} />
        </Content>
    </>
    )
}
const CarouselView = ({ labContent }) => {
    return (
        <CarouselContainer>
            <CarouselDiv>{
                labContent.pictureUrls && (
                    <Carousel autoPlay={"true"} infiniteLoop={"true"} interval={"5000"}>
                        {
                            labContent.pictureUrls.map((picture) => (
                                <CarouselImage>
                                    <img src={picture.url} alt="carousel" />
                                </CarouselImage>
                            ))
                        }
                    </Carousel>)}
                <LabBio labContent={labContent} />
            </CarouselDiv>

        </CarouselContainer >
    )
}

const LabBio = ({ labContent }) => {
    return (
        <SectionContainer>
            <CustomParagraph title={"WHAT WE DO"} body={labContent.labBio || ""} />
        </SectionContainer>
    )
}

const Students = ({ labContent }) => {
    return (
        <SectionContainer>
            <CustomTitle title={"CURRENT STUDENTS"} />
            {
                labContent.students && (
                    <StudentsContainer>
                        {labContent.students.map((student, idx) => (

                            <Student student={student} alignRight={idx % 2 === 0} />
                        ))}
                    </StudentsContainer>)}
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
                <CustomParagraph title={student.fullName} body={student.bio} />
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

const Presentaions = ({ labContent }) => {
    return (
        <PresentaionsContainer>
            <SectionContainer>
                <CustomTitle title={"STUDENT PRESENTATIONS"} />
                {labContent.videos && (<>
                    <VideoContainer>
                        {labContent.videos.map((video) => (
                            <Presentaion>
                                <VideoFrame>
                                    <iframe src={video.url} title={video.title} width={"100%"} height={"100%"} />
                                </VideoFrame>

                                <CustomParagraph title={video.author} body={video.title} />
                                <br />
                                {video.description}
                            </Presentaion>
                        ))}
                    </VideoContainer>
                </>)}
            </SectionContainer>
        </PresentaionsContainer>
    )
}

const Posters = ({ labContent }) => {
    return (
        <PostersContainer>
            <SectionContainer>
                <CustomTitle title={"STUDENT POSTERS"} />
                {labContent.posters && (<>

                    <VideoContainer>
                        {labContent.posters.map((poster) => (
                            <Presentaion>
                                <PosterFrame href={poster.url} target="_blank" rel="noreferrer">
                                    <img src={poster.coverImage} alt="poster" width={"100%"} height={"100%"} />
                                </PosterFrame>

                                <CustomParagraph title={poster.author} body={poster.title} />
                                <br />
                                {poster.description}
                            </Presentaion>
                        ))}
                    </VideoContainer>
                </>
                )}
            </SectionContainer>
        </PostersContainer>
    )
}
const Interns = ({ labContent }) => {
    return (
        <InternsContainer>

            <SectionContainer>
                {labContent.undergradProgramBio && (
                    <CustomParagraph title={"UNDERGRADUATE RESEARCHERS"} body={labContent.undergradProgramBio} />
                )}
                {labContent.undergrads && (<>

                    <CustomSeparator tag={"2022"} />
                    <StudentsContainer>
                        {labContent.undergrads.filter(student => student.year === 2022).map((student, idx) => (

                            <Intern student={student} alignRight={true} width={"1200px"} />
                        ))}
                    </StudentsContainer>
                    <CustomSeparator tag={"2021"} />
                    <StudentsContainer>
                        {labContent.undergrads.filter(student => student.year === 2021).map((student, idx) => (

                            <Intern student={student} alignRight={true} width={"1200px"} />
                        ))}
                    </StudentsContainer>
                    <CustomSeparator tag={"2020"} />
                    <StudentsContainer>
                        {labContent.undergrads.filter(student => student.year === 2020).map((student, idx) => (

                            <Intern student={student} alignRight={true} width={"1200px"} />
                        ))}
                    </StudentsContainer>
                    <CustomSeparator tag={"2019"} />
                    <StudentsContainer>
                        {labContent.undergrads.filter(student => student.year === 2019).map((student, idx) => (

                            <Intern student={student} alignRight={true} width={"1200px"} />
                        ))}
                    </StudentsContainer>
                </>)}
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
                    <CustomParagraph title={student.fullName} body={student.bio} />
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