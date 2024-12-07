<script lang="ts">
	import Home from "$lib/components/icons/Home.svelte";
	import Jobs from "$lib/components/icons/Jobs.svelte";
	import PostJobs from "$lib/components/icons/PostJobs.svelte";
	import User from "$lib/components/icons/User.svelte";
	import type { LayoutServerData } from "../../../../routes/$types";
	import { Button } from "../button";
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuGroup,
		DropdownMenuItem,
		DropdownMenuSeparator,
		DropdownMenuTrigger
	} from "../dropdown-menu";
	import DropdownMenuGroupHeading from "../dropdown-menu/dropdown-menu-group-heading.svelte";
	import NavItem from "./NavItem.svelte";

	const { user }: { user: LayoutServerData["user"] } = $props();
	console.log("user", user);
</script>

<header class=" flex h-12 items-center border-b bg-card">
	<nav class="container flex w-full items-center justify-between gap-4">
		<div class="text-xl font-semibold">
			<a href="/">JOBSY</a>
		</div>
		<ul class="flex items-center gap-3 text-base">
			{#if !user}
				<NavItem path="/login">
					<Home />
					<span>Signin</span>
				</NavItem>
			{:else}
				<NavItem path="/">
					<Home />
					<span>Home</span>
				</NavItem>
				<NavItem path="/jobs">
					<Jobs />
					<span>Jobs</span>
				</NavItem>
				<NavItem path="/post-job">
					<PostJobs />
					<span>Post Jobs</span>
				</NavItem>
				<li>
					<DropdownMenu>
						<DropdownMenuTrigger class="flex items-center">
							<Button variant="outline" class="size-9 rounded-full ">
								<User />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent class=" w-56">
							<DropdownMenuGroup class="h-16  bg-secondary ">
								<DropdownMenuGroupHeading class="px-4 text-lg font-semibold">
									Hi, {user.username}!
									<p class=" text-sm font-normal text-muted-foreground">inforaiyyan@gmail.com</p>
								</DropdownMenuGroupHeading>
							</DropdownMenuGroup>
							<div class="p-2">
								<a href="/account">
									<DropdownMenuItem>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
												d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"
											/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /></svg
										>Account
									</DropdownMenuItem>
								</a>
								<DropdownMenuSeparator />
								<a href="/logout" data-sveltekit-preload-data={false}>
									<DropdownMenuItem>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
												d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
											/><path d="M9 12h12l-3 -3" /><path d="M18 15l3 -3" /></svg
										>
										Logout
									</DropdownMenuItem>
								</a>
							</div>
						</DropdownMenuContent>
					</DropdownMenu>
				</li>
			{/if}
		</ul>
	</nav>
</header>
