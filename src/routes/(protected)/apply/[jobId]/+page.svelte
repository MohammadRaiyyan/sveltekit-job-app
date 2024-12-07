<script>
	import { Button } from "$lib/components/ui/button";
	import { Card, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card";
	import CardContent from "$lib/components/ui/card/card-content.svelte";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
	import Textarea from "$lib/components/ui/textarea/textarea.svelte";
</script>

<article>
	<section class="flex h-full w-full items-center justify-center">
		<Card>
			<CardHeader>
				<CardTitle>Jop Application</CardTitle>
				<CardDescription
					>Please complete all fields below to submit your application for the role
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form action="" class="space-y-4">
					<div class="grid grid-cols-2 gap-4">
						<div>
							<Label>First Name</Label>
							<Input />
						</div>
						<div>
							<Label>Last Name</Label>
							<Input />
						</div>
					</div>
					<div class="grid grid-cols-2 gap-4">
						<div>
							<Label>Email Address</Label>
							<Input />
						</div>
						<div>
							<Label>Phone Number</Label>
							<Input />
						</div>
					</div>

					<div class="grid grid-cols-2 gap-3">
						<div>
							<Label>Year of experience</Label>
							<Input />
						</div>
						<div>
							<Label>Reference Number</Label>
							<Input />
						</div>
					</div>

					<div>
						<Label>Linkedin Profile</Label>
						<Input />
					</div>
					<div>
						<Label>Portfolio</Label>
						<Input />
					</div>

					<div>
						<Label>Resume</Label>
						<Input />
					</div>
					<div>
						<Label>Motivation to apply</Label>
						<Textarea />
					</div>
					<div>
						<Button>Apply</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	</section>
</article>
