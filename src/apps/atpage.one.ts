import { defineApplication, viewRepository } from "../types";

export default defineApplication({
	name: "ATPage",
	description: "",
	url: "https://atpage.one",
	capabilities: [
		viewRepository("https://atpage.one/{repository}"),
	],
});
