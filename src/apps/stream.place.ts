import { defineApplication, viewRepository } from "../types";

export default defineApplication({
	name: "Streamplace",
	description: "Open-source livestreaming on the AT Protocol.",
	url: "https://stream.place",
	capabilities: [
		viewRepository("https://stream.place/{repository}"),
	],
})