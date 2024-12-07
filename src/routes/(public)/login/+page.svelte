<script lang="ts">
	import { enhance } from "$app/forms";
	import { Button } from "$lib/components/ui/button";
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from "$lib/components/ui/card";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
	import type { ActionData } from "./$types";

	let { form }: { form: ActionData } = $props();
</script>

<Card class="w-full max-w-96">
	<CardHeader class="text-center">
		<div class="mb-8">
			<h2 class="text-xl font-semibold">JOBSY</h2>
		</div>
		<CardTitle>Access Your Account</CardTitle>
		<CardDescription>Login or Register to continue</CardDescription>
		<p style="color: red">{form?.message ?? ""}</p>
	</CardHeader>
	<CardContent>
		<form method="post" action="?/login" use:enhance>
			<div class="grid gap-4">
				<div>
					<Label for="username">Username</Label>
					<Input id="username" name="username" />
				</div>

				<div>
					<Label for="password">Password</Label>
					<Input id="password" type="password" name="password" />
				</div>
				<Button type="submit" class="w-full">Login</Button>
				<Button class="w-full" type="submit" variant="secondary" formaction="?/register"
					>Register</Button
				>
				<div class="text-center text-sm">
					Forgot Password?
					<a href="/forgot-password" class="underline">Reset</a>
				</div>
			</div>
		</form>
	</CardContent>
</Card>
