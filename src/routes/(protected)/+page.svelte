<script lang="ts">
	import CardSection from "$lib/components/CardSection/card-section.svelte";
	import Hero from "$lib/components/Hero/Hero.svelte";
	import { Button } from "$lib/components/ui/button";
	import JobCard from "$lib/components/ui/JobCard/job-card.svelte";

	let { data } = $props();
</script>

<article class="space-y-12">
	<Hero
		title="The Ultimate Hub for Job Seekers and Employers"
		subtitle="Find Your Dream Job or Post Your Next Great Opportunity"
	>
		<div class="flex items-center gap-4">
			<Button size="lg">Find Job</Button><Button size="lg" variant="secondary">Post Job</Button>
		</div>
	</Hero>

	<CardSection title="Recent Jobs">
		{#each data.jobs as job}
			<JobCard
				content={job.content}
				meta={job.meta}
				subTitle={job.subTitle}
				thumbnail={job.thumbnail}
				title={job.title}
			>
				<div class="flex w-full items-center justify-between gap-3">
					<a href="/apply/10" class="flex w-full"><Button class="flex-1">Apply Now</Button></a>
					<a href="/job-detail/10" class="flex w-full"
						><Button class="flex-1" variant="secondary">View Details</Button></a
					>
				</div>
			</JobCard>
		{/each}
	</CardSection>

	<CardSection title="All Jobs">
		{#each data.jobs as job}
			<JobCard
				content={job.content}
				meta={job.meta}
				subTitle={job.subTitle}
				thumbnail={job.thumbnail}
				title={job.title}
			>
				<div class="flex w-full items-center justify-between gap-3">
					<Button class="flex-1">Apply Now</Button>
					<Button class="flex-1" variant="secondary">View Details</Button>
				</div>
			</JobCard>
		{/each}
	</CardSection>
</article>
