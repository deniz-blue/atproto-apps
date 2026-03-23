import { defineApplication, viewRecord, viewRepository, viewRoot } from '../types';

export default defineApplication({
	name: "atmo.rsvp",
	description: "discover and attend events",
	url: "https://atmo.rsvp",
	capabilities: [
		viewRoot(),
		viewRepository("https://atmo.rsvp/p/{repository}"),
		viewRecord("community.lexicon.calendar.event", "https://atmo.rsvp/p/{repository}/e/{record}"),
	],
});
