import { useLocation, useNavigate } from "react-router-dom";

export const Footer = () => {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<div className="mt-30 grid text-base2 justify-center  p-3 gap-4 grid-cols-4 h-55 border-t border-white/5 ">
			<div className="border-r h-full border-white/5 flex flex-col justify-between p-3.5 pb-4 text-[10px]">
				<span>SYSTEM ID</span>
				<ul className="text-base3">
					<option value="">ELITISTWALLPAPERS.COM ©</option>
					<option value="">ALL RIGHTS RESERVED.</option>
				</ul>
			</div>

			<div className="border-r h-full border-white/5 flex flex-col justify-between p-3.5 text-[10px]">
				<span>STACK</span>
				<ul className="text-base3">
					<option value="">REACT</option>
					<option value="">TAILWINDCSS</option>
				</ul>
			</div>

			<div className="border-r h-full border-white/5 flex flex-col justify-between p-3.5 text-[10px]">
				<span>NAVIGATION</span>

				<ul className="text-base3">
					<option
						value=""
						onClick={() => {
							if (location.pathname === "/") return;
							navigate("/");
						}}
						className="hover:text-highlight2 cursor-pointer"
					>{`→ HOME`}</option>

					<option
						value=""
						onClick={() => {
							if (location.pathname === "/about") return;
							navigate("/about");
						}}
						className="hover:text-highlight2 cursor-pointer"
					>{`→ ABOUT`}</option>

					<a
						href="https://github.com/magalhaesfelipe/elitist-wallpapers"
						target="_blank"
						rel="noopener noreferrer"
					>
						<option value="" className="hover:text-highlight2 cursor-pointer">
							{`→ GITHUB`}
						</option>
					</a>
				</ul>
			</div>

			<div className=" h-full border-white/5 flex flex-col justify-between p-3.5 text-[10px]">
				<span>ENJOYING THE PLATFORM? ^_^</span>
				<ul className="text-base3 ext-wrap">
					<option value="" className="text-wrap">
						IF YOU FIND IT USEFUL, GIVE US A ⭐ ON
						<strong className="font-bold! text-base1!">GITHUB</strong>.
					</option>
					<option value="" className="text-wrap">
						A STAR HELPS OTHERS DISCOVER THE PROJECT.
					</option>
				</ul>
			</div>
		</div>
	);
};
