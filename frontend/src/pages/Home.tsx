import { useState } from "react";
import { folders, generateUrlStrings } from "../constants/folderStructure";
import { Categories } from "../components/Categories";
import { HeaderTitle } from "../components/HeaderTitle";

export const Home = () => {
	const initialFolder = folders?.minimal;
	const [currentFolderName, setCurrentFolderName] = useState("minimal");
	const [selectedFolder, setSelectedFolder] = useState(initialFolder);
	const urls = generateUrlStrings(currentFolderName, selectedFolder);

	return (
		<>
			<HeaderTitle />
			<div className="px-3 pb-10 pt-0 ">
				<div className="flex px-1.5 py-4 flex-col gap-1 w-full    ">
					<h4 className=" text-xs font-semibold text-base2 ">Categories</h4>
					<Categories
						currentFolderName={currentFolderName}
						setCurrentFolderName={setCurrentFolderName}
						selectedFolder={selectedFolder}
						setSelectedFolder={setSelectedFolder}
					/>
				</div>

				<div className="grid grid-cols-3 gap-6">
					{urls?.map((url, i) => (
						<div
							key={i}
							className="relative hover:scale-[1.02] group transition cursor-pointer duration-300  "
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
		</>
	);
};
