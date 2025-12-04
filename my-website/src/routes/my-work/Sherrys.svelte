<script>
	import Badge from '$lib/components/ui/badge/badge.svelte';
</script>

<div class="overflow-y-auto text-sm">
	<div class="m-auto max-w-5xl space-y-4">
		<div class="mt-8 space-y-4 text-center">
			<p class="text-3xl font-medium">Sherry's Art-a-rama</p>
		</div>
		<img src="/images/Sherrys-hero.jpg" alt="Sherry's Art-a-rama" class="my-16 rounded-lg" />
		<div class="flex flex-col gap-16 px-10 md:flex-row md:justify-between md:px-0">
			<div class="flex w-full md:w-1/3">
				<div class="space-y-2">
					<p class="text-xs font-bold uppercase tracking-wider">Done with</p>
					<p>Figma</p>
					<div class="mt-8 flex flex-wrap gap-2">
						<Badge variant="secondary">UX/UI</Badge>
						<Badge variant="secondary">Product Design</Badge>
						<Badge variant="secondary">Art Direction</Badge>
					</div>
				</div>
			</div>
			<div class="w-full space-y-8 md:w-2/3">
				<div class="space-y-2">
					<p class="text-lg font-bold">Problem Summary</p>
					<p>
						Sherry's Art-a-rama is a beloved local art store operating in Union Square since 1982
						that serves neighborhood residents and small businesses with a wide selection of art and
						craft supplies, emphasizing community, quality, and attentive customer service.
					</p>
				</div>
				<div class="space-y-2">
					<p class="text-lg font-bold">My Role</p>
					<p>
						I redesigned and rebuilt their e-commerce website as UX/UI Designer, conducting user
						research and interviews, developing user flows, crafting a fresh design system (from
						colors to typography) that honors the store's heritage while giving it a modern, artsy
						vibe, and delivering a fully functional prototype optimized for browsing, shopping, and
						checkout.
					</p>
				</div>
			</div>
		</div>
		<div class="my-16 space-y-8">
			<img
				src="/images/sherrys-looknfeel.jpg"
				alt="Sherrys look and feel"
				class=" rounded-lg shadow"
			/>
			<img src="/images/sherrys-process.jpg" alt="Sherrys process" class=" rounded-lg shadow" />
		</div>
	</div>
</div>
