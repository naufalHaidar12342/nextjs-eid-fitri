const { getPCGames}= require('../../fetchers/games')
export default async function pcGameHandler(_request, response) {
	try {
		const pcGames=await getPCGames().then(responseReceived =>responseReceived.data)

		return response.status(200).json(pcGames)
	} catch (error) {
		console.log(error);
		return response.status(500).json({ message :"Internal server errors"})
	}
}