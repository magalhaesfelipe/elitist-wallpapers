import { folders } from "../constants/folderStructure";

interface CategoryProps {
	currentFolderName: string;
	setCurrentFolderName: (name: string) => void;
}

export const Categories = ({
	currentFolderName,
	setCurrentFolderName,
}: CategoryProps) => {
	return (
		<div className=" px-2 py-4 flex items-center gap-2">
			{Object.values(folders)?.map((f, i) => (
				<button
					key={i}
					onClick={() => {
						if (currentFolderName === f?.name) return;

						setCurrentFolderName(f?.name);
					}}
					style={{ color: currentFolderName === f?.name ? "#fff7c7" : "#fff6" }}
					className="border-r-2 border-bg2 px-4 "
				>
					<div className="hover:-translate-y-0.5	transition duration-200">
						{f?.name}
					</div>
				</button>
			))}
		</div>
	);
};
