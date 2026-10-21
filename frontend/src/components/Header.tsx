import { Icon } from "@iconify/react";

export const Header = () => {
	return (
		<div className="text-white border-b border-white/5 px-[8.8%] py-4">
			<div className="justify-between flex items-center">
				<div className="flex items-center gap-2">
					<Icon icon="boxicons:image-alt" className="size-10 text-highlight2" />

					<div className="border-l border-white/15  px-2 text-xs  text-white/25">
						sys.v1
					</div>
				</div>

				<div>
					<div className="flex bg-bg3 items-center gap-4 border border-white/15 shadow-lg py-1 px-2.5 rounded-full">
						<div
							title="Source code"
							className="cursor-pointer rounded-full p-1.5 bg-transparent hover:bg-zinc-800 "
						>
							<Icon icon="akar-icons:github-fill" className="cursor-pointer " />
						</div>
						<div
							title="About"
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
