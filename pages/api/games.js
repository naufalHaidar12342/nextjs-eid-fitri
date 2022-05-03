const { getGames } = require('../../fetchers/games');

export default async function handler(req, res) {
	try {
		const games = await getGames().then(response => response.data);

		return res.status(200).json(games)
	} catch (error) {
		console.log(error)
		return res.status(500).json({ message: "Internal server error" })
	}

}
