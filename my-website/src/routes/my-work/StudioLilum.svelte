<script>
	import Badge from '$lib/components/ui/badge/badge.svelte';
</script>

<div class="overflow-y-auto text-sm">
	<div class="m-auto max-w-5xl space-y-4">
		<div class="mt-8 space-y-4 text-center">
			<p class="text-3xl font-medium">Studio Lilum</p>
			<p>Author & Journalist</p>
		</div>
		<img src="/images/web/lium-hero.jpg" alt="Studio Lilum Hero" class="my-16 rounded-lg" />
		<div class="flex flex-col gap-16 px-10 md:flex-row md:justify-between md:px-0">
			<div class="flex w-full md:w-1/3">
				<div class="space-y-2">
					<p class="text-xs font-bold uppercase tracking-wider">Done with</p>
					<p>Wordpress</p>
					<div class="mt-8 flex flex-wrap gap-2">
						<Badge variant="secondary">Web Design</Badge>
						<Badge variant="secondary">Content Strategy</Badge>
						<Badge variant="secondary">Wordpress</Badge>
					</div>
				</div>
			</div>
			<div class="w-full space-y-8 md:w-2/3">
				<div class="space-y-2">
					<p class="text-lg font-bold">About the client</p>
					<p>
						Studio Lilum is a creative duo founded by Julia in 2017 and joined by Lea in 2018.
						Together, they produce dynamic online video and social media content—especially
						YouTube—while constantly experimenting and exploring new creative directions.
					</p>
				</div>
				<div class="space-y-2">
					<p class="text-lg font-bold">What I did</p>
					<p>
						I designed and developed their website, creating a bold, modern digital presence that
						showcases their video work, highlights their creative capabilities, and provides a clear
						path for brands to connect and collaborate.
					</p>
				</div>
			</div>
		</div>
		<img src="/images/web/lilum-preview.jpg" alt="Lilum preview" class="my-16 rounded-lg" />
	</div>
</div>
