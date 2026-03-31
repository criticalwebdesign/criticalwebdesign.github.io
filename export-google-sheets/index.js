/**
 * Export Google Sheet as JSON
 */

import { getData, writeJsonToFile, cleanForUrl } from "./functions.js";

(async () => {
	// See README
	let url = `https://docs.google.com/spreadsheets/d/e/2PACX-1vR43ZSdZQ72be1xGZyBbzn5P8LyfDuImWN3OSj6T5KwRYpDAH6UUwH5v59E0g-cJvYwj3QwxTAdC3sn/pub?gid=43272653&single=true&output=csv&range=A2:K1000`;

	// get data
	let data = await getData(url);
	// console.log("rows 🤣", data);

	// clean
	data = await cleanData(data);
	// console.log("rows 🤣", data);
	// console.log("rows", Object.values(data)[0]);

	// write
	await writeJsonToFile(data, "../data.json");
	console.log(`✅ File was written with ${Object.values(data).length} props`);
})();

// Customize this function as needed
async function cleanData(data) {
	let clean = {},
		obj = {};
	// console.log(data[2]);
	for (let i = 0; i < data.length; i++) {

		let skip = true;

		// skip conditions
		if (cleanForUrl(data[i].slug)) skip = false;
		if (data[i].page) skip = false;
		if (data[i].chapter) skip = false;
		if (data[i].title) skip = false;
		if (data[i].url) skip = false;
		if (skip) continue;

		if (i < 20)
			console.log(data[i]);


		// add the props you want ...
		obj = {
			slug: cleanForUrl(data[i].slug) || `${data[i].title}` || cleanForUrl(data[i].url) || `${data[i].chapter}-${data[i].section}-i` ,
			page: data[i].page || "",
			chapter: data[i].chapter || "",
			section: data[i].section || "",
			title: data[i].title || "",
			link: data[i].link || "",
			url: data[i].url || "",
		};
		clean[obj.slug] = obj;
	}
	return clean;
}
