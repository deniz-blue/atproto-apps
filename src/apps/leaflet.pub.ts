import { defineApplication, viewRepository } from "../types";

export default defineApplication({
	name: "Leaflet",
	description: "Read and publish on the Atmosphere",
	url: "https://leaflet.pub",
	capabilities: [
		viewRepository("https://leaflet.pub/p/{repository}"),
	],
});
