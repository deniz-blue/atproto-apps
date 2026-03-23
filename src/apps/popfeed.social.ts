import { defineApplication, viewRepository } from "../types";

export default defineApplication({
	name: "Popfeed",
	description: "A social media platform for sharing and discovering content.",
	url: "https://popfeed.social",
	capabilities: [
		viewRepository("https://popfeed.social/profile/{repository}")
	],
});
