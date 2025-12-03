<script>
	import '../app.css';
	import Container from '../components/Container.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import { onMount } from 'svelte';
	import { Badge } from '$lib/components/ui/badge/index.js';

	let IconSend;
	let IconBrandLinkedin;

	onMount(async () => {
		const icons = await import('@tabler/icons-svelte');
		IconSend = icons.IconSend;
		IconBrandLinkedin = icons.IconBrandLinkedin;
	});
</script>

<Container class="py-20">
	<div class="line-height-24 tracking-wide">
		<h1 class="line-height-24 text-5xl font-bold">
			<span class="italic text-[#e2655c]">Hello,</span> I'm Nicole:
		</h1>
		<h1 class="line-height-24 text-5xl/15 pt-1 font-bold">
			<span class="italic text-[#e2655c]">Product Designer </span> and
			<span class="italic text-[#e2655c]">Front-End Engineer</span>.
		</h1>
	</div>

	<div class="mb-12 flex flex-col items-start gap-8 pt-10 md:flex-row">
		<div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-full">
			<img
				src="/images/Headshot-NicoleM-web.png"
				alt="Nicole McCarthy"
				class="h-full w-full object-cover"
			/>
		</div>
		<div class="flex-1 text-sm/6">
			<div class="space-y-4">
				<p class="leading-relaxed">
					I'm passionate about crafting intuitive, empathy-driven solutions. My approach blends
					technical skills and human-centered insights to create impactful user experiences, drawing
					from my background in graphic design, coding, and sociology.
				</p>

				<p class="leading-relaxed">
					As a Product Designer, I've led key initiatives that delight customers, enhance user
					engagement, and increase adoption. My multidisciplinary background and commitment to
					personal growth inspire me to craft solutions that are forward-thinking, elegant, and
					deceptively simple.
				</p>

				<p class="leading-relaxed">
					When I'm not designing, you'll probably find me with my nose in a book, spending time with
					my fiancé and cat, sending memes to friends, or planning my next adventure.
				</p>
				<div class="1 flex items-center gap-3 pb-2">
					<p class="leading-relaxed">Let's connect:</p>
					<div class="flex items-center gap-3">
						{#if IconSend}
							<a
								href="mailto:nicole@nicolemccarthydesigns.com"
								target="_blank"
								style="text-decoration: none; color: #3b3c3d;"
								rel="noopener"
								aria-label="Send email"
							>
								<svelte:component
									this={IconSend}
									stroke={2}
									class="text-[#e2655c] hover:text-[#db4035]"
								/>
							</a>
						{/if}
						{#if IconBrandLinkedin}
							<a
								href="https://www.linkedin.com/in/nicolemmccarthy/"
								target="_blank"
								style="text-decoration: none; color: #3b3c3d;"
								rel="noopener"
								aria-label="Visit LinkedIn profile"
							>
								<svelte:component
									this={IconBrandLinkedin}
									stroke={2}
									class="text-[#e2655c] hover:text-[#db4035]"
								/>
							</a>
						{/if}
					</div>
				</div>
				<Button variant="brand" href="/my-work">View my work</Button>
			</div>
		</div>
	</div>
</Container>
<!-- <div class="grid grid-cols-1 md:grid-cols-2">
	<div class="group relative aspect-video overflow-hidden">
		<img
			src="/images/RS-Thumbnail.png"
			alt="Magazine spread design"
			class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
		/>
		<div
			class="absolute inset-0 bg-[#e2655c]/80 opacity-0 transition duration-300 group-hover:opacity-100"
		>
			<div class="flex h-full flex-col items-start justify-center gap-2 px-20 py-8">
				<h3 class="text-4xl font-semibold text-white">Recording Studio</h3>
				<p class="text-lg text-white">Record, edit, and publish high-quality B2B content</p>
			</div>
		</div>
	</div>

	<div class="group relative aspect-video overflow-hidden">
		<img
			src="https://images.unsplash.com/photo-1742105682489-94149abb1009?q=80&w=3135&auto=format&fit=crop"
			alt="Healthcare publication design"
			class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
		/>
		<div
			class="absolute inset-0 bg-[#e2655c]/50 opacity-0 transition duration-300 group-hover:opacity-100"
		>
			<div class="flex h-full items-center justify-center">
				<h3 class="text-xl font-semibold text-white">Publication Design</h3>
			</div>
		</div>
	</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-3">
	<div class="group relative aspect-[4/3] overflow-hidden">
		<img
			src="https://images.unsplash.com/photo-1742105682489-94149abb1009?q=80&w=3135&auto=format&fit=crop"
			alt="Magazine spread design"
			class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
		/>
		<div
			class="absolute inset-0 bg-[#e2655c]/50 opacity-0 transition duration-300 group-hover:opacity-100"
		>
			<div class="flex h-full items-center justify-center">
				<h3 class="text-xl font-semibold text-white">Brand Identity</h3>
			</div>
		</div>
	</div>

	<div class="group relative aspect-[4/3] overflow-hidden">
		<img
			src="https://images.unsplash.com/photo-1742105682489-94149abb1009?q=80&w=3135&auto=format&fit=crop"
			alt="SVA Property Auctions mobile app"
			class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
		/>
		<div
			class="absolute inset-0 bg-[#e2655c]/50 opacity-0 transition duration-300 group-hover:opacity-100"
		>
			<div class="flex h-full items-center justify-center">
				<h3 class="text-xl font-semibold text-white">Mobile App Design</h3>
			</div>
		</div>
	</div>

	<div class="group relative aspect-[4/3] overflow-hidden">
		<img
			src="https://images.unsplash.com/photo-1742105682489-94149abb1009?q=80&w=3135&auto=format&fit=crop"
			alt="Healthcare publication design"
			class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
		/>
		<div
			class="absolute inset-0 bg-[#e2655c]/50 opacity-0 transition duration-300 group-hover:opacity-100"
		>
			<div class="flex h-full items-center justify-center">
				<h3 class="text-xl font-semibold text-white">Publication Design</h3>
			</div>
		</div>
	</div>
</div>

<div class="grid grid-cols-1 md:grid-cols-3">
	<div class="group relative aspect-[4/3] overflow-hidden">
		<img
			src="https://images.unsplash.com/photo-1742105682489-94149abb1009?q=80&w=3135&auto=format&fit=crop"
			alt="Magazine spread design"
			class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
		/>
		<div
			class="absolute inset-0 bg-[#e2655c]/50 opacity-0 transition duration-300 group-hover:opacity-100"
		>
			<div class="flex h-full items-center justify-center">
				<h3 class="text-xl font-semibold text-white">Brand Identity</h3>
			</div>
		</div>
	</div>

	<div class="group relative aspect-[4/3] overflow-hidden">
		<img
			src="https://images.unsplash.com/photo-1742105682489-94149abb1009?q=80&w=3135&auto=format&fit=crop"
			alt="SVA Property Auctions mobile app"
			class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
		/>
		<div
			class="absolute inset-0 bg-[#e2655c]/50 opacity-0 transition duration-300 group-hover:opacity-100"
		>
			<div class="flex h-full items-center justify-center">
				<h3 class="text-xl font-semibold text-white">Mobile App Design</h3>
			</div>
		</div>
	</div>

	<div class="group relative aspect-[4/3] overflow-hidden">
		<img
			src="https://images.unsplash.com/photo-1742105682489-94149abb1009?q=80&w=3135&auto=format&fit=crop"
			alt="Healthcare publication design"
			class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
		/>
		<div
			class="absolute inset-0 bg-[#e2655c]/50 opacity-0 transition duration-300 group-hover:opacity-100"
		>
			<div class="flex h-full items-center justify-center">
				<h3 class="text-xl font-semibold text-white">Publication Design</h3>
			</div>
		</div>
	</div>
</div> -->
