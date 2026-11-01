import type { Dispatch, SetStateAction } from "react";
import { Icon } from "@iconify/react";
import { folders } from "../constants/folderStructure";

export type Layout = "default" | "flexible";

interface CategoryProps {
  currentFolderName: string;
  setCurrentFolderName: (name: string) => void;
  selectedFolder: Record<string, any>;
  setSelectedFolder: (name: string) => void;
  showSubDropdown: string[];
  setShowSubDropdown: (paths: string[]) => void;
  layout: any;
  setLayout: Dispatch<SetStateAction<Layout>>;
}

export const Categories2 = ({
  currentFolderName,
  setCurrentFolderName,
  selectedFolder,
  setSelectedFolder,
  showSubDropdown,
  setShowSubDropdown,
  layout,
  setLayout,
}: CategoryProps) => {
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
    <div className="flex items-center gap-2 relative">
      {folders?.map((folder, i) => {
        return <div key={i}>{renderOptions(folder, false)}</div>;
      })}

      <div className="absolute -top-12 gap-3 bg-amber400 right-0 flex justify-center">
        <button
          onClick={() => {
            if (layout === "default") return;
            setLayout("default");
          }}
          className={`${layout === "default" ? "text-highlight hover:text-highlight2" : "text-base2 hover:text-highlight2"} p-1.5 transition duration-150 cursor-pointer rounded-md border flex items-center justify-center`}
        >
          <Icon icon="bi:grid-3x3-gap-fill" className="text-lg size-3" />
        </button>

        <button
          onClick={() => {
            if (layout === "flexible") return;
            setLayout("flexible");
          }}
          className={`${layout === "flexible" ? "text-highlight hover:text-highlight2" : "text-base2 hover:text-highlight2"} p-1.5 transition duration-150 cursor-pointer rounded-md border flex items-center justify-center`}
        >
          <Icon icon="andrsrxn:grid-random" className="text-lg size-3" />
        </button>
      </div>
    </div>
  );
};
