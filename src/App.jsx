import { useEffect, useState } from "react";
import "./App.css";
import PlantInfo from "./PlantsInfo/PlantsInfo";
import Search from "./PlantsInfo/Search";
import axios from "axios";
import { Container } from "@mui/material";
import Header from "./WebComponents/Header";

function App() {
    const [searchText, setSearchText] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const apiToken = "5UQJ_Msmdzu3c_4NjpGnshZYTdqMkVt0DQxXmblhgRA";
            try {
                await axios
                    .get("/api/v1/species/search?token=" + apiToken + "&q=" + searchText)
                    .then((response) => {
                        setSearchResult(response.data.data);
                    });
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, [searchText]);

    const handleSearch = (searchText) => {
        setSearchText(searchText);
    };
    return (
        <>
            <Header />
            <Container>
                <Search onSearch={handleSearch} />
                <PlantInfo data={searchResult} />
            </Container>
        </>
    );
}

export default App;
