import { defineApplication, viewRepository } from "../types";

export default defineApplication({
	name: "Semble",
	description: "Social knowledge network for research",
	url: "https://semble.so",
	capabilities: [
		viewRepository("https://semble.so/profile/{repository}"),
	],
});
