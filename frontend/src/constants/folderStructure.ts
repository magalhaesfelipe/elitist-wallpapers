const baseUrl = "https://magalhaesfelipe.github.io/wallpapers";
// const baseUrl =
// 	"https://raw.githubusercontent.com/magalhaesfelipe/wallpapers/refs/heads/main";

export const folders = {
	minimal: {
		name: "minimal",
		label: "minimal",
		quantity: 23,
	},
	aiDigital: {
		name: "aiDigital",
		label: "ai-digital",
		quantity: 15,
	},
	painting: {
		name: "painting",
		label: "painting",
		quantity: 25,
	},
};

export function generateUrlStrings(folderName: keyof typeof folders) {
	const folder = folders[folderName];
	if (!folder) return console.error("Couldn't find this folder name");

	const urlStrings = Array.from(
		{ length: folder.quantity },
		(_, i) => `${baseUrl}/${folder.label}/${i + 1}.jpg`,
	);

	return urlStrings;
}
