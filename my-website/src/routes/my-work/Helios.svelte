<script>
	import Badge from '$lib/components/ui/badge/badge.svelte';
</script>

<div class="overflow-y-auto text-sm">
	<div class="m-auto max-w-5xl space-y-4">
		<div class="mt-8 space-y-4 text-center">
			<p class="text-3xl font-medium">Helios</p>
		</div>
		<img src="/images/helios-hero.jpg" alt="Helios Logo" class="my-16 rounded-lg" />
		<div class="flex flex-col gap-16 px-10 md:flex-row md:justify-between md:px-0">
			<div class="flex w-full md:w-1/3">
				<div class="space-y-2">
					<p class="text-xs font-bold uppercase tracking-wider">Done with</p>
					<p>Illustrator</p>
					<div class="mt-8 flex flex-wrap gap-2">
						<Badge variant="secondary">Logo Design</Badge>
						<Badge variant="secondary">Brand Identity</Badge>
					</div>
				</div>
			</div>
			<div class="w-full space-y-8 md:w-2/3">
				<div class="space-y-2">
					<p class="text-lg font-bold">About the client</p>
					<p>
						Helios is a high-end concentrates brand known for its signature purple Royal Rosin. The
						branding was crafted to evoke a premium, top-shelf feel—delivering an elevated, elite
						experience at every touchpoint.
					</p>
				</div>
				<div class="space-y-2">
					<p class="text-lg font-bold">What I did</p>
					<p>
						I developed a complete brand identity for Helios, including two primary logos inspired
						by the mythical brightness and energy of Helios, a versatile brandmark for compact use,
						and a flexible application system across multiple colorways. I built a refined palette,
						selected complementary typography, and introduced a custom marble-pattern style
						element—all designed to convey the premium, dynamic nature of the brand.
					</p>
				</div>
			</div>
		</div>
		<div class="flex-col py-16">
			<img src="/images/helios-logos.jpg" alt="Helios logos" class="mb-6 rounded-lg" />
			<p>
				Drawing inspiration from the mythical persona of Helios, the primary logo design embodies
				the core attributes of the Helios product - brightness, potency, and transformative energy.
			</p>
		</div>
		<div class="flex-col pb-16">
			<img src="/images/Helios-colors.jpg" alt="Helios colors" class="mb-6 rounded-lg" />
			<p>
				Drawing inspiration from the mythical persona of Helios, the primary logo design embodies
				the core attributes of the Helios product - brightness, potency, and transformative energy.
			</p>
		</div>
		<div class="flex gap-16 pb-16">
			<p>
				For added graphic interest, utilize a background pattern featuring a swirled marble design
				in the brand's colors, symbolizing the dynamic and liquid nature of Helios' product.
			</p>
			<img
				src="/images/helios-swirl-pattern.png"
				alt="Helios colors"
				class="mb-6 w-64 rounded-lg"
			/>
		</div>
	</div>
</div>
