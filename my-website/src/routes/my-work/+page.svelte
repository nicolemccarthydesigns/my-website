<script>
	import '../../app.css';
	import Container from '../../components/Container.svelte';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import RSContent from './RSContent.svelte';
	import ROSContent from './ROSContent.svelte';
	import { IconChevronRight } from '@tabler/icons-svelte';
	import EmailMarketing from './EmailMarketing.svelte';
	import DirectMail from './DirectMail.svelte';
	import OnlineDisplay from './OnlineDisplay.svelte';
	import KateBrower from './KateBrower.svelte';
	import PaulBrandus from './PaulBrandus.svelte';
	import StudioLilum from './StudioLilum.svelte';
</script>

<Container class="py-20">
	<p class="pb-8 text-3xl font-medium">My Work</p>
	<Tabs.Root value="product">
		<Tabs.List>
			<Tabs.Trigger value="product">Product</Tabs.Trigger>
			<Tabs.Trigger value="marketing">Marketing</Tabs.Trigger>
			<Tabs.Trigger value="web">Web Design</Tabs.Trigger>
			<Tabs.Trigger value="brand">Brand</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="product" class="w-full space-y-10 pt-10">
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
		</Tabs.Content>
		<Tabs.Content value="marketing" class="w-full pt-10">
			<div class="grid w-full grid-cols-1 items-start gap-10 md:grid-cols-3">
				<div>
					<Drawer.Root>
						<Drawer.Trigger
							><div class="group relative cursor-pointer overflow-hidden rounded-lg">
								<img
									src="/images/email/email-thumb.jpg"
									alt="Run of Show"
									class="h-full w-full rounded-lg object-cover transition duration-300 group-hover:scale-105"
								/>
								<div
									class="absolute inset-0 bg-[#e2655c]/50 opacity-0 transition duration-300 group-hover:opacity-100"
								>
									<div class="flex h-full items-center justify-center">
										<Button variant="outline" size="icon" class="size-8"
											><IconChevronRight stroke={2} /></Button
										>
									</div>
								</div>
							</div></Drawer.Trigger
						>
						<Drawer.Content>
							<Drawer.Header>
								<Drawer.Title>Email Marketing</Drawer.Title>
								<Drawer.Description
									><div class="flex flex-wrap items-center gap-2">
										<Badge variant="secondary">Marketing</Badge>
										<Badge variant="secondary">Email Design</Badge>
										<Badge variant="secondary">Development</Badge>
										<Badge variant="secondary">Content Strategy</Badge>
									</div></Drawer.Description
								>
							</Drawer.Header>
							<EmailMarketing />
							<Drawer.Footer>
								<Drawer.Close>Close</Drawer.Close>
							</Drawer.Footer>
						</Drawer.Content>
					</Drawer.Root>
					<div class="mt-2 flex-col items-center justify-center space-y-2">
						<h2 class="mt-3 text-center text-xl">Email Marketing</h2>
						<div class="flex flex-wrap items-center justify-center gap-2">
							<Badge variant="secondary">Marketing</Badge>
							<Badge variant="secondary">Email Design</Badge>
							<Badge variant="secondary">Development</Badge>
							<Badge variant="secondary">Content Strategy</Badge>
						</div>
					</div>
				</div>
				<div>
					<Drawer.Root>
						<Drawer.Trigger
							><div class="group relative cursor-pointer overflow-hidden rounded-lg">
								<img
									src="/images/print/LIM-print-thumb.jpg"
									alt="Run of Show"
									class="h-full w-full rounded-lg object-cover transition duration-300 group-hover:scale-105"
								/>
								<div
									class="absolute inset-0 bg-[#e2655c]/50 opacity-0 transition duration-300 group-hover:opacity-100"
								>
									<div class="flex h-full items-center justify-center">
										<Button variant="outline" size="icon" class="size-8"
											><IconChevronRight stroke={2} /></Button
										>
									</div>
								</div>
							</div></Drawer.Trigger
						>
						<Drawer.Content>
							<Drawer.Header>
								<Drawer.Title>Direct Mail</Drawer.Title>
								<Drawer.Description
									><div class="flex flex-wrap items-center gap-2">
										<Badge variant="secondary">Direct Mail Design</Badge>
										<Badge variant="secondary">Typography</Badge>
										<Badge variant="secondary">Print Production</Badge>
									</div></Drawer.Description
								>
							</Drawer.Header>
							<DirectMail />
							<Drawer.Footer>
								<Drawer.Close>Close</Drawer.Close>
							</Drawer.Footer>
						</Drawer.Content>
					</Drawer.Root>
					<div class="mt-2 flex-col items-center justify-center space-y-2">
						<h2 class="mt-3 text-center text-xl">Direct Mail</h2>
						<div class="flex flex-wrap items-center justify-center gap-2">
							<Badge variant="secondary">Direct Mail Design</Badge>
							<Badge variant="secondary">Typography</Badge>
							<Badge variant="secondary">Print Production</Badge>
						</div>
					</div>
				</div>
				<div>
					<Drawer.Root>
						<Drawer.Trigger
							><div class="group relative cursor-pointer overflow-hidden rounded-lg">
								<img
									src="/images/online-ad-thumb.jpg"
									alt="Run of Show"
									class="h-full w-full rounded-lg object-cover transition duration-300 group-hover:scale-105"
								/>
								<div
									class="absolute inset-0 bg-[#e2655c]/50 opacity-0 transition duration-300 group-hover:opacity-100"
								>
									<div class="flex h-full items-center justify-center">
										<Button variant="outline" size="icon" class="size-8"
											><IconChevronRight stroke={2} /></Button
										>
									</div>
								</div>
							</div></Drawer.Trigger
						>
						<Drawer.Content>
							<Drawer.Header>
								<Drawer.Title>Socials & Online Display</Drawer.Title>
								<Drawer.Description
									><div class="flex flex-wrap items-center gap-2">
										<Badge variant="secondary">Digital Advertising</Badge>
										<Badge variant="secondary">Social Media</Badge>
										<Badge variant="secondary">Display Advertising</Badge>
									</div></Drawer.Description
								>
							</Drawer.Header>
							<OnlineDisplay />
							<Drawer.Footer>
								<Drawer.Close>Close</Drawer.Close>
							</Drawer.Footer>
						</Drawer.Content>
					</Drawer.Root>
					<div class="mt-2 flex-col items-center justify-center space-y-2">
						<h2 class="mt-3 text-center text-xl">Socials & Online Display</h2>
						<div class="flex flex-wrap items-center justify-center gap-2">
							<Badge variant="secondary">Digital Advertising</Badge>
							<Badge variant="secondary">Social Media</Badge>
							<Badge variant="secondary">Display Advertising</Badge>
						</div>
					</div>
				</div>
			</div>
		</Tabs.Content>
		<Tabs.Content value="web" class="w-full pt-10">
			<div class="grid w-full grid-cols-1 items-start gap-10 md:grid-cols-3">
				<!-- Kate -->
				<div>
					<Drawer.Root>
						<Drawer.Trigger
							><div class="group relative cursor-pointer overflow-hidden rounded-lg">
								<img
									src="/images/web/KB-thumb.jpg"
									alt="Kate Brower Site"
									class="h-full w-full rounded-lg object-cover transition duration-300 group-hover:scale-105"
								/>
								<div
									class="absolute inset-0 bg-[#e2655c]/50 opacity-0 transition duration-300 group-hover:opacity-100"
								>
									<div class="flex h-full items-center justify-center">
										<Button variant="outline" size="icon" class="size-8"
											><IconChevronRight stroke={2} /></Button
										>
									</div>
								</div>
							</div></Drawer.Trigger
						>
						<Drawer.Content>
							<KateBrower />
							<Drawer.Footer>
								<Drawer.Close>Close</Drawer.Close>
							</Drawer.Footer>
						</Drawer.Content>
					</Drawer.Root>
					<div class="mt-2 flex-col items-center justify-center space-y-2">
						<h2 class="mt-3 text-center text-xl">Kate Andersen Brower</h2>
						<div class="flex flex-wrap items-center justify-center gap-2">
							<Badge variant="secondary">Web Design</Badge>
							<Badge variant="secondary">Content Strategy</Badge>
							<Badge variant="secondary">Brand Development</Badge>
							<Badge variant="secondary">Wordpress</Badge>
						</div>
					</div>
				</div>
				<!-- Paul -->
				<div>
					<Drawer.Root>
						<Drawer.Trigger
							><div class="group relative cursor-pointer overflow-hidden rounded-lg">
								<img
									src="/images/web/PB-thumb.jpg"
									alt="Paul Brandus Site"
									class="h-full w-full rounded-lg object-cover transition duration-300 group-hover:scale-105"
								/>
								<div
									class="absolute inset-0 bg-[#e2655c]/50 opacity-0 transition duration-300 group-hover:opacity-100"
								>
									<div class="flex h-full items-center justify-center">
										<Button variant="outline" size="icon" class="size-8"
											><IconChevronRight stroke={2} /></Button
										>
									</div>
								</div>
							</div></Drawer.Trigger
						>
						<Drawer.Content>
							<PaulBrandus />
							<Drawer.Footer>
								<Drawer.Close>Close</Drawer.Close>
							</Drawer.Footer>
						</Drawer.Content>
					</Drawer.Root>
					<div class="mt-2 flex-col items-center justify-center space-y-2">
						<h2 class="mt-3 text-center text-xl">Paul Brandus</h2>
						<div class="flex flex-wrap items-center justify-center gap-2">
							<Badge variant="secondary">Web Design</Badge>
							<Badge variant="secondary">Content Strategy</Badge>
							<Badge variant="secondary">Brand Development</Badge>
							<Badge variant="secondary">Wordpress</Badge>
						</div>
					</div>
				</div>
				<!-- Lilum -->
				<div>
					<Drawer.Root>
						<Drawer.Trigger
							><div class="group relative cursor-pointer overflow-hidden rounded-lg">
								<img
									src="/images/web/lilum-thumb.jpg"
									alt="Studio Lilum Site"
									class="h-full w-full rounded-lg object-cover transition duration-300 group-hover:scale-105"
								/>
								<div
									class="absolute inset-0 bg-[#e2655c]/50 opacity-0 transition duration-300 group-hover:opacity-100"
								>
									<div class="flex h-full items-center justify-center">
										<Button variant="outline" size="icon" class="size-8"
											><IconChevronRight stroke={2} /></Button
										>
									</div>
								</div>
							</div></Drawer.Trigger
						>
						<Drawer.Content>
							<StudioLilum />
							<Drawer.Footer>
								<Drawer.Close>Close</Drawer.Close>
							</Drawer.Footer>
						</Drawer.Content>
					</Drawer.Root>
					<div class="mt-2 flex-col items-center justify-center space-y-2">
						<h2 class="mt-3 text-center text-xl">Studio Lilum</h2>
						<div class="flex flex-wrap items-center justify-center gap-2">
							<Badge variant="secondary">Web Design</Badge>
							<Badge variant="secondary">Content Strategy</Badge>
							<Badge variant="secondary">Wordpress</Badge>
						</div>
					</div>
				</div>
			</div>
		</Tabs.Content>
		<Tabs.Content value="brand" class="w-full pt-10">
			<div class="grid w-full grid-cols-1 items-start gap-10 md:grid-cols-3">
				<div>
					<Drawer.Root>
						<Drawer.Trigger
							><div class="group relative cursor-pointer overflow-hidden rounded-lg">
								<img
									src="/images/email/email-thumb.jpg"
									alt="Run of Show"
									class="h-full w-full rounded-lg object-cover transition duration-300 group-hover:scale-105"
								/>
								<div
									class="absolute inset-0 bg-[#e2655c]/50 opacity-0 transition duration-300 group-hover:opacity-100"
								>
									<div class="flex h-full items-center justify-center">
										<Button variant="outline" size="icon" class="size-8"
											><IconChevronRight stroke={2} /></Button
										>
									</div>
								</div>
							</div></Drawer.Trigger
						>
						<Drawer.Content>
							<Drawer.Header>
								<Drawer.Title>Email Marketing</Drawer.Title>
								<Drawer.Description
									><div class="flex flex-wrap items-center gap-2">
										<Badge variant="secondary">Marketing</Badge>
										<Badge variant="secondary">Email Design</Badge>
										<Badge variant="secondary">Development</Badge>
										<Badge variant="secondary">Content Strategy</Badge>
									</div></Drawer.Description
								>
							</Drawer.Header>
							<EmailMarketing />
							<Drawer.Footer>
								<Drawer.Close>Close</Drawer.Close>
							</Drawer.Footer>
						</Drawer.Content>
					</Drawer.Root>
					<div class="mt-2 flex-col items-center justify-center space-y-2">
						<h2 class="mt-3 text-center text-xl">Helios</h2>
						<div class="flex flex-wrap items-center justify-center gap-2">
							<Badge variant="secondary">Marketing</Badge>
							<Badge variant="secondary">Email Design</Badge>
							<Badge variant="secondary">Development</Badge>
							<Badge variant="secondary">Content Strategy</Badge>
						</div>
					</div>
				</div>
			</div>
		</Tabs.Content>
	</Tabs.Root>
</Container>
