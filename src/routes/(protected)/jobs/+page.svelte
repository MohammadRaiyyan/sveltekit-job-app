<script>
	import CardSection from "$lib/components/CardSection/card-section.svelte";
	import Hero from "$lib/components/Hero/Hero.svelte";
	import Lense from "$lib/components/icons/Lense.svelte";
	import Location from "$lib/components/icons/Location.svelte";
	import SuitCase from "$lib/components/icons/SuitCase.svelte";
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import JobCard from "$lib/components/ui/JobCard/job-card.svelte";
	const { data } = $props();
</script>

<article class="space-y-12">
	<Hero
		title="Find Your Dream Job"
		subtitle="Explore thousands of job opportunities and start your career journey today!"
	>
		<form action="">
			<div class="flex items-center gap-4">
				<div class="relative">
					<span class="absolute left-0 flex h-full items-center pl-3"><SuitCase /></span>
					<Input title="title" placeholder="Frontend Engineer" class="h-11 min-w-72 pl-9" />
				</div>
				<div class="relative">
					<span class="absolute left-0 flex h-full items-center pl-3"><Location /></span>
					<Input title="location" placeholder="e.g. San francisco" class="h-11 min-w-72 pl-9" />
				</div>
				<Button size="lg" title="Search"><Lense /></Button>
			</div>
		</form>
	</Hero>
	<CardSection title="Results for 'Frontend Engineer'">
		{#each data.jobs as job}
			<JobCard
				content={job.content}
				meta={job.meta}
				subTitle={job.subTitle}
				thumbnail={job.thumbnail}
				title={job.title}
			>
				<div class="flex w-full flex-col items-center justify-between gap-3 sm:flex-row">
					<a href="/apply/10" class="flex w-full"><Button class="flex-1">Apply Now</Button></a>
					<a href="/job-detail/10" class="flex w-full"
						><Button class="flex-1" variant="secondary">View Details</Button></a
					>
				</div>
			</JobCard>
		{/each}
	</CardSection>
</article>
