import { writable } from "svelte/store";

// Change this value to false before
// production use to ensure that the
// NUI does not appear without usage
// of the appropriate events
export const visibility = writable(true);