import { useState } from "react";
import { generateUrlStrings } from "../constants/folderStructure";

export const Home = () => {
	const [currentFolderName, setCurrentFolderName] = useState("minimal");
	const baseUrl =
		"https://raw.githubusercontent.com/magalhaesfelipe/wallpapers/refs/heads/main/minimal";

	const urls = generateUrlStrings(currentFolderName);

	console.log("🐟 - urls:", urls);

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
