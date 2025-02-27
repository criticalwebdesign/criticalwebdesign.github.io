/**
 * Export Google Sheet as JSON
 */

import { getData, writeJsonToFile, writeStringToFile } from "./functions.js";

(async () => {
	
	// See README
	let url = `https://docs.google.com/spreadsheets/d/e/2PACX-1vR43ZSdZQ72be1xGZyBbzn5P8LyfDuImWN3OSj6T5KwRYpDAH6UUwH5v59E0g-cJvYwj3QwxTAdC3sn/pub?gid=43272653&single=true&output=csv&range=A2:J1000`;

	// get data
	let data = await getData(url);
	// console.log("rows", data);

	// clean
	data = await cleanData(data);
	// console.log("rows", Object.values(data)[1]);

	// write
	await writeJsonToFile(data, "../data.json");
	console.log(`✅ File was written with ${Object.values(data).length} props`);
})();

// Customize this function as needed
async function cleanData(data) {
	let clean = {},
		obj = {};
	// console.log(data[0]);
	for (let i = 0; i < data.length; i++) {
		// skip condition
		if (!data[i].slug || !data[i].url) continue;

		// add the props you want ...
		obj = {
			module: data[i].module || "",
			slug: data[i].slug || "",
			url: data[i].url || "",
		};
		clean[obj.slug] = obj;
	}
	return clean;
}
