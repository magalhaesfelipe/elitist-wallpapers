const baseUrl = "https://magalhaesfelipe.github.io/wallpapers";

type Folder = {
	[key: string]: any;
};

export const folders: Folder = {
	minimal: {
		id: 1,
		categoryLabel: "minimal",
		quantity: 23,
		path: "minimal",
	},
	aiDigital: {
		id: 2,
		categoryLabel: "ai-digital",
		quantity: 15,
		path: "ai-digital",
	},
	painting: {
		id: 3,
		categoryLabel: "painting",
		quantity: 25,
		path: "painting",
	},
	photography: {
		id: 4,
		categoryLabel: "photography",
		path: "photography",
		architecture: {
			id: 5,
			parentID: 4,
			categoryLabel: "architecture",
			path: "photography/architecture",
			quantity: 6,
		},
		nature: {
			id: 6,
			parentID: 4,
			categoryLabel: "nature",
			path: "photography/nature",
			quantity: 12,
		},
		city: {
			id: 7,
			parentID: 4,
			categoryLabel: "city",
			path: "photography/city",
			quantity: 16,
		},
		coding: {
			id: 8,
			parentID: 4,
			categoryLabel: "coding",
			path: "photography/coding",
			quantity: 2,
		},
		interior: {
			id: 9,
			parentID: 4,
			categoryLabel: "interior",
			path: "photography/interior",
			quantity: 6,
		},
		mountain: {
			id: 10,
			parentID: 4,
			categoryLabel: "mountain",
			path: "photography/mountain",
			quantity: 5,
		},
		road: {
			id: 11,
			parentID: 4,
			categoryLabel: "road",
			path: "photography/road",
			quantity: 5,
		},
		urban: {
			id: 12,
			parentID: 4,
			categoryLabel: "urban",
			path: "photography/urban",
			quantity: 15,
		},
		japan: {
			id: 17,
			parentID: 4,
			categoryLabel: "Japan",
			path: "photography/japan",
			nature: {
				id: 18,
				parentID: 17,
				categoryLabel: "nature",
				path: "photography/japan/nature",
				quantity: 7,
			},
		},
	},
	animeManga: {
		id: 13,
		categoryLabel: "anime-manga",
		path: "anime-manga",
		anime: {
			id: 14,
			parentID: 13,
			categoryLabel: "anime",
			path: "anime-manga/anime",
			quantity: 22,
		},
		manga: {
			id: 15,
			parentID: 13,
			categoryLabel: "manga",
			path: "anime-manga/manga",
			quantity: 27,
		},
		evangellion: {
			id: 16,
			parentID: 13,
			categoryLabel: "evangellion",
			path: "anime-manga/evangellion",
			quantity: 15,
		},
	},
  abstract: {
    id: 19,
    categoryLabel: "abstract",
    path: "abstract",
    quantity: 6
  },
  cyber: {
    id: 20,
    categoryLabel: "cyber",
    path: "cyber",
    quantity: 15
  }
};

export function generateUrlStrings(folderName: string, selectedFolder: any) {
	const urlStrings = Array.from(
		{ length: selectedFolder?.quantity },
		(_, i) => `${baseUrl}/${folderName}/${i + 1}.jpg`,
	);

	return urlStrings;
}
