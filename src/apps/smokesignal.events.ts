import { defineApplication, viewRecord, viewRepository, viewRoot } from '../types';

export default defineApplication({
	name: "Smoke Signal",
	description: "Smoke Signal is an event and RSVP management system.",
	url: "https://smokesignal.events",
	capabilities: [
		viewRoot(),
		viewRepository("https://smokesignal.events/{repository}"),
		viewRecord("community.lexicon.calendar.event", "https://smokesignal.events/{repository}/{record}"),
	],
});
