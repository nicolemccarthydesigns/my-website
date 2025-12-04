<script>
	import Badge from '$lib/components/ui/badge/badge.svelte';
</script>

<div class="overflow-y-auto text-sm">
	<div class="m-auto max-w-5xl space-y-4">
		<div class="mt-8 space-y-4 text-center">
			<p class="text-3xl font-medium">Event Entry Experience</p>
		</div>
		<img src="/images/tech-check-hero.jpg" alt="Event Entry Hero" class="my-16 rounded-lg" />
		<div class="flex flex-col gap-16 px-10 md:flex-row md:justify-between md:px-0">
			<div class="flex w-full md:w-1/3">
				<div class="space-y-2">
					<p class="text-xs font-bold uppercase tracking-wider">Done with</p>
					<p>Cursor, Svelte, Tailwind, Figma</p>
					<div class="mt-8 flex flex-wrap gap-2">
						<Badge variant="secondary">UX/UI</Badge>
						<Badge variant="secondary">Product</Badge>
						<Badge variant="secondary">Development</Badge>
					</div>
				</div>
			</div>
			<div class="w-full space-y-8 md:w-2/3">
				<div class="space-y-2">
					<p class="text-lg font-bold">Background</p>
					<p>
						Event organizers found the event entry and tech check process overly complex, with
						concerns that the lengthy flow could hinder conversion. The experience also lacked
						visual and brand consistency with the event app, resulting in a disjointed user journey.
					</p>
				</div>
				<div class="space-y-2">
					<p class="text-lg font-bold">My Role</p>
					<p>
						My primary goal was to streamline the event entry experience, elevate the tech check,
						and make it intuitive. I added the customizable header that allowed organizers to
						incorporate their logo, brand colors, and a tailored welcome message. This customization
						empowered customers to create a professional and branded first touchpoint for attendees
						while balancing branding and usability.
					</p>
				</div>
			</div>
		</div>
		<div class="my-16 space-y-8">
			<img src="/images/tech-check-preview.jpg" alt="Event Entry preview" class=" rounded-lg" />
		</div>
	</div>
</div>
