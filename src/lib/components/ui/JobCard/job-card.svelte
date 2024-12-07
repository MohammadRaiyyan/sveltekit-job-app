<script lang="ts">
	import Calander from "$lib/components/icons/Calander.svelte";
	import Cash from "$lib/components/icons/Cash.svelte";
	import Location from "$lib/components/icons/Location.svelte";
	import SuitCase from "$lib/components/icons/SuitCase.svelte";
	import { displayTimeFormat } from "$lib/utils/displayTimeFormat";
	import type { Snippet } from "svelte";
	import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../card";
	type Meta = {
		workMode: "Remote" | "OnSite" | "";
		jobType: "Full time" | "Contract" | "Internship" | "Part time";
		postedAt: number;
		salary: string;
	};
	const {
		content,
		children,
		subTitle,
		title,
		thumbnail,
		meta
	}: {
		title: string;
		subTitle: string;
		content: string;
		thumbnail: string;
		meta: Meta;
		children: Snippet;
	} = $props();
</script>

<Card class="col-span-full sm:col-span-2 md:col-span-6 lg:col-span-4 xl:col-span-3">
	<CardHeader class="flex flex-row items-start gap-4 space-y-0">
		<div class="size-14 rounded border">
			<img
				class="h-full w-full text-sm"
				src={`https://placeholder.co/100x100?text=${subTitle}`}
				alt={`${title} logo`}
			/>
		</div>
		<div class="flex flex-col items-start">
			<CardTitle class="text-lg">{title}</CardTitle>
			<CardDescription>{subTitle}</CardDescription>
		</div>
	</CardHeader>
	<CardContent class="flex min-h-[188px] flex-col gap-4">
		<div
			class="*: flex flex-wrap items-start gap-x-3 gap-y-1 text-sm text-muted-foreground *:flex *:items-center *:gap-1 [&_svg]:text-primary"
		>
			<span> <Location /> {meta.workMode ?? "OnSite"}</span>
			<span> <SuitCase />{meta.jobType}</span>
			<span><Calander />{displayTimeFormat(meta.postedAt)}</span>
			<span><Cash />{meta.salary}</span>
		</div>
		<div class="line-clamp-3">{content}</div>
	</CardContent>
	<CardFooter>
		{@render children()}
	</CardFooter>
</Card>
