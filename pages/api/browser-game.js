const { getBrowserGame}= require('../../fetchers/games')

export function browserGameHandler(_request, response) {
	try {
		const browserGames= getBrowserGame().then(responseReceived =>responseReceived.data)

		return response.status(200).json(browserGames)
	} catch (error) {
		console.log(error);
		return response.status(500).json({ message :"Internal server errors"})
	}
}