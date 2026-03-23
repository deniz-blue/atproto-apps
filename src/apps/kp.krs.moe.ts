import { defineApplication, viewRecord, viewRepository } from "../types";

export default defineApplication({
	name: "kp.krs.moe",
	description: "Share code and text snippets with syntax highlighting, paste management, and easy sharing. Built on ATProto.",
	url: "https://kp.krs.moe",
	capabilities: [
		viewRepository("https://kp.krs.moe/#/pastes/{repository}"),
		viewRecord("moe.karashiiro.kpaste.paste", "https://kp.krs.moe/#/p/{repository}/{record}"),
	],
});
