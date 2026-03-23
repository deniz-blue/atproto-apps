import { defineApplication, viewRecord, viewRepository, viewRoot } from "../types";

export default defineApplication({
	name: "atmoprints",
	description: "A decentralized 3D model hosting platform built on AT Protocol. Share, discover, and download 3D printable models on the open social web.",
	url: "https://atmoprints.xyz",
	capabilities: [
		viewRoot(),
		viewRepository("https://atmoprints.xyz/profile/{repository}"),
		viewRecord("xyz.atmoprints.model", "https://atmoprints.xyz/model/{repository}/{record}"),
	],
});
