import { useEffect, useState } from "react";
import "./App.css";
import PlantInfo from "./PlantsInfo/PlantsInfo";
import Search from "./components/search/Panel";
import { Container } from "@mui/material";
import Header from "./components/Header";
import { SearchSpecies } from "./api/species/search";

function App() {
    const [searchText, setSearchText] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiResponse = await SearchSpecies(searchText);
                setSearchResult(apiResponse);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData().then(() => console.log("Got the API Response"));
    }, [searchText]);

    const handleSearch = (searchText) => {
        setSearchText(searchText);
    };
    return (
        <>
            <Header />
            <Container>
                <Search onSearch={handleSearch} />
                {
                    searchResult.length > 0 &&
                    <PlantInfo data={searchResult} />
                }
            </Container>
        </>
    );
}

export default App;
