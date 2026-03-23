import { defineApplication, viewRepository, viewRoot } from "../types";

export default defineApplication({
	name: "Tangled",
	description: "The next-generation social coding platform.",
	url: "https://tangled.sh",
	capabilities: [
		viewRoot(),
		viewRepository("https://tangled.sh/{repository}"),		
	],
});
