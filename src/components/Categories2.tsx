import { folders } from "../constants/folderStructure";

interface CategoryProps {
  currentFolderName: string;
  setCurrentFolderName: (name: string) => void;
  selectedFolder: Record<string, any>;
  setSelectedFolder: (name: string) => void;
  showSubDropdown: string[];
  setShowSubDropdown: (paths: string[]) => void;
}

export const Categories2 = ({
  currentFolderName,
  setCurrentFolderName,
  selectedFolder,
  setSelectedFolder,
  showSubDropdown,
  setShowSubDropdown,
}: CategoryProps) => {
  console.log("currentFolderName", currentFolderName);
  console.log("selectedFolder ", selectedFolder);

  const togglePath = (path: string) => {
    if (showSubDropdown.includes(path)) {
      setShowSubDropdown(showSubDropdown.filter((p) => !p.startsWith(path)));
    } else {
      setShowSubDropdown([...showSubDropdown, path]);
    }
  };

  function renderOptions(folder, inDropdown = false) {
    if (folder.subCategories?.length === 0) {
      return (
        <button
          onMouseDown={() => {
            setSelectedFolder(folder);
            setCurrentFolderName(folder?.categoryLabel);
          }}
          className={`bg-bg hover:bg-bg3 hover:text-base1 flex items-center justify-center font-semibold w-full text-center px-2 rounded-sm py-1 cursor-pointer transition duration-150 text-[13px] ${
            currentFolderName === folder?.categoryLabel
              ? "text-highlight2"
              : "text-base2"
          }`}
        >
          {folder?.categoryLabel || "-"}
        </button>
      );
    } else {
      for (let x = 0; x < folder?.subCategories?.length; x++) {
        renderOptions(folder.subCategories[x]);
      }

      return (
        <div className="relative">
          <button
            onClick={() => togglePath(folder?.path)}
            className={`bg-bg hover:bg-bg3 hover:text-base1 flex relative items-center justify-center font-semibold w-full text-center px-2 rounded-sm py-1 cursor-pointer transition duration-150 text-[13px] ${
              selectedFolder?.path?.includes(folder?.categoryLabel)
                ? "text-highlight2"
                : "text-base2"
            }`}
          >
            <span
              className={`text-sm ${
                selectedFolder.path.includes(folder?.categoryLabel) ||
                folder?.subCategories?.some((s: any) =>
                  selectedFolder?.path?.includes(s?.categoryLabel),
                )
                  ? "text-base1"
                  : "text-base2"
              }`}
            >
              {inDropdown
                ? folder?.categoryLabel
                : selectedFolder?.path?.includes(folder?.path)
                  ? selectedFolder?.path?.replaceAll("/", " / ")
                  : folder?.path?.replaceAll("/", " / ")}
            </span>
          </button>

          {showSubDropdown.includes(folder?.path) && (
            <div className="bg-bg border-2 border-bg2 absolute top-full left-0 mt-1 rounded-2xl z-50 p-2 min-w-max">
              {folder?.subCategories.map((sc, i) => (
                <div key={i} className="p-2 ">
                  {renderOptions(sc, true)}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }
  }

  return (
    <div className="flex items-center gap-2">
      {folders?.map((folder, i) => {
        return <div key={i}>{renderOptions(folder, false)}</div>;
      })}
    </div>
  );
};
