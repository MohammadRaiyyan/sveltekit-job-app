<script>
	import Calander from "$lib/components/icons/Calander.svelte";
	import Cash from "$lib/components/icons/Cash.svelte";
	import Location from "$lib/components/icons/Location.svelte";
	import SuitCase from "$lib/components/icons/SuitCase.svelte";
	import { Button } from "$lib/components/ui/button";
	import { Card, CardContent } from "$lib/components/ui/card";
	import { displayTimeFormat } from "$lib/utils/displayTimeFormat";
	const meta = {
		workMode: "Remote",
		jobType: "Full time",
		postedAt: Date.now() - 86400000, // 1 day ago
		salary: "$70,000 - $90,000/year"
	};
</script>

<article>
	<section class="grid grid-cols-6 gap-6">
		<Card class="col-span-full lg:col-span-4">
			<CardContent class="space-y-4">
				<div class="mb-8 space-y-3">
					<h2 class="text-xl font-medium">Frontend Developer</h2>
					<div
						class="*: flex flex-wrap items-start gap-x-3 gap-y-1 text-sm text-muted-foreground *:flex *:items-center *:gap-1 [&_svg]:text-primary"
					>
						<span> <Location /> {meta.workMode ?? "OnSite"}</span>
						<span> <SuitCase />{meta.jobType}</span>
						<span><Calander />{displayTimeFormat(meta.postedAt)}</span>
						<span><Cash />{meta.salary}</span>
					</div>
				</div>
				<div class="space-y-3">
					<h3 class="text-lg font-medium">Job Description</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies lacus a magna
						volutpat, ac luctus arcu elementum.
					</p>
				</div>
				<div class="space-y-3">
					<h3 class="text-lg font-medium">Responsibilities</h3>
					<ul class="list-disc pl-5">
						<li>Responsible for developing web applications using Vue.js.</li>
						<li>Collaborate with the team to design UI/UX components.</li>
						<li>Ensure application functionality and optimize performance.</li>
					</ul>
				</div>
				<div class="space-y-3">
					<h3 class="text-lg font-medium">Requirements</h3>
					<ul class="list-disc pl-5">
						<li>Experience with Vue.js and Tailwind CSS.</li>
						<li>Strong understanding of JavaScript and web development.</li>
						<li>Good problem-solving skills and attention to detail.</li>
					</ul>
				</div>
				<div>
					<Button>Apply Now</Button>
				</div>
			</CardContent>
		</Card>
		<Card class="col-span-full h-max lg:col-span-2">
			<CardContent class="space-y-6">
				<div class="space-y-3">
					<h2 class="text-xl font-medium">Company Details</h2>

					<ul class="*:flex *:items-center *:gap-2">
						<li>
							<strong class="min-w-20 font-medium">Company:</strong> Tech Solutions Inc.
						</li>
						<li>
							<strong class="min-w-20 font-medium">Location:</strong> New York, USA
						</li>
						<li>
							<strong class="min-w-20 font-medium">Website:</strong>
							<a class="text-primary" href="http:// www.techsolutions.com">
								www.techsolutions.com</a
							>
						</li>
					</ul>
				</div>
				<div class="space-y-3">
					<h2 class="text-xl font-medium">Contacts</h2>

					<ul class="*:flex *:items-center *:gap-2">
						<li>
							<strong class="min-w-20 font-medium">Email:</strong> hr@techsolutions.com
						</li>

						<li>
							<strong class="min-w-20 font-medium"> Phone: </strong>+1 (555) 123-4567
						</li>
					</ul>
				</div>
			</CardContent>
		</Card>
	</section>
</article>
