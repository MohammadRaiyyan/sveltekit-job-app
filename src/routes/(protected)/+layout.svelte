<script lang="ts">
	import Header from "$lib/components/ui/Header/Header.svelte";
	import type { Snippet } from "svelte";
	import type { LayoutServerData } from "./$types";
	let { children, data }: { children: Snippet; data: LayoutServerData } = $props();
</script>

<Header user={data.user} />
<div class="h-[calc(100vh-48px)] overflow-auto py-5">
	<div class="container">
		{@render children()}
	</div>
</div>
