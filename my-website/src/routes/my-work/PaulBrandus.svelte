<script>
	import Badge from '$lib/components/ui/badge/badge.svelte';
</script>

<div class="overflow-y-auto text-sm">
	<div class="m-auto max-w-5xl space-y-4">
		<div class="mt-8 space-y-4 text-center">
			<p class="text-3xl font-medium">Paul Brandus</p>
			<p>Author & Journalist</p>
		</div>
		<img src="/images/web/PB-hero.jpg" alt="PB Hero" class="my-16 rounded-lg" />
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
						Paul Brandus is an award-winning journalist, longtime member of the White House press
						corps, and columnist for Dow Jones/MarketWatch. He's the author of several acclaimed
						books—including Countdown to Dallas and Jackie: From First Lady to Jackie O—and the
						creator of multiple podcasts. His work has appeared on NBC, CNN, PBS, BBC, and more.
					</p>
				</div>
				<div class="space-y-2">
					<p class="text-lg font-bold">What I did</p>
					<p>
						I designed and built his author website, creating a polished digital home for his books,
						podcasts, media appearances, and speaking work, with clear navigation and a clean,
						modern structure that elevates his brand.
					</p>
				</div>
			</div>
		</div>
		<img src="/images/web/PB-preview.jpg" alt="PB preview" class="my-16 rounded-lg" />
	</div>
</div>
