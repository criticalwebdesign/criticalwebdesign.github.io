/**
 * Write a file
 */

import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
// this file & directory
const __filename = fileURLToPath(import.meta.url);
// console.log("__filename", __filename);
const __dirname = path.dirname(__filename);
// console.log("__dirname", __dirname);

// https://stackoverflow.com/a/72462507/441878
export async function writeJsonToFile(data, filepath) {
	let fullpath = path.join(__dirname, filepath);
	// console.log(fullpath);
	await fs.writeFile(fullpath, JSON.stringify(data));
}
export async function writeStringToFile(data, filepath) {
	let fullpath = path.join(__dirname, filepath);
	// console.log(fullpath, data);
	await fs.writeFile(fullpath, data);
}

import fetch from "node-fetch";
import d3 from "d3";

// Fetch and return JSON data
export async function getData(url) {
	const options = {
		// Download a resource with cache busting, to bypass the cache completely.
		cache: "no-store",
	};
	return fetch(url, options)
		.then((d) => d.text())
		.then((rows) => {
			// console.log(rows);

			// test the header row
			// console.log(d3.csvParse(rows)[0]);

			// returns multi-dimensional array, instead of object
			// console.log(d3.csvParseRows(rows));

			return d3.csvParse(rows);
		});
}
// test
// exports.getData(url);

export function cleanForUrl(str) {
	return str.trim().replace(/[^a-zA-Z0-9-._]/g, "");
}
