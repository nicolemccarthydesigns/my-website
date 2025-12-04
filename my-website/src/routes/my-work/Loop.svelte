<script>
	import Badge from '$lib/components/ui/badge/badge.svelte';
</script>

<div class="overflow-y-auto text-sm">
	<div class="m-auto max-w-5xl space-y-4">
		<div class="mt-8 space-y-4 text-center">
			<p class="text-3xl font-medium">Loop</p>
			<p>Mobile Application</p>
		</div>
		<img src="/images/Loop-header-preview-1-scaled.jpg" alt="Loop" class="my-16 rounded-lg" />
		<div class="flex flex-col gap-16 px-10 md:flex-row md:justify-between md:px-0">
			<div class="flex w-full md:w-1/3">
				<div class="space-y-2">
					<p class="text-xs font-bold uppercase tracking-wider">Done with</p>
					<p>Figma</p>
					<div class="mt-8 flex flex-wrap gap-2">
						<Badge variant="secondary">UX/UI</Badge>
						<Badge variant="secondary">Product Design</Badge>
						<Badge variant="secondary">Mobile App Design</Badge>
						<Badge variant="secondary">Art Direction</Badge>
					</div>
				</div>
			</div>
			<div class="w-full space-y-8 md:w-2/3">
				<div class="space-y-2">
					<p class="text-lg font-bold">Problem Summary</p>
					<p>
						There is a lack of easily accessible information on how to recycle or donate unwanted
						items, leading to non-degradable items ending up in landfills. Existing information is
						often confusing or outdated, making the process feel more challenging than necessary.
						Loop aims to address this issue by connecting users to local recycling and donation
						resources through a community-driven platform.
					</p>
				</div>
				<div class="space-y-2">
					<p class="text-lg font-bold">My Role</p>
					<p>
						I created Loop as a passion project focused on sustainability. To validate the idea, I
						conducted a survey to understand users' pain points regarding recycling and donation.
						The responses indicated a strong desire to recycle responsibly but highlighted
						challenges with finding places that accept specific items. Respondents expressed the
						need for a convenient, community-powered solution.
					</p>
				</div>
			</div>
		</div>
		<div class="my-16 space-y-8">
			<img src="/images/loop-preview.jpg" alt="Loop preview" class=" rounded-lg" />
			<img src="/images/loop-preview-2.jpg" alt="Loop preview" class=" rounded-lg" />
		</div>
	</div>
</div>
