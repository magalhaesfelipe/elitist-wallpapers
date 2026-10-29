import { useState } from "react";
import { folders } from "../constants/folderStructure";

interface CategoryProps {
	currentFolderName: string;
	setCurrentFolderName: (name: string) => void;
	selectedFolder: Record<string, any>;
	setSelectedFolder: (name: string) => void;
}

export const Categories = ({
	currentFolderName,
	setCurrentFolderName,
	selectedFolder,
	setSelectedFolder,
}: CategoryProps) => {
	const [showDropdown, setShowDropdown] = useState("");
	const [showSubDropdown, setShowSubDropdown] = useState("");

	function renderOptions(folder) {
		// console.log("render options called");
		if (folder.subCategories?.length === 0) {
			// return <div>{folder.categoryLabel}</div>;
			console.log("CATEGORY LABEL: ", folder?.categoryLabel);
		} else {
			console.log("⭐CATEGORY WITH SUB:", folder?.categoryLabel);
			for (let x = 0; x < folder?.subCategories?.length; x++) {
				renderOptions(folder.subCategories[x]);
			}
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
				const hasSubcategories = !folder.quantity;
				const subCategories = Object.values(folder).flatMap((sub) => sub);

				renderOptions(folder);

				return (
					<button
						key={i}
						onClick={() => {
							if (hasSubcategories) return;
							if (selectedFolder.id === folder?.id) return;

							setCurrentFolderName(folder?.categoryLabel);
							setSelectedFolder(folder);
						}}
						className="border-b pb-2 border-bg2 px-4 cursor-pointer"
					>
						<div
							onClick={() => {
								if (!hasSubcategories) return;

								if (showDropdown === folder.categoryLabel) {
									setShowDropdown("");
								} else {
									setShowDropdown(folder.categoryLabel);
								}
							}}
							className="hover:-translate-y-0.5 relative transition duration-200"
						>
							<span
								style={{
									color:
										selectedFolder.path.includes(folder?.categoryLabel) ||
										subCategories.some((s: any) =>
											selectedFolder?.path?.includes(s?.categoryLabel),
										)
											? "#fffff0"
											: "#fff6",
								}}
								className="text-sm"
							>
								{currentFolderName?.includes(folder?.categoryLabel)
									? `${String(selectedFolder?.path).replace("/", " : ")}`
									: folder?.categoryLabel}
							</span>

							{/* Dropdown for sub-categories */}
							<div
								className={`${showDropdown === folder.categoryLabel ? "visible border-2 border-bg2 translate-y-0 scale-100 opacity-100 " : "border-2 border-transparent pointer-events-none invisible translate-y-2 scale-95 opacity-0"} z-10 bg-bg transition ease-out duration-200 absolute bottom-[130%] px-4 py-2 rounded-md`}
							>
								{Object.values(folder).flatMap((sf: any, i) => {
									return (
										<div
											key={i}
											onClick={() => {
												console.log("this is the selectedFolder:", sf);
												if (!sf.quantity) {
													setShowSubDropdown(sf?.categoryLabel);
													return;
												}
												setSelectedFolder(sf);
												setCurrentFolderName(
													`${folder.categoryLabel}/${sf.categoryLabel}`,
												);
											}}
											className={`${i === 0 || i === Object.values(folder).length - 1 ? "" : "border-b border-zinc-900"} hover:text-base1  z-10 text-base2 py-px`}
										>
											{sf?.categoryLabel || ""}

											{/* Dropdown for sub-sub-categories 2 */}
											<div
												className={`${showSubDropdown === sf.categoryLabel ? "visible border-2 border-bg2 translate-y-0 scale-100 opacity-100 " : "border-2 border-transparent pointer-events-none invisible translate-y-2 scale-95 opacity-0"} z-10 bg-bg transition ease-out duration-200 absolute left-20 px-4 py-2 rounded-md`}
											>
												{sf?.subCategories?.length > 0 &&
													sf.subCategories.map((ssc, i) => (
														<div
															key={i}
															onClick={() => {
																setSelectedFolder(ssc);
																setCurrentFolderName(ssc.path);
															}}
															className={` text-red-600 ${i === 0 || i === Object.values(sf).length - 1 ? "" : "border-b border-zinc-900"} hover:text-base1  z-10 text-base2 py-px`}
														>
															{ssc?.categoryLabel || "-"}
														</div>
													))}
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</button>
				);
			})}
		</div>
	);
};
