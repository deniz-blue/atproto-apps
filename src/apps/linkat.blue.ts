import { defineApplication, viewRepository } from "../types";

export default defineApplication({
	name: "Linkat",
	description: "",
	url: "https://linkat.blue",
	capabilities: [
		viewRepository("https://linkat.blue/{repository}"),
	],
});
