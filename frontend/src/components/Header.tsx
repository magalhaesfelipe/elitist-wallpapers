import { Icon } from "@iconify/react";

export const Header = () => {
	return (
		<div className="text-white border-b border-white/5 px-[5%] py-5.5">
			<div className="justify-between flex items-center">
				{/* <h3>Ellitis Wallpapers</h3> */}
				<div className="size-15">
					<img src="/logo.svg" alt="" />
				</div>
				<div>
					<div className="flex bg-bg3 items-center  gap-4 border border-white/15 shadow-lg py-2.5 px-3 rounded-full">
						<Icon icon="akar-icons:github-fill" className="cursor-pointer" />
						<Icon icon="bi:info-circle" className="cursor-pointer" />
					</div>
				</div>
			</div>
		</div>
	);
};
