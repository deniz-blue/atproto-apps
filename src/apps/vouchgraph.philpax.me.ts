import { defineApplication, viewRepository } from "../types";

export default defineApplication({
	name: "vouchgraph",
	description: "A semi-live graph of all vouches on atvouch.dev",
	url: "https://vouchgraph.philpax.me",
	capabilities: [
		viewRepository("https://vouchgraph.philpax.me/#{repository}"),
	],
});
