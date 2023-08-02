import axios from "axios";
import { apiToken } from "../../constants";

export const SearchSpecies = async (speciesName) => {
        try {
            const response = await axios.get("/api/v1/species/search?token=" + apiToken + "&q=" + speciesName);
            return response.data.data;
        } catch (error) {
            console.log("Error fetching data: ", error);
            throw error;
        }
};