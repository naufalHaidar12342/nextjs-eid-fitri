import Link from "next/link";
import { getGamesByPlatform } from "../../fetchers/games";
import { AiFillWindows } from "react-icons/ai";
import { FaFirefoxBrowser } from "react-icons/fa";

const Category = ({ games, hello }) => {
	console.log(games); // world

	const getIcon = (platform) => {
		switch (platform) {
			case "PC (Windows)":
				return <AiFillWindows />;
			case "Web Browser":
				return <FaFirefoxBrowser />;
			default:
				return "Test";
		}
	};
	return (
		<>
			<div className="bg-slate-500">
				<div className="container mx-auto -md:max-w-full max-w-5xl flex items-center flex-col px-6 sm:px-0">
					<div className="page-title bg-gray-400 my-5 w-full p-4 shadow-sm rounded-lg">
						<h3 className="text-3xl">Choose your device</h3>
						<div className="device-category text-left mt-2 flex ">
							{/* back to home  */}
							<Link href="/">
								<a className="inline-flex items-center rounded-md text-gray-600 bg-gray-100 md:mr-2 mb-2 px-2 md:px-4 py-1 font-bold mr-3">
									<AiFillWindows className="mx-auto " />
									Kembali
								</a>
							</Link>

							{/* button to show pc games only */}
							<Link href={`/platform/pc`}>
								<a className="inline-flex items-center rounded-md text-gray-600 bg-gray-100 md:mr-2 mb-2 px-2 md:px-4 py-1 font-bold mr-3">
									<AiFillWindows className="mx-auto " />
									PC
								</a>
							</Link>

							{/* button to show browser games only */}
							<Link href={`/platform/browser`}>
								<a className="inline-flex items-center rounded-md text-gray-600 bg-gray-100  font-bold md:mr-2 mb-2 px-2 md:px-4 py-1 ">
									<FaFirefoxBrowser className="mx-auto" />
									Browser
								</a>
							</Link>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5 w-full">
						{games.map((game) => (
							// cardnya
							<div
								key={game.id}
								className="w-full pb-4 bg-white shadow-sm rounded-lg "
							>
								<img
									src={game.thumbnail}
									alt=""
									className="w-full cover rounded-t-md mb-2"
								/>
								<div className="mx-4 game-properties">
									<h2 className="font-bold text-xl">{game.title}</h2>
									<p className="text-base">{game.short_description}</p>
									<span className="flex items-center bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
										{game.genre}
									</span>
									<span className="flex items-center bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2 italic">
										{getIcon(game.platform)} {game.platform}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export async function getStaticPaths() {
	const paths = [
		{ params: { platform: "pc" } },
		{ params: { platform: "browser" } },
	];

	return {
		paths,
		fallback: true,
	};
}

export async function getStaticProps(context) {
	const cat = context.params.platform;

	const games = await getGamesByPlatform(cat);

	return {
		props: {
			games: games.data,
			hello: "world",
		},
	};
}

export default Category;
