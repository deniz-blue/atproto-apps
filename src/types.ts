export type CollectionFilter = "*" | (string & {}) | string[];

export type Capability = {
	type: "root";
} | {
	type: "repository";
	url: string;
} | {
	type: "collection" | "record";
	collections: CollectionFilter;
	url: string;
};

export interface Application {
	name: string;
	description: string;
	url: string;
	capabilities?: Capability[];
};

export const defineApplication = (app: Application) => app;

export const viewRoot = (): Capability => ({ type: "root" });

export const viewRepository = (url: string): Capability => ({
	type: "repository",
	url,
});

export const viewRecord = (collections: CollectionFilter, url: string): Capability => ({
	type: "record",
	url,
	collections,
});
