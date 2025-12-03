<script>
	import Badge from '$lib/components/ui/badge/badge.svelte';
</script>

<div class="overflow-y-auto text-sm">
	<div class="m-auto max-w-5xl space-y-4">
		<div class="mt-8 space-y-4 text-center">
			<p class="text-3xl font-medium">Kate Andersen Brower</p>
			<p>Author & Journalist</p>
		</div>
		<img src="/images/web/KB-hero.jpg" alt="KB Hero" class="my-16 rounded-lg" />
		<div class="flex flex-col gap-16 px-10 md:flex-row md:justify-between md:px-0">
			<div class="flex w-full md:w-1/3">
				<div class="space-y-2">
					<p class="text-xs font-bold uppercase tracking-wider">Done with</p>
					<p>Wordpress</p>
					<div class="mt-8 flex flex-wrap gap-2">
						<Badge variant="secondary">Web Design</Badge>
						<Badge variant="secondary">Content Strategy</Badge>
						<Badge variant="secondary">Brand Development</Badge>
						<Badge variant="secondary">Wordpress</Badge>
					</div>
				</div>
			</div>
			<div class="w-full space-y-8 md:w-2/3">
				<div class="space-y-2">
					<p class="text-lg font-bold">About the client</p>
					<p>
						Kate Andersen Brower is an American journalist and bestselling author known for in-depth
						nonfiction on the White House, including The Residence: Inside the Private World of the
						White House and First Women: The Grace & Power of America's Modern First Ladies; she's
						reported for Bloomberg, CBS and Fox, and contributed to outlets like The New York Times
						and Vanity Fair.
					</p>
				</div>
				<div class="space-y-2">
					<p class="text-lg font-bold">What I did</p>
					<p>
						I designed and developed her author website (katebrower.com), creating a polished,
						easy-to-navigate site to showcase her books, media appearances, and biography — all
						optimized for readability and clean presentation so visitors can quickly learn who she
						is and explore her work.
					</p>
				</div>
			</div>
		</div>
		<img src="/images/web/KB-preview.jpg" alt="KB preview" class="my-16 rounded-lg" />
	</div>
</div>
