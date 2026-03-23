import { defineApplication, viewRepository } from "../types";

export default defineApplication({
	name: "SkySpace",
	description: "",
	url: "https://skyspace.me",
	capabilities: [
		viewRepository("https://skyspace.me/?{repository}"),
	],
});
