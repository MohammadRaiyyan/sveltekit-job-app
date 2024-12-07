import * as auth from "$lib/server/auth";
import { fail, redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
const jobData = [
	{
		title: "Frontend Developer",
		subTitle: "Tech Innovators Inc.",
		content:
			"Join our dynamic team as a frontend developer and work on cutting-edge web applications.",
		thumbnail: "https://source.unsplash.com/random/100x100/?technology,company",
		meta: {
			workMode: "Remote",
			jobType: "Full time",
			postedAt: Date.now() - 86400000, // 1 day ago
			salary: "$70,000 - $90,000/year"
		}
	},
	{
		title: "Backend Engineer",
		subTitle: "Data Core Solutions",
		content: "We are looking for a backend engineer to build scalable APIs and services.",
		thumbnail: "https://source.unsplash.com/random/100x100/?data,company",
		meta: {
			workMode: "OnSite",
			jobType: "Contract",
			postedAt: Date.now() - 172800000, // 2 days ago
			salary: "$50/hour"
		}
	},
	{
		title: "UI/UX Designer",
		subTitle: "Creative Minds Co.",
		content: "Collaborate with product and development teams to create user-friendly designs.",
		thumbnail: "https://source.unsplash.com/random/100x100/?design,company",
		meta: {
			workMode: "Remote",
			jobType: "Part time",
			postedAt: Date.now() - 604800000, // 1 week ago
			salary: "$30/hour"
		}
	},
	{
		title: "Mobile App Developer",
		subTitle: "NextGen Apps LLC",
		content: "Develop engaging mobile applications with a focus on performance and usability.",
		thumbnail: "https://source.unsplash.com/random/100x100/?mobile,company",
		meta: {
			workMode: "OnSite",
			jobType: "Full time",
			postedAt: Date.now() - 259200000, // 3 days ago
			salary: "$75,000/year"
		}
	},
	{
		title: "DevOps Engineer",
		subTitle: "CloudSys Inc.",
		content: "Implement infrastructure as code and optimize deployment pipelines.",
		thumbnail: "https://source.unsplash.com/random/100x100/?cloud,company",
		meta: {
			workMode: "Remote",
			jobType: "Contract",
			postedAt: Date.now() - 432000000, // 5 days ago
			salary: "$60/hour"
		}
	},
	{
		title: "Data Scientist",
		subTitle: "Insightful Analytics",
		content: "Analyze large datasets and build predictive models for business insights.",
		thumbnail: "https://source.unsplash.com/random/100x100/?data,analytics,company",
		meta: {
			workMode: "Remote",
			jobType: "Full time",
			postedAt: Date.now() - 86400000 * 10, // 10 days ago
			salary: "$110,000/year"
		}
	},
	{
		title: "Cybersecurity Analyst",
		subTitle: "SecureTech",
		content: "Ensure system security and conduct regular vulnerability assessments.",
		thumbnail: "https://source.unsplash.com/random/100x100/?security,company",
		meta: {
			workMode: "OnSite",
			jobType: "Full time",
			postedAt: Date.now() - 432000000, // 5 days ago
			salary: "$95,000/year"
		}
	},
	{
		title: "Marketing Manager",
		subTitle: "GrowthSpire Ltd.",
		content: "Lead our digital marketing campaigns and grow our online presence.",
		thumbnail: "https://source.unsplash.com/random/100x100/?marketing,company",
		meta: {
			workMode: "",
			jobType: "Part time",
			postedAt: Date.now() - 604800000, // 1 week ago
			salary: "$40/hour"
		}
	},
	{
		title: "Project Manager",
		subTitle: "AgileWorks",
		content: "Manage cross-functional teams and deliver projects on time.",
		thumbnail: "https://source.unsplash.com/random/100x100/?project,management,company",
		meta: {
			workMode: "Remote",
			jobType: "Contract",
			postedAt: Date.now() - 259200000, // 3 days ago
			salary: "$90/hour"
		}
	},
	{
		title: "AI Engineer",
		subTitle: "FutureAI Solutions",
		content: "Design and deploy AI solutions for real-world problems.",
		thumbnail: "https://source.unsplash.com/random/100x100/?ai,company",
		meta: {
			workMode: "Remote",
			jobType: "Full time",
			postedAt: Date.now() - 604800000, // 1 week ago
			salary: "$120,000/year"
		}
	}
];

export const load: PageServerLoad = async (event) => {
	return {
		jobs: jobData
	};
};

export const actions: Actions = {
	logout: async (event) => {
		if (!event.locals.session) {
			return fail(401);
		}
		await auth.invalidateSession(event.locals.session.id);
		auth.deleteSessionTokenCookie(event);

		return redirect(302, "/login");
	}
};
