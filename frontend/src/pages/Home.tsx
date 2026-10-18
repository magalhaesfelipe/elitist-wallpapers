// import axios from "axios";

import { generateUrlStrings } from "../constants/folderStructure";

export const Home = () => {
	const baseUrl =
		"https://raw.githubusercontent.com/magalhaesfelipe/wallpapers/refs/heads/main/minimal";
	const urls = generateUrlStrings("minimal");
	console.log("🐟 - urls:", urls);
	// const baseUrl = 'https://raw.githubusercontent.com/magalhaesfelipe/wallpapers/refs/heads/main/';
	// async function fetchImage() {
	// 	const res = await axios("https://raw.githubusercontent.com/magalhaesfelipe/wallpapers/refs/heads/main/organize/ai-digital/pale-girl-field.png");
	// }

	return (
		<div className="px-3 py-10 ">
			<div className="grid grid-cols-3 gap-6">
				{urls?.map((item, i) => (
					<div key={i} className="">
						<img
							src={`${baseUrl}/${item}.png`}
							alt=""
							className="w-full h-full object-cover rounded-2xl"
						/>
					</div>
				))}
			</div>
		</div>
	);
};
