import styled from "styled-components"
import { useEffect, useState } from "react"
import { CustomParagraph, CustomTitle } from "../CustomText"

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
            <div style={{ padding: "15px", margin: "15px" }}>
                <Biography />
                <RecentNews />
            </div>

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
            </CoverContainer >

        </>

    )
}
const Biography = () => {
    return (

        <CustomParagraph title={"BIBLOGRAPHY"}>
            Velit eu commodo ut labore amet sunt proident commodo
            ullamco est elit aliqua. Veniam duis Lorem proident
            officia aliquip proident mollit Lorem commodo sint deserunt.
            Eiusmod culpa sit aliquip excepteur ad eu ea minim amet.
            Non cillum aute consectetur aute non qui ea officia aliquip
            reprehenderit irure eu minim. Id dolor ullamco eu ex tempor
            duis proident eiusmod fugiat. Non enim do incididunt elit
            proident minim non magna dolor.
            Velit eu commodo ut labore amet sunt proident commodo
            ullamco est elit aliqua. Veniam duis Lorem proident
            officia aliquip proident mollit Lorem commodo sint deserunt.
            Eiusmod culpa sit aliquip excepteur ad eu ea minim amet.
            Non cillum aute consectetur aute non qui ea officia aliquip
            reprehenderit irure eu minim. Id dolor ullamco eu ex tempor
            duis proident eiusmod fugiat. Non enim do incididunt elit
            proident minim non magna dolor.
        </CustomParagraph>


    )
}
const RecentNews = () => {
    return (
        <div style={{ margin: "50px 0px", border: "1px solid red" }}>
            <CustomTitle title={"RECENT NEWS"} />
            <hr />

        </div>
    )
}






// styled components ------------------------------------------------------------------
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
padding-bottom: ${(props) => props.scroll / 4 + 180}px;


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

padding-bottom: ${(props) => 60 - props.scroll / 4}px;


`