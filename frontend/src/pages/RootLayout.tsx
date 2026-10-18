import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const RootLayout = () => {
	return (
		<div className="flex min-h-screen flex-col gap-1 px-[8%]">
			<Header />
			<main className="flex flex-1 flex-col">
				<Outlet />
			</main>
		</div>
	);
};
