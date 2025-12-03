<script>
	import '../../app.css';
	import Container from '../../components/Container.svelte';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import RSContent from './RSContent.svelte';
	import ROSContent from './ROSContent.svelte';
</script>

<Container class="py-20">
	<p class="pb-8 text-3xl font-medium">Product Case Studies</p>

	<div class="w-full space-y-10 pt-10">
		<div class="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-5">
			<div class="col-span-2">
				<img
					src="/images/ROS-thumb.jpg"
					alt="Recording Studio"
					class="h-full w-full rounded-lg object-cover"
				/>
			</div>
			<div class="col-span-3 space-y-4">
				<div class="space-y-2">
					<h2 class="text-3xl">Live Run of Show</h2>
					<div class="flex gap-2">
						<Badge variant="secondary">Product</Badge>
						<Badge variant="secondary">UX/UI</Badge>
						<Badge variant="secondary">Development</Badge>
					</div>
				</div>

				<p class="text-base text-gray-700">
					Bringing clarity, control, and confidence back to live event production by consolidating
					workflows, eliminating tool-hopping, and streamlining complex sessions for producers.
				</p>
				<div class="">
					<Drawer.Root>
						<Drawer.Trigger><Button variant="brand">View Case Study</Button></Drawer.Trigger>
						<Drawer.Content>
							<ROSContent />
							<Drawer.Footer>
								<Drawer.Close>Close</Drawer.Close>
							</Drawer.Footer>
						</Drawer.Content>
					</Drawer.Root>
				</div>
			</div>
		</div>
		<div class="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-5">
			<div class="col-span-2">
				<img
					src="/images/RS-cover.jpg"
					alt="Recording Studio"
					class="h-full w-full rounded-lg object-cover"
				/>
			</div>
			<div class="col-span-3 space-y-4">
				<div class="space-y-2">
					<h2 class="text-3xl">Recording Studio</h2>
					<div class="flex gap-2">
						<Badge variant="secondary">Product</Badge>
						<Badge variant="secondary">UX/UI</Badge>
						<Badge variant="secondary">Development</Badge>
					</div>
				</div>
				<p class="text-base text-gray-700">
					Helping marketers create polished, reusable content with ease by simplifying planning,
					recording, and repurposing—all within the same platform.
				</p>
				<div class="">
					<Drawer.Root>
						<Drawer.Trigger><Button variant="brand">View Case Study</Button></Drawer.Trigger>
						<Drawer.Content>
							<RSContent />
							<Drawer.Footer>
								<Drawer.Close>Close</Drawer.Close>
							</Drawer.Footer>
						</Drawer.Content>
					</Drawer.Root>
				</div>
			</div>
		</div>
	</div>
</Container>
