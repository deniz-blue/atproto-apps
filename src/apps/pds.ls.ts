import { defineApplication, viewRepository, viewRecord, viewRoot } from "../types";

export default defineApplication({
	name: "PDSls",
	description: "Atmosphere Explorer",
	url: "https://pds.ls",
	capabilities: [
		viewRoot(),
		viewRepository("https://pds.ls/at://{repository}"),
		viewRecord("*", "https://pds.ls/at://{repository}/{collection}/{record}"),
	],
});
