<script>
	import Badge from '$lib/components/ui/badge/badge.svelte';
</script>

<div class="overflow-y-auto text-sm">
	<div class="m-auto max-w-5xl space-y-4">
		<div class="mt-8 space-y-4 text-center">
			<p class="text-3xl font-medium">Alexandria Marketplace</p>
		</div>
		<img src="/images/alexandria-hero.jpg" alt="Alexandria Hero" class="my-16 rounded-lg" />
		<div class="flex flex-col gap-16 px-10 md:flex-row md:justify-between md:px-0">
			<div class="flex w-full md:w-1/3">
				<div class="space-y-2">
					<p class="text-xs font-bold uppercase tracking-wider">Done with</p>
					<p>Figma</p>
					<div class="mt-8 flex flex-wrap gap-2">
						<Badge variant="secondary">UX/UI</Badge>
						<Badge variant="secondary">Product Design</Badge>
						<Badge variant="secondary">Web Design</Badge>
						<Badge variant="secondary">Art Direction</Badge>
					</div>
				</div>
			</div>
			<div class="w-full space-y-8 md:w-2/3">
				<div class="space-y-2">
					<p class="text-lg font-bold">About the client</p>
					<p>
						Alexandria is a platform connecting emerging artists, buyers, and art businesses to
						modernize how fine art is discovered and sold online. They provide a powerful
						recommendation engine and data management solution for galleries and online art
						marketplaces. Alexandria's mission is to empower our customers to better connect artists
						with consumers by harnessing the power of AI and business intelligence.
					</p>
				</div>
				<div class="space-y-2">
					<p class="text-lg font-bold">My Role</p>
					<p>
						I worked alongside two Researchers and the Interaction Lead as we collaborated on every
						aspect of the product. In addition, as Visual Design Lead, I managed all areas of the
						visual design process, including the development of design systems, UI elements, and
						original design concepts for the new website. I also provided design recommendations,
						direction, and leadership to my team when needed.
					</p>
				</div>
			</div>
		</div>
		<div class="my-16 space-y-8">
			<img src="/images/alexandria-preview.jpg" alt="Alexandria preview" class=" rounded-lg" />
			<img
				src="/images/alexandria-user-flow.jpg"
				alt="Alexandria user journey"
				class=" rounded-lg shadow"
			/>
			<img
				src="/images/alexandria-interview-quotes.jpg"
				alt="Alexandria user quotes"
				class=" rounded-lg"
			/>
		</div>
	</div>
</div>
