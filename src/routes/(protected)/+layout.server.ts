import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "../$types";

export const load: LayoutServerLoad = async (event) => {
	if (!event.locals.user && event.url.pathname !== "/login") {
		console.log("event", event);
		return redirect(302, "/login");
	}
	return { user: event.locals.user };
};
