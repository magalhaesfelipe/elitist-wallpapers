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

	return (
		<div className="flex items-center gap-2">
			{Object.values(folders)?.map((folder, i) => {
				const hasSubcategories = !folder.quantity;
				const subCategories = Object.values(folder).flatMap((sub) => sub);

				return (
					<button
						key={i}
						onClick={() => {
							if (hasSubcategories) return;
							if (selectedFolder.id === folder?.id) return;

							setCurrentFolderName(folder?.name);
							setSelectedFolder(folder);
						}}
						className="border-b-2 pb-2 border-bg2 px-4 cursor-pointer"
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
										selectedFolder.id === folder.id ||
										subCategories.some(
											(sub: any) => sub?.parentID === folder.id,
										)
											? "#fffff0"
											: "#fff6",
								}}
								className="text-sm"
							>
								{currentFolderName.includes(folder?.categoryLabel)
									? `${String(currentFolderName).replace("/", " : ")}`
									: folder?.categoryLabel}
							</span>

							{/* Dropdown for sub-categories */}
							<div
								className={`${showDropdown === folder.categoryLabel ? "visible border-2 border-bg2 translate-y-0 scale-100 opacity-100 " : "border-2 border-transparent pointer-events-none invisible translate-y-2 scale-95 opacity-0"} z-10 bg-bg transition ease-out duration-200 absolute bottom-[130%] px-4 py-2 rounded-md`}
							>
								{Object.values(folder).flatMap((sf, i) => {
									return (
										<div
											key={i}
											onClick={() => {
												setSelectedFolder(sf);
												setCurrentFolderName(
													`${folder.categoryLabel}/${sf.categoryLabel}`,
												);
											}}
											className={`${i === 0 || i === Object.values(folder).length - 1 ? "" : "border-b border-zinc-900"} hover:text-base1  z-10 text-base2 py-px`}
										>
											{sf?.categoryLabel || ""}
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
