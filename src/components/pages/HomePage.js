import styled from "styled-components"
import { useEffect, useState } from "react"
import { CustomParagraph, CustomTitle } from "../CustomText"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt, faLocationDot, faPhone, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import basicInfo from "../content/basicInfo.json"
import linkedInFeed from "../content/linkedInFeed.json"


export const HomePage = () => {
    const [scroll, setScroll] = useState(0)

    const listenScrollEvent = (event) => {
        setScroll(window.scrollY)
    }
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);
    return (
        <>
            <Cover scroll={scroll} />
            <MiddleContainer>
                <Biography />
                <ContactInfo />
            </MiddleContainer>
            <RecentNewsContainer>
                <RecentUpdates />
                <LinkedInNews />
            </RecentNewsContainer>

        </>

    )
}


const Cover = ({ scroll }) => {
    return (
        <>
            <CoverContainer>
                <JellyBean scroll={scroll}>

                    <svg xmlns='http://www.w3.org/2000/svg' height='100%' viewBox='0 0 3890.303 2752.572'>
                        <path id='Path_1' data-name='Path 1' d='M1698.446-70.623S1639.3,155.428,819.96,214.089-251.867,1318.881,966.628,1715.621s3015.725,52.321,3051.585-1302.1C4049.339-762.119,3006.728-1105.8,2320.371-747.287A1065.278,1065.278,0,0,0,2043.81-539.048C1882.614-292.806,1698.446-70.623,1698.446-70.623Z' transform='translate(-128.591 882.483)' fill='#FADFC6' />
                    </svg>
                </JellyBean>
                <BgName scroll={scroll}>
                    TODD AUSTIN
                </BgName>
                <Portrait>
                    <img src="./todd.png" alt="todd" width={"100%"} style={{ maxHeight: "800px" }} />
                </Portrait>
                <Socials />
            </CoverContainer >

        </>

    )
}

const Socials = () => {
    return (
        <SocialContainer>

            <SocialItems>
                <FontAwesomeIcon icon={faUserGraduate} size="xl" />
            </SocialItems>
            <SocialItems>
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </SocialItems>
            <SocialItems>
                <FontAwesomeIcon icon={faTwitter} size="xl" />
            </SocialItems>
            <SocialItems>
                <FontAwesomeIcon icon={faGithub} size="xl" />
            </SocialItems>
            <SocialItems>
                <FontAwesomeIcon icon={faYoutube} size="xl" />
            </SocialItems>

        </SocialContainer>
    )
}
const Biography = () => {
    return (
        <div style={{ width: "50%", marginRight: "15px" }}>

            <CustomParagraph title={"BIBLOGRAPHY"}>
                {basicInfo.personalBiography}
            </CustomParagraph>
        </div>


    )
}
const ContactInfo = () => {
    return (
        <InfoContainer>
            <CustomParagraph title={"BASIC INFORMATION"} >

                <b>
                    {basicInfo.fullName}
                </b>
                <br />
                {basicInfo.title}

            </CustomParagraph>
            <AddressContainer>
                <AddressItems>
                    <AddressIcons>
                        <FontAwesomeIcon icon={faLocationDot} size="lg" color="#ff7055" />
                    </AddressIcons>
                    <div>
                        {basicInfo.addressRoom}
                        <br />
                        {basicInfo.addressStreet}
                        <br />
                        {basicInfo.addressZip}
                    </div>
                </AddressItems>
                <AddressItems>
                    <AddressIcons>
                        <FontAwesomeIcon icon={faPhone} size="lg" color="#ff7055" />
                    </AddressIcons>
                    <div>
                        {basicInfo.phoneNumber}
                    </div>
                </AddressItems>
                <AddressItems>
                    <AddressIcons>
                        <FontAwesomeIcon icon={faAt} size="lg" color="#ff7055" />
                    </AddressIcons>
                    <div>
                        {basicInfo.email}
                    </div>
                </AddressItems>

            </AddressContainer>

        </InfoContainer>
    )
}

const RecentUpdates = () => {
    return (
        <UpdatesContainer>
            <CustomTitle title={"RECENT NEWS"} />
            <hr />
            News

        </UpdatesContainer>
    )
}
const LinkedInNews = () => {


    return (
        <LinkedInNewsContainer>
            <CustomTitle title={"LINKEDIN UPDATES"} />
            <hr />
            <FeedContainer>

                {linkedInFeed.map((feed) => (< FeedItem >
                    {/* <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6954184073858678785" height="832px" width="95%" frameBorder="0" allowFullScreen="" title="Embedded post"></iframe> */}
                    <div dangerouslySetInnerHTML={{ __html: feed }} />
                </FeedItem>))
                }
            </FeedContainer>

        </LinkedInNewsContainer >
    )
}




// styled components ------------------------------------------------------------------
const InfoContainer = styled.div({
    // border: "1px solid red",
    width: "30%",
    // height: 800,
    // backgroundColor: "#edf1f9",
    // paddingTop: 50,
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
})
const AddressContainer = styled.div({
    fontFamily: "Gotham",
    color: "#505050",
    lineHeight: "24px",
    // border: "1px solid green",

})
const AddressItems = styled.div({
    // border: "1px solid green",
    margin: "10px 0px",

    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "start",
})
const AddressIcons = styled.div({
    // border: "1px solid green",
    marginRight: "10px"

})
const SocialContainer = styled.div({
    // border: "1px solid green",
    marginTop: "15px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 2000,
    padding: "20px 0px"
})

const SocialItems = styled.div({
    // border: "1px solid green",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    color: "#707070",
    margin: "0px 35px"
})

const CoverContainer = styled.div({
    // border: "1px solid green",
    height: 800,
    backgroundColor: "#edf1f9",
    paddingTop: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "center",
})

const BgName = styled('div')`
                // border:1px solid blue;
                width: 100%;
                font-size: 1000%;
                font-family: "Gotham black";
                color: white;
                text-align: center;
                position: absolute;
                padding-bottom: 180px;
                padding-right: ${(props) => props.scroll / 4}px;


                `

const Portrait = styled('div')`
                // border:1px solid red;
                position: absolute;
                width: 75%;
                max-height:800px;
                right: 0px

                `

const JellyBean = styled('div')`
                // border:1px solid black;
                width: 100%;
                height: 700px;
                position: absolute;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                padding-bottom: 60px;
                padding-left: ${(props) => props.scroll}px;
                `

const MiddleContainer = styled.div({
    // border: "1px solid green",
    padding: "15px",
    margin: "15px",
    // height: 800,
    // backgroundColor: "#edf1f9",
    // paddingTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "start",
})

const RecentNewsContainer = styled.div({
    // border: "1px solid green",
    padding: "15px",
    margin: "15px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "start",
})


const UpdatesContainer = styled.div({
    // border: "1px solid red",
    width: "60%",
    padding: "0px 10px",
    // margin: "15px",
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "start",
})
const LinkedInNewsContainer = styled.div({
    // border: "1px solid green",
    width: "550px",
    // padding: "0px 10px",
    marginLeft: "35px",
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "start",
})


const FeedContainer = styled.div({
    // border: "1px solid red",
    // width: "50%",
    // padding: "0px 10px",
    // margin: "0px 10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
})

const FeedItem = styled.div({
    // border: "1px solid blue",
    width: "550px",
    // padding: "0px 10px",
    // margin: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    padding: "10px 0px",
})