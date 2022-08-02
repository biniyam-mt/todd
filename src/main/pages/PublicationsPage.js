import { useCallback, useMemo, useState } from "react"
import styled from "styled-components"
import publicationRecord from "../content/publications.json"
import { COLORS_LIGHT } from "../custom/Values"
import { PublicationList } from "../components/PublicationList"

export const PublicationsPage = () => {
    const [sortBy, setSortBy] = useState("year");
    const [filterBy, setFilterBy] = useState("all");
    // const [data, setData] = useState(publicationRecord);

    const sortByYear = useCallback((data) => {
        return data.sort((a, b) => b.year - a.year);
    }, [])

    const sortByCitations = useCallback((data) => {
        return data.sort((a, b) => b.citations - a.citations);
    }, [])

    const filter = useCallback((data) => {
        if (filterBy === "all") {
            return data
        } else if (filterBy === "firstAuthor") {
            return data.filter(paper => paper.authors[0] === "Todd Austin")
        } else if (filterBy === "ieee") {
            return data.filter(paper => paper.publisher === "IEEE")
        } else if (filterBy === "awarded") {
            return data.filter(paper => paper.awards.length !== 0)
        }
    }, [filterBy])


    const sortedAndFiltered = useMemo(() => {
        const filtered = filter(publicationRecord);
        if (filtered.length === 0) {
            return [];
        }
        if (sortBy === "year") {
            return sortByYear(filtered);
        } else {
            return sortByCitations(filtered);
        }

    }, [sortBy, sortByCitations, sortByYear, filter])



    return (
        <>
            <ControlContainer>
                <FilterContainer>
                    <div>
                        FILTER:
                    </div>
                    <FilterOptionscontainer>
                        <FilterOptions onClick={() => {
                            setFilterBy("all")
                        }} active={filterBy === "all"}>ALL</FilterOptions>
                        <FilterOptions onClick={() => {
                            setFilterBy("firstAuthor")
                        }} active={filterBy === "firstAuthor"}>FIRST AUTHOR</FilterOptions>
                        <FilterOptions onClick={() => {
                            setFilterBy("ieee")
                        }} active={filterBy === "ieee"}>IEEE</FilterOptions>
                        <FilterOptions onClick={() => {
                            setFilterBy("awarded")
                        }} active={filterBy === "awarded"}>AWARDED</FilterOptions>
                    </FilterOptionscontainer>
                </FilterContainer>
                <SortContainer>
                    <div>
                        SORT BY:
                    </div>
                    <SortOptionscontainer>
                        <SortOptions onClick={() => {
                            setSortBy("year")
                        }} active={sortBy === "year"}>YEAR</SortOptions>
                        <SortOptions onClick={() => {
                            setSortBy("citations")
                        }} active={sortBy === "citations"}>CITATIONS</SortOptions>
                    </SortOptionscontainer>
                </SortContainer>
            </ControlContainer>
            <PublicationList publicationRecord={sortedAndFiltered} />
        </>
    )
}



// styled components ------------------------------------------------------------------
const ControlContainer = styled.div({
    // border: "1px solid green",
    margin: "15px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Montserrat",
    fontSize: "80%",
    // fontWeight: "500",
    color: COLORS_LIGHT.LIGHT_GRAY,
})
const FilterContainer = styled.div({
    // border: "1px solid green",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

})


const FilterOptionscontainer = styled.div({
    // border: "1px solid red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "15px"
})

const FilterOptions = styled.div`
    border: ${(props) => props.active ? "1px solid " + COLORS_LIGHT.ACCENT : "1px solid " + COLORS_LIGHT.LIGHT_GRAY};
    color:${(props) => props.active ? "white" : COLORS_LIGHT.LIGHT_GRAY};
    background-color:${(props) => props.active ? COLORS_LIGHT.ACCENT : ""};
    padding: 2px 5px 2px 5px;
    border-radius: 10px;
    margin: 0px 3px;
    cursor: pointer;
`

const SortContainer = styled.div({
    // border: "1px solid green",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

})

const SortOptionscontainer = styled.div({
    // border: "1px solid red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "15px"
})

const SortOptions = styled.div`
    // border: ${(props) => props.active ? "1px solid " + COLORS_LIGHT.ACCENT : "1px solid transparent"};
    // color:${(props) => props.active ? COLORS_LIGHT.ACCENT : COLORS_LIGHT.LIGHT_GRAY};
    // padding: 2px 5px 2px 5px;
    // cursor: pointer;
    border: ${(props) => props.active ? "1px solid " + COLORS_LIGHT.ACCENT : "1px solid " + COLORS_LIGHT.LIGHT_GRAY};
    color:${(props) => props.active ? "white" : COLORS_LIGHT.LIGHT_GRAY};
    background-color:${(props) => props.active ? COLORS_LIGHT.ACCENT : ""};
    padding: 2px 5px 2px 5px;
    border-radius: 10px;
    margin: 0px 3px;
    cursor: pointer;
`