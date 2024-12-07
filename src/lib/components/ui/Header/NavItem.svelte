<script lang="ts">
	import type { Snippet } from "svelte";
	import { Button } from "../button";

	const { children, path }: { children: Snippet; path: string } = $props();
</script>

<li>
	<a href={path}>
		<Button size="sm" variant="ghost" class="flex items-center gap-2">
			{@render children()}
		</Button>
	</a>
</li>
