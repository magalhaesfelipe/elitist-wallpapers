export const folders = {
	minimal: {
		name: "minimal",
		size: 23,
	},
};

export function generateUrlStrings(folderName: keyof typeof folders) {
	const folder = folders[folderName];
	if (!folder) return console.error("Couldn't find this folder name");

	const urlStrings = Array.from(
		{ length: folder.size },
		(_, i) => `${folder.name}-${i + 1}`,
	);

	return urlStrings;
}
