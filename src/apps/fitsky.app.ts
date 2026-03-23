import { defineApplication, viewRepository } from "../types";

export default defineApplication({
	name: "FitSky",
	description: "FitSky — Share your progress, not your data.",
	url: "https://fitsky.app",
	capabilities: [
		viewRepository("https://fitsky.app/profile/{repository}"),
	],
});
