import { useState } from "react";
import { folders } from "../constants/folderStructure";

interface CategoryProps {
	currentFolderName: string;
	setCurrentFolderName: (name: string) => void;
	selectedFolder: Record<string, any>;
	setSelectedFolder: (name: string) => void;
}

export const Categories2 = ({
	currentFolderName,
	setCurrentFolderName,
	selectedFolder,
	setSelectedFolder,
}: CategoryProps) => {
	const [showDropdown, setShowDropdown] = useState("");
	const [showSubDropdown, setShowSubDropdown] = useState("");
	console.log("🐟 - Categories2 - showSubDropdown:", showSubDropdown);

	function renderOptions(folder) {
		if (folder.subCategories?.length === 0) {
			// console.log("CATEGORY LABEL: ", folder?.categoryLabel);
			return (
				<button className="bg-pink-400 px-2 text-black font-semibold text-sm">
					{folder?.categoryLabel || "-"}
				</button>
			);
		} else {
			// console.log("⭐CATEGORY WITH SUB:", folder?.categoryLabel);
			for (let x = 0; x < folder?.subCategories?.length; x++) {
				renderOptions(folder.subCategories[x]);
				// return (
				// 	<div className="bg-red-400 text-black font-semibold px-2 text-sm">
				// 		{folder.subCategories[x]?.categoryLabel || "-"}
				// 	</div>
				// );
			}

			return (
				<div>
					<button
						onClick={() => {
							if (showSubDropdown === folder?.categoryLabel) {
								setShowSubDropdown("");
							} else {
								setShowSubDropdown(folder?.path);
							}
						}}
						className="bg-orange-400 cursor-pointer px-2 text-black font-semibold text-sm"
					>
						{folder?.categoryLabel || "-"} - 🪧
					</button>

					{showSubDropdown.includes(folder?.path) &&
						folder?.subCategories.map((sc, i) => (
							<div key={i} className="bg-violet-400 p-2 z-50">
								{renderOptions(sc)}
							</div>
						))}
				</div>
			);
		}
	}

	// // REMOVE LATER
	// if (selectedFolder) {
	// 	renderOptions(selectedFolder);
	// }

	// TEST

	return (
		<div className="flex items-center gap-2" onBlur={() => setShowDropdown("")}>
			{folders?.map((folder, i) => {
				return <div key={i}>{renderOptions(folder)}</div>;
			})}
		</div>
	);
};
