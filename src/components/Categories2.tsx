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
  console.log("currentFolderName", currentFolderName);

  function renderOptions(folder) {
    if (folder.subCategories?.length === 0) {
      // console.log("CATEGORY LABEL: ", folder?.categoryLabel);
      return (
        <button
          onClick={() => {
            setSelectedFolder(folder);
            setCurrentFolderName(folder?.categoryLabel);
          }}
          style={{
            color:
              currentFolderName === folder?.categoryLabel ? "#f0dda4" : "#fff6",
          }}
          className="border-b-2 border-bg2 font-semibold w-full text-center  hover:text-base1 px-2 pb-1 cursor-pointer transition duration-150 text-[13px]"
        >
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
            style={{
              color:
                currentFolderName === folder?.categoryLabel
                  ? "#f0dda4"
                  : "#fff6",
            }}
            className="border-b-2 border-bg2 text-center font-semibold hover:text-base1 px-2 pb-1 cursor-pointer transition duration-150 text-[13px]"
          >
            {folder?.categoryLabel || "-"} - 🪧
          </button>

          {showSubDropdown.includes(folder?.path) && (
            <div className="bg-bg border-2 border-bg2 rounded-2xl z-50 p-2">
              {folder?.subCategories.map((sc, i) => (
                <div key={i} className="p-2 ">
                  {renderOptions(sc)}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }
  }

  return (
    <div className="flex items-center gap-2" onBlur={() => setShowDropdown("")}>
      {folders?.map((folder, i) => {
        return <div key={i}>{renderOptions(folder)}</div>;
      })}
    </div>
  );
};
