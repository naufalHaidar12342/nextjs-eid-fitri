import axios from 'axios';

const BASE_URL = "https://www.freetogame.com";

export const getGames = () => {
	return axios.get(BASE_URL + "/api/games");
}

export const getPCGames = () => {
	return axios.get(BASE_URL + "/api/games?platform=pc");
}

export const getWebBrowserGames = () => {
	return axios.get(BASE_URL + "/api/games?platform=browser")
}