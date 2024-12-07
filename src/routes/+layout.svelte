<script lang="ts">
	import type { Snippet } from "svelte";
	import "../app.css";

	const { children }: { children: Snippet } = $props();
</script>

<main class="h-screen w-screen">
	{@render children()}
</main>
