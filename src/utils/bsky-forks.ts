import { Application, defineApplication, viewRecord, viewRepository, viewRoot } from "../types";

export const defineBlueSkyFork = (meta: Pick<Application, "name" | "description" | "url">) => {
	return defineApplication({
		...meta,
		capabilities: [
			viewRoot(),
			viewRepository(`${meta.url}/profile/{repository}`),
			viewRecord("app.bsky.feed.post", `${meta.url}/profile/{repository}/post/{record}`),
			viewRecord("app.bsky.graph.list", `${meta.url}/profile/{repository}/lists/{record}`),
		],
	});
};
