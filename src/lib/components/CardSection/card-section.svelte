<script lang="ts">
	import type { Snippet } from "svelte";

	const { title, children }: { title: string; children: Snippet } = $props();
</script>

<section class="space-y-4">
	<div>
		<h3 class="text-xl font-medium">{title}</h3>
	</div>
	<div class="grid grid-cols-12 gap-3">
		{@render children()}
	</div>
</section>
