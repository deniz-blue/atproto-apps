import { defineApplication, viewRepository } from "../types";

export default defineApplication({
	name: "Flushes",
	description: "",
	url: "https://flushes.app",
	capabilities: [
		viewRepository("https://flushes.app/profile/{repository}"),
	],
});
