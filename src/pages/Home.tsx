import { useEffect, useRef, useState } from "react";
import { folders, generateUrlStrings } from "../constants/folderStructure";
import { Footer } from "../components/Footer";
import { Categories2 } from "../components/Categories2";
import { Card } from "./Card";

export const Home = () => {
  const initialFolder = folders[0];
  const [currentFolderName, setCurrentFolderName] = useState("minimal");
  const [selectedFolder, setSelectedFolder] = useState(initialFolder);
  const [showSubDropdown, setShowSubDropdown] = useState<string[]>([]);
  const urls = generateUrlStrings(selectedFolder);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<"default" | "flexible">("default");

  const containerClass =
    layout === "default"
      ? "grid grid-cols-3 gap-[0.4px]"
      : "columns-3 gap-[0.5px]";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target as Node)
      ) {
        setShowSubDropdown([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setShowSubDropdown]);

  return (
    <>
      <div className="px-3 pb-10 pt-0">
        <div
          ref={categoriesRef}
          className="flex px-1.5 mb-5 py-2 flex-col border-b border-bg2 gap-1 w-full"
        >
          <Categories2
            currentFolderName={currentFolderName}
            setCurrentFolderName={setCurrentFolderName}
            selectedFolder={selectedFolder}
            setSelectedFolder={setSelectedFolder}
            showSubDropdown={showSubDropdown}
            setShowSubDropdown={setShowSubDropdown}
            layout={layout}
            setLayout={setLayout}
          />
        </div>

        <div className={containerClass}>
          {urls.map((url) => (
            <Card key={url} url={url} layout={layout} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
