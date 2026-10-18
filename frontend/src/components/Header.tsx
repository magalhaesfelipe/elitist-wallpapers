export const Header = () => {
	return (
		<div className=" border-b rounded-b-md flex justify-center items-center w-full ">
			<div className="w-full flex flex-col  py-31 gap-3.5 items-center">
				<div className="flex flex-col leading-tight ">
					<h1 className="text-highlight font-normal text-4xl leading-8">
						Elitist
					</h1>
					<h1 className="text-highlight font-normal text-7xl">Wallpapers</h1>
				</div>

				<span className="font-normal text-base2 text-[15px]">
					A CURATED COLLECTION OF HIGH QUALITY WALLPAPERS
				</span>
			</div>
		</div>
	);
};
