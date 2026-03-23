import { defineApplication, viewRepository } from "../types";

export default defineApplication({
	name: "Woosh",
	description: "",
	url: "https://woosh.link",
	capabilities: [
		viewRepository("https://woosh.link/{repository}"),
	],
});
