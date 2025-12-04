<script lang="ts">
	import '../app.css';
	import Container from '../components/Container.svelte';
	import { IconBrandLinkedin } from '@tabler/icons-svelte';

	let scrollY = 0;
	let logoClass = 'w-30';

	// Update logo size based on scroll position
	$: logoClass = scrollY > 0 ? 'w-20' : 'w-30';
	$: opacity = scrollY > 0 ? 0.9 : 1;
</script>

<svelte:window bind:scrollY />

<div class="flex min-h-screen flex-col">
	<div
		class="sticky top-0 z-10 w-full border-b border-gray-200 bg-white py-1"
		style="opacity: {opacity}; transition: opacity 0.3s;"
	>
		<div class="mx-auto flex max-w-[1280px] items-center justify-between">
			<a href="/" class=" block px-12 md:px-20">
				<img
					src="/images/Logo-2.png"
					alt="Nicole McCarthy"
					class="{logoClass} h-auto transition-all duration-300"
				/>
			</a>
			<div class="flex items-center gap-10">
				<a href="/my-work" class="block hover:text-[#db4035]">
					<p>Work</p>
				</a>
				<a
					href="https://www.linkedin.com/in/nicolemmccarthy/"
					target="_blank"
					style="text-decoration: none; color: #3b3c3d;"
					rel="noopener"
					aria-label="Visit LinkedIn profile"
				>
					<IconBrandLinkedin stroke={2} class="text-[#e2655c] hover:text-[#db4035]" />
				</a>
			</div>
		</div>
	</div>
	<main class="flex-1">
		<slot />
	</main>
	<footer
		class="z-10 flex h-16 w-full items-center justify-center border-t border-gray-100 bg-white"
	>
		<div
			class="flex w-full max-w-[1280px] items-center justify-between py-4 text-xs text-gray-500 md:px-20"
		>
			<p>designed and developed by nicole mccarthy</p>
			<p>© 2025</p>
		</div>
	</footer>
</div>
