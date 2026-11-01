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
    <div className="text-base1 border-b border-base1/5 px-[8.8%] py-4">
      <div className="justify-between flex items-center">
        <div className="flex items-center gap-2">
          <Icon
            icon="boxicons:image-alt"
            onClick={() => {
              if (location.pathname === "/") return;

              navigate("/");
            }}
            className="size-10 text-highlight2 cursor-pointer"
          />

          <div className="border-l border-base2/20  px-2 text-xs  text-base2/30">
            sys.v1
          </div>
        </div>

        <div>
          <div className="flex bg-bg3 items-center gap-4 border border-white/15 shadow-lg py-1 px-2.5 rounded-full ">
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
                <Icon
                  icon="akar-icons:github-fill"
                  className="cursor-pointer "
                />
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
        </div>
      </div>
    </div>
  );
};
