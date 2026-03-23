import { defineApplication, viewRepository } from "../types";

export default defineApplication({
	name: "Keytrace",
	description: "",
	url: "https://keytrace.dev",
	capabilities: [
		viewRepository("https://keytrace.dev/{repository}"),
	],
});
