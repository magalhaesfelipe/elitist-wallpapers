const baseUrl = "https://magalhaesfelipe.github.io/wallpapers";

type Folder = {
	[key: string]: any;
};

export const folders: Folder = {
	minimal: {
		id: 1,
		categoryLabel: "minimal",
		quantity: 23,
	},
	aiDigital: {
		id: 2,
		categoryLabel: "ai-digital",
		quantity: 15,
	},
	painting: {
		id: 3,
		categoryLabel: "painting",
		quantity: 25,
	},
	photography: {
		id: 4,
		categoryLabel: "photography",
		architecture: {
			id: 5,
			parentID: 4,
			categoryLabel: "architecture",
			quantity: 6,
		},
		nature: {
			id: 6,
			parentID: 4,
			categoryLabel: "nature",
			quantity: 12,
		},
		city: {
			id: 7,
			parentID: 4,
			categoryLabel: "city",
			quantity: 16,
		},
		coding: {
			id: 8,
			parentID: 4,
			categoryLabel: "coding",
			quantity: 2,
		},
		interior: {
			id: 9,
			parentID: 4,
			categoryLabel: "interior",
			quantity: 6,
		},
		mountain: {
			id: 10,
			parentID: 4,
			categoryLabel: "mountain",
			quantity: 5,
		},
		road: {
			id: 11,
			parentID: 4,
			categoryLabel: "road",
			quantity: 5,
		},
		urban: {
			id: 12,
			parentID: 4,
			categoryLabel: "urban",
			quantity: 15,
		},
	},
	animeManga: {
		id: 13,
		categoryLabel: "anime-manga",
		anime: {
			id: 14,
			parentID: 13,
			categoryLabel: "anime",
			quantity: 22,
		},
		manga: {
			id: 15,
			parentID: 13,
			categoryLabel: "manga",
			quantity: 27,
		},
		evangellion: {
			id: 16,
			parentID: 13,
			categoryLabel: "evangellion",
			quantity: 15,
		},
	},
};

export function generateUrlStrings(folderName: string, selectedFolder: any) {
	console.log("🐟 - generateUrlStrings - selectedFolder:", selectedFolder);

	const urlStrings = Array.from(
		{ length: selectedFolder.quantity },
		(_, i) => `${baseUrl}/${folderName}/${i + 1}.jpg`,
	);

	return urlStrings;
}
