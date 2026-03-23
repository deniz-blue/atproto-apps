import { defineApplication, viewRepository } from "../types";

export default defineApplication({
	name: "Stargraph",
	description: "Stargraph automatically maps Atmosphere profiles together. Find your friends and share your presence in one link.",
	url: "https://stargraph.link",
	capabilities: [
		viewRepository("https://stargraph.link/user/{repository}"),
	],
});
