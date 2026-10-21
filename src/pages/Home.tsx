import { useState } from "react";
import { folders, generateUrlStrings } from "../constants/folderStructure";
import { Categories } from "../components/Categories";
import { HeaderTitle } from "../components/HeaderTitle";
import { Icon } from "@iconify/react";
import { Footer } from "../components/Footer";

export const Home = () => {
	const initialFolder = folders?.minimal;
	const [currentFolderName, setCurrentFolderName] = useState("minimal");
	const [selectedFolder, setSelectedFolder] = useState(initialFolder);
	const urls = generateUrlStrings(currentFolderName, selectedFolder);

	async function downloadImage(imageUrl, fileName = "wallpaper.jpg") {
		try {
			// Fetch image data
			const response = await fetch(imageUrl);
			if (!response.ok) throw new Error("Network response was not ok.");

			// Convert response to a blob (Binary Large Object)
			const blob = await response.blob();

			// Create a temporary local URL for the blob
			const objectURL = URL.createObjectURL(blob);

			// Createa hidden <a> element
			const anchor = document.createElement("a");
			anchor.style.display = "none";
			anchor.href = objectURL;
			anchor.download = fileName;

			// Append to DOM, trigger click, and clean up
			document.body.appendChild(anchor);
			anchor.click();

			// Cleanup temporary resources
			document.body.removeChild(anchor);
			URL.revokeObjectURL(objectURL);
		} catch (error) {
			console.error("Image download failed:", error);
		}
	}

	return (
		<>
			<HeaderTitle />
			<div className="px-3 pb-10 pt-0 ">
				<div className="flex px-1.5 pb-4 py-2 flex-col gap-1 w-full">
					<h4 className=" text-[9px]   text-base2">CATEGORIES</h4>
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

							<div className="absolute inset-0  items-end p-4  flex group-hover:opacity-100 opacity-0 bg-transparent">
								<button
									onClick={() => downloadImage(url)}
									className="bg-bg  hover:scale-105  cursor-pointer hover:text-highlight2 transition duration-200  rounded-full flex items-center justify-center p-2 text-white"
								>
									<Icon icon="akar-icons:download" className="size-4.5 " />
								</button>
							</div>
						</div>
					))}
				</div>
			</div>

			<Footer />
		</>
	);
};
