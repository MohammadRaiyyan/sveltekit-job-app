<script lang="ts">
	import type { Snippet } from "svelte";

	import { Card } from "../ui/card";

	const { children, subtitle, title }: { title: string; subtitle: string; children: Snippet } =
		$props();
</script>

<Card class="flex min-h-[350px] flex-col items-center justify-center gap-8 px-5 py-12 text-center">
	<div>
		<h1 class="mb-4 text-3xl font-bold">{title}</h1>
		<p>{subtitle}</p>
	</div>
	<div class="flex items-center">
		{@render children()}
	</div>
</Card>
