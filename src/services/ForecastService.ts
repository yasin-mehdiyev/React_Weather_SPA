import axios from "../helpers/setupAxios";
import { API_KEY } from "../helpers/constants";

export async function getForecasts(region : string) : Promise<object> {
    return (await axios.get(`/forecast/daily?city=${region}&key=${API_KEY}`)).data;
};