import { useState } from "react";
import { generateUrlStrings } from "../constants/folderStructure";
import { Categories } from "../components/Categories";

export const Home = () => {
	const [currentFolderName, setCurrentFolderName] = useState("minimal");
	const urls = generateUrlStrings(currentFolderName);

	return (
		<div className="px-3 pb-10 pt-0 ">
			<Categories
				currentFolderName={currentFolderName}
				setCurrentFolderName={setCurrentFolderName}
			/>
			<div className="grid grid-cols-3 gap-6">
				{urls?.map((url, i) => (
					<div
						key={i}
						className="relative hover:scale-[1.02]   group transition duration-300  "
					>
						<div
							style={{
								background:
									"linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.2) 100%)",
								willChange: "opacity",
							}}
							className="
						absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 sm:group-hover:opacity-100
						"
						></div>
						<img
							src={url}
							alt=""
							className="w-full hover:border-white/20 border-2  border-transparent h-full group-hover:border-white/20 object-cover rounded-2xl "
						/>
					</div>
				))}
			</div>
		</div>
	);
};
