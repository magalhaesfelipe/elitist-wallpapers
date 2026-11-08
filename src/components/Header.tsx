import { Icon } from "@iconify/react";
import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [repoData, setRepoData] = useState<any>();

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  function updateTheme() {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    async function fetchRepoData() {
      try {
        const response = await fetch(
          "https://api.github.com/repos/magalhaesfelipe/elitist-wallpapers",
        );

        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }

        const data = await response.json();

        setRepoData(data);
      } catch (error) {
        console.error("Failed to fetch repository data:", error);
      }
    }

    fetchRepoData();
  }, []);

  return (
    <div className="text-base1 px-[1.7%] h-20 flex justify-between items-center ">
      <div className="flex items-center h-full gap-2">
        <Icon
          icon="boxicons:image-alt"
          onClick={() => {
            if (location.pathname === "/") return;

            navigate("/");
          }}
          className="size-13 text-highlight2 cursor-pointer"
        />

        <h1 className="flex flex-col leading-5 font-medium text-xl">
          <span>Elit</span>
          <span>Wallpapers </span>
        </h1>

        <div className=" h-full flex pb-4 items-end pl-1 text-xs  text-base2/30">
          <span className="">sys.v1</span>
        </div>
      </div>

      <div className="flex items-center p-1 ">
        <div className="border-r border-t border-bg2/95 size-7 rotate-45"></div>
        <div className="flex items-center border-bg2/95 gap-4 -ml-3.75 -mr-3.75 border-y py-1 px-7 ">
          <div
            title="Stars on Github"
            className="cursor-pointer rounded-full p-1.5 bg-transparent hover:bg-bg2"
          >
            <a
              href="https://github.com/magalhaesfelipe/elitist-wallpapers"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-0.75"
            >
              <Icon
                icon="ant-design:star-filled"
                className="cursor-pointer text-[18px]"
              />
              <span className="text-sm">{repoData?.stargazers_count}</span>
            </a>
          </div>

          <div
            title="Source code"
            className="cursor-pointer rounded-full p-1.5 bg-transparent hover:bg-bg2"
          >
            <a
              href="https://github.com/magalhaesfelipe/elitist-wallpapers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="akar-icons:github-fill" className="cursor-pointer " />
            </a>
          </div>

          <div
            title="About"
            onClick={() => {
              if (location.pathname === "/about") return;
              navigate("/about");
            }}
            className="cursor-pointer rounded-full p-1.5 bg-transparent hover:bg-bg2"
          >
            <Icon icon="bi:info-circle" className="cursor-pointer" />
          </div>

          <div
            title={theme === "dark" ? "Light theme" : "Dark theme"}
            onClick={() => updateTheme()}
            className="cursor-pointer rounded-full p-1.5 bg-transparent hover:bg-bg2"
          >
            {theme === "dark" ? (
              <Icon icon="carbon:light" className="cursor-pointer" />
            ) : (
              <Icon icon="carbon:moon" className="cursor-pointer" />
            )}
          </div>
        </div>

        <div className="border-r border-t border-bg2/95 size-7.5 rotate-45"></div>
      </div>
    </div>
  );
};
