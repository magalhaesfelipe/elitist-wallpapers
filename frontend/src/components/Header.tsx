import { Icon } from "@iconify/react";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<div className="text-white border-b border-white/5 px-[8.8%] py-4">
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

					<div className="border-l border-white/20  px-2 text-xs  text-white/30">
						sys.v1
					</div>
				</div>

				<div>
					<div className="flex bg-bg3 items-center gap-4 border border-white/15 shadow-lg py-1 px-2.5 rounded-full">
						<div
							title="Source code"
							className="cursor-pointer rounded-full p-1.5 bg-transparent hover:bg-zinc-800 "
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
							className="cursor-pointer rounded-full p-1.5 bg-transparent hover:bg-zinc-800 "
						>
							<Icon icon="bi:info-circle" className="cursor-pointer" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
